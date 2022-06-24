import {useState} from 'react'
import raw from '../docs/home-desc.txt'


function Home(){
	const [mainDescription, setMainDescription] = useState("")
	fetch(raw).then(r=>r.text()).then(text=>setMainDescription(text))
	return <div>
		<p>{mainDescription}</p>
			{createGithubButtons("Fork PeerRTC", "https://github.com/ShimShim27/PeerRTC")}
			{createGithubButtons("Fork AndroidPeerRTC", "https://github.com/ShimShim27/AndroidPeerRTC")}
			{createGithubButtons("Fork PeerRTCServer", "https://github.com/ShimShim27/PeerRTC-Server")}
		<div>

		</div>

	</div>
}


function createGithubButtons(name, link){
	return <button onClick={()=>window.open(link,'_self')}>{name}</button>
}

export default Home