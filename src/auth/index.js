'use strict';

var express = require('express');
var passport = require('passport');
var User = require('../api/user/user.model');

// Passport Configuration
require('./local/passport').setup(User);
require('./facebook/passport').setup(User, {facebook: {
	clientID: process.env.FACEBOOK_ID,
	clientSecret: process.env.FACEBOOK_SECRET,
	callbackURL: (process.env.DOMAIN || '') + '/auth/facebook/callback'
}});

var router = express.Router();

router.use('/local', require('./local'));
router.use('/facebook', require('./facebook'));

module.exports = router;
