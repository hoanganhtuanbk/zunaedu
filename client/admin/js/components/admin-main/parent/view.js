import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

export class ViewParent extends React.Component{
  constructor() {
    super();
    this.state = {
      parent : {}
    };
  }
  componentWillMount(){
    Stores.findById('/parents', this.props.params.id, function(parent, status) {
      this.setState({parent: parent});
      console.log(parent)
    }.bind(this));
    console.log(this.state.parent)
  }
	render(){
		return(
      <div className="panel">
        <div className="fleet-feature">
          <PanelHeader
            navigateBack = "true"
            linkEdit={`/admin/parent/${this.props.params.id}/edit`}
            />
        </div>
        <div className="table-responsive">
          <table className="table ">
            <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Content</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td >{this.state.parent.id}</td>
              <td >{this.state.parent.title}</td>
              <td >{this.state.parent.content}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
	}
}
