/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import withAuthentication from '../../decorators/withAuthentication';
import styles from './Navigation.css';
import withStyles from '../../decorators/withStyles';
import LoginActions from '../../actions/LoginActions';
import Link from '../Link';

@withStyles(styles)
@withAuthentication
class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    var loginOut = this.props.userLoggedIn ? 
      <span>
        <a className="Navigation-link" href="/" onClick={LoginActions.logoutUser}>Log out</a>
        <span className="Navigation-spacer">or</span>
        <a className="Navigation-link Navigation-link" href="/settings" onClick={Link.handleClick}>Change settings</a>
      </span>
       : 
      <span>
        <a className="Navigation-link" href="/login" onClick={Link.handleClick}>Log in</a> 
        <span className="Navigation-spacer">or</span>
        <a className="Navigation-link Navigation-link--highlight" href="/register" onClick={Link.handleClick}>Sign up</a>
      </span>;
    return (
      <div className={classNames(this.props.className, 'Navigation')} role="navigation">
        <a className="Navigation-link" href="/about" onClick={Link.handleClick}>About</a>
        <a className="Navigation-link" href="/contact" onClick={Link.handleClick}>Contact</a>
        <span className="Navigation-spacer"> | </span>
        {loginOut}
        <span className="Navigation-spacer"> | </span>
        <a className="Navigation-link Navigation-link muted" href="#" ><i className="fa fa-share"></i></a>
      </div>
    );
  }

}

export default Navigation;
