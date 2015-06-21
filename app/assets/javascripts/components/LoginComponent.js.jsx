
var LoginPage = React.createClass({
	render: function() {
		return (
			<form ref="loginForm" onSubmit={this.userLogin}>
<<<<<<< HEAD
				<input type="text" ref="email" placeholder="email" />
				<input type="text" ref="password" placeholder="password" />
=======
				<input type="text" ref="email" placeholder="email" /><br />
				<input type="password" ref="password" placeholder="password" /><br />
>>>>>>> master
				<button type="submit" ref="loginBtn">Log In</button>
			</form>
		);
	},

	userLogin: function(e) {
		e.preventDefault;
<<<<<<< HEAD

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
=======
		var loginValues = {
			email: this.refs.email.getDOMNode.value,
			password: this.refs.password.getDOMNode.value
		}
		
		$.post('https://no-bummer-summer-2015.herokuapp.com/login', {email: loginValues.email, password: loginValues.password});

		console.log(data.message);
>>>>>>> master
	}
});