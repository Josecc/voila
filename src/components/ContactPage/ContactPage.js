/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './ContactPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ContactPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Contact Us';
    this.context.onSetTitle(title);
    return (
      <div className="ContactPage">
        <div className="ContactPage-container">
          <h1>{title}</h1>
          <p>We appreciate all types fo feedback! You can express any <i>questions</i>, <i>suggestions</i>, or <i>requests</i> through social media, or email us at <a href="mailto:contact@voila.love">contact@voila.love</a>.</p>
        </div>
      </div>
    );
  }

}

export default ContactPage;
