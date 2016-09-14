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
      service : {}
    };
  }
  componentWillMount(){
    Stores.findById('/RegisterService', this.props.params.id, function(service, status) {
      this.setState({service: service});
      console.log(service)
    }.bind(this));
    console.log(this.state.service)
  }
	render(){
		return(
      <div className="panel">
        <div className="panel-body">
          <img src={this.state.service.url} />
          <h3> {this.state.service.title}</h3>
          <p>{this.state.service.content}</p>
        </div>
      </div>
    )
	}
}
