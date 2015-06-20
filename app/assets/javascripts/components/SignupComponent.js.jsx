var newListUser = new UserCollection();

var SignupPage = React.createClass({
	render: function() {
		return (
			<form className="centeredcontainer" onSubmit={this.submitNewUser}>
				<input type="text" className="newName" ref="newFirst" placeholder="first name" /><br />
				<input type="text" className="newName" ref="newLast" placeholder="last name" /><br />
				<input type="text" className="newEmail" ref="newEmail" placeholder="enter email" /><br />
				<input type="password" className="newPassword" ref="newPassword" placeholder="enter password" /><br />
				<input type="password" className="confirmPassword" ref="confirmPassword" placeholder="confirm password" /><br />
				<button type="submit">Submit</button>
			</form>
		);
	},

	submitNewUser: function(e) {
		e.preventDefault();

		var newUser = new UserModel ({
			firstName: this.refs.newFirst.getDOMNode.value,
			lastName: this.refs.newLast.getDOMNode.value,
			email: this.refs.newEmail.getDOMNode.value,
			password: this.refs.newPassword.getDOMNode.value,
			password_confirmation: this.refs.newPassword.getDOMNode.value
		});

		console.log(newUser);
		

	}


});