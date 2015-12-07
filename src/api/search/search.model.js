'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SearchSchema = new Schema({
  application: {type: String, unique: true},
  access: String,
  secret: String
});

// Validate empty application
SearchSchema
  .path('application')
  .validate(function(application) {
    return application.length;
  }, 'Application cannot be blank');

// Validate empty access
SearchSchema
  .path('access')
  .validate(function(access) {
    return access.length;
  }, 'Access key cannot be blank');

// Validate empty secret
SearchSchema
  .path('secret')
  .validate(function(secret) {
    return secret.length;
  }, 'Secret key cannot be blank');

module.exports = mongoose.model('SearchKey', SearchSchema);