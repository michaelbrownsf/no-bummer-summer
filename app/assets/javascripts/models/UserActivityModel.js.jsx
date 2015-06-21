var UserActivityModel = Backbone.Model.extend({
	defaults: {
		activityId: null,
		userId: null,
		checked: false
	},
	urlRoot: 'https://no-bummer-summer-2015.herokuapp.com/user_activities',
	idAttribute: '_id'
});