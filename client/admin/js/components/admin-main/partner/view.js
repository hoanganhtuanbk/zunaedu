import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

export class ViewPartner extends React.Component{
  constructor() {
    super();
    this.state = {
      partner : {}
    };
  }
  componentWillMount(){
    Stores.findById('/partners', this.props.params.id, function(partner, status) {
      this.setState({partner: partner});
      console.log(partner)
    }.bind(this));
  }
	render(){
		return(
      <div className="panel">
        <div className="fleet-feature">
          <PanelHeader
            navigateBack = "true"
            linkEdit={`/admin/partner/${this.props.params.id}/edit`}
            />
        </div>
        <div className="panel-body">
          <div className="text-center">
            <h3> {this.state.partner.name}</h3>
          </div>

          <img src={this.state.partner.url} />
        </div>
      </div>
    )
	}
}
