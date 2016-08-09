import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router'

export class DropdownProfile extends React.Component{
  render(){
    return(
        <ul className="dropdown-menu dropdown-profile" >
          <li className="user-header">
            <img src={this.props.Avatar} className="img-circle" alt="User Image" />
            <p>
              {this.props.name}
            </p>
          </li>
          <li className="user-footer">
            <div className="pull-left">
              <Link to={this.props.link} className="btn btn-default btn-flat">Profile</Link>
            </div>
            <div className="pull-right">
              <div onClick = {this.props.logOut}  className="btn btn-default btn-flat">Sign out</div>
            </div>
          </li>
        </ul>
    )
  }
}

