var User = new UserModel();

var LoginPage = React.createClass({
	render: function() {
		return (
			<form ref="loginForm" onSubmit={this.userLogin}>
				<input type="text" ref="username" placeholder="username" />
				<input type="text" ref="password" placeholder="password" />
				<button type="submit" ref="loginBtn">Log In</button>
			</form>
		);
	},

	userLogin: function(e) {
		e.preventDefault;
		console.log('submitted');
		// var User = new UserModel({
		// 	email: this.refs.username.value(),
		// 	password: this.refs.password.value()
		// });
	}
});