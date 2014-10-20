
var smile = Meteor.require('cool-ascii-faces');;

Meteor.startup(function () {
	// code to run on server at startup
});

Meteor.methods({
	smile: function () {
		this.unblock();
		return smile();
	}
});