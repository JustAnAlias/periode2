var express = require('express')
var router = express.Router()
var JokeModel = require('../model/jokes')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    user: req.session.userName
  })
})

/* GET joke page. */
router.get('/joke', function (req, res, next) {
  req.session.jokeCount += 1
  res.render('joke', { joke: JokeModel.getRandomJoke() })
})

/* GET jokes page. */
router.get('/jokes', function (req, res, next) {
  req.session.jokesCount += 1
  res.render('jokes', { jokes: JokeModel.allJokes })
})

/* GET add joke page. */
router.get('/addjoke', function (req, res, next) {
  res.render('addjoke')
})

/* GET add joke page. */
router.get('/login', function (req, res, next) {
  res.render('login')
})

/* GET store mothod. */
router.post('/storejoke', function (req, res, next) {
  req.session.storeJokeCount += 1
  JokeModel.addJoke(req.body.joke)
  res.redirect('/addjoke')
})

module.exports = router
