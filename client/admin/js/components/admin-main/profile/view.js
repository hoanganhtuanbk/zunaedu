import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'
export default class ViewProfile extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className="panel">
       <PanelHeader
              name = "Profile"
              linkEdit = {this.props.editLink}
        />
      
        <div className="panel-body">
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-profile">
                  <tbody>
                  <tr>
                    <th >User name:</th>
                    <td>{this.props.currentUser.username}</td>
                  </tr>
                  <tr>
                    <th >Full name:</th>
                    <td >
                      <span className="data-profile">{this.props.currentUser.firstName} {this.props.currentUser.lastName} </span>
                    </td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td >
                      <span className="data-profile">{this.props.currentUser.email} </span>
                    </td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td >
                        {
                          this.props.currentUser.phone ? <span className="data-profile">{this.props.currentUser.phone}</span> : <span className="data-profile">N.A</span>
                        }
                    </td>
                  </tr>
                  </tbody></table>
              </div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}


