import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink, browserHistory } from 'react-router';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'
import Stores from '../../../stores/stores.js'
import Actions from '../../../actions/actions.js'
import swal from 'sweetalert'

export class EditConsumer extends React.Component{
  constructor() {
    super();
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      email: ''
    };
    this.save = this.save.bind(this);
  }
  componentWillMount(){
    this.getConsumer(this);
  }

  getConsumer(t) {
    Stores.findById('/users', this.props.params.id, function(data, status) {
      t.setState(data)
    })
  }
  save(e) {
    e.preventDefault();
    Actions.update('/users', this.props.params.id, this.state, function(data, status) {
      swal({
          title: "Successful!",
          type: "success"
        },
        function(){
          browserHistory.goBack()
        });
    })
  }
  render(){
    return(
      <div className="panel">
        <PanelHeader
          navigateBack = "true"
          name = "Edit a consumer"
          />
        <div className="panel-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <div className="col-md-12">
                  <label>Username</label> *
                  <input type="text" value = {this.state.username} className="form-control "
                    onChange = {(e) => {this.setState({username: e.target.value})}}/>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <label>Password</label>
                  <input type="text" value = {this.state.password} className="form-control "
                    onChange = {(e) => {this.setState({username: e.target.value})}}
                    />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <div className="col-md-12">
                  <label>Email</label>
                  <input type="text" className="form-control"
                    value = {this.state.email} onChange={(e)=>{this.setState({email: e.target.email})}}
                    />
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        <div className="panel-body panel-feature text-center" >
          <button type="button" className="btn btn-default btn-form-left" onClick = {(e)=>{browserHistory.goBack()}}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary btn-success btn-form-right" onClick = {this.save} >Save</button>
        </div>
      </div>
    )
  }
}

