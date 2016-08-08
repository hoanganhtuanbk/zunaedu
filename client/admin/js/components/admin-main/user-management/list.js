import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink, browserHistory } from 'react-router';
import Stores from '../../../stores/stores';
import Actions from '../../../actions/actions';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

class ViewUser extends React.Component{
  render() {
    return (
      <tr>
        <td >{this.props.user.id}</td>
        <td >{this.props.user.firstName} {this.props.user.lastName}</td>
        <td >{this.props.user.email}</td>
        <td >{this.props.user.privilege == 1?'Admin':'User'}</td>
        <td >
          <span className="btn-group">
            <Link className="btn btn-xs btn-default" to={"/admin/users/"+this.props.user.id}>
              <i className="fa fa-eye"></i>
            </Link>
            <Link className="btn btn-xs btn-default" to={"/admin/users/"+this.props.user.id+"/edit"}>
              <i className="fa fa-pencil"></i>
            </Link>
            <a className="btn btn-xs btn-default">
              <i className="fa fa-times" ></i>
            </a>
          </span>
        </td>
      </tr>

    )
  }
}

export class ListUser extends React.Component{
  constructor() {
    super();
    this.state = {
      users: []
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
        privilege: {
          "neq": "3"
        }
      }
    }, function(services, status) {
      t.setState({users: services})
    });
  }

  render(){
    const Users = this.state.users.map(function(item, id) {
      console.log(item);
      return (
        <ViewUser user = {item} key={id}/>
      )
    });
    return(
      <div className="panel">
        <PanelHeader
              name = "View users"
              link = "/admin/users/add"
        />
        <div className="table-responsive">
          <table className="table ">
            <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
              {Users}
            </tbody>
          </table>
        </div>
      </div>

    )
  }
}

