

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
				<div ref="registerError"></div>
				<br /><a href="#login">Log in!</a>
			</form>
		);
	},

	submitNewUser: function(e) {
		e.preventDefault();

		var loggedInUser = false;

		users.fetch({ success: onUsersLoaded });

		this.refs.registerError.getDOMNode.innerHTML = '';

		function onUsersLoaded(newlyFetchedCollection) {
			
			this.refs.registerForm.on('submit', function(e) {
				e.preventDefault();

				var newUser = new UserModel ({
					firstName: this.refs.newFirst.getDOMNode.value,
					lastName: this.refs.newLast.getDOMNode.value,
					email: this.refs.newEmail.getDOMNode.value,
					password: this.refs.newPassword.getDOMNode.value,
					password_confirmation: this.refs.newPassword.getDOMNode.value
				});

				if(!newUser.isValid()) {
					this.refs.registerError.getDOMNode.innerHTML = newUser.validationError;
				}
				else {
					console.log('You should save the user');
					newUser.save();
					app.navigate('checklist/' + newUser.firstName, {trigger: true});
				}

			});
		}
	}
});