/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './LoginPage.css';
import withAuthentication from '../../decorators/withAuthentication';
import withStyles from '../../decorators/withStyles';
import Auth from '../../utils/AuthService';
import ReactMixin from 'react-mixin';

@withStyles(styles)
@withAuthentication
class LoginPage extends React.Component {

  static contextTypes = {
    onSetTitle: React.PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      wrongCredentials: false
    };
    this.wrongCredentials = this.wrongCredentials.bind(this);
  }

  login(e) {
    e.preventDefault();
    Auth.login(this.state.email, this.state.password)
      .catch((err) => {
        console.log(err);
        this.wrongCredentials();
      });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
      wrongCredentials: false
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
      wrongCredentials: false
    });
  }

  wrongCredentials(){
    this.setState({
      password:"",
      wrongCredentials: true
    });
  }

  render() {
    const title = 'Log In';
    this.context.onSetTitle(title);
    let wrongCredentials = this.state.wrongCredentials ? <span className="login-wrong-credentials" >Incorrect email or password</span> : null ;

    if (!this.props.userLoggedIn){
      return (
        <div className="LoginPage">
          <div className="LoginPage-container">
            <h1>{title}</h1>
            {wrongCredentials}
            <form role="form">
              <div className="form-group">
                <input type="text" value={this.state.email} onChange={this.handleEmailChange.bind(this)} id="username" placeholder="Username" />
              </div>
              <div className="form-group">
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} id="password" ref="password" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-default" onClick={this.login.bind(this)}>Submit</button>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div className="LoginPage">
          <div className="LoginPage-container">
            <h1>{title}</h1>
            <h4>You're already logged in!</h4>
          </div>
        </div>
      );
    } 
  }

}

export default LoginPage;
