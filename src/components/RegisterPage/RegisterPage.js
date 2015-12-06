/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import withAuthentication from '../../decorators/withAuthentication';
import styles from './RegisterPage.css';
import Auth from '../../utils/AuthService';

@withStyles(styles)
@withAuthentication
class RegisterPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      errors: ''
    }
  }

  signup(e) {
    e.preventDefault();
    Auth.signup(this.state.name, this.state.email, this.state.password)
      .catch((err) => {
        if (JSON.parse(err.response).errors)
          this.registerError(JSON.parse(err.response).errors);
      });
  }

  registerError(errors){
    console.log(errors);
    this.setState({
      errors: errors
    });
  }

  nameChange(event) {
    this.setState({
      name: event.target.value,
      errors: ''
    });
  }

  emailChange(event) {
    this.setState({
      email: event.target.value,
      errors: ''
    });
  }

  passwordChange(event) {
    this.setState({
      password: event.target.value,
      errors: ''
    });
  }

  render() {
    const title = 'New User Registration';
    let errs = new Array;
    this.context.onSetTitle(title);
    return (
      <div className="RegisterPage">
        <div className="RegisterPage-container">
          <h1>{title}</h1>
          {this.state.errors ? Object.keys(this.state.errors).forEach((key) => {
            errs.push(this.state.errors[key].message);
          }) : null}
          {errs.map((err)=> {
            return ( <p className="signupt-error" >{err}</p> );
          })}
          <form role="form">
            <div className="form-group">
              <input type="text" value={this.state.name} onChange={this.nameChange.bind(this)} id="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <input type="email" value={this.state.email} onChange={this.emailChange.bind(this)} id="email" ref="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" value={this.state.password} onChange={this.passwordChange.bind(this)} id="password" ref="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-default" onClick={this.signup.bind(this)}>Submit</button>
          </form>
        </div>
      </div>
    );
  }

}

export default RegisterPage;
