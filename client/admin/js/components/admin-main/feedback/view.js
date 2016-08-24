import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

export class ViewEvent extends React.Component{
  constructor() {
    super();
    this.state = {
      event : {}
    };
  }
  componentWillMount(){
    Stores.findById('/events', this.props.params.id, function(event, status) {
      this.setState({event: event});
      console.log(event)
    }.bind(this));
    console.log(this.state.event)
  }
	render(){
		return(
      <div className="panel">
        <div className="fleet-feature">
          <PanelHeader
            navigateBack = "true"
            linkEdit={`/admin/event/${this.props.params.id}/edit`}
            />
        </div>
        <div className="panel-body">
          <img src={this.state.event.url} />
          <h3> {this.state.event.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: this.state.event.content }} ></div>
        </div>
      </div>
    )
	}
}
