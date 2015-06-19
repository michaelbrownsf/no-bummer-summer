var UserModel = require('../models/UserModel.jsx');

var UserCollection = Backbone.Collection.extend({
	model: UserModel
});