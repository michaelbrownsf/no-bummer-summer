var UserActivityModel = Backbone.Model.extend({
	defaults: {
		activity_id: null,
		user_id: null,
		completed: false
	},
	urlRoot: 'https://no-bummer-summer-2015.herokuapp.com/user_activities',
	idAttribute: '_id'
});