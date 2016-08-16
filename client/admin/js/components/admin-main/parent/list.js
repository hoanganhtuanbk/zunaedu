import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

class ParentView extends React.Component{
  deleteParent(t){
    console.log(t);
    Actions.deleteById('/parents', t.props.id, function(resutl){
    })
  }
  render() {
    return (
      <tr>
        <td >{this.props.id}</td>
        <td >{this.props.title}</td>
        <td>
          <span className="btn-group">
            <Link className="btn btn-xs btn-default" to={`/admin/parent/${this.props.id}`}>
              <i className="fa fa-eye"></i>
            </Link>
            <Link to={`/admin/parent/${this.props.id}/edit`} className="btn btn-xs btn-default" >
              <i className="fa fa-pencil"></i>
            </Link>
            <a className="btn btn-xs btn-default" onClick={this.deleteParent.bind(this.props.id,this)} >
              <i className="fa fa-times"></i>
            </a>
          </span>
        </td>
      </tr>
    )
  }
}

export class ListParent extends React.Component{
  constructor() {
    super();
    this.state = {
      parents: []
    };
  }
  componentWillMount(){
    this.getAll(this);
  }
  getAll(t) {
    Stores.getAll('/parents', function(parents, status) {
      console.log(parents);
      if (parents) {
        t.setState({parents: parents})
      }
    });
  }

  render(){

    const parents = this.state.parents.map(function(item, id) {
      return (<ParentView
        key={id}
        id={item.id}
        title={item.title}
        />)
    });
    return(
      <div className="panel">
      <PanelHeader
              name = "Parents"
              link = "/admin/parent/add"
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
              {parents}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
