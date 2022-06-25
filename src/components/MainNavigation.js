import logo from "../assets/logo.png"

function MainNavigation(props){
	return <div id="main-navigation-container">
		<img id="logo-img"src={logo}></img>

		<nav id="nav">
			{createLinks("Getting Started", ()=>props.setDisplayPage(0))}
			{createLinks("Sample Projects", ()=>props.setDisplayPage(1))}
			{createLinks("Web PeerRTC", ()=>props.setDisplayPage(2))}
			{createLinks("Android PeerRTC",  ()=>props.setDisplayPage(3))}
			{createLinks("Cloud Server",  ()=>props.setDisplayPage(4))}
		</nav>
	</div>
}


function createLinks(name, onClick){
	return <>
		<a class="nav-item" href="#" onClick={()=>onClick()}>{name}</a>
		<br/>
		<hr class="nav-line"/>
	</>
}

export default MainNavigation