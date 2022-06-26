import {useState} from "react"
import rawWebSample from "../docs/sample-usage/web-sample-usage.txt"
import rawAndroidSample from "../docs/sample-usage/android-sample-usage.txt"


function Samples(){
	const [webUsage, setWebUsage] = useState()
	const [androidUsage, setAndroidUsage] = useState()
	fetchSampleUsage(rawWebSample, setWebUsage)
	fetchSampleUsage(rawAndroidSample, setAndroidUsage)


	return <div>
		<h1>📖 Sample Projects</h1>

		<p id="sample-project-desc">To help the developers in implementing the library, we have created simple projects as an example.</p>
		
		{createSampleProjectLinks("Video Call and File Sharing Website.",
			"https://peerrtc.github.io/PeerRTC/test/Video%20call%20with%20file%20sharing/index.html",
			"A simple video calling and file sharing site.",
			"https://github.com/PeerRTC/PeerRTC/tree/master/test/Video%20call%20with%20file%20sharing"
		)}

		<br/>
		
		{createSampleProjectLinks("Video Call and File Sharing Android App.",
			"https://github.com/PeerRTC/AndroidPeerRTC/tree/master/app",
			"A simple video calling and file sharing android app",
			"https://github.com/PeerRTC/AndroidPeerRTC/tree/master/app"
		)}

		<br/>
		<hr/>
		<br/>

		<h1>🧐 Sample Usage</h1>
		<h2 class="sample-usage-title">Web</h2>
		<p class="sample-usage-desc">Sample javascript code for connecting in PeerRTC server.</p>
		<div class="code-container">{webUsage}</div>

		<h2 class="sample-usage-title">Android (Kotlin)</h2> 
		<p class="sample-usage-desc">Sample Kotlin code for connecting in PeerRTC server.</p>
		<div class="code-container">{androidUsage}</div>

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


function createSampleProjectLinks(name, link, desc, sourceCodeLink){
	return <div>
		 <h2 class="sample-project-link"><a href={link}>{name}</a></h2>
		 <p class="sample-project-desc">
		 	{desc}
		 </p>
		 <a class="sample-source-code" href={sourceCodeLink}>Github</a>
	</div>
}

export default Samples