import React from 'react';
import {render} from 'react-dom';
import { Link, browserHistory } from 'react-router';
import Stores from '../../../../stores/stores'
import Actions from '../../../../actions/actions.js'
export class Credentials extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      appId: this.props.params.appId,
      app: '',
      clientSecret: ''
    };
    this.changeClientSecret = this.changeClientSecret.bind(this)
  }
  componentWillMount(){
    this.getAppConsumer(this);
  }
  getAppConsumer(t){
    Stores.findById('/Apps', t.state.appId , function(app, stt){
        t.setState({app: app});
        t.setState({clientSecret: app.clientSecret})
      }
    );
  }

  changeClientSecret(){

    var apps = {
      clientSecret: guid()
    };
    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    };

    Actions.update('/Apps', this.state.appId, apps, function(result, stt){
      console.log(result.clientSecret);
      this.setState({clientSecret : result.clientSecret});
       console.log(this.state.clientSecret);
    }.bind(this))
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
          {this.state.app.name} / Credentials
        </div>
        <div className="content">
          <div className="panel-body">
            API keys
            <div className="table-responsive ">
              <table className="table">
                <thead>
                <tr>
                  <th>Name</th>
                  <th>CreationDate</th>
                  <th>ClientID</th>
                  <th>ClientSecret <button onClick={this.changeClientSecret} className="btn btn-default" ><i className="fa fa-exchange" aria-hidden="true"></i></button></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>{this.state.app.name}</td>
                  <td>{this.state.app.created}</td>
                  <td>{this.state.app.id}</td>
                  <td>{this.state.clientSecret}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
