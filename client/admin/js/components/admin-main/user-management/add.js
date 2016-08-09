import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink, browserHistory } from 'react-router';
import Stores from '../../../stores/stores';
import Actions from '../../../actions/actions';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

export class AddUser extends React.Component{
  constructor(){
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      phone: '',
      privilege: ''
    };
    this.handleAddUser = this.handleAddUser.bind(this);
  }

  handleAddUser(){

    var user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      privilege: this.state.privilege
    };

    Actions.create('/users', user, function(data){
      browserHistory.goBack();
    })

  }


  render(){
    return(
      <div className="panel">
        <PanelHeader
              navigateBack = "true"
              name = "Add new a user"
        />
        <div className="panel-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <div className="col-md-12">
                  <label>User name</label> *
                  <input type="text" className="form-control "
                  onChange={(e)=>{this.setState({username: e.target.value})}}/>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <label>Password</label> *
                  <input type="password" className="form-control "
                  onChange={(e)=>{this.setState({password: e.target.value})}}/>
                </div>
              </div>


            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <div className="col-md-12">
                  <label>Email</label> *
                  <input type="text" className="form-control "
                  onChange={(e)=>{this.setState({email: e.target.value})}}/>
                </div>
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

            <div className="clearfix"></div>
          </div>
        </div>
        <div className="panel-body panel-feature text-center" >
          <button type="button" className="btn btn-form-left" onClick = {(e)=>{browserHistory.goBack()}}>
            Cancel
          </button>
          <button type="button" className="btn btn-form-right" onClick={this.handleAddUser} >Save</button>
        </div>
      </div>
    )
  }
}

