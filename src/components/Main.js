import {useState}  from 'react'
import ApiReference from './ApiReference.js'
import MainNavigation from './MainNavigation.js'
import Home from "./Home.js"
import Samples from "./Samples.js"


const peerRtcJson = require("../docs/peer-rtc.json")
const aPeerRtcJson = require("../docs/android-peer-rtc.json")
const serverJson = require("../docs/server.json")

function Main(){
	const [displayPage, setDisplayPage] = useState(0)
	return (
		<div id="main-container">
			<MainNavigation setDisplayPage={setDisplayPage}/>
			{showPage(displayPage)}
		</div>
	)
}



function showPage(page) {
	const showReferences = references=> <ApiReference references={references}/>
	switch(page){
		case 0:
			return <Home/>
		case 1:
			return <Samples/>
		case 2:
			return showReferences(peerRtcJson.references)
		case 3:
			return showReferences(aPeerRtcJson.references)
		case 4:
			return showReferences(serverJson.references)
		default:
			<></>
	}
}	


export default Main
