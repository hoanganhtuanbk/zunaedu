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
    this.getDetailService(this);
  }
  getDetailService(t){
    console.log(t)
    Stores.findById('/RegisterServices', t.props.params.id, function(service, status) {
      t.setState({service: service});
      console.log(service)
    })
  }
	render(){
		return(
      <div className="panel">
        <div className="panel-body">
          <table className="table">
            <thead>
            <tr>
              <th>#</th>
              <th>Infomation</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>id</td>
              <td>{this.state.service.id}</td>
              </tr>
            <tr>
              <td>Name Parent</td>
              <td>{this.state.service.nameParent}</td>
              </tr>
            <tr>
              <td>Email</td>
              <td>{this.state.service.email}</td>
              </tr>

            <tr>
              <td>Phone</td>
              <td>{this.state.service.phone}</td>

            </tr>
            <tr>
              <td>Address</td>
              <td>{this.state.service.address}</td>
            </tr>
            <tr>
              <td>Name Childen</td>
              <td>{this.state.service.nameChilden}</td>
            </tr>
            <tr>
              <td>Old</td>
              <td>{this.state.service.oldChilden}</td>
            </tr>
            <tr>
              <td>Sex</td>
              <td>{this.state.service.sexChilden}</td>
            </tr>
            <tr>
              <td>Media</td>
              <td>{this.state.service.media}</td>
            </tr>
              <tr>
                <td>Content</td>
              <td>{this.state.service.content}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
	}
}
