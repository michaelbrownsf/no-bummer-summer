
var SignupPage = React.createClass({
	render: function() {
		return (
			<form onSubmit={submitNewUser}>
				<input type="text" className="newName" ref="newFirst" placeholder="first name" />
				<input type="text" className="newName" ref="newLast" placeholder="last name" />
				<input type="text" className="newEmail" ref="newEmail" placeholder="enter email" />
				<input type="text" className="newPassword" ref="newPassword" placeholder="enter password" />
				<input type="text" className="confirmPassword" ref="confirmPassword" placeholder="confirm password" />
				<button type="submit">Submit</button>
			</form>
		);
	},

	submitNewUser: function(e) {
		e.preventDefault();
		console.log('you did it');

		var newUser = new UserModel ({
			firstName: this.refs.newFirst.value(),
			lastName: this.refs.newLast.value(),
			email: this.refs.email.value(),
			password: this.refs.password.value(),
			password_confirmation: this.refs.password.value()
		});

		newUser.save();
	}


});