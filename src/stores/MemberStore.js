import BaseStore from './BaseStore';
import MemberActions from '../actions/MemberActions';
import _ from 'lodash';


class MemberStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    this._members = new Array();
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case 'LOGIN_USER':
        MemberActions.getMembers();
        this.emitChange();
        break;
      case 'LOGOUT_USER':
        this._members = new Array();
        this.emitChange();
        break;
      case 'MEMBER_ROLE_CHANGED':
        let id = action.id;
        let role = action.role;
        this._members.map((member) => {
          if(member._id == id)
            member.role = role;
        });
        this.emitChange();
        break;
      case 'MEMBER_DELETED':
        this._members = _.remove(this._members, (n) => {
          return n._id != action.id;
        });
        this.emitChange();
        break;
      case 'MEMBERS_RECEIVED':
        this._members = action.members;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  get members() {
    return this._members;
  }
}

export default new MemberStore();