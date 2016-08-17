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
    }.bind(this));
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
        <div className="panel-body">
          <img src={this.state.dermatoglyphic.url} />
          <h3> {this.state.dermatoglyphic.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: this.state.dermatoglyphic.content }} ></div>
        </div>
      </div>
    )
	}
}
