var User = new UserModel();

var LoginPage = React.createClass({
	render: function() {
		return (
			<form ref="loginForm" onSubmit={this.userLogin}>
				<input type="text" ref="email" placeholder="email" />
				<input type="text" ref="password" placeholder="password" />
				<button type="submit" ref="loginBtn">Log In</button>
			</form>
		);
	},

	userLogin: function(e) {
		e.preventDefault;

		var User = {
			email: this.refs.email.getDOMNode().value,
			password: this.refs.password.getDOMNode().value
		};

		console.log(User.get('firstName'));

		if(User.email === '') {
			console.log('please enter your username');
		}
		else if (User.password === '') {
			console.log('please enter your password')
		}
		else {
			myApp.navigate('#checklist/' + UserModel.firstName, {trigger:true});
		}
	}
});