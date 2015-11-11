import React, { Component } from 'react';
import styles from './ProductDescription.css';
import withStyles from '../../decorators/withStyles';
import Tutorial from '../Tutorial';
import ProductInfo from '../ProductInfo';
import ProductLike from '../ProductLike';

@withStyles(styles)
class ProductDescription extends Component {

  render() {
    return (
      <div className="ProductDescription">
        <ProductInfo name={this.props.name} price={this.props.price} />
        <ProductLike fetchVoila={this.props.fetchVoila} />
      </div>
    );
  }

}

export default ProductDescription;