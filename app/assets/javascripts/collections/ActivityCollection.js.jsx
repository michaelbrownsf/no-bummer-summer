var ActivityCollection = Backbone.Collection.extend({
	model: ActivityModel,
	url: 'https://no-bummer-summer-2015.herokuapp.com/activities/'
});