

(function(){
	var speakCount = 0;
	Template.MagicMike.events({
		'mouseenter .magic-mike': function(){
			if (++speakCount%2) {
				Session.set('speech','n0.');
			} else {
				Meteor.call('smile',function(err,data){
					if (err) {
						console.log('api error','smile',err);
						return Session.set('speech', ':(');
					}
					Session.set('speech', data);
				});
			}
		}
		,'mouseleave .magic-mike': function(){
			Session.set('speech',null);
		}
	});
}());

Template.MagicMike.helpers({
	speech: function(){
		return Session.get('speech');
	}
});

