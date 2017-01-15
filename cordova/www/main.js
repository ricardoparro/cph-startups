

$(document).ready(function(){



var database = firebase.database();

database.ref('/twitter_users/').once('value').then(function(snapshot) {
  var user_list = snapshot.val();

  $.each(user_list, function(index, user){
  	console.log(user);
  	$('#listImages').append('<img src="' + user.profile_image_url+'">');
	});
  // ...
});

	
});


