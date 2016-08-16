import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

class DermatoglyphicsView extends React.Component{
  deleteDermatoglyphic(t){
    console.log(t);
    Actions.deleteById('/dermatoglyphics', t.props.id, function(resutl){
    })
  }
  render() {
    return (
      <tr>
        <td >{this.props.id}</td>
        <td >{this.props.title}</td>
        <td>
          <span className="btn-group">
            <Link className="btn btn-xs btn-default" to={`/admin/dermatoglyphic/${this.props.id}`}>
              <i className="fa fa-eye"></i>
            </Link>
            <Link to={`/admin/dermatoglyphic/${this.props.id}/edit`} className="btn btn-xs btn-default" >
              <i className="fa fa-pencil"></i>
            </Link>
            <a className="btn btn-xs btn-default" onClick={this.deleteDermatoglyphic.bind(this.props.id,this)} >
              <i className="fa fa-times"></i>
            </a>
          </span>
        </td>
      </tr>
    )
  }
}

export class ListDermatoglyphic extends React.Component{
  constructor() {
    super();
    this.state = {
      dermatoglyphics: []
    };
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount(){
    this.getAll(this);
  }
  componentDidMount(){
    Stores.addChangeListener('dermatoglyphics', this.onChange);
  }
  componentWillUnmount(){
    Stores.removeChangeListener('dermatoglyphics', this.onChange)
  }
  onChange(){
    this.getAll(this);
  }
  getAll(t) {
    Stores.getAll('/dermatoglyphics', function(dermatoglyphics, status) {
      console.log(dermatoglyphics);
      if (dermatoglyphics) {
        t.setState({dermatoglyphics: dermatoglyphics})
      }
    });
  }

  render(){

    const dermatoglyphics = this.state.dermatoglyphics.map(function(item, id) {
      return (<DermatoglyphicsView
        key={id}
        id={item.id}
        title={item.title}
        />)
    });
    return(
      <div className="panel">
      <PanelHeader
              name = "Dermatoglyphics"
              link = "/admin/dermatoglyphic/add"
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
              {dermatoglyphics}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
