/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './SearchPage.css';
import withStyles from '../../decorators/withStyles';
import VisualSearch from '../VisualSearch';

@withStyles(styles)
class SearchPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Contact Us';
    this.context.onSetTitle(title);
    return (
      <div className="SearchPage">
        <div className="SearchPage-container">
          <VisualSearch search="true" />
        </div>
      </div>
    );
  }

}

export default SearchPage;
