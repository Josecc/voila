import React, { Component } from 'react';
import styles from './SearchResults.css';
import withStyles from '../../decorators/withStyles';
import Product from '../Product';
import ResultNavigator from '../ResultNavigator';

@withStyles(styles)
class SearchResults extends Component {

	constructor(props){
		super(props);
		this.state = {
			products: this.props.products
		};
	}

	render() {
		return (
			<div>
				<ResultNavigator fetchPage={this.props.fetchPage} page={this.props.page} setPage={this.props.setPage}/>
				<div className="SearchResults">
					{this.state.products.map((product) => {
        					let product_url = product.value_map.product_url;
        					if(product_url.indexOf("http://") > -1){
								let name = product.value_map.product_name;
								let price = product.value_map.price;
								let image = product.value_map.sm_im_url;
								return (
									<Product key={product_url + Math.random()} name={name} price={price} image={image} product_url={product_url} fetchVoila={this.props.fetchVoila}></Product>
								);
							} else { return null }
					})}
				</div>
				<ResultNavigator fetchPage={this.props.fetchPage} page={this.props.page} setPage={this.props.setPage}/>
				<br />
			</div>
		);
	}

}

export default SearchResults;