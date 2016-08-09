/**
 * Created by duyhung on 05/07/2016.
 */
import React from 'react';
import {render} from 'react-dom';
import EditProfile from './edit.js'
import ViewProfile from './view.js'
import Stores from '../../../stores/stores.js';
import Actions from '../../../actions/actions.js';

export class AdminProfile extends React.Component{
  constructor() {
    super();
    this.state = {
      currentUser: {}
    };
    this.getCurrent(this);

  }
  getCurrent(t) {
    Stores.getCurrentUser(function(user, status, err) {
      if (err) {
        console.log(err);
        window.location.href='/';
      }
      else {
        t.setState({currentUser: user});
      }
    })
  }

  render() {
    return(
      <div >
        <Profile />
        <div className="content">
          {this.props.children  && React.cloneElement(this.props.children, {
            currentUser: this.state.currentUser
          })}
        </div>
      </div>
    )
  }
}

export class EditAdminProfile extends React.Component{
  constructor() {
    super();
  }

  render() {
    return (
      <EditProfile currentUser={this.props.currentUser}/>
    )
  }
}

export class ViewAdminProfile extends React.Component{
  constructor() {
    super()
  }
  render() {
    return (
      <ViewProfile currentUser={this.props.currentUser} editLink='/admin/profile/edit' />
    )
  }
}

export default class Profile extends React.Component{
  render(){
    return(
      <div className="content-header">
        <h3 >
          Profile
          <small>  Manager your profile here!</small>
        </h3>
      </div>
    )
  }
}

