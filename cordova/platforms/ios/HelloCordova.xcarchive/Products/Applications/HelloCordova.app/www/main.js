
var Users = {};

$(document).ready(function(){
console.log("entered doc ready");
	var database = firebase.database();

	database.ref('/twitter_users/').once('value').then(function(snapshot) {
	  
	  var user_list = snapshot.val();
	  Users = user_list;
	  i=0;

//instead of appending the elements I can lay down the elements on the page and then choose what id to append to
	  $.each(user_list, function(index, user){

	  	console.log(user);

	  	$('#listImages').append('<a id="profile_'+ index +'" href="#profile"><img src="' + user.profile_image_url+'"></a>');
	
	  	$("#profile_"+ index ).click(function(e) {
	  		
	  		$('#twitter_url').attr('href', 'http://twitter.com/' + user.screen_name);
	  		$('#twitter_url').text('@'+user.screen_name);
	  		$('#name').text(user.name);
	  		$('#profile_image').attr('src', user.profile_image_url);
	  		$('#description').text(user.description);
        	e.preventDefault();
        	
        	window.location.href = "#profile";


    
    //    	return false;  
    	});
		});

	});

	
});



