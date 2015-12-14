import React, { Component } from 'react';
import styles from './MemberManager.css';
import withStyles from '../../decorators/withStyles';
import withMembers from '../../decorators/withMembers';
import SideLabel from '../SideLabel';

@withStyles(styles)
@withMembers
class MemberManager extends Component {

  changeRole(e){
    e.preventDefault();

    let id = e.target.offsetParent.childNodes[0].childNodes[1].childNodes[0].innerText;
    let role = e.target.innerText.indexOf("admin") > -1 ? "admin" : "user" ;
    this.props.changeRole(id, role);
  }

  /**
    Only use on delete button!!!!
  **/
  deleteMember(e) {
    let id = e.target.childNodes[0].innerText;

    this.props.deleteMember(id);
  }

  render() {
    return (
      <div className="MemberManager">
        <SideLabel label="Admins">
        {this.props.members[0] ? this.props.members.map((member) =>{
            if(member.role == 'admin'){
              let antiRole ='demote (user)';
              let direction = 'fa fa-angle-double-down';
              return(
              <div className="MemberManager-member row--no-gutter" key={member._id}>
                <p className="MemberManager-member-name">{member.name}<i className="fa fa-times-circle MemberManager-member-close" onClick={this.deleteMember.bind(this)}><i style={{display: "none"}} >{member._id}</i></i></p>
                <div className="MemberManager-member-details col--1-of-4">
                  <p className="MemberManager-member-email">{member.email}</p>
                </div>
                <div className="MemberManager-member-details col--1-of-4">
                  <p className="MemberManager-member-role">{member.role}</p>
                </div>
                <span className="MemberManager-member-antiRole" onClick={this.changeRole.bind(this)}><i className={direction}></i> {antiRole}</span>
              </div>);
            } else {
              return '';
            }
          }) : <p>no members...</p>}
        </SideLabel>
        <br />
        <SideLabel label="Users">
        {this.props.members[0] ? this.props.members.map((member) =>{
            if(member.role == 'user'){
              let antiRole = 'promote (admin)';
              let direction = 'fa fa-angle-double-up';
              return(
              <div className="MemberManager-member row--no-gutter" key={member._id}>
                <p className="MemberManager-member-name">{member.name}<i className="fa fa-times-circle MemberManager-member-close" onClick={this.deleteMember.bind(this)}><i style={{display: "none"}} >{member._id}</i></i></p>
                <div className="MemberManager-member-details col--1-of-4">
                  <p className="MemberManager-member-email">{member.email}</p>
                </div>
                <div className="MemberManager-member-details col--1-of-4">
                  <p className="MemberManager-member-role">{member.role}</p>
                </div>
                <span className="MemberManager-member-antiRole" onClick={this.changeRole.bind(this)}><i className={direction}></i> {antiRole}</span>
              </div>);
            } else {
              return '';
            }
          }) : <p>no members...</p>}
        </SideLabel>
      </div>
    );
  }

}

export default MemberManager;