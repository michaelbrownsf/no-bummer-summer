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
		if(attr.item === '') {
			return 'Please fill out all fields';
		}
		return false;
	}
});