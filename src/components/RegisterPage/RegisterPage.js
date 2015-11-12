/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './RegisterPage.css';

@withStyles(styles)
class RegisterPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'New User Registration';
    this.context.onSetTitle(title);
    return (
      <div className="RegisterPage">
        <div className="RegisterPage-container">
          <h1>{title}</h1>
          <p>Sign up here, new layout will be coming soon:</p>
        </div>
        <div className="registerContainer">
          <iframe className="registerFrame" src="http://52.25.189.67/subscribe/"></iframe>
        </div>
      </div>
    );
  }

}

export default RegisterPage;
