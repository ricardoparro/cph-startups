<?php
//include the abraham's twitteroauth library
require_once ('twitteroauth.php');
require_once ('vendor/ktamas77/firebase-php/src/FirebaseLib.php');
//create an app and get the settings from dev.twitter.com
$consumerKey = "Znfd9PjToqFXiCPbN5cBwjVjV"; //add the key from your app
$consumerSecret = "PF3rVjHQpxRsqqL4fPLP0sto4ed2IcO4dH4kw3L2TYMzbN0NZ6"; //add the secret from your app
$accessToken = "77257004-F1BPDsevOnCR0OP41agNZPgTFp6np1EhfGAlk1FKA"; //add the access token from your app
$accessSecret = "eGQHb808O8rJAtC7OmmeTnDZNK4KTEYkWXJy3pzdxBag0"; //add the access secret from your app
$message = "Why don't you try this one?";
$connection = new TwitterOAuth($consumerKey,$consumerSecret,$accessToken,$accessSecret);
$result = $connection -> get('https://api.twitter.com/1.1/lists/members.json?slug=copenhagen-startup-people&list_id=820371498015793153&owner_screen_name=ricardoparro&cursor=-1');


//FIREBASE

const DEFAULT_URL = 'https://cphstartups-3d041.firebaseio.com/';
$firebase = new \Firebase\FirebaseLib(DEFAULT_URL);
$final_answer = $firebase->set('twitter_users', $result->users);

print_r($final_answer);

?>
