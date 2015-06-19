
var SignupPage = React.createClass({
	render: function() {
		return (
			<div>
				<input type="text" className="newEmail" placeholder="enter email" />
				<input type="text" className="newUser" placeholder="enter username" />
				<input type="text" className="newPassword" placeholder="enter password" />
				<input type="text" className="confirmPassword" placeholder="confirm password" />
				<button type="submit">Submit</button>
			</div>
		);
	}
});