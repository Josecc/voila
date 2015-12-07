/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react'; // eslint-disable-line no-unused-vars
import KeyStore from '../stores/KeyStore';

function withKeys(ComposedComponent) {
  return class withKeys extends Component {

    constructor(){
      super();
      this.state = this._getKeyState();
    }

    _getKeyState() {
      return {
        keys: KeyStore.keys
      }
    }

    _onChange() {
      this.setState(this._getKeyState());
    }

    componentDidMount() {
      this.changeListener = this._onChange.bind(this);
      KeyStore.addChangeListener(this.changeListener);
    }

    componentWillUnmount() {
      KeyStore.removeChangeListener(this.changeListener);
    }

    render() {
      return <ComposedComponent {...this.props} keys={this.state.keys} />;
    }

  };
}

export default withKeys;
