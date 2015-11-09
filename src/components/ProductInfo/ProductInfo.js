import React, { Component } from 'react';
import styles from './ProductInfo.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ProductInfo extends Component {

  constructor(props) {
    super(props)

    //getting price
    let price = props.price;
    if (!(price.indexOf("$") > -1)){
      price = "$" + price;
    }
    if (!(price.indexOf(".") > -1)){
      price = price + ".00";
    }

    //getting name
    let name = props.name;

    if (name.length > 20){
      name = name.substring(0, 19) + "...";
    }

    this.state = {
      price: price,
      name: name
    };
  }

  render() {
    return (
      <div className="ProductInfo">
      	<div className="ProductInfo-name">
      		{this.state.name}
      	</div>
      	<div className="ProductInfo-price">
      		{this.state.price}
      	</div>
      </div>
    );
  }

}

export default ProductInfo;