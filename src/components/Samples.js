function Samples(){
	return <div>
		<h1>Sample Projects</h1>
		<ul>
			{createSampleProjectLinks("Web Site","https://shimshim27.github.io/PeerRTC/test/Video%20call%20with%20file%20sharing/index.html")}
			{createSampleProjectLinks("Web Source Code", "https://github.com/ShimShim27/PeerRTC/tree/master/test/Video%20call%20with%20file%20sharing")}
			{createSampleProjectLinks("Android Source Code","https://github.com/ShimShim27/AndroidPeerRTC/tree/master/app")}
		</ul>

			<h1>Sample Usage</h1>
			<h2>Web</h2>
			<h2>Android (Kotlin)</h2>

	</div>
}


function createSampleProjectLinks(name, link){
	return <li><a href={link}>{name}</a></li>
}

export default Samples