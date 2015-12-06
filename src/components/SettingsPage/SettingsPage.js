import React, { PropTypes, Component } from 'react';
import styles from './SettingsPage.css';
import withStyles from '../../decorators/withStyles';
import withAuthentication from '../../decorators/withAuthentication';
import request from 'reqwest';

@withStyles(styles)
@withAuthentication
class SettingsPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: this.props.userEmail,
      password: '',
      newPassword: '',
      newPasswordRepeat: '',
      wrongCredentials: ''
    };
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
      wrongCredentials: ''
    });
  }

  handleNewPasswordChange(event) {
    this.setState({
      newPassword: event.target.value,
      wrongCredentials: ''
    });
  }

  handleNewPasswordRepeatChange(event) {
    this.setState({
      newPasswordRepeat: event.target.value,
      wrongCredentials: ''
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
      wrongCredentials: ''
    });
  }

  changePassword(e) {
    e.preventDefault();

    if (this.state.newPassword == this.state.newPasswordRepeat && this.state.password != ''){
      request({
        url: '/api/users/' + this.props.id + '/password/',
        method: 'PUT',
        crossOrigin: true,
        headers: {
          'Authorization': 'Bearer ' + this.props.jwt
        },
        type: 'json',
        data: {
          "oldPassword": this.state.password,
          "newPassword": this.state.newPassword
        }
      }).then((res, err) => {
        if(res == 200){
          this.setState({
            wrongCredentials: 'Password changed!'
          });
        } else {
          this.setState({
            wrongCredentials: 'Wrong password'
          });
        }
      });
    } else {
      this.setState({
        wrongCredentials: 'Passwords must match'
      });
    }
  }

  render() {
    const title = 'Contact Us';
    this.context.onSetTitle(title);
    let error = this.state.wrongCredentials ? <p>{this.state.wrongCredentials}</p> : '';
    return (
      <div className="SettingsPage">
        <div className="SettingsPage-container">
          <h1>{title}</h1>
          <p>Change Password</p>
          {error}
          <form role="form">
            <div className="form-group">
              <input type="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} id="password" placeholder="Old password" />
            </div>
            <div className="form-group">
              <input type="password" value={this.state.newPassword} onChange={this.handleNewPasswordChange.bind(this)} id="newPassword" placeholder="New password" />
            </div>
            <div className="form-group">
              <input type="password" value={this.state.newPasswordRepeat} onChange={this.handleNewPasswordRepeatChange.bind(this)} id="newPasswordRepeat" placeholder="Retype new password" />
            </div>
            <button type="submit" className="btn btn-default" onClick={this.changePassword.bind(this)}>Submit</button>
          </form>
        </div>
      </div>
    );
  }

}

/*
<p>Change Email</p>
<form role="form">
  <div className="form-group">
    <input type="email" value={this.state.email} onChange={this.handleEmailChange.bind(this)} id="email" placeholder="New email" />
  </div>
  <button type="submit" className="btn btn-default" onClick={this.changePassword.bind(this)}>Change Email</button>
</form>
*/

export default SettingsPage;
