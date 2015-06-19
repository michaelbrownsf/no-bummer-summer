var UserCollection = Backbone.Collection.extend({
	model: UserModel,
	url: 'https://no-bummer-summer-2015.herokuapp.com/users/'
});