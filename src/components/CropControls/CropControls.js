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
        <div className="rotate-button" >
          <span className="rotate-icon" onClick={this.props.rotateLeftIncrement}><i className="fa fa-undo"></i></span>
          <p className="rotate-text" >Incremental Rotate</p>
        </div>
        <div className="rotate-button" >
          <span className="rotate-icon" onClick={this.props.rotate}><i className="fa fa-level-down"></i></span>
          <p className="rotate-text" >90&ordm; Rotate</p>
        </div>
        <div className="rotate-button" >
          <span className="rotate-icon" onClick={this.props.rotateRightIncrement}><i className="fa fa-repeat"></i></span>
          <p className="rotate-text" >Incremental Rotate</p>
        </div>
        <div className="search-container" >
          <div className="search-button" >
            <span className="search-icon" onClick={this.props.crop}><i className="fa fa-search"></i></span>
            <p className="search-text">Search</p>
          </div>
        </div>
      </div>
    );
  }

}

export default CropControls;