/*
* Author: Jose Canahui
* Date: December 6, 2016
*/

'use strict';

import _ from 'lodash';
import SearchKeys from './search.model';
import request from 'request';


// Get list of search keys
exports.indexKeys = (req, res) => {
  SearchKeys.find((err, keys) => {
    if(err) { return handleError(res, err); }
    return res.json(200, keys);
  });
};

// Get a single search key
exports.showKey = (req, res) => {
  SearchKeys.findOne({application: req.params.application}, (err, key) => {
    if(err) { return handleError(res, err); }
    if(!key) { return res.send(404); }
    return res.json(key);
  });
};

// Creates a new search key in the DB.
exports.createKey = (req, res) => {
  SearchKeys.create(req.body, (err, key) => {
    if(err) { return handleError(res, err); }
    return res.json(201, key);
  });
};

// Deletes a search key from the DB.
exports.destroyKey = (req, res) => {
  SearchKeys.findOne({application: req.params.application}, (err, key) => {
    if(err) { return handleError(res, err); }
    if(!key) { return res.send(404); }
    key.remove((err) => {
      if(err) { return handleError(res, err); }
      return res.status(200).json(req.params.application);
    });
  });
};

//Searches an image based on an image upload
exports.search = (req, res) => {
  SearchKeys.findOne({application: req.params.application}, (err, key) => {
    if(err) { return handleError(res, err); }
    if(!key) { return res.json(404); }
    //Setting up request
    let r = request.post('http://visearch.visenze.com/uploadsearch', (err, resopnse, body) => {
      res.status(200).json(body);
    }).auth(key.access, key.secret);

    //Set up data for request https://developers.visenze.com/http/#Data-API
    let formData = r.form();
    if(req.params.limit) { formData.append('limit', req.params.limit); }//Set limit if given
    formData.append('page', req.params.page);
    formData.append('fl', 'product_name');
    formData.append('fl', 'price');
    formData.append('fl', 'sm_im_url');
    formData.append('fl', 'product_url');
    if(req.body.url){ //If its an image upload search
      formData.append('im_url', req.body.url);
    } else { //If its an image URL search
      formData.append('image', req.body.imageBlob, 'upload.jpg');
    }
  });
}

function handleError(res, err) {
  return res.send(500, err);
}