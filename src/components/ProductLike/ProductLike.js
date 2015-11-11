import React, { Component } from 'react';
import styles from './ProductLike.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ProductLike extends Component {

  render() {
    return (
      <div className="ProductLike">
      	<div className="ProductLike-voila" onClick={this.props.fetchVoila}>
      		Voilà!
      	</div>
      	<div className="ProductLike-heart">
      		<i className="fa fa-heart-o"> </i>
      	</div>
      </div>
    );
  }

}

export default ProductLike;