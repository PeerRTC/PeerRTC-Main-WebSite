function MainNavigation(props){
	return <nav id="main-navigation">
		{createLinks("Home", ()=>props.setDisplayPage(0))}
		{createLinks("Samples", ()=>props.setDisplayPage(1))}
		{createLinks("Web", ()=>props.setDisplayPage(2))}
		{createLinks("Android",  ()=>props.setDisplayPage(3))}
		{createLinks("Server",  ()=>props.setDisplayPage(4))}
	</nav>
}


function createLinks(name, onClick){
	return <>
		<a class="nav-item" href="#" onClick={()=>onClick()}>{name}</a>
		<br/>
		<hr class="nav-line"/>
	</>
}

export default MainNavigation