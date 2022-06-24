function MainNavigation(props){
	return <nav>
		{createLinks("Home", ()=>props.setDisplayPage(0))}
		{createLinks("Samples", ()=>props.setDisplayPage(1))}
		{createLinks("Web", ()=>props.setDisplayPage(2))}
		{createLinks("Android",  ()=>props.setDisplayPage(3))}
		{createLinks("Server",  ()=>props.setDisplayPage(4))}
	</nav>
}


function createLinks(name, onClick){
	return <>
		<button onClick={()=>onClick()}>{name}</button>
		<br/>
	</>
}

export default MainNavigation