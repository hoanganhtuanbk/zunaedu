import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

export class ViewService extends React.Component{
  constructor() {
    super();
    this.state = {
    };
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount(){
    Stores.findById('/services', this.props.params.id, function(service, status) {
      this.setState(service)
    }.bind(this));
  }
  componentDidMount(){
    Stores.addChangeListener('services', this.onChange);
  }
  componentWillUnmount(){
    Stores.removeChangeListener('services', this.onChange)
  }
  onChange(){
    this.getAll(this);
  }
	render(){
		return(
      <div className="panel">
        <div className="fleet-feature">
          <PanelHeader
            navigateBack = "true"
            linkEdit={`/admin/service/${this.props.params.id}/edit`}
            />
        </div>
        <div className="table-responsive">
          <table className="table ">
            <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td >{this.state.id}</td>
              <td >{this.state.name}</td>
              <td >{this.state.active?'Active':'Inactive'}</td>
              <td>
                <span className="btn-group">
                  <Link to={"/admin/service/"+ this.state.id +'/edit'} className="btn btn-xs btn-default" >
                    <i className="fa fa-pencil"></i>
                  </Link>
                </span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
	}
}
