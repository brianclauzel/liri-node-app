// twitter Consumer Key (API Key)	1uORK2x0b844gA2LECjG1XQYe
// Consumer Secret (API Secret)	fskAQ8YagatmVglpHBNP0BvR4Kwj5HkxOVNirgq4iC0OWyMml0
console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
