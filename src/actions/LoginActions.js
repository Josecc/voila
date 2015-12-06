import AppDispatcher from '../core/Dispatcher.js';
import Location from '../core/Location';

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
  logoutUser: () => {
    localStorage.removeItem('jwt');
    AppDispatcher.dispatch({
      actionType: 'LOGOUT_USER'
    });
    Location.pushState({}, '/');
  }
}