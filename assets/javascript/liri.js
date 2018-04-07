// import { twitter } from "./keys.js";

require("dotenv").config();

var keys = require("./keys");



var twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");
var fss = require("fs");


var client = new twitter(keys.twitter);
var spotify = new Spotify({id: "0ad4ada9d4684789b62ac72d325e84da",
secret: "d3ee40a574504458ab18f394331bbd62"});

var userInput = process.argv.slice(3);


var movieName = userInput.join(" ", "+");



var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

var userInput = process.argv.slice(3);

var params = {
    q: 'nyc'
};

if (process.argv[2] === "my-tweets") {

client.get('statuses/lookup', params, function(error, tweets, response){
   
    console.log("jello")
    console.log(tweets);
    console.log(response);
});

}

if (process.argv[2] === "spotify-this-song") {
    spotify.search({ type: 'track', query: "stairway to heaven"})
    .then(function(response) {
        console.log(response);
    
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
