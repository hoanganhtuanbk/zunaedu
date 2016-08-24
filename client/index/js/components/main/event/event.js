import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import {HeaderPage} from '../src/header-page'
import Stores from '../../../stores/stores'

class EventItem extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="timeline-panel">
        <Link to={`/su-kien/${this.props.keyNote}`} className="timeline-heading">
          <img className="img-responsive" src={this.props.url} alt={this.props.title} />
        </Link>
        <div className="timeline-body text-justify">
          <h2 className="font-light"><Link to={`/su-kien/${this.props.keyNote}`}>{this.props.title}</Link></h2>
          <p>{this.props.description}</p>
          <Link to={`/su-kien/${this.props.keyNote}`} className="btn-u btn-u-sm">Read More</Link>
        </div>
        <div className="timeline-footer">
          <ul className="list-unstyled list-inline blog-info">
            <li><i className="fa fa-clock-o"></i> {this.props.date}</li>
          </ul>
        </div>
      </div>
    )
  }
}
export class Event extends React.Component{
  constructor(){
    super();
    this.state = {
      events : []
    }
  }

  componentWillMount(){
    this._handelGetDatas(this)
  }

  _handelGetDatas(t){
    Stores.getAll('/events',function(datas){
      t.setState({events: datas})
    })
  }
  render(){
    const EventList = this.state.events.map(function(event,index){
      if(index % 2 == 1){
        return(
          <li key={event.id} className="item-event timeline-inverted">
            <div className="timeline-badge primary"><i className="fa fa-dot-circle-o invert"></i></div>
            <EventItem
              index={index}
              keyNote={event.key}
              title = {event.title}
              description = {event.description}
              url = {event.url}
              date = {event.date}
            />
          </li>
        )
      } else return(
        <li key={event.id} className="item-event">
          <div className="timeline-badge primary"><i className="fa fa-dot-circle-o"></i></div>
          <EventItem
            index={index}
            keyNote={event.key}
            title = {event.title}
            description = {event.description}
            url = {event.url}
            date = {event.date}
          />
        </li>
      )
    });
    return(
      <div>
        <HeaderPage background={'../index/img/bg-components/su-kien-mini.jpg'} />
        <div className="container content">
          <ul className="timeline-v1">
            {EventList}
            <li className="clearfix"></li>
          </ul>
        </div>
      </div>
    )
  }
}
