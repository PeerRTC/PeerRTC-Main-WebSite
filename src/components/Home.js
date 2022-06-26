import {useState} from 'react'
import raw from '../docs/home/home-desc.txt'

const attribUrl = "https://peerrtc.github.io"
const copiedAttrib = `Easy peer to peer functionalities with <a href="${attribUrl}">PeerRTC</a>`
const hooray = "✺◟(＾∇＾)◞✺"

function Home(){
	const [mainDescription, setMainDescription] = useState("")
	fetch(raw).then(r=>r.text()).then(text=>setMainDescription(text))
	return <div id="main-home-container">
		<h1>The PeerRTC</h1>
		<p class="home-desc">{mainDescription}</p>
		<br/>

		<center>	
			<p id="fork-label">Fork github repositories</p>
		</center>	
		<center>	
			{createGithubButtons("PeerRTC", "https://github.com/PeerRTC/PeerRTC")}
			{createGithubButtons("AndroidPeerRTC", "https://github.com/PeerRTC/AndroidPeerRTC")}
			{createGithubButtons("PeerRTCServer", "https://github.com/PeerRTC/PeerRTC-Server")}
		</center>


		<br/><br/><br/>
		<div class="home-desc">This project is still on beta phase and can be unstable. Contributions and bug reports are all welcome.</div>

		<br/>
		<center>
			<p id="home-attribution-req">
				💡 Attribution to <a href={attribUrl}>us</a> are required when using PeerRTC 💡
			</p>

			<div id="link-display">
				{copiedAttrib}
			</div>


			<button id="copy-attrib-bttn" onClick={copyAttrib}>Copy Attribution</button>
			<div id="attrib-copied-indicator">Hooray, attribution copied !! <br/>{hooray}</div>
		</center>
		
		
		<div>

		</div>

	</div>
}


function copyAttrib(){
	navigator.clipboard.writeText(copiedAttrib)
	document.getElementById("attrib-copied-indicator").style.visibility = "visible"
}
function createGithubButtons(name, link){
	return <button class="fork-button" onClick={()=>window.open(link,'_self')}>{name}</button>
}

export default Home