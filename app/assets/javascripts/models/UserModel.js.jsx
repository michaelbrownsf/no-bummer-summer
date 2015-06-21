var UserModel = Backbone.Model.extend({
	defaults: {
		_id: null,
		firstName: null,
		lastName: null,
		email: null,
		password: null,
		age: 0,
		password_confirmation: null
	},
	urlRoot: 'https://no-bummer-summer-2015.herokuapp.com/users/',
	idAttribute: '_id',

	validate: function(attr, options) {
		if(attr.firstName === '' ) {
			return 'Please enter your first name.';
		}
		else if(attr.lastName === '') {
			return 'Please enter your last name.'
		}
		else if(attr.email === '') {
			return 'Please enter your email.'
		}
		else if(attr.password === '') {
			return 'Please enter a password.'
		}
		else if(attr.password_confirmation === '') {
			return 'Please enter a password confirmation.'
		}
		else if(attr.password_confirmation === attr.password) {
			return 'Your passwords must match.'
		}
	}
});