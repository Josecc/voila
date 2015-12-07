import React, { Component } from 'react';
import styles from './KeyManager.css';
import withStyles from '../../decorators/withStyles';
import withKeys from '../../decorators/withKeys';
import KeyActions from '../../actions/KeysActions';
import SideLabel from '../SideLabel';

@withStyles(styles)
@withKeys
class KeyManager extends Component {
  constructor(props){
    super(props);
    this.state = {
      wrongCredentials: '',
      application: '',
      access: '',
      secret: ''
    }
  }

  handleApplicationChange(event){
    this.setState({
      application: event.target.value,
      wrongCredentials: false
    });
  }

  handleAccessChange(event){
    this.setState({
      access: event.target.value,
      wrongCredentials: false
    });
  }

  handleSecretChange(event){
    this.setState({
      secret: event.target.value,
      wrongCredentials: false
    });
  }

  addKey(e){
    e.preventDefault();

    KeyActions.createKey(this.state.application, this.state.access, this.state.secret);
  }

  /**
    Only use on delete button!!!!
  **/
  deleteKey(e) {
    let application = e.target.offsetParent.childNodes[0].children[0].innerText;

    KeyActions.deleteKey(application);
    this.setState({
      application: '',
      access: '',
      secret: ''
    });
  }

  render() {
    let error = this.state.wrongCredentials ? <p>{this.state.wrongCredentials}</p> : '';
    return (
      <div className="KeyManager">
        <SideLabel label="Add">
          {error}
          <form role="form">
            <div className="form-group">
              <input type="text" value={this.state.application} onChange={this.handleApplicationChange.bind(this)} id="application" placeholder="Application" />
            </div>
            <div className="form-group">
              <input type="text" value={this.state.access} onChange={this.handleAccessChange.bind(this)} id="access" placeholder="Access Key" />
            </div>
            <div className="form-group">
              <input type="text" value={this.state.secret} onChange={this.handleSecretChange.bind(this)} id="secret" placeholder="Secret Key" />
            </div>
            <button type="submit" className="btn btn-default" onClick={this.addKey.bind(this)}>Submit</button>
          </form>
        </SideLabel>
        <br/>
        <SideLabel label="All">
        {this.props.keys[0] ? this.props.keys.map((key) =>{
            return(
            <div className="KeyManager-key" key={key.secret}>
              <p className="KeyManager-key-application">{key.application}<i className="fa fa-times-circle KeyManager-key-close" onClick={this.deleteKey.bind(this)}></i></p>
              <div className="KeyManager-key-details">
                <p className="KeyManager-key-access">{key.access}</p>
              </div>
              <div className="KeyManager-key-details">
                <p className="KeyManager-key-secret">{key.secret}</p>
              </div>
            </div>);
          }) : <p>no keys...</p>}
        </SideLabel>
      </div>
    );
  }
  /*
  <div>
            <p>{this.props.keys[key].application}</p>
            <p>{this.props.keys[key].access}</p>
            <p>{this.props.keys[key].secret}</p>
          </div>
  */

}

export default KeyManager;