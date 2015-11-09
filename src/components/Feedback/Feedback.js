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
          <a className="Feedback-link" href="/contact">Ask a question</a>
          <span className="Feedback-spacer">|</span>
          <a className="Feedback-link" href="/contact">Report an issue</a>
          <span className="Feedback-spacer">|</span>
          <a className="Feedback-link" href="/contact">Share with a friend</a>
        </div>
      </div>
    );
  }

}

export default Feedback;
