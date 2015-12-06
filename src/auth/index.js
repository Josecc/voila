'use strict';

var express = require('express');
var passport = require('passport');
var User = require('../api/user/user.model');

// Passport Configuration
require('./local/passport').setup(User);
require('./facebook/passport').setup(User, {facebook: {
	clientID: process.env.FACEBOOK_ID || '1609283866014176',
	clientSecret: process.env.FACEBOOK_SECRET || '2692b42e963fc6cb30b5cfe2b06f3a13',
	callbackURL: (process.env.DOMAIN || '') + '/auth/facebook/callback'
}});

var router = express.Router();

router.use('/local', require('./local'));
router.use('/facebook', require('./facebook'));

module.exports = router;