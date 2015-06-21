var users = new UserCollection();

var LoginPage = React.createClass({
	render: function() {
		return (
			<div>
				<form className="centeredcontainer" ref="loginForm" onSubmit={this.userLogin}>
					<input type="text" ref="email" placeholder="email" /><br />
					<input type="password" ref="password" placeholder="password" /><br />
					<button type="submit" ref="loginBtn">Log In</button>
					<br /><a href="#signup">Sign Up!</a>
				</form>
				<div ref="loginError"></div>
			</div>
		);
	},

	userLogin: function(e) {
		e.preventDefault();
		var self = this;
		this.refs.loginError.getDOMNode().innerHTML = '';

		console.log('function running');

		var currentUser = new UserModel({
			email: this.refs.email.getDOMNode().value,
			password: this.refs.password.getDOMNode().value
		});

		if(currentUser.isValid()) {

			$.post(
				'/login',
				currentUser.attributes
			)

			.success(function(user) {
				console.log(user);
			})
			.error(function(error) {
				self.refs.loginError.getDOMNode().innerHTML = error.responseJSON.error;
			})
			// console.log('user is valid');
			// loggedInUser = users.findWhere({
			// 	email: this.refs.email.getDOMNode().value,
			// 	password: this.refs.password.getDOMNode().value
			// });
			// myApp.navigate('checklist/' + users.firstName, {trigger: true});

			// if(loggedInUser) {
			// 	app.navigate('checklist/' + users.firstName, {trigger: true});
			// }
			// else {
			// 	this.refs.loginError.getDOMNode().innerHTML = 'User does not exist';
			// }
		}
		else {
			this.refs.loginError.getDOMNode().innerHTML = currentUser.validationError;
		}	
	}
});