/*! Author: Jose Canahui | MIT License | https://www.jose-canahui.com/ */

import React, { PropTypes, Component } from 'react'; // eslint-disable-line no-unused-vars
import LoginStore from '../stores/LoginStore';


function withAuthentication(ComposedComponent) {
  return class WithAuthentication extends Component {

    static willTransitionTo(transition) {
      if(!LoginStore.isLoggedIn()) {
        transition.redirect('/login', {}, {'nextPath': transition.path});
      }
    };

    constructor() {
      super();
      this.state = this._getLoginState();
    }

    _getLoginState() {
      return {
        userLoggedIn: LoginStore.isLoggedIn(),
        user: LoginStore.name,
        email: LoginStore.email,
        id: LoginStore.id,
        role: LoginStore.role,
        jwt: LoginStore.jwt
      }
    }

    componentDidMount() {
      this.changeListener = this._onChange.bind(this);
      LoginStore.addChangeListener(this.changeListener);
    }

    _onChange() {
      this.setState(this._getLoginState());
    }

    componentWillUnmount() {
      LoginStore.removeChangeListener(this.changeListener);
    }

    render() {
      return <ComposedComponent {...this.props} jwt={this.state.jwt} userLoggedIn={this.state.userLoggedIn} userName={this.state.user} userEmail={this.state.email} userId={this.state.id} userRole={this.state.role} />;
    }

  };
}

export default withAuthentication;
