import request from 'reqwest';
import AppDispatcher from '../core/Dispatcher';
import LoginStore from '../stores/LoginStore';
import MemberStore from '../stores/KeyStore';
import _ from 'lodash';

export default {
  getMembers: () => {
    request({
      url: '/api/users/',
      method: 'GET',
      crossOrigin: true,
      headers: {
        'Authorization': 'Bearer ' + LoginStore.jwt
      }
    }).then((res) => {
      AppDispatcher.dispatch({
        actionType: 'MEMBERS_RECEIVED',
        members: res
      });
    });
  },
  changeRole: (id, role) => {
    if(role == 'admin' || role == 'user'){
      request({
        url:'/api/users/' + id,
        method: 'PATCH',
        crossOrigin: true,
        headers: {
          'Authorization': 'Bearer '+ LoginStore.jwt
        },
        data: {
          role: role
        }
      }).then((res) => {
        AppDispatcher.dispatch({
          actionType: 'MEMBER_ROLE_CHANGED',
          id: res._id,
          role: res.role
        });
      });
    }
  },
  deleteMember: (id) => {
    request({
      url: '/api/users/' + id,
      method: 'DELETE',
      crossOrigin: true,
      headers: {
        'Authorization': 'Bearer ' + LoginStore.jwt
      }
    }).then((res) => {
      AppDispatcher.dispatch({
        actionType: 'MEMBER_DELETED',
        id: res
      });
    });
  }
}