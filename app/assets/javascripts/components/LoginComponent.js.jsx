
var LoginPage = React.createClass({
	render: function() {
		return (
			<div>
				<form className="centeredcontainer" ref="loginForm" onSubmit={this.userLogin}>
					<input type="text" ref="email" placeholder="email" /><br />
					<input type="text" ref="password" placeholder="password" /><br />
					<button type="submit" ref="loginBtn">Log In</button>
					<br /><a href="#signup">Sign Up!</a>
				</form>
				<div ref="loginError"></div>
			</div>
		);
	},

	userLogin: function(e) {
		e.preventDefault();

		this.refs.loginError.getDOMNode.innerHTML = '';

		var currentUser = new UserModel({
			email: this.refs.email.getDOMNode.value,
			password: this.refs.password.getDOMNode.value
		});

		if(!currentUser.isValid()) {
			this.refs.loginError.getDOMNode.innerHTML = newUser.validationError;
		}
		else {
			loggedInUser = users.findWhere({
				email: this.refs.email.getDOMNode.value,
				password: this.refs.password.getDOMNode.value
			});

			if(loggedInUser) {
				app.navigate('checklist/' + users.firstName, {trigger: true});
			}
			else {
				this.refs.loginError.getDOMNode.innerHTML = 'User does not exist';
			}
		}	
	}
});