/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Footer.css';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withViewport
@withStyles(styles)
class Footer extends Component {

  // static propTypes = {
  //   viewport: PropTypes.shape({
  //     width: PropTypes.number.isRequired,
  //     height: PropTypes.number.isRequired,
  //   }).isRequired,
  // };

  render() {
    // This is just an example how one can render CSS
    // const { width, height } = this.props.viewport;
    // this.renderCss(`.Footer-viewport:after {content:' ${width}x${height}';}`);

    return (
      <div className="Footer">
        <div className="Footer-container">
          <span className="Footer-text">© Voila</span>
          <span className="Footer-spacer">·</span>
          <a className="Footer-link" href="/" onClick={Link.handleClick}>Home</a>
          <span className="Footer-spacer">·</span>
          <a className="Footer-link" href="/privacy" onClick={Link.handleClick}>Privacy</a>
          <span className="Footer-spacer">·</span>
          <a className="Footer-link" href="/#" onClick={Link.handleClick}>Share</a>
          <span className="Footer-spacer"> | </span>
          <span className="Footer-text Footer-text--muted"><i className="fa fa-globe"></i> v 1.0</span>
        </div>
      </div>
    );
  }

}

export default Footer;
