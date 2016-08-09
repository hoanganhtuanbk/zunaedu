import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink, browserHistory } from 'react-router';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'
import Stores from '../../../stores/stores.js'

export class ViewConsumer extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }
  componentWillMount(){
    this.findById(this);
  }
  componentDidMount(){
    Stores.addChangeListener('users', this.onChange);
  }
  componentWillUnmount(){
    Stores.removeChangeListener('users', this.onChange)
  }
  onChange(){
    this.getAll(this);
  }
  findById(t) {
    Stores.findById('/users', this.props.params.id, function(data, status) {
      t.setState(data);
    })
  }
  render(){
    return(
      <div className="panel">
       <PanelHeader
              name = "View a consumer"
              linkEdit = {`/admin/consumer/${this.props.params.id}/edit`}
        />

        <div className="panel-body">
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                  <tr>
                    <th >Username</th>
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


