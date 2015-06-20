
var SignupPage = React.createClass({
	render: function() {
		return (
			<form onSubmit={submitNewUser}>
				<input type="text" className="newName" ref="newFirst" placeholder="first name" />
				<input type="text" className="newName" ref="newLast" placeholder="last name" />
				<input type="text" className="newEmail" ref="newEmail" placeholder="enter email" />
				<input type="text" className="newUser" ref="newUser" placeholder="enter username" />
				<input type="text" className="newPassword" ref="newPassword" placeholder="enter password" />
				<input type="text" className="confirmPassword" ref="confirmPassword" placeholder="confirm password" />
				<button type="submit">Submit</button>
			</form>
		);
	},

	submitNewUser: function(e) {
		e.preventDefault();

		var newUser = new UserModel {
			firstName: this.refs.username.value(),
			email: this.refs.username.value(),
			password: this.refs.password.value()
		}
	}


});