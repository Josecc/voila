import request from 'reqwest';
import AppDispatcher from '../core/Dispatcher';
import LoginStore from '../stores/LoginStore';
import _ from 'lodash';

export default {
  createKey: (application, access, secret) => {
    request({
      url: '/api/search/keys/',
      method: 'POST',
      crossOrigin: true,
      headers: {
        'Authorization': 'Bearer ' + LoginStore.jwt
      },
      data: {
        application: application,
        access: access,
        secret: secret
      }
    }).then((res) => {
      AppDispatcher.dispatch({
        actionType: 'KEY_CREATED',
        application: res.application,
        access: res.access,
        secret: res.secret
      });
    });
  },
  getKeys: () => {
    if(LoginStore.isLoggedIn) {
      request({
        url: '/api/search/keys/',
        method: 'GET',
        crossOrigin: true,
        headers: {
          'Authorization': 'Bearer ' + LoginStore.jwt
        }
      }).then((res) => {
        AppDispatcher.dispatch({
          actionType: 'KEYS_RECEIVED',
          keys: res
        });
      });
    }
  },
  deleteKey: (application) => {
    request({
      url: '/api/search/keys/' + application,
      method: 'DELETE',
      crossOrigin: true,
      headers: {
        'Authorization': 'Bearer ' + LoginStore.jwt
      }
    }).then((res) => {
      AppDispatcher.dispatch({
        actionType: 'KEY_DELETED',
        application: res
      });
    });
  }
}