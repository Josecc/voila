import React, { Component } from 'react';
import styles from './Tutorial.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Tutorial extends Component {

  constructor(props){
  	super(props);
  }

  render() {
  	if(this.props.uploadTutorial){
	    return (
	    	<div className="Tutorial">
	      		<iframe className="edgeFrame" src="/edge/upload/Tutorial.html" />
	      	</div>
    	);
	}
	return (
		<div className="Tutorial">
	      	<iframe width="100%" className="edgeFrame" src="/edge/crop/Crop.html" />
	     </div>
	);
  }

}

export default Tutorial;