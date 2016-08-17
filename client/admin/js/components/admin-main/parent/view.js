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
        <div className="panel-body">
          <img src={this.state.parent.url} />
          <h3> {this.state.parent.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: this.state.parent.content }} ></div>
        </div>
      </div>
    )
	}
}
