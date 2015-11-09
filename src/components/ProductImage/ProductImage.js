import React, { Component } from 'react';
import styles from './ProductImage.css';
import withStyles from '../../decorators/withStyles';
import Tutorial from '../Tutorial';

@withStyles(styles)
class ProductImage extends Component {

  render() {
  	var imageUrl = this.props.imageUrl;
  	
    return (
      <div className="ProductImage">
        <img src={imageUrl} />
      </div>
    );
  }

}

export default ProductImage;