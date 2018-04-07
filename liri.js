// import { twitter } from "./keys.js";

require("dotenv").config();

var keys = require("./keys");


var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");
var fss = require("fs");


var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);

var userInput = process.argv.slice(3);


var movieName = userInput.join(" ", "+");



var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";



var params = {
    screen_name: 'bridawggggg'
};

if (process.argv[2] === "my-tweets") {

client.get('statuses/user_timeline', params, function(error, tweets, response){
   
    
    console.log(tweets[0].text);
    console.log(tweets[1].text);
    console.log(tweets[2].text);
    console.log(tweets[3].text);
    console.log(tweets[4].text);
    console.log(tweets[5].text);
    
});

}

if (process.argv[2] === "spotify-this-song") {
    spotify.search({ type: 'track', query: "stairway to heaven"})
    .then(function(response) {
        console.log(JSON.stringify(response, null, 2));
    
    })
    .catch(function(err){
        console.log(err);
    });
}

if (process.argv[2] === "movie-this") {
    request(queryURL, function(error, response, body) {
        
        console.log("Movie Title: " + JSON.parse(body).Title);
        console.log("Year: " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        console.log("RT Rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Country: " + JSON.parse(body).Country);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
    });
}
