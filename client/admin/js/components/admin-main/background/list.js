import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

class BackgroundsView extends React.Component{
  deleteBackground(t){
    console.log(t);
    Actions.deleteById('/backgrounds', t.props.id, function(resutl){
    })
  }
  render() {
    return (
      <tr>
        <td >{this.props.feature}</td>
        <td >{this.props.url}</td>
        <td>
          <span className="btn-group">
            <Link to={`/admin/background/${this.props.id}/edit`} className="btn btn-xs btn-default" >
              <i className="fa fa-pencil"></i>
            </Link>
            <a className="btn btn-xs btn-default" onClick={this.deleteBackground.bind(this.props.id,this)} >
              <i className="fa fa-times"></i>
            </a>
          </span>
        </td>
      </tr>
    )
  }
}

export class ListBackground extends React.Component{
  constructor() {
    super();
    this.state = {
      backgrounds: []
    };
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount(){
    this.getAll(this);
  }
  componentDidMount(){
    Stores.addChangeListener('backgrounds', this.onChange);
  }
  componentWillUnmount(){
    Stores.removeChangeListener('backgrounds', this.onChange)
  }
  onChange(){
    this.getAll(this);
  }
  getAll(t) {
    Actions.find('/backgrounds',{order: 'id DESC'}, function(backgrounds, status) {
      console.log(backgrounds);
      if (backgrounds) {
        t.setState({backgrounds: backgrounds})
      }
    });
  }

  render(){

    const backgrounds = this.state.backgrounds.map(function(item, id) {
      return (<BackgroundsView
        key={id}
        id={item.id}
        url={item.url}
        feature={item.feature}
        />)
    });
    return(
      <div className="panel">
      <PanelHeader
              name = "Backgrounds"
              link = "/admin/background/add"
        />

        <div className="table-responsive">
          <table className="table ">
            <thead>
            <tr>
              <th>Feature's</th>
              <th>Url</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
              {backgrounds}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
