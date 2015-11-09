import React, { Component } from 'react';
import styles from './CropControls.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class CropControls extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="crop-controls">
        <div className="search-button" >
          <span className="search-icon" onClick={this.props.crop}><i className="fa fa-search"></i></span>
          <p className="search-text">Search</p>
        </div>
        <div className="rotate-button" >
          <span className="rotate-icon" onClick={this.props.rotate}><i className="fa fa-repeat"></i></span>
          <p className="rotate-text" >Rotate</p>
        </div>
      </div>
    );
  }

}

export default CropControls;