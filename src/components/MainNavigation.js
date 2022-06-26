
function MainNavigation(props){
	return <div id="main-navigation-container">
		<text id="main-title">The PeerRTC ⚡</text>
		<div><hr id="main-title-line"/></div>

		<nav id="nav">
			{createLinks("PeerRTC", ()=>{window.open("https://github.com/PeerRTC", "_self")})}
			{createLinks("Getting Started", ()=>props.setDisplayPage(0))}
			{createLinks("Examples", ()=>props.setDisplayPage(1))}
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