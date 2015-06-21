var newListUser = new UserCollection();

var SignupPage = React.createClass({
	render: function() {
		return (
<<<<<<< HEAD
			<form onSubmit={this.userCreate}>
				<input type="text" ref="firstName" placeholder="first name" />
				<input type="text" ref="lastName" placeholder="last name" />
				<input type="text" ref="age" placeholder="age" />
				<input type="text" ref="newEmail" placeholder="enter email" />
				<input type="text" ref="newPassword" placeholder="enter password" />
				<input type="text" ref="confirmPassword" placeholder="confirm password" />
=======
			<form className="centeredcontainer" onSubmit={this.submitNewUser}>
				<input type="text" className="newName" ref="newFirst" placeholder="first name" /><br />
				<input type="text" className="newName" ref="newLast" placeholder="last name" /><br />
				<input type="text" className="newEmail" ref="newEmail" placeholder="enter email" /><br />
				<input type="password" className="newPassword" ref="newPassword" placeholder="enter password" /><br />
				<input type="password" className="confirmPassword" ref="confirmPassword" placeholder="confirm password" /><br />
>>>>>>> master
				<button type="submit">Submit</button>
			</form>
		);
	},

<<<<<<< HEAD
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

=======
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


>>>>>>> master
});