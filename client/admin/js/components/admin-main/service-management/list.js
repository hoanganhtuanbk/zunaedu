import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

class ServiceView extends React.Component{
  render() {
    return (
      <tr>
        <td >{this.props.id}</td>
        <td >{this.props.name}</td>
        <td >{this.props.active}</td>
        <td>
          <span className="btn-group">
            <Link className="btn btn-xs btn-default" to={`/admin/service/${this.props.id}`}>
              <i className="fa fa-eye"></i>
            </Link>
            <Link to={`/admin/service/${this.props.id}/edit`} className="btn btn-xs btn-default" >
              <i className="fa fa-pencil"></i>
            </Link>
            <Link className="btn btn-xs btn-default" to="/admin">
              <i className="fa fa-times"></i>
            </Link>
          </span>
        </td>
      </tr>
    )
  }
}

export class ListService extends React.Component{
  constructor() {
    super();
    this.state = {
      services: []
    };
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount(){
    this.getAll(this);
  }
  componentDidMount(){
    Stores.addChangeListener('services', this.onChange);
  }
  componentWillUnmount(){
    Stores.removeChangeListener('services', this.onChange)
  }
  onChange(){
    console.log('asdasff');
    this.getAll(this);
  }
  getAll(t) {
    Stores.getAll('/services', function(services, status) {
      console.log(services);
      if (services) {
        t.setState({services: services})
      }
    });
  }
  render(){
    const services = this.state.services.map(function(item, id) {
      return (<ServiceView
        key={id}
        id={item.id}
        name={item.name}
        active={item.active?'Active':'Inactive'}
        />)
    });
    return(
      <div className="panel">
      <PanelHeader
              name = "Service"
              link = "/admin/service/add"
        />

        <div className="table-responsive">
          <table className="table ">
            <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
              {services}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
