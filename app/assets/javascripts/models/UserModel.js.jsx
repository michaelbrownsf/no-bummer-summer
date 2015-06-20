var UserModel = Backbone.Model.extend({
	defaults: {
		_id: null,
		firstName: null,
		lastName: null,
		email: null,
		password: null,
		age: 0
	},
	validate: function(attr, options) {
		if(attr.item.length === 0) {
			return 'Please fill out all fields';
		}
		return false;
	},
});