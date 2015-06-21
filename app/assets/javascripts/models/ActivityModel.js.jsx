var ActivityModel = Backbone.Model.extend({
	defaults: {
		_id: null,
		name: null
	},

	urlRoot: 'https://no-bummer-summer-2015.herokuapp.com/activities/',
	idAttribute: '_id'
});