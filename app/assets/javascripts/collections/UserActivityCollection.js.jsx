var UserActivityCollection = Backbone.Collection.extend({
	model: UserActivityModel,
	url: 'https://no-bummer-summer-2015.herokuapp.com/user_activities'
});