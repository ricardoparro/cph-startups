var obj = jQuery.parseJSON( '{ "personList": [{ "name": "Ricardo Parro", "image": "ric_thumb.jpg" },{"name":"Caterine", "image": "https://pbs.twimg.com/profile_images/818202376129642496/STERKdy4.jpg"}]}');


$(document).ready(function(){

	$.each(obj.personList, function(index, person){

			console.log(person);
			$('#listImages').append('<img src="' + person.image +'">');
		
	});
});


