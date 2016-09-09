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
router.get('/joke/random', function (req, res, next) {
    res.json({
        joke: JokeModel.getRandomJoke()
    })
})

/* GET jokes page. */
router.get('/jokes', function (req, res, next) {
    res.json({
        jokes: JokeModel.allJokes
    })
})

/* GET store mothod. */
router.post('/joke', function (req, res, next) {
    console.log(req.body)
    JokeModel.addJoke(req.body.joke)
    res.json({
        msg: 'Your joke has been submitted'
    })
})

module.exports = router
