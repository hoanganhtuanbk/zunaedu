import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink, browserHistory } from 'react-router';
import Stores from '../../../stores/stores';
import Actions from '../../../actions/actions';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

export class EditUser extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      username: '',
      email: '',
      id: '',
      phone: '',
      password: '',
      privilege: 2
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentWillMount(){
    Stores.findById('/users', this.props.params.id, function(data, status){
      this.setState({
        username: data.username,
        email: data.email,
        phone: data.phone,
        privilege: data.privilege,
        id: data.id
      })
    }.bind(this))
  }

  handleUpdate(){
    var user = {
      username: this.state.username,
      emal: this.state.email,
      phone: this.state.phone,
      privilege: this.state.privilege
    };
    if(this.state.password.length){
      user.password = this.state.password;
    }
    Actions.update('/users', this.state.id, user, function(){
      swal({
        title: "Successful!",
        text: "Your user account has been updated.",
        type: "success"
      }, function() {
        browserHistory.goBack()
      });
    })
  }

  render(){
    return(
      <div className="panel">
        <PanelHeader
            navigateBack = "true"
            name = "Edit a user"
        />
        <div className="panel-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <div className="col-md-12">
                  <label>User name</label> *
                  <input
                    type="text"
                    className="form-control "
                    value={this.state.username|| ''}
                    onChange={(e)=>{this.setState({username: e.target.value})}} />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <label>Password</label> *
                  <input
                    type="text"
                    className="form-control "
                    value={this.state.password|| ''}
                    onChange={(e)=>{this.setState({password: e.target.value})}} />
                </div>
              </div>


            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <div className="col-md-12">
                  <label>Email</label> *
                  <input
                    type="text"
                    className="form-control "
                    value={this.state.email}
                    onChange={(e)=>{this.setState({email: e.target.value|| ''})}} />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <label>Type</label>
                  <select className="form-control" value={this.state.privilege}
                          onChange={(e)=>{this.setState({privilege: e.target.value})}}>
                    <option value="1">Master</option>
                    <option value="2">Admin</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        <div className="panel-body panel-feature text-center" >
          <button type="button" className="btn btn-form-left" onClick = {(e)=>{browserHistory.goBack()}}>
            Cancel
          </button>
          <button type="button" className="btn btn-form-right" onClick={this.handleUpdate} >Save</button>
        </div>
      </div>
    )
  }
}

