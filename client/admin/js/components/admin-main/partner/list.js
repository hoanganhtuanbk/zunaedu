import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

class PartnersView extends React.Component{
  deletePartner(t){
    console.log(t);
    Actions.deleteById('/partners', t.props.id, function(resutl){
    })
  }
  render() {
    return (
      <tr>
        <td >{this.props.id}</td>
        <td >{this.props.name}</td>
        <td>
          <span className="btn-group">
            <Link className="btn btn-xs btn-default" to={`/admin/partner/${this.props.id}`}>
              <i className="fa fa-eye"></i>
            </Link>
            <Link to={`/admin/partner/${this.props.id}/edit`} className="btn btn-xs btn-default" >
              <i className="fa fa-pencil"></i>
            </Link>
            <a className="btn btn-xs btn-default" onClick={this.deletePartner.bind(this.props.id,this)} >
              <i className="fa fa-times"></i>
            </a>
          </span>
        </td>
      </tr>
    )
  }
}

export class ListPartner extends React.Component{
  constructor() {
    super();
    this.state = {
      partners: []
    };
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount(){
    this.getAll(this);
  }
  componentDidMount(){
    Stores.addChangeListener('partners', this.onChange);
  }
  componentWillUnmount(){
    Stores.removeChangeListener('partners', this.onChange)
  }
  onChange(){
    this.getAll(this);
  }
  getAll(t) {
    Stores.getAll('/partners', function(partners, status) {
      console.log(partners);
      if (partners) {
        t.setState({partners: partners})
      }
    });
  }

  render(){

    const partners = this.state.partners.map(function(item, id) {
      return (<PartnersView
        key={id}
        id={item.id}
        name={item.name}
        />)
    });
    return(
      <div className="panel">
      <PanelHeader
              name = "Partners"
              link = "/admin/partner/add"
        />

        <div className="table-responsive">
          <table className="table ">
            <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
              {partners}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
