import BaseStore from './BaseStore';
import jwt_decode from 'jwt-decode';
import request from 'reqwest';


class LoginStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this._jwt = null;
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case 'LOGIN_USER':
        this._jwt = action.jwt;
        this.emitChange();
        break;
      case 'LOGOUT_USER':
        this._user = null;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  get jwt() {
    return this._jwt;
  }

  isLoggedIn() {
    return !!this._jwt;
  }
}

export default new LoginStore();