import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

class ServicesView extends React.Component{
  deleteService(t){
   if(t.props.id){
     Actions.deleteById('/RegisterServices', t.props.id, function(resutl){
     console.log(result);
   })
   }
  }
  render() {
    return (
      <tr>
        <td >{this.props.id}</td>
        <td >{this.props.nameParent}</td>
        <td >{this.props.nameChilden}</td>

        <td >{this.props.content}</td>

        <td>
          <span className="btn-group">
            <Link className="btn btn-xs btn-default" to={`/admin/service/${this.props.id}`}>
              <i className="fa fa-eye"></i>
            </Link>
            <Link to={`/admin/event/${this.props.id}/edit`} className="btn btn-xs btn-default" >
              <i className="fa fa-pencil"></i>
            </Link>
            <a className="btn btn-xs btn-default" onClick={this.deleteService.bind(this.props.id,this)} >
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
  getAll(t) {
    Actions.find('/RegisterServices',{order: 'id DESC'}, function(services, status) {
      console.log(services);
      if (services) {
        t.setState({services: services})
      }
    });
  }

  render(){

    const services = this.state.services.map(function(item, id) {
      return (<ServicesView
        key={id}
        id={item.id}
        nameParent={item.nameParent}
        nameChilden={item.nameChilden}
        content={item.content}
        />)
    });
    return(
      <div className="panel">
      <PanelHeader
              name = "Services"
              link = "/admin/service/add"
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
