import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

class PromotionsView extends React.Component{
  deletePromotion(t){
    console.log(t);
    Actions.deleteById('/promotions', t.props.id, function(resutl){
    })
  }
  render() {
    return (
      <tr>
        <td >{this.props.id}</td>
        <td >{this.props.title}</td>
        <td>
          <span className="btn-group">
            <Link className="btn btn-xs btn-default" to={`/admin/promotion/${this.props.id}`}>
              <i className="fa fa-eye"></i>
            </Link>
            <Link to={`/admin/promotion/${this.props.id}/edit`} className="btn btn-xs btn-default" >
              <i className="fa fa-pencil"></i>
            </Link>
            <a className="btn btn-xs btn-default" onClick={this.deletePromotion.bind(this.props.id,this)} >
              <i className="fa fa-times"></i>
            </a>
          </span>
        </td>
      </tr>
    )
  }
}

export class ListPromotion extends React.Component{
  constructor() {
    super();
    this.state = {
      promotions: []
    };
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount(){
    this.getAll(this);
  }
  componentDidMount(){
    Stores.addChangeListener('promotions', this.onChange);
  }
  componentWillUnmount(){
    Stores.removeChangeListener('promotions', this.onChange)
  }
  onChange(){
    this.getAll(this);
  }
  getAll(t) {
    Stores.getAll('/promotions', function(promotions, status) {
      console.log(promotions);
      if (promotions) {
        t.setState({promotions: promotions})
      }
    });
  }

  render(){

    const promotions = this.state.promotions.map(function(item, id) {
      return (<PromotionsView
        key={id}
        id={item.id}
        title={item.title}
        />)
    });
    return(
      <div className="panel">
      <PanelHeader
              name = "Promotions"
              link = "/admin/promotion/add"
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
              {promotions}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
