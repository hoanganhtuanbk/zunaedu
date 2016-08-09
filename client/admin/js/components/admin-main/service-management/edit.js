import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink, browserHistory } from 'react-router';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'
import Stores from '../../../stores/stores';
import Actions from '../../../actions/actions.js'

export class EditService extends React.Component{
  constructor() {
    super();
    this.state = {};
    this.save = this.save.bind(this);
  }
  componentWillMount(){
    this.findById(this);
  }
  findById(t) {
    var id = window.location.pathname.split('/')[3];
    Stores.findById('/services', this.props.params.id, function(service, status) {
      t.setState(service);
      console.log(t.state);
    })
  }
  save(e) {
    e.preventDefault();
    Actions.update('/services', this.state.id, this.state, function(data, status) {
      browserHistory.goBack();
    })
  }
  render(){
    return(
      <div className="panel">
        <PanelHeader
          navigateBack = "true"
          name = "Edit a service"
          />
        <div className="panel-body">
          <div className="row">
            <div className="col-md-6">
              <label>Name</label> *
              <input type="text" value={this.state.name} className="form-control " onChange={(e)=>{this.setState({name: e.target.value })}}/>
            </div>
            <div className="col-md-6">
              <label>Status</label> *
              <select type="checkbox" className="form-control" value={this.state.active} onChange={(e)=>{this.setState({active: e.target.value})}}>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>
          </div>
        </div>
        <div className="panel-body panal-feature text-center" >
          <button type="button" className="btn  btn-default btn-form-left" onClick = {(e)=>{browserHistory.goBack()}}>
            Cancel
          </button>
          <button type="button" onClick={this.save} className="btn btn-primary btn-success btn-form-right" >Save</button>
        </div>
      </div>
    )
  }
}

