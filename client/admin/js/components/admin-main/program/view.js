import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

export class ViewProgram extends React.Component{
  constructor() {
    super();
    this.state = {
      program : {}
    };
  }
  componentWillMount(){
    Stores.findById('/programs', this.props.params.id, function(program, status) {
      this.setState({program: program});
      console.log(program)
    }.bind(this));
    console.log(this.state.program)
  }
	render(){
		return(
      <div className="panel">
        <div className="fleet-feature">
          <PanelHeader
            navigateBack = "true"
            linkEdit={`/admin/program/${this.props.params.id}/edit`}
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
              <td >{this.state.program.id}</td>
              <td >{this.state.program.title}</td>
              <td >{this.state.program.content}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
	}
}
