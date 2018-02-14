console.log('hello')
var request = require('request');
var Twitter = require('twitter');
var SpotifyWebApi = require('spotify-web-api-node');

var credentials= {
		client_id : '1033a3b2dc8549119a3214c68797a9fa',
	    client_secret : '6b94641d236c43e5bcaee8b61a3a8a97',
	    redirectUri: 'http://www.google.com'
};


	/*
	var clientId = '1033a3b2dc8549119a3214c68797a9fa';
	var scopes = ['user-read-private', 'user-read-email'],
	redirectUri = 'http://google.com/',
	state = 'VA';
	*/
	

	var spotifyApi = new SpotifyWebApi(credentials)
	
	//var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
	//console.log(authorizeURL);
	// var auth_url = https://accounts.spotify.com/authorize?client_id=1033a3b2dc8549119a3214c68797a9fa&response_type=code&redirect_uri=http://google.com/&scope=user-read-private%20user-read-email&state=VA
	var code = 'AQAPcOWUKKdmwrOoU3P0NN6hrHbF_ebQqck-i9B6YpFCcvsY_VKR2gnYrdEkOSWWAclCPA3rTVxRPORe2iTvs5RgntCfORJmdMga4f57mlfQZQEUcvn7bFbW5qM5MlW87TSq_cEqVLjwiNeTYB62Cxc5qOfn15-7Xkvqq7GTHHI-CzXr4_K8TWlwQFmfp0cn4opjQHQy3-W4nwQXEbrC6ina4LjYSQ7B4dgXOQ';
		spotifyApi.authorizationCodeGrant(code)
		  .then(function(data) {
		    console.log('The token expires in ' + data.body['expires_in']);
		    console.log('The access token is ' + data.body['access_token']);
		    console.log('The refresh token is ' + data.body['refresh_token']);
		 
		    // Set the access token on the API object to use it in later calls
		    spotifyApi.setAccessToken(data.body['access_token']);
		    spotifyApi.setRefreshToken(data.body['refresh_token']);
		  }, function(err) {
		    console.log('Something went wrong!', err);
		  });

/*
var authOptions = {
		  url: 'https://accounts.spotify.com/api/token',
		  headers: {
		    'Authorization': 'Basic ' + (new Buffer(Spotify_client_id + ':' + Spotify_client_secret).toString('base64'))
		  },
		  form: {
		    grant_type: 'client_credentials'
		  },
		  json: true
		};

	
request.post(authOptions, function(error, response, body, token) {
	  if (!error && response.statusCode === 200) {

	    // use the access token to access the Spotify Web API
	     var token = body.access_token;
	     console.log(token);
	    
	  }
	});

const token = 'BQBt8Kn2zCqpQCkvlPnHI0NKE4vpLZhnc0OG_COLqVJGPtTW_xf1dtfYKqeIFZqylBbJe0ibaa0YWaC94uA';
spotifyApi.setAccessToken(token);
*/

var client = new Twitter({
	    consumer_key : "G5tZZZYtFz8vC4AWJ0cu8NEQW",
	    consumer_secret : "GnXnQpVCI3e49zuio7nQIT05SawaH3FwBJUoWcmtcaW4LQwBlc",
	    access_token_key : "1150549266-jyR82dKeiVNHnUpaiFVGcPTcfpJkJBnrQ7dDM2j",
	    access_token_secret : "ouicHHlZGhjA8Ht5QEgvxdBlghMtYvz3VllCBo6nQWhSY"
	});
	


var params = {q: 'spotify.com', count: 100, until: '2018-02-07'};

client.get('search/tweets',params, function(error, tweets, response) {
  if (!error) {
	  for(i=0;i<tweets.statuses.length;i++){
		  		if(typeof tweets.statuses[i].entities.urls[0] != 'undefined'){
				  var tweet = tweets.statuses[i].entities.urls[0].url;
				  console.log(tweet);
		  		}
		  		else
		  			console.log('not valid')
		  
	  }
  }
});


