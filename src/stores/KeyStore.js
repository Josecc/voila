import BaseStore from './BaseStore';
import KeysActions from '../actions/KeysActions';
import _ from 'lodash';


class KeyStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    this._keys = new Array();
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case 'LOGIN_USER':
        KeysActions.getKeys();
        this.emitChange();
        break;
      case 'LOGOUT_USER':
        this._keys = new Array();
        this.emitChange();
        break;
      case 'KEY_CREATED':
        this._keys.push({
          application: action.application,
          access: action.access,
          secret: action.secret
        });
        this.emitChange();
        break;
      case 'KEY_DELETED':
        this._keys = _.remove(this._keys, (n) => {
          return n.application != action.application;
        });
        this.emitChange();
        break;
      case 'KEYS_RECEIVED':
        this._keys = action.keys;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  get keys() {
    return this._keys;
  }
}

export default new KeyStore();