import React from 'react';
import {render} from 'react-dom';
import Stores from '../../../stores/stores.js'
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

export class ViewFeedback extends React.Component{
  constructor() {
    super();
    this.state = {
      feedback : {}
    };
  }
  componentWillMount(){
    Stores.findById('/feedbacks', this.props.params.id, function(feedback, status) {
      this.setState({feedback: feedback});
    }.bind(this));
  }
	render(){
		return(
      <div className="panel">
        <div className="fleet-feature">
          <PanelHeader
            navigateBack = "true"
            linkEdit={`/admin/feedback/${this.props.params.id}/edit`}
            />
        </div>
        <div className="panel-body">
          <img src={this.state.feedback.url} />
          <h3> {this.state.feedback.name}</h3>
          <p>{this.state.feedback.content}</p>
        </div>
      </div>
    )
	}
}
