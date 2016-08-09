import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink,browserHistory } from 'react-router';
import Actions from '../../../actions/actions.js';
import swal from 'sweetalert'
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

export default class EditProfile extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
    console.log(props.currentUser)
    this.state = {
      id: this.props.currentUser.id,
      username: this.props.currentUser.username,
      firstName: this.props.currentUser.firstName,
      lastName: this.props.currentUser.lastName,
      email: this.props.currentUser.email,
      phone: this.props.currentUser.phone,
      password: ''
    };

    this.handleUpdate = this.handleUpdate.bind(this);
  }

    handleUpdate(){
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone
    };
    if(this.state.password.length){
      user.password = this.state.password;
    }
    Actions.update('/users', this.state.id, user, function(){
      swal({
          title: "Successful!",
          text: "Your user account has been updated.",
          type: "success"},
        function(){
          window.location.href = '/admin/profile';
        });
    })
  }
  render(){
    return(
      <div className="panel">
      <PanelHeader
              navigateBack = "true"
              name = "Profile"
        />

        <div className="panel-body">
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-profile">
                  <tbody>
                  <tr>
                    <th >User name:</th>
                    <td>{this.state.username}</td>
                  </tr>
                  <tr>
                    <th >First name:</th>
                    <td><input type="text"
                               className="form-control"
                               value={this.state.firstName}
                               onChange={(e)=>{this.setState({firstName: e.target.value})}}
                      /></td>
                  </tr>
                  <tr>
                    <th >Last name:</th>
                    <td><input type="text"
                               className="form-control"
                               value={this.state.lastName}
                               onChange={(e)=>{this.setState({lastName: e.target.value})}}
                      /></td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td><input type="text"
                               className="form-control"
                               value={this.state.email}
                               onChange={(e)=>{this.setState({email: e.target.value})}}

                      /></td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td><input type="text"
                               className="form-control"
                               value={this.state.phone}
                               onChange={(e)=>{this.setState({phone: e.target.value})}}
                      /></td>

                  </tr>
                  <tr>
                    <th>New password</th>
                    <td><input type="text"
                               className="form-control"
                               onChange={(e)=>{this.setState({password: e.target.value})}}

                      /></td>
                  </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
        <div className="panel-footer text-center" >
          <button type="button"  className="btn btn-form-left" onClick = {(e)=>{browserHistory.goBack()}}>
            Cancel
          </button>
          <button type="button" className="btn btn-form-right" onClick={this.handleUpdate} >Save</button>
        </div>
      </div>
    )
  }
}


