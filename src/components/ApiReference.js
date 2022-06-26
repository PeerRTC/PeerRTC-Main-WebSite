import "../styles/api-reference.css"

function ApiReference(props){
	return <>
		<h1>{props.title}</h1>
		<p id="main-h1-desc">{createTextsWithMarkDowns(props.description)}</p>

		<div class="code-container">
			<center>
				<p id="get-source-code-label">🚀 Get the source code in Github 🚀</p>
				<button class="fork-button" onClick={()=>window.open(props.repoUrl, "_self")}>Fork Me</button>
			</center>
		</div>
		<h1>⚙ Setup</h1>
		<p id="setup-h1-desc">{createTextsWithMarkDowns(props.setup)}</p>
		<br/>
		<h1>📚 Api Reference</h1>
		<ul>
			{props.references.map(data=>
				<li class="ref-items"><a href={data.link}>{data.name}</a></li>
			)}
		</ul>
	</>
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