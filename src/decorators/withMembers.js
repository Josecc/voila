/**
 * Author: Jose Canahui
 * Date: December 8, 2015
 */

import React, { PropTypes, Component } from 'react'; // eslint-disable-line no-unused-vars
import MemberStore from '../stores/MemberStore';
import MemberActions from '../actions/MemberActions';

function withKeys(ComposedComponent) {
  return class withKeys extends Component {

    constructor(){
      super();
      this.state = this._getMemberState();
    }

    _getMemberState() {
      return {
        members: MemberStore.members
      }
    }

    _onChange() {
      this.setState(this._getMemberState());
    }

    componentDidMount() {
      this.changeListener = this._onChange.bind(this);
      MemberStore.addChangeListener(this.changeListener);
    }

    componentWillUnmount() {
      MemberStore.removeChangeListener(this.changeListener);
    }

    render() {
      return <ComposedComponent {...this.props} members={this.state.members} getMembers={MemberActions.getMembers} 
        changeRole={MemberActions.changeRole} deleteMember={MemberActions.deleteMember} />;
    }

  };
}

export default withKeys;
