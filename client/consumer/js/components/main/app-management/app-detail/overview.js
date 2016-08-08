	import React from 'react';
import {render} from 'react-dom';
import { Link, browserHistory } from 'react-router';
import Stores from '../../../../stores/stores'

export class Overview extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      appId: this.props.params.appId,
      nameApp: ''
    }
  }
  componentWillMount(){
    this.getAppConsumer(this);
  }
  getAppConsumer(t){
    Stores.findById('/Apps', t.state.appId , function(apps, stt){
        t.setState({nameApp: apps.name});
      }
    );
  }
  render(){
    var navigateBack = function(){
      browserHistory.goBack()
    }
    return(
      <div>
        <div className="panel-header">
          <button className="btn btn-previous btn-default" onClick={navigateBack}>
            <i className="fa fa-chevron-left"></i>
          </button>
          {this.state.nameApp} / Overview
        </div>
        <div className="panel-body">
          <div className="content">
            <div className="row tabs-overview">
              <div className="col-md-2">
                <Link to={`/consumer/apis/overview/${this.state.appId}`}>Enabled APIs</Link>
              </div>
              <div className="col-md-2">
                <Link to={`/consumer/apis/library/${this.state.appId}`}>Popular APIs</Link>
              </div>
            </div>
          </div>
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
