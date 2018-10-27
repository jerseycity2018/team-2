const express = require('express')
const app = express()
const Twit = require('twit')
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/tweets/201810260000', (req, res) => {

  var T = new Twit({
    consumer_key:        process.env.CONSUMER_KEY,
    consumer_secret:     process.env.CONSUMER_SECRET,
    access_token:        process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            false,     // optional - requires SSL certificates to be valid.
  })

  var tweets = {
    'all' : [],
    hashtags : {},
    num_tweets : 0,
    num_mentions : 0
  }

  var hashtagsDict = { }

  T.get('tweets/search/30day/prodcpc', { fromDate: '201810260000', toDate: '201810270000', query: "place:central_park" },  function (err, data, response) {
    tweets.all = data.results.filter(tweet => tweet.retweeted_status == undefined)
    tweets.all.forEach(tweet => {
      let hashtags = tweet.entities.hashtags
      if (hashtags.length != 0){
        hashtags.forEach( hashtag => {
          if (hashtagsDict[hashtag.text] != undefined){
              hashtagsDict[hashtag.text] = hashtagsDict[hashtag.text] +1
          }else{
              hashtagsDict[hashtag.text] = 1
          }
        })
      }
      let mentions = tweet.entities.user_mentions
      tweets.num_mentions = tweets.num_mentions + mentions.length
    })
    tweets.hashtags = hashtagsDict
    tweets.num_tweets = tweets.all.length
    res.send(tweets)

  })



})
app.get('/tweets/201810250000', (req, res) => {

  var T = new Twit({
    consumer_key:        process.env.CONSUMER_KEY,
    consumer_secret:     process.env.CONSUMER_SECRET,
    access_token:        process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            false,     // optional - requires SSL certificates to be valid.
  })

  var tweets = {
    'all' : [],
    hashtags : {},
    num_tweets : 0,
    num_mentions : 0
  }

  var hashtagsDict = { }

  T.get('tweets/search/30day/prodcpc', { fromDate: '201810250000', toDate: '201810260000', query: "place:central_park" },  function (err, data, response) {
    tweets.all = data.results.filter(tweet => tweet.retweeted_status == undefined)
    tweets.all.forEach(tweet => {
      let hashtags = tweet.entities.hashtags
      if (hashtags.length != 0){
        hashtags.forEach( hashtag => {
          if (hashtagsDict[hashtag.text] != undefined){
              hashtagsDict[hashtag.text] = hashtagsDict[hashtag.text] +1
          }else{
              hashtagsDict[hashtag.text] = 1
          }
        })
      }
      let mentions = tweet.entities.user_mentions
      tweets.num_mentions = tweets.num_mentions + mentions.length
    })
    tweets.hashtags = hashtagsDict
    tweets.num_tweets = tweets.all.length
    res.send(tweets)

  })



})
app.get('/tweets/201810240000', (req, res) => {

  var T = new Twit({
    consumer_key:        process.env.CONSUMER_KEY,
    consumer_secret:     process.env.CONSUMER_SECRET,
    access_token:        process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            false,     // optional - requires SSL certificates to be valid.
  })

  var tweets = {
    'all' : [],
    hashtags : {},
    num_tweets : 0,
    num_mentions : 0
  }

  var hashtagsDict = { }

  T.get('tweets/search/30day/prodcpc', { fromDate: '201810240000', toDate: '201810250000', query: "place:central_park" },  function (err, data, response) {
    tweets.all = data.results.filter(tweet => tweet.retweeted_status == undefined)
    tweets.all.forEach(tweet => {
      let hashtags = tweet.entities.hashtags
      if (hashtags.length != 0){
        hashtags.forEach( hashtag => {
          if (hashtagsDict[hashtag.text] != undefined){
              hashtagsDict[hashtag.text] = hashtagsDict[hashtag.text] +1
          }else{
              hashtagsDict[hashtag.text] = 1
          }
        })
      }
      let mentions = tweet.entities.user_mentions
      tweets.num_mentions = tweets.num_mentions + mentions.length
    })
    tweets.hashtags = hashtagsDict
    tweets.num_tweets = tweets.all.length
    res.send(tweets)

  })



})
app.get('/tweets/201810230000', (req, res) => {

  var T = new Twit({
    consumer_key:        process.env.CONSUMER_KEY,
    consumer_secret:     process.env.CONSUMER_SECRET,
    access_token:        process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            false,     // optional - requires SSL certificates to be valid.
  })

  var tweets = {
    'all' : [],
    hashtags : {},
    num_tweets : 0,
    num_mentions : 0
  }

  var hashtagsDict = { }

  T.get('tweets/search/30day/prodcpc', { fromDate: '201810230000', toDate: '201810240000', query: "place:central_park" },  function (err, data, response) {
    tweets.all = data.results.filter(tweet => tweet.retweeted_status == undefined)
    tweets.all.forEach(tweet => {
      let hashtags = tweet.entities.hashtags
      if (hashtags.length != 0){
        hashtags.forEach( hashtag => {
          if (hashtagsDict[hashtag.text] != undefined){
              hashtagsDict[hashtag.text] = hashtagsDict[hashtag.text] +1
          }else{
              hashtagsDict[hashtag.text] = 1
          }
        })
      }
      let mentions = tweet.entities.user_mentions
      tweets.num_mentions = tweets.num_mentions + mentions.length
    })
    tweets.hashtags = hashtagsDict
    tweets.num_tweets = tweets.all.length
    res.send(tweets)

  })



})
app.get('/tweets/201810220000', (req, res) => {

  var T = new Twit({
    consumer_key:        process.env.CONSUMER_KEY,
    consumer_secret:     process.env.CONSUMER_SECRET,
    access_token:        process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            false,     // optional - requires SSL certificates to be valid.
  })

  var tweets = {
    'all' : [],
    hashtags : {},
    num_tweets : 0,
    num_mentions : 0
  }

  var hashtagsDict = { }

  T.get('tweets/search/30day/prodcpc', { fromDate: '201810220000', toDate: '201810230000', query: "place:central_park" },  function (err, data, response) {
    tweets.all = data.results.filter(tweet => tweet.retweeted_status == undefined)
    tweets.all.forEach(tweet => {
      let hashtags = tweet.entities.hashtags
      if (hashtags.length != 0){
        hashtags.forEach( hashtag => {
          if (hashtagsDict[hashtag.text] != undefined){
              hashtagsDict[hashtag.text] = hashtagsDict[hashtag.text] +1
          }else{
              hashtagsDict[hashtag.text] = 1
          }
        })
      }
      let mentions = tweet.entities.user_mentions
      tweets.num_mentions = tweets.num_mentions + mentions.length
    })
    tweets.hashtags = hashtagsDict
    tweets.num_tweets = tweets.all.length
    res.send(tweets)

  })



})
app.get('/tweets/201810210000', (req, res) => {

  var T = new Twit({
    consumer_key:        process.env.CONSUMER_KEY,
    consumer_secret:     process.env.CONSUMER_SECRET,
    access_token:        process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            false,     // optional - requires SSL certificates to be valid.
  })

  var tweets = {
    'all' : [],
    hashtags : {},
    num_tweets : 0,
    num_mentions : 0
  }

  var hashtagsDict = { }

  T.get('tweets/search/30day/prodcpc', { fromDate: '201810210000', toDate: '201810220000', query: "place:central_park" },  function (err, data, response) {
    tweets.all = data.results.filter(tweet => tweet.retweeted_status == undefined)
    tweets.all.forEach(tweet => {
      let hashtags = tweet.entities.hashtags
      if (hashtags.length != 0){
        hashtags.forEach( hashtag => {
          if (hashtagsDict[hashtag.text] != undefined){
              hashtagsDict[hashtag.text] = hashtagsDict[hashtag.text] +1
          }else{
              hashtagsDict[hashtag.text] = 1
          }
        })
      }
      let mentions = tweet.entities.user_mentions
      tweets.num_mentions = tweets.num_mentions + mentions.length
    })
    tweets.hashtags = hashtagsDict
    tweets.num_tweets = tweets.all.length
    res.send(tweets)

  })



})
app.get('/tweets/201810200000', (req, res) => {

  var T = new Twit({
    consumer_key:        process.env.CONSUMER_KEY,
    consumer_secret:     process.env.CONSUMER_SECRET,
    access_token:        process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            false,     // optional - requires SSL certificates to be valid.
  })

  var tweets = {
    'all' : [],
    hashtags : {},
    num_tweets : 0,
    num_mentions : 0
  }

  var hashtagsDict = { }

  T.get('tweets/search/30day/prodcpc', { fromDate: '201810200000', toDate: '201810210000', query: "place:central_park" },  function (err, data, response) {
    tweets.all = data.results.filter(tweet => tweet.retweeted_status == undefined)
    tweets.all.forEach(tweet => {
      let hashtags = tweet.entities.hashtags
      if (hashtags.length != 0){
        hashtags.forEach( hashtag => {
          if (hashtagsDict[hashtag.text] != undefined){
              hashtagsDict[hashtag.text] = hashtagsDict[hashtag.text] +1
          }else{
              hashtagsDict[hashtag.text] = 1
          }
        })
      }
      let mentions = tweet.entities.user_mentions
      tweets.num_mentions = tweets.num_mentions + mentions.length
    })
    tweets.hashtags = hashtagsDict
    tweets.num_tweets = tweets.all.length
    res.send(tweets)

  })



})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
