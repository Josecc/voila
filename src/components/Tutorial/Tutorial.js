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
	      		<iframe width="100%" height="400px" className="edgeFrame" src="/edge/crop/Crop.html" />
	      	</div>
    	);
	}
	return (
		<div className="Tutorial">
	      	<iframe width="100%" height="400px" className="edgeFrame" src="/edge/crop/Crop.html" />
	     </div>
	);
  }

}

export default Tutorial;