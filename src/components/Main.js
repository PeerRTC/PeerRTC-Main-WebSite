import {useState}  from 'react'
import ApiReference from './ApiReference.js'
import MainNavigation from './MainNavigation.js'
import Home from "./Home.js"
import Samples from "./Samples.js"


import peerRtcDescRaw from "../docs/references/peer-rtc-desc.txt"
import aPeerRtcDescRaw from "../docs/references/android-peer-rtc-desc.txt"
import serverDescRaw from "../docs/references/server-desc.txt"

const peerRtcJson = require("../docs/references/peer-rtc.json")
const aPeerRtcJson = require("../docs/references/android-peer-rtc.json")
const serverJson = require("../docs/references/server.json")


function Main(){
	const [displayPage, setDisplayPage] = useState(0)
	const [description, setDescription] = useState()

	return (
		<div id="main-container">
			<MainNavigation setDisplayPage={setDisplayPage}/>
			<div class="side-preview">{showPage(displayPage, description, setDescription)}</div>
		</div>
	)
}



function showPage(page, description, setDescription) {
	const showReferences = (title, raw, references)=> {
		fetch(raw).then(r=>r.text()).then(text=>{
			setDescription(text)
		})
		return <ApiReference title={title} description={description} references={references}/>
	}


	switch(page){
		case 0:
			return <Home/>
		case 1:
			return <Samples/>
		case 2:
			return showReferences("Web PeerRTC", peerRtcDescRaw, peerRtcJson.references)
		case 3:
			return showReferences("Android PeerRTC", aPeerRtcDescRaw, aPeerRtcJson.references)
		case 4:
			return showReferences("PeerRTC Server", serverDescRaw, serverJson.references)
		default:
			<></>
	}
}	



export default Main
