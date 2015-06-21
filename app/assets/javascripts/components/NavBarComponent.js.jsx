var NavBar = React.createClass({
	render: function() {
		return (
			<div>
		        <header>
  					 <h2>No Bummer Summer</h2>
				</header>

				<div className="line">
				</div>
				<nav>
				<div className="loginstatus">You are logged in.</div><a href='#login'>home</a> | <a href='#checklist/alexa'>profile</a> | <a href="#about">about</a>
				</nav>
				<div className="line">
				</div>
	    	</div>
		);
	}
});