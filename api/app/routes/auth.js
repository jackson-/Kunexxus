const authController = require('../controllers/authController.js');
const passport = require('passport');

module.exports = require('express').Router()

    .post('/signup', authController.signup)

    .get('/logout', authController.logout)

    .post('/signin', authController.signin)

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

        return next();

    res.redirect('/signin');

}
