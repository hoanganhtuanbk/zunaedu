import React from 'react';
import {render,forceUpdate} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Actions from '../../../actions/actions'
import Stores from '../../../stores/stores.js'
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

class ServicesView extends React.Component{

  render() {
    return (
      <tr>
        <td >
            {this.props.id}
        </td>
        <td >
      <Link className="btn btn-xs btn-default" to={`/admin/service/${this.props.id}`}>
    {this.props.nameParent}
      </Link>
        </td>
    <td >{this.props.nameChilden}</td>
        <td >{this.props.content}</td>
        <td >{this.props.dateCreate}</td>
        <td>
          <span className="btn-group">
            <a className="btn btn-xs btn-default" onClick={this.props.deleteService.bind(this.props.id,this)} >
              <i className="fa fa-times"></i>
            </a>
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
  }
  componentWillMount(){
    this.getAll(this);
  }
  componentDidMount(){
    console.log(3);
    Stores.addChangeListener(this.onChange);
  }
  onChange(){
    console.log(2);
  }
  deleteService(t,e){
    console.log(t,e)
      Actions.deleteById('/RegisterServices', t.props.id, function(result){
        Actions.find('/RegisterServices',{order: 'id DESC'}, function(services, status) {
          if (services) {
            t.setState({services: services})
          }
        });
      })
  }
  getAll(t) {
    Actions.find('/RegisterServices',{order: 'id DESC'}, function(services, status) {
      console.log(services);
      if (services) {
        t.setState({services: services})
      }
    });
  }

  render(){
    const deleteService = this.deleteService;
    const services = this.state.services.map(function(item, id) {
      return (<ServicesView
        key={id}
        id={item.id}
        nameParent={item.nameParent}
        nameChilden={item.nameChilden}
        content={item.content}
        dateCreate = {item.dateCreate}
        deleteService={deleteService}
        />)
    });
    return(
      <div className="panel">
      <PanelHeader
              name = "Services"
        />

        <div className="table-responsive">
          <table className="table ">
            <thead>
            <tr>
              <th>ID</th>
              <th>Name Parent</th>
              <th>Name Childen</th>
              <th>Content</th>


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
