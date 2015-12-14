import request from 'reqwest';
import AppDispatcher from '../core/Dispatcher';
import _ from 'lodash';

export default {
  searchUrl: (id, application, page, url, limit = 12) => {
    request({
      url: '/api/search/image/' + application + '/' + page + '/' + limit + '/',
      method: 'POST',
      crossOrigin: true,
      data: {
        url: url
      }
    }).then((res) => {
      AppDispatcher.dispatch({
        actionType: 'IMAGE_RESULT_RECEIVED',
        id: id,
        data: JSON.parse(res).result
      });
    });
  },
  searchImage: (id, application, page, image, limit = 12) => {
    request({
      url: '/api/search/image/' + application + '/' + page + '/' + limit + '/',
      method: 'POST',
      crossOrigin: true,
      data: {
        imageBlob: image
      }
    }).then((res) => {
      AppDispatcher.dispatch({
        actionType: 'IMAGE_RESULT_RECEIVED',
        id: id,
        data: JSON.parse(res).result
      });
    });
  },
  getFeaturedImages: (id, limit = 5, application) => {
    let name = Math.random() * 1400|0;

    request({
      url: '/api/search/image/' + application + '/1/' + limit + '/' + name,
      method: 'GET'
    }).then((res) => {
      AppDispatcher.dispatch({
        actionType: 'IMAGE_RESULT_RECEIVED',
        id: id,
        data: JSON.parse(res).result
      });
    });
  }
}