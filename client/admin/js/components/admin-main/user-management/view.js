import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink, browserHistory } from 'react-router';
import Stores from '../../../stores/stores';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

export class ViewUser extends React.Component{
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      id: '',
      phone: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this)
  }
  componentWillMount(){
  }
  componentDidMount(){
    Stores.addChangeListener('users', this.onChange);
  }
  componentWillUnmount(){
    Stores.removeChangeListener('users', this.onChange)
  }
  onChange(){
    this.findById(this);
  }
  findById(t) {
    Stores.findById('/users', this.props.params.id, function(data, status){
      t.setState({
        username: data.username,
        email: data.email,
        phone: data.phone,
        id: data.id
      })
    })
  }


  render(){
    return(
      <div className="panel">
        <PanelHeader
          navigateBack = "true"
          name = "View a user"
          linkEdit={`/admin/users/${this.props.params.id}/edit`}
          />

        <div className="panel-body">
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                  <tr>
                    <th >Name:</th>
                    <td>{this.state.username}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{this.state.email}</td>
                  </tr>
                  </tbody></table>
              </div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}


