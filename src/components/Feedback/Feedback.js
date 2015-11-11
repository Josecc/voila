/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Feedback.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Feedback extends Component {

  render() {
    return (
      <div className="Feedback">
        <div className="Feedback-container">
          <a className="Feedback-link" target="__blank" href="https://www.facebook.com/TheVoilaApp"><i className="fa fa-facebook-square"></i></a>
          <a className="Feedback-link" target="__blank" href="https://twitter.com/Voila_App"><i className="fa fa-twitter-square"></i></a>
          <a className="Feedback-link" target="__blank" href="https://instagram.com/voila.app/"><i className="fa fa-instagram"></i></a>
        </div>
      </div>
    );
  }

}

export default Feedback;
