/**
 * Author: Jose Canahui
 * Date: December 8, 2015
 */

import React, { PropTypes, Component } from 'react'; // eslint-disable-line no-unused-vars
import ImageSetStore from '../stores/ImageSetStore';
import SearchActions from '../actions/SearchActions';

function withSearch(ComposedComponent) {
  return class withSearch extends Component {

    constructor(){
      super();
      this.state = this._getImageSetsChange();
    }

    _getImageSetsChange() {
      return {
        imageSets: ImageSetStore.imageSets
      }
    }

    _onChange() {
      this.setState(this._getImageSetsChange());
    }

    componentDidMount() {
      this.changeListener = this._onChange.bind(this);
      ImageSetStore.addChangeListener(this.changeListener);
    }

    componentWillUnmount() {
      ImageSetStore.removeChangeListener(this.changeListener);
    }

    render() {
      return <ComposedComponent {...this.props} imageSets={this.state.imageSets} searchUrl={SearchActions.searchUrl} 
        searchImage={SearchActions.searchImage} searchFeaturedImages={SearchActions.getFeaturedImages} />;
    }

  };
}

export default withSearch;
