import "../styles/api-reference.css"

function ApiReference(props){
	return buildReferenceView(props.references, false)
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
	const finalDescWithUrls = createTextsWithUrl(ref.desc)
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
function createTextsWithUrl(markDown){
	const urlMarkDownRegex = /\[[^\[\]\(\)]*\]\([^\[\]\(\)]*\)/g
	const descParts = markDown.split(urlMarkDownRegex)
	const urlMarkDowns = markDown.match(urlMarkDownRegex)
	const finalDescWithUrls = []

	
	for (var i = 0; i < descParts.length; i++) {
		finalDescWithUrls.push(descParts[i])
		
		if (urlMarkDowns) {
			const urlMarkDown = urlMarkDowns[i]
			if (urlMarkDown) {
				const url = urlMarkDown.match(/\(.*\)/g)[0].replaceAll(/\(|\)/g, "")
				const urlName = urlMarkDown.match(/\[.*\]/g)[0].replaceAll(/\[|\]/g, "")
				finalDescWithUrls.push(<a href={url}>{urlName}</a>)
			}
			
		}
		
	}

	return finalDescWithUrls
}

export default ApiReference