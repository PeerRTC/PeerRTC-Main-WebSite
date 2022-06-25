import {useState} from "react"
import rawWebSample from "../docs/sample-usage/web-sample-usage.txt"
import rawAndroidSample from "../docs/sample-usage/android-sample-usage.txt"


function Samples(){
	const [webUsage, setWebUsage] = useState()
	const [androidUsage, setAndroidUsage] = useState()
	fetchSampleUsage(rawWebSample, setWebUsage)
	fetchSampleUsage(rawAndroidSample, setAndroidUsage)

	const desc1 = "A simple video calling and file sharing site."
	const desc2 = "Video call and file sharing site source code."
	const desc3 = "Simple video calling and file sharing android app source code."

	return <div>
		<h1>📖 Sample Projects</h1>

		<p id="sample-project-desc">To help the developers in implementing the library, we have created simple projects as an example.</p>
		
		{createSampleProjectLinks("Web Site","https://PeerRTC.github.io/PeerRTC/test/Video%20call%20with%20file%20sharing/index.html", desc1)}
		{createSampleProjectLinks("Web Source Code", "https://github.com/PeerRTC/PeerRTC/tree/master/test/Video%20call%20with%20file%20sharing", desc2)}
		{createSampleProjectLinks("Android Source Code","https://github.com/PeerRTC/AndroidPeerRTC/tree/master/app", desc3)}

		<br/>
		<hr/>
		<br/>

		<h1>🧐 Sample Usage</h1>
		<h2 class="sample-usage-title">Web</h2>
		<p class="sample-usage-desc">Sample javascript code for connecting in PeerRTC server.</p>
		<div class="sample-usage-codes-container">{webUsage}</div>

		<h2 class="sample-usage-title">Android (Kotlin)</h2> 
		<p class="sample-usage-desc">Sample Kotlin code for connecting in PeerRTC server.</p>
		<div class="sample-usage-codes-container">{androidUsage}</div>

	</div>
}


function fetchSampleUsage(raw, setStateFunc){
	fetch(raw).then(r=>r.text()).then(text=>{
		const domTexts = []
		for(const rawText of text.split("\n")){
			domTexts.push(<pre>{rawText}</pre>)	
		}
		setStateFunc(domTexts)
	})
}


function createSampleProjectLinks(name, link, desc){
	return <div>
		 <h2 class="sample-project-link"><a href={link}>{name}</a></h2>
		 <div class="sample-project-desc">{desc}</div>
	</div>
}

export default Samples