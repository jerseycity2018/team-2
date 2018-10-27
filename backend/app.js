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
    hashtags: {}
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
    })
    tweets.hashtags = hashtagsDict
    res.send(tweets)

  })



})
app.listen(port, () => console.log(Example app listening on port ${port}!))
