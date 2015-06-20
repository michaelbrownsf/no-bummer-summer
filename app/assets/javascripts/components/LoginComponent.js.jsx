
var LoginPage = React.createClass({
	render: function() {
		return (
			<form ref="loginForm" onSubmit={this.userLogin}>
				<input type="text" ref="email" placeholder="email" /><br />
				<input type="password" ref="password" placeholder="password" /><br />
				<button type="submit" ref="loginBtn">Log In</button>
			</form>
		);
	},

	userLogin: function(e) {
		e.preventDefault;
		var loginValues = {
			email: this.refs.email.getDOMNode.value,
			password: this.refs.password.getDOMNode.value
		}
		
		$.post('https://no-bummer-summer-2015.herokuapp.com/login', {email: loginValues.email, password: loginValues.password})
	}
});