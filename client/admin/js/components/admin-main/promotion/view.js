import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

export class ViewPromotion extends React.Component{
  constructor() {
    super();
    this.state = {
      promotion : {}
    };
  }
  componentWillMount(){
    Stores.findById('/promotions', this.props.params.id, function(promotion, status) {
      this.setState({promotion: promotion});
    }.bind(this));
  }
	render(){
		return(
      <div className="panel">
        <div className="fleet-feature">
          <PanelHeader
            navigateBack = "true"
            linkEdit={`/admin/promotion/${this.props.params.id}/edit`}
            />
        </div>
        <div className="panel-body">
          <img src={this.state.promotion.url} />
          <h3> {this.state.promotion.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: this.state.promotion.content }} ></div>
        </div>
      </div>
    )
	}
}
