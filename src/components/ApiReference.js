import "../styles/api-reference.css"

function ApiReference(props){
	return <>
		<h1>{props.title}</h1>
		<p>{createTextsWithMarkDowns(props.description)}</p>
		<h1>Setup</h1>
		<h1>Api Reference</h1>

		{buildReferenceView(props.references, false)}
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


//extracting urls from markdown format
function createTextsWithMarkDowns(markDown){
	const finalDescWithUrls = []
	const finalSetupWithCodes = []

	if (markDown) {
		const urlMarkDownRegex = /\[[^\[\]\(\)]*\]\([^\[\]\(\)]*\)/
		const quotedCodeRegex = /```(\s|.)*```/
		const singleCodeRegex = /`.*`/
		const markDownsRegex = new RegExp(
			urlMarkDownRegex.source + "|" + 
			quotedCodeRegex.source + "|" + 
			singleCodeRegex.source, "g"
		)
		
		const markDowns = markDown.match(markDownsRegex)
		const parts = markDown.split(markDownsRegex)

		
		for (var i = 0; i < parts.length; i++) {
			finalDescWithUrls.push(parts[i])
			
			if (markDowns) {
				const markDown = markDowns[i]

				if (markDown) {
					var mdown = ""
					if (markDown.match(singleCodeRegex)) {
						const code = markDown.replaceAll("`", "")
						mdown = <text class="ref-type-in-desc">{code}</text>
					} else if (markDown.match(urlMarkDownRegex)) {
						const url = markDown.match(/\(.*\)/g)[0].replaceAll(/\(|\)/g, "")
						const urlName = markDown.match(/\[.*\]/g)[0].replaceAll(/\[|\]/g, "")
						mdown = <a href={url} target="blank">{urlName}</a>
					} else if (markDown.match(quotedCodeRegex)) {
						const code = markDown.replaceAll("```", "")
						mdown = <pre>{code}</pre>
					}
					finalDescWithUrls.push(mdown)
				}
				
			}
			
		}

	}
	
	return finalDescWithUrls
}



export default ApiReference