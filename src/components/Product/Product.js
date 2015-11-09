import React, { Component } from 'react';
import styles from './Product.css';
import withStyles from '../../decorators/withStyles';
import ProductImage from '../ProductImage';
import ProductDescription from '../ProductDescription';

@withStyles(styles)
class Product extends Component {

  render() {
    return (
      <div className="Product">
      	<a href={this.props.product_url} target="_blank">
	        <ProductImage imageUrl={this.props.image}/>
	        <ProductDescription name={this.props.name} price={this.props.price} />
        </a>
      </div>
    );
  }

}

export default Product;