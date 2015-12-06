'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WishlistSchema = new Schema({
  deviceId: String,
  email: String,
  im_names: [String]
});

module.exports = mongoose.model('Wishlist', WishlistSchema);