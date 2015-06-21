
var LoginPage = React.createClass({
	render: function() {
		return (
			<form className="centeredcontainer" ref="loginForm" onSubmit={this.userLogin}>
				<input type="text" ref="email" placeholder="email" /><br />
				<input type="text" ref="password" placeholder="password" /><br />
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

		console.log(User.get());

		if(User.email === '') {
			console.log('please enter your username');
		}
		else if (User.password === '') {
			console.log('please enter your password')
		}
		else {
			myApp.navigate('#checklist/' + UserModel.firstName, {trigger:true});
		}

		var loginValues = {
			email: this.refs.email.getDOMNode.value,
			password: this.refs.password.getDOMNode.value
		}
		
		$.post('https://no-bummer-summer-2015.herokuapp.com/login', {email: loginValues.email, password: loginValues.password});

		console.log(data.message);
	}
});