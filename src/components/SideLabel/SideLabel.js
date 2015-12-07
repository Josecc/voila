import React, { Component } from 'react';
import styles from './SideLabel.css';
import withStyles from '../../decorators/withStyles';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';


@withStyles(styles)
class SideLabel extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="SideLabel">
        <div className="SideLabel-label"><span>{this.props.label}</span></div>
        <div className="SideLabel-container" ref="container">
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default SideLabel;