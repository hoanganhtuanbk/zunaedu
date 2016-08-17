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
        <div className="panel-body">
          <img src={this.state.program.url} />
          <h3> {this.state.program.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: this.state.program.content }} ></div>
        </div>
      </div>
    )
	}
}
