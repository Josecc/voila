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
    if(!key) { return res.status(404); }
    key.remove((err) => {
      if(err) { return handleError(res, err); }
      return res.status(200).json(req.params.application);
    });
  });
};

//Searches an image based on an image upload
//Parameters: res.body.imageBlobl or req.body.url
exports.search = (req, res) => {
  if(! (req.body || req.body.url || req.body.im_name)) {
    res.status(404).send("Please provide a url or image to search for.");
  } else {
    SearchKeys.findOne({application: req.params.application}, (err, key) => {
      if(err) { return handleError(res, err); }
      if(!key) { return res.status(404).send("Sorry, add application keys from ViSenze first before searching."); }
      //Setting up request
      console.log("sending");
      var formData = {
        limit: req.params.limit,
        page: req.params.page,
        fl: 'product_name',
        fl: 'price',
        fl: 'sm_im_url',
        fl: 'product_url',
        image: req.body.file
      };
      let r = request({
        url: 'http://visearch.visenze.com/uploadsearch',
        method: 'POST',

        data: formData
      }, (error, response, body) => {
        res.status(200).json(body);
      }).auth(key.access, key.secret);
      // if(req.body.url){ //If its an image url sealrch
      //   f.append('im_url', req.body.url);
      // } else { //If its an image upload search
      //   f.append('image', req.body.file, "upload.jpg");
      // }
      // console.log('waiting....');
      //Set up data for request https://developers.visenze.com/http/#Data-API
      // let formData = r.form();
      // formData.append('limit', req.params.limit);
      // formData.append('page', req.params.page);
      // formData.append('fl', 'product_name');
      // formData.append('fl', 'price');
      // formData.append('fl', 'sm_im_url');
      // formData.append('fl', 'product_url');
      // if(req.body.url){ //If its an image url sealrch
      //   formData.append('im_url', req.body.url);
      // } else { //If its an image upload search
      //   formData.append('image', req.body.imageBlob, 'upload.jpg');
      // }
    });
  }
}

//Searches an image based on an image upload
//Parameters: res.body.imageBlobl or req.body.url
exports.searchName = (req, res) => {
  SearchKeys.findOne({application: req.params.application}, (err, key) => {
    if(err) { return handleError(res, err); }
    if(!key) { return res.status(404).json("Sorry, add application keys from ViSenze first before searching."); }
    //Setting up request
    let r = request.get('http://visearch.visenze.com/search?limit='+ req.params.limit + 
      '&fl=product_url&fl=product_name&fl=price&fl=sm_im_url&page=' + req.params.page + '&im_name=' + req.params.name, (err, resopnse, body) => {
      res.status(200).json(body);
    }).auth(key.access, key.secret);
  });
}

function handleError(res, err) {
  return res.send(500, err);
}