import "../styles/api-reference.css"

function ApiReference(props){
	return <>
		<h1>{props.title}</h1>
		<p id="main-h1-desc">{createTextsWithMarkDowns(props.description)}</p>

		<center>
			<button onClick={()=>window.open(props.repoUrl, "_self")}>Github Repo</button>
		</center>
		<h1>⚙ Setup</h1>
		<p id="setup-h1-desc">{createTextsWithMarkDowns(props.setup)}</p>
		<br/>
		<h1>📚 Api Reference</h1>
		<br/>
		<div id="api-ref-container" >{buildReferenceView(props.references, false)} </div>
	</>
}

function buildReferenceView(references, isParameters) {
	return (
		<>
			{
				references.map(ref=>
					<div>
						<div id="ref-title-container"> 
							{createTitle(ref, isParameters)} 
							{createType(ref)}
							{createDefault(ref)}
						</div>
					
						{createUsage(ref)}
						{createDescription(ref, isParameters)}
						<div id="ref-params-container">
							{!isParameters && createParameters(ref)}
						</div>
					</div>
				) 
			}

			{isParameters && <br/>}
		</>
	)
}

function createTitle(ref, isParameters){
	var id = "ref-title"
	if (isParameters) {id = "ref-title-params"}
	return <div class={id}>{ref.title}</div>
}

function createDescription(ref, isParameters){
	const finalDescWithUrls = createTextsWithMarkDowns(ref.desc)
	var id = "ref-desc"
	if (isParameters) {id="ref-desc-params"}
	return <div class={id}>{finalDescWithUrls}</div>
}


function createType(ref){
	return <div class="ref-type">{ref.type}</div>
}

function createDefault(ref){
	const def = ref.default
	if (def) {
		return <div class="ref-default">default={ref.default}</div>
	} else{
		return <></>
	}
	
}



function createUsage(ref){
	return <div class="ref-usage">{ref.usage}</div>
}

function createParameters(ref){
	return buildReferenceView(ref.params, true)
}


//parsing some mark downs
function createTextsWithMarkDowns(markDown){
	const finalDescWithUrls = []
	const finalSetupWithCodes = []

	if (markDown) {
	
		const urlMarkDownRegex = /\[[^\[\]\(\)]*\]\([^\[\]\(\)]*\)/
		const quotedCodeRegex = /```[^```]*```/
		const breakLineRegex = /<br\/>/

		const markDownsRegex = new RegExp(
			urlMarkDownRegex.source + "|" +
			breakLineRegex.source + "|" +
			quotedCodeRegex.source , "g"
		)

		
		const markDowns = markDown.match(markDownsRegex)
		const parts = markDown.split(markDownsRegex)


		for (var i = 0; i < parts.length; i++) {
			finalDescWithUrls.push(parts[i])
			
			if (markDowns) {
				const markDown = markDowns[i]

				if (markDown) {
					var mdown = ""
					if (markDown.match(breakLineRegex)) {
						mdown = <br/>
					} else if (markDown.match(urlMarkDownRegex)) {
						const url = markDown.match(/\(.*\)/g)[0].replaceAll(/\(|\)/g, "")
						const urlName = markDown.match(/\[.*\]/g)[0].replaceAll(/\[|\]/g, "")
						mdown = <a href={url}>{urlName}</a>
					} else if (markDown.match(quotedCodeRegex)) {
						const code = markDown.replaceAll("```", "")
						mdown = <pre class="code-container">{code.trim()}</pre>
					}
					finalDescWithUrls.push(mdown)
				}
				
			}
			
		}

	}
	
	return finalDescWithUrls
}



export default ApiReference