
var Users = {};


$(document).ready(function(){



//loading
	var $this = $( this ),
	    theme = $this.jqmData( "theme" ) || $.mobile.loader.prototype.options.theme,
	    msgText = $this.jqmData( "msgtext" ) || $.mobile.loader.prototype.options.text,
	    textVisible = $this.jqmData( "textvisible" ) || $.mobile.loader.prototype.options.textVisible,
	    textonly = !!$this.jqmData( "textonly" );
	    html = $this.jqmData( "html" ) || "";
	$.mobile.loading( "show", {
	        text: msgText,
	        textVisible: textVisible,
	        theme: theme,
	        textonly: textonly,
	        html: html
	});


	var database = firebase.database();

	database.ref('/twitter_users/').once('value').then(function(snapshot) {
	  
	  var user_list = snapshot.val();
	  Users = user_list;
	  i=0;

//instead of appending the elements I can lay down the elements on the page and then choose what id to append to
	  $.each(user_list, function(index, user){

	  	console.log(user);

	  	$('#listImages').append('<div class="mdl-cell mdl-cell--1-col"><a id="profile_'+ index +'" href="#profile"><img src="' + user.profile_image_url+'"></a></div>');
	
	  	$("#profile_"+ index ).click(function(e) {
	  		
	  		$('#twitter_url').attr('href', 'http://twitter.com/' + user.screen_name);
	  		$('#twitter_url').text('@'+user.screen_name);
	  		$('#name').text(user.name);
	  		$('#profile_image').attr('src', user.profile_image_url);
	  		$('#description').text(user.description);
        	e.preventDefault();
        	
        	window.location.href = "#profile";

    	});
		});
	//hide loading  
	$.mobile.loading( "hide" );
	});
});




