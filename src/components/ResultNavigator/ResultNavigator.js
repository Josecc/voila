import React, { Component } from 'react';
import styles from './ResultNavigator.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ResultNavigator extends Component {

	constructor(props){
		super(props);
		this.getPrevious = this.getPrevious.bind(this);
		this.getNext = this.getNext.bind(this);

		this.state = {
			page: this.props.page,
			prevIsAvailable: this.props.page > 1,
			nextIsAvailable: this.props.page < 20
		}
	}

	getPrevious() {
		if(this.state.prevIsAvailable){
			new Promise( (resolve, reject) => {
				this.props.setPage(this.state.page - 1);
				resolve("page changed")
			}).then( () => this.props.fetchPage(this.state.page) );
		}
	}

	getNext() {
		if(this.state.nextIsAvailable){
			new Promise( (resolve, reject) => {
				this.props.setPage(this.state.page + 1);
				resolve("page changed")
			}).then( () => this.props.fetchPage(this.state.page) );
		}
	}

	render() {
		if(!this.state.prevIsAvailable){
			return (
				<div className="ResultNavigator">
					<i className="fa fa-arrow-left arrowButton disabled" onClick={this.getPrevious}></i>
					{this.state.page}
					<i className="fa fa-arrow-right arrowButton" onClick={this.getNext}></i>
				</div>
			);
		} else if(!this.state.nextIsAvailable){
			return (
				<div className="ResultNavigator">
					<i className="fa fa-arrow-left arrowButton" onClick={this.getPrevious}></i>
					{this.state.page}
					<i className="fa fa-arrow-right arrowButton disabled" onClick={this.getNext}></i>
				</div>
			);
		} else {
			return (
				<div className="ResultNavigator">
					<i className="fa fa-arrow-left arrowButton" onClick={this.getPrevious}></i>
					{this.state.page}
					<i className="fa fa-arrow-right arrowButton" onClick={this.getNext}></i>
				</div>
			);
		}
	}

}

export default ResultNavigator;