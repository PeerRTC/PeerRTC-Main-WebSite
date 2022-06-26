import {useState}  from 'react'
import ApiReference from './ApiReference.js'
import MainNavigation from './MainNavigation.js'
import Home from "./Home.js"
import Samples from "./Samples.js"


import peerRtcDescRaw from "../docs/references/peer-rtc/peer-rtc-desc.txt"
import aPeerRtcDescRaw from "../docs/references/android-peer-rtc/android-peer-rtc-desc.txt"
import serverDescRaw from "../docs/references/server/server-desc.txt"


import peerRtcSetupRaw from "../docs/references/peer-rtc/peer-rtc-setup.txt"
import aPeerRtcSetupRaw from "../docs/references/android-peer-rtc/android-peer-rtc-setup.txt"
import serverSetupRaw from "../docs/references/server/server-setup.txt"


const WEB_REPO = "https://github.com/PeerRTC/PeerRTC"
const SERVER_REPO = "https://github.com/PeerRTC/PeerRTC-Server"
const ANDROID_REPO = "https://github.com/PeerRTC/AndroidPeerRTC"

function Main(){
	const [displayPage, setDisplayPage] = useState(0)
	const [description, setDescription] = useState()
	const [setup, setSetup] = useState()

	return (
		<div id="main-container">
			<MainNavigation setDisplayPage={setDisplayPage}/>
			<div class="side-preview">{showPage(displayPage, description, setDescription, setup, setSetup)}</div>
		</div>
	)
}



function showPage(page, description, setDescription, setup, setSetup) {
	const showReferences = (title, descRaw, setupRaw,  references, repoUrl)=> {
		fetch(descRaw).then(r=>r.text()).then(text=>{
			setDescription(text)
		})

		fetch(setupRaw).then(r=>r.text()).then(text=>{
			setSetup(text)
		})
		return <ApiReference title={title} description={description} setup={setup} references={references} repoUrl={repoUrl}/>
	}

	const buildRefList = (name, link)=>{
		return {name:name, link:link}
	}

	var references
	switch(page){
		case 0:
			return <Home/>
		case 1:
			return <Samples/>
		case 2:
			references = [
				buildRefList("PeerRTC","https://github.com/PeerRTC/PeerRTC#peerrtc-constructor")
			]
			return showReferences("Web PeerRTC 🌐", peerRtcDescRaw, peerRtcSetupRaw, references, WEB_REPO)
		case 3:
			references = [
					buildRefList("AndroidPeerRTC","https://github.com/PeerRTC/AndroidPeerRTC#-api-reference"),
					buildRefList("MediaSourceView","https://github.com/PeerRTC/AndroidPeerRTC#-api-reference")
			]
			return showReferences("Android PeerRTC 🤖", aPeerRtcDescRaw, aPeerRtcSetupRaw, references, ANDROID_REPO)
		case 4:
			references = [
				buildRefList("Configuring Server","https://github.com/PeerRTC/PeerRTC-Server#-modifying-configurations")
			]
			return showReferences("PeerRTC Server 💻", serverDescRaw, serverSetupRaw, references, SERVER_REPO)
		default:
			<></>
	}
}	



export default Main
