const express = require('express')
const app = express()
const Twit = require('twit')
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/tweets', (req, res) => {

  var T = new Twit({
    consumer_key:        process.env.CONSUMER_KEY,
    consumer_secret:     process.env.CONSUMER_SECRET,
    access_token:        process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            false,     // optional - requires SSL certificates to be valid.
  })

  T.get('tweets/search/30day/prodcpc', { fromDate: '201810260000', toDate: '201810270000', query: 'place:central park' },  function (err, data, response) {
    res.send(data.results.filter(tweet => tweet.retweeted_status == undefined)
)
  })
    T.get('tweets/search/30day/prodcpc', { fromDate: '201810250000', toDate: '201810260000', query: 'place:central park, has:hashtags' },  function (err, data, response) {
    res.send(data.results.filter(tweet => tweet.retweeted_status == undefined)
)
  })
   T.get('tweets/search/30day/prodcpc', { fromDate: '201810250000', toDate: '201810260000', query: 'place:central park, has:images' },  function (err, data, response) {
    res.send(data.results.filter(tweet => tweet.retweeted_status == undefined)
)
  })
   T.get('tweets/search/30day/prodcpc', { fromDate: '20189270000', toDate: '201810260000', query: 'place:central park, is:verified' },  function (err, data, response) {
    res.send(data.results.filter(tweet => tweet.retweeted_status == undefined)
)
  })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
