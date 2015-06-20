
var SignupPage = React.createClass({
	render: function() {
		return (
			<form onSubmit={this.userCreate}>
				<input type="text" ref="firstName" placeholder="first name" />
				<input type="text" ref="lastName" placeholder="last name" />
				<input type="text" ref="age" placeholder="age" />
				<input type="text" ref="newEmail" placeholder="enter email" />
				<input type="text" ref="newPassword" placeholder="enter password" />
				<input type="text" ref="confirmPassword" placeholder="confirm password" />
				<button type="submit">Submit</button>
			</form>
		);
	},

	userCreate: function(e) {
		e.preventDefault;

		var User = {
			firstName: this.refs.firstName.getDOMNode().value,
			lastName: this.refs.lastName.getDOMNode().value,
			email: this.refs.newEmail.getDOMNode().value,
			password: this.refs.newPassword.getDOMNode().value,
			password_confirmation: this.refs.confirmPassword.getDOMNode().value
		};

		if(User.email === '') {
			console.log('please enter an email');
		}
		else if (User.password_confirmation !== User.password) {
			console.log('your passwords do not match')
		}
		else if (User.age === '') {
			console.log('enter your age')
		}
		else if (User.firstName === '') {
			console.log('please enter your first name')
		}
		else if (User.lastName === '') {
			console.log('please enter your last name')
		}
		else {
			myApp.navigate('checklist/' + User.firstName ,  {trigger: true});
		};
	}

});