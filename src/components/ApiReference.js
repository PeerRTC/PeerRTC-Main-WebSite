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
						{createTitle(ref)}
						{createType(ref)}
						{createUsage(ref)}
						{createDescription(ref)}
						{!isParameters && createParameters(ref)}
					</div>

				) 
			}
		</>
	)
}

function createTitle(ref){
	return <div class="ref-title">{ref.title}</div>
}

function createDescription(ref){
	const urlMarkDownRegex = /\[[^\[\]\(\)]*\]\([^\[\]\(\)]*\)/g
	const descParts = ref.desc.split(urlMarkDownRegex)
	const urlMarkDowns = ref.desc.match(urlMarkDownRegex)
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
	return <div class="ref-desc">{finalDescWithUrls}</div>
}


function createType(ref){
	return <div class="ref-type">{ref.type}</div>
}



function createUsage(ref){
	return <div class="ref-usage">{ref.usage}</div>
}

function createParameters(ref){
	return buildReferenceView(ref.params, true)
}

export default ApiReference