import BaseStore from './BaseStore';
import jwt_decode from 'jwt-decode';
import LoginActions from '../actions/LoginActions';


class LoginStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    this._jwt = null;
    this._userName = null;
    this._userEmail = null;
    this._userRole = null;
    this._userId = null;
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case 'LOGIN_USER':
        this._jwt = action.jwt;
        LoginActions.getUserInfo(this._jwt);
        this.emitChange();
        break;
      case 'LOGOUT_USER':
        this._jwt = null;
        this.emitChange();
        break;
      case 'USER_INFO_RECEIVED':
        this._userName = action.name;
        this._userEmail = action.email;
        this._userRole = action.role;
        this._userId = action.id;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  get jwt() {
    return this._jwt;
  }

  get name(){
    return this._userName;
  }

  get email(){
    return this._userEmail;
  }

  get role(){
    return this._userRole;
  }

  get id(){
    return this._userId;
  }

  isLoggedIn() {
    return !!this._jwt;
  }
}

export default new LoginStore();