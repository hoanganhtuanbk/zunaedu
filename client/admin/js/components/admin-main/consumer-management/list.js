import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'
import Stores from '../../../stores/stores.js'

export class ListConsumer extends React.Component{
  constructor(){
    super();
    this.state = {
      consumers: []
    };
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount(){
    this.getAll(this);
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
  getAll(t) {
    Stores.find('/users', {
      where: {
        privilege: 3
      }
    }, function(consumers, status) {
      t.setState({
        consumers: consumers
      })
    });
  }

  render(){
    return(
      <div className="panel">
        <PanelHeader
          name = "View consumers"
          link = "/admin/consumer/add"
          />
        <table className="table">
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            {this.state.consumers.map(consumer => (
              <tr key={consumer.id}>
                <td >{consumer.id}</td>
                <td >{consumer.username}</td>
                <td >
                  <span className="btn-group">
                    <Link className="btn btn-xs btn-default" to={`/admin/consumer/${consumer.id}`}>
                      <i className="fa fa-eye"></i>
                    </Link>
                    <Link className="btn btn-xs btn-default" to={`/admin/consumer/${consumer.id}/edit`}>
                      <i className="fa fa-pencil"></i>
                    </Link>
                    <Link className="btn btn-xs btn-default" to="/admin">
                      <i className="fa fa-times"></i>
                    </Link>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

