import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

export class ViewDermatoglyphic extends React.Component{
  constructor() {
    super();
    this.state = {
      dermatoglyphic : {}
    };
  }
  componentWillMount(){
    Stores.findById('/dermatoglyphics', this.props.params.id, function(dermatoglyphic, status) {
      this.setState({dermatoglyphic: dermatoglyphic});
      console.log(dermatoglyphic)
    }.bind(this));
    console.log(this.state.dermatoglyphic)
  }
	render(){
		return(
      <div className="panel">
        <div className="fleet-feature">
          <PanelHeader
            navigateBack = "true"
            linkEdit={`/admin/dermatoglyphic/${this.props.params.id}/edit`}
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
              <td >{this.state.dermatoglyphic.id}</td>
              <td >{this.state.dermatoglyphic.title}</td>
              <td >{this.state.dermatoglyphic.content}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
	}
}
