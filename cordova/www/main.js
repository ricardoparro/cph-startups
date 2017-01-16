

$(document).ready(function(){



	var database = firebase.database();

	database.ref('/twitter_users/').once('value').then(function(snapshot) {
	  
	  var user_list = snapshot.val();

	  i=0;

//instead of appending the elements I can lay down the elements on the page and then choose what id to append to
	  $.each(user_list, function(index, user){
	  	console.log(user);
		i++;
		element ='';
		if(i === 1){
			element='<div class="ui-grid-b" data-filter="true"><div class="ui-block-a"><img src="' + user.profile_image_url +'">';
		}

		if(i === 2){
			element= '<div class="ui-block-b"><img src="' + user.profile_image_url+'"></div>';
		}

		if(i === 3){
			element= '<div class="ui-block-c"><img src="' + user.profile_image_url+'"></div>';
			i=0;
		}


	  	$('#listImages').append(element);
		});
	});
});



