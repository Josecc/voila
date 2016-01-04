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
        <div className="rotate-button" onClick={this.props.rotateLeftIncrement}>
          <span className="rotate-icon"><i className="fa fa-undo"></i></span>
          <p className="rotate-text" >Incremental Rotate</p>
        </div>
        <div className="rotate-button" onClick={this.props.rotate}>
          <span className="rotate-icon"><i className="fa fa-level-down"></i></span>
          <p className="rotate-text" >90&ordm; Rotate</p>
        </div>
        <div className="rotate-button" onClick={this.props.rotateRightIncrement}>
          <span className="rotate-icon"><i className="fa fa-repeat"></i></span>
          <p className="rotate-text" >Incremental Rotate</p>
        </div>
        <div className="search-container" >
          <div className="search-button" onClick={this.props.crop}>
            <span className="search-icon"><i className="fa fa-search"></i></span>
            <p className="search-text">Search Women's Shoes</p>
          </div>
          <div className="search-button" onClick={() => this.props.crop(true)}>
            <span className="search-icon"><i className="fa fa-search"></i></span>
            <p className="search-text">Search Mens's Shoes</p>
          </div>
        </div>
      </div>
    );
  }

}

export default CropControls;