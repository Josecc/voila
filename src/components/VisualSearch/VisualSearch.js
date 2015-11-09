import React, { Component } from 'react';
import styles from './VisualSearch.css';
import withStyles from '../../decorators/withStyles';
import Tutorial from '../Tutorial';
import SearchBox from '../SearchBox';
import SearchResults from '../SearchResults';
import jQuery from 'jquery';

/*
	Search Box <<
	IF: Results
		Results <<
	ELSE:
		Tutorial <<

        <Tutorial /> << This will hopefully be made with adobe edje animations
        <Product /> << This will be inside the Results Page
*/

@withStyles(styles)
class VisualSearch extends Component {

	constructor() {
		super();
		this.fetchProducts = this.fetchProducts.bind(this);
		this.setImageBlob = this.setImageBlob.bind(this);
		this.setPage = this.setPage.bind(this);
		this.setCropped = this.setCropped.bind(this);
		this.state = {
			resultsReceived: false,
			searching: false,
			productList: "",
			imageBlob: "",
			page: 1,
			uploadTutorial: true
		};
	}

	setImageBlob(image) {
		this.setState({
			imageBlob: image
		});
	}

	setPage(page) {
		this.setState({
			page: page
		});
	}

	setCropped() {
		this.setState({
			uploadTutorial: false
		});
	}

	/*
	* Connects to Visenze and fetches the products that compare to the image that was sent. 
	* PARAMS: 
		imageURI - Image to upload to ViSenze for comparison.
		start - Index of results to start searching from.
		limit - the limit to results you want.
	* MANIPULATES STATES:
		resultsReceived - Default is false, after results are received or changed it becomes true.
		productList - The list of products that are returned by the ViSenze API.
	*/
	fetchProducts() {
		if(this.state.imageBlob == ""){
			console.err("Image Blob must be set.");
		}
		let formData = new FormData();
		formData.append('image', this.state.imageBlob, 'upload.jpg');
		formData.append('page', this.state.page);
		formData.append('fl', 'product_name');
		formData.append('fl', 'price');
		formData.append('fl', 'sm_im_url');
		formData.append('fl', 'product_url');
		jQuery.ajax({
			url: "http://visearch.visenze.com/uploadsearch",
			type: 'POST',
			beforeSend: function(req) {
				req.setRequestHeader('Authorization', 'Basic ' + btoa('c020d19b9872438002393de4d68b141b:4b7182bf60c3f6870361db3add002523'));
			},
			data: formData,
			processData: false,
			contentType: false ,
			success: function(data) {
				if (data.result.length > 0){
					this.setState({
						resultsReceived: true,
						searching: false,
						productList: data.result
					});
				} else {
					this.setState({
						searching: false
					});
				}
			}.bind(this),
			error: function(xhr, status, err) {
				console.err(this.props.url, status, err.toString());
			}.bind(this)
		});
		this.setState({
			searching: true,
			resultsReceived: false
		});
	}

	render() {
		if(this.state.resultsReceived){
			return (
				<div className="VisualSearch container">
					<SearchResults products={this.state.productList} fetchPage={this.fetchProducts} setPage={this.setPage} page={this.state.page}/>
				</div>
			);
		} else if(this.state.searching) {
			return (
				<div className="loadingGif container">
					<img className="loadingImage" src="http://martabech.com/images/loading.gif" ></img>
					<p>Searching...</p>
				</div>
			);
		} 
		return (
			<div className="VisualSearch container">
				<Tutorial uploadTutorial={this.state.uploadTutorial}/>
				<SearchBox setCropped={this.setCropped} setImageBlob={this.setImageBlob} fetchProducts={this.fetchProducts}/>
			</div>
		);
	}

}

export default VisualSearch;