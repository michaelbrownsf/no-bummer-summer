var SignupPage = React.createClass({
	render: function() {
		return (
		
			<form className="centeredcontainer" ref="registerForm" onSubmit={this.submitNewUser}>
				<input type="text" className="newName" ref="newFirst" placeholder="first name" /><br />
				<input type="text" className="newName" ref="newLast" placeholder="last name" /><br />
				<input type="text" className="newEmail" ref="newEmail" placeholder="enter email" /><br />
				<input type="password" className="newPassword" ref="newPassword" placeholder="enter password" /><br />
				<input type="password" className="confirmPassword" ref="confirmPassword" placeholder="confirm password" /><br />
				<button type="submit">Submit</button>
				<br /><a href="#login">Log in!</a>
			</form>
		);
	},

	submitNewUser: function(e) {
		e.preventDefault();
		console.log('this is running');

		var newUser = new UserModel ({
					email: this.refs.newEmail.getDOMNode().value,
					first_name: this.refs.newFirst.getDOMNode().value,
					last_name: this.refs.newLast.getDOMNode().value,
					password: this.refs.newPassword.getDOMNode().value,
					password_confirmation: this.refs.confirmPassword.getDOMNode().value
				});

		$.post(
			'https://no-bummer-summer-2015.herokuapp.com/login',
			{user:newUser.attributes},
			function(data) {
				console.log(data);
			}
		)
	}
});