require("dotenv").config();

var keys = require("./keys");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");
var fss = require("file-system");
var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);
var blank = "";
var userInput = process.argv.slice(3);
var movieName = userInput.join(" ", "+");
var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
var defaultSonggg = "the sign";
var params = {
    screen_name: 'bridawggggg'
};

if (process.argv[2] === "my-tweets") {

client.get('statuses/user_timeline', params, function(error, tweets, response) {

    console.log(" ");
    console.log("   In order from 'most recent' to 'oldest': ");
    console.log(" ----------");
    console.log(" 1: " + tweets[0].text);
    console.log(" ----------");
    console.log(" 2: " + tweets[1].text);
    console.log(" ----------");
    console.log(" 3: " + tweets[2].text);
    console.log(" ----------");
    console.log(" 4: " + tweets[3].text);
    console.log(" ----------");
    console.log(" 5: " + tweets[4].text);
    console.log(" ----------");
    console.log(" 6: " + tweets[5].text);
    console.log(" ----------");
    console.log(" 7: " + tweets[6].text);
    console.log(" ----------");
    console.log(" 8: " + tweets[7].text);
    console.log(" ----------");
    console.log(" 9: " + tweets[8].text);
    console.log(" ----------");
    console.log(" 10: " + tweets[9].text);
    console.log(" ----------");
    console.log(" 11: " + tweets[10].text);
    console.log(" ----------");
    console.log(" 12: " + tweets[11].text);
    console.log(" ----------");
    console.log(" 13: " + tweets[12].text);
    console.log(" ----------");
    console.log(" 14: " + tweets[13].text);
    console.log(" ----------");
    console.log(" 15: " + tweets[14].text);
    console.log(" ----------");
    console.log(" 16: " + tweets[15].text);
    console.log(" ----------");
    console.log(" 17: " + tweets[16].text);
    console.log(" ----------");
    console.log(" 18: " + tweets[17].text);
    console.log(" ----------");
    console.log(" 19: " + tweets[18].text);
    console.log(" ----------");
    console.log(" 20: " + tweets[19].text);
    console.log(" ----------");

});

}



if (process.argv[2] === "spotify-this-song") {
    spotify.search({ type: 'track', query: userInput, limit: 1})
    .then(function(response) {
       
        console.log("----------");
        console.log("Artist: " + response.tracks.items[0].album.artists[0].name);
        console.log("----------");
        console.log("Song Name: " +  response.tracks.items[0].name);
        console.log("----------");
        console.log("Preview Link: " + response.tracks.items[0].album.artists[0].external_urls.spotify);
        console.log("----------");
        console.log("Album: " + response.tracks.items[0].album.name);
        console.log("----------");

    })
    .catch(function(err){
        console.log(err);
    });
}

// if (process.argv[2] === "spotify-this-song" && userInput === "") {
//     spotify.search({ type: 'track', query: defaultSonggg, limit: 1})
//     .then(function(response) {
       
//         console.log("----------");
//         console.log("Artist: " + response);
//         // console.log("----------");
//         // console.log("Song Name: " +  response.tracks.items[4].name);
//         // console.log("----------");
//         // console.log("Preview Link: " + response.tracks.items[4].album.artists[0].external_urls.spotify);
//         // console.log("----------");
//         // console.log("Album: " + response.tracks.items[4].album.name);
//         console.log("----------");

//     })
//     .catch(function(err){
//         console.log(err);
//     });
// }

if (process.argv[2] === "movie-this") {
    request(queryURL, function(error, response, body) {

        console.log("----------");
        console.log("Movie Title: " + JSON.parse(body).Title);
        console.log("----------");
        console.log("Year: " + JSON.parse(body).Year);
        console.log("----------");
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        console.log("----------");
        console.log("RT Rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("----------");
        console.log("Language: " + JSON.parse(body).Language);
        console.log("----------");
        console.log("Country: " + JSON.parse(body).Country);
        console.log("----------");
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("----------");
        console.log("Actors: " + JSON.parse(body).Actors);
        console.log("----------");

    });
}

if (process.argv[2] === "do-what-it-says") {
    fss.readFile
}