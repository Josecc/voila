import AppDispatcher from '../core/Dispatcher.js';
import Location from '../core/Location';
import request from 'reqwest';
import LoginStore from '../stores/LoginStore.js';

export default {
  loginUser: (jwt) => {
    var savedJwt = localStorage.getItem('jwt');
    
    AppDispatcher.dispatch({
      actionType: 'LOGIN_USER',
      jwt: jwt
    });
    
    if (savedJwt !== jwt) {
      Location.pushState({}, '/');
      localStorage.setItem('jwt', jwt);
    }
  },
  getUserInfo: (jwt) => {
    request({
      url: '/api/users/me/',
      method: 'GET',
      crossOrigin: true,
      headers: {
        'Authorization': 'Bearer ' + LoginStore.jwt
      }
    }).then((res) => {
      AppDispatcher.dispatch({
        actionType: 'USER_INFO_RECEIVED',
        name: res.name,
        email: res.email,
        role: res.role,
        id: res._id
      });
    });
  },
  logoutUser: () => {
    localStorage.removeItem('jwt');
    AppDispatcher.dispatch({
      actionType: 'LOGOUT_USER'
    });
    Location.pushState({}, '/');
  }
}