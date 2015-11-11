import React, { Component } from 'react';
import styles from './Product.css';
import withStyles from '../../decorators/withStyles';
import ProductImage from '../ProductImage';
import ProductDescription from '../ProductDescription';

@withStyles(styles)
class Product extends Component {

  constructor(props){
    super(props);
    this.fetchVoila = this.fetchVoila.bind(this);
  }

  fetchVoila(){
    this.props.fetchVoila(this.props.image);
  }

  render() {
    return (
      <div className="Product">
      	<a href={this.props.product_url} target="_blank">
	        <ProductImage imageUrl={this.props.image}/>
        </a>
	      <ProductDescription name={this.props.name} price={this.props.price} fetchVoila={this.fetchVoila}/>
      </div>
    );
  }

}

export default Product;