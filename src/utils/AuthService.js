import request from 'reqwest';
import when from 'when';
import LoginActions from '../actions/LoginActions';

class AuthService {

  login(username, password) {
    return this.handleAuth(when(request({
      url: '/auth/local',
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        "email": username, 
        "password": password
      }
    })));
  }

  signup(name, email, password) {
    return this.handleAuth(when(request({
      url: '/api/users/',
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        "name": name,
        "email": email, 
        "password": password,
        //"role": "admin"
      }
    })));
  }

  handleAuth(loginPromise) {
    return loginPromise
      .then(function(response) {
        var jwt = response.token;
        LoginActions.loginUser(jwt);
        return true;
      });
  }
}

export default new AuthService()