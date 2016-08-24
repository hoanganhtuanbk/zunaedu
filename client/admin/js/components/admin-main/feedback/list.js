import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

class EventsView extends React.Component{
  deleteEvent(t){
    console.log(t);
    Actions.deleteById('/events', t.props.id, function(resutl){
    })
  }
  render() {
    return (
      <tr>
        <td >{this.props.id}</td>
        <td >{this.props.title}</td>
        <td>
          <span className="btn-group">
            <Link className="btn btn-xs btn-default" to={`/admin/event/${this.props.id}`}>
              <i className="fa fa-eye"></i>
            </Link>
            <Link to={`/admin/event/${this.props.id}/edit`} className="btn btn-xs btn-default" >
              <i className="fa fa-pencil"></i>
            </Link>
            <a className="btn btn-xs btn-default" onClick={this.deleteEvent.bind(this.props.id,this)} >
              <i className="fa fa-times"></i>
            </a>
          </span>
        </td>
      </tr>
    )
  }
}

export class ListEvent extends React.Component{
  constructor() {
    super();
    this.state = {
      events: []
    };
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount(){
    this.getAll(this);
  }
  componentDidMount(){
    Stores.addChangeListener('events', this.onChange);
  }
  componentWillUnmount(){
    Stores.removeChangeListener('events', this.onChange)
  }
  onChange(){
    this.getAll(this);
  }
  getAll(t) {
    Stores.getAll('/events', function(events, status) {
      console.log(events);
      if (events) {
        t.setState({events: events})
      }
    });
  }

  render(){

    const events = this.state.events.map(function(item, id) {
      return (<EventsView
        key={id}
        id={item.id}
        title={item.title}
        />)
    });
    return(
      <div className="panel">
      <PanelHeader
              name = "Events"
              link = "/admin/event/add"
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
              {events}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
