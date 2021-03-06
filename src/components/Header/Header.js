/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Navigation from '../Navigation';

@withStyles(styles)
class Header extends Component {
  componentDidMount(){
    window.mixpanel.track("Webapp Visited");
  }

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
          <a className="Header-brand" href="/" onClick={Link.handleClick}>
            <img className="Header-brandImg" src={require('./logo-small.png')} width="224" height="75" alt="React" />
          </a>
          <Navigation className="Header-nav" />
          <div className="Header-banner">
            <h1 className="Header-bannerTitle">Visual Search</h1>
            <p className="Header-bannerDesc">The best visual search app for shoe shopping</p>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
