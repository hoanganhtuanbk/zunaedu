import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import {HeaderPage} from '../src/header-page'
import Stores from '../../../stores/stores'

class EventItem extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props)
  }
  render(){
    if(this.props.index % 2){
      return(
        <li className="item-event timeline-inverted" key={this.props.id}>
          <div className="timeline-badge primary"><i className="fa fa-dot-circle-o invert"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <img className="img-responsive" src={this.props.url} alt="" />
            </div>
            <div className="timeline-body text-justify">
              <h2 className="font-light"><a href="#">{this.props.title}</a></h2>
              <p>{this.props.description}</p>

              <a className="btn-u btn-u-sm" href="#">Read More</a>
            </div>
            <div className="timeline-footer">
              <ul className="list-unstyled list-inline blog-info">
                <li><i className="fa fa-clock-o"></i> {this.props.date}</li>
              </ul>
            </div>
          </div>
        </li>
      )
    } else return(
    <li className="item-event" key={this.props.id}>
      <div className="timeline-badge primary"><i className="fa fa-dot-circle-o"></i></div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <img className="img-responsive" src={this.props.url} alt="" />
        </div>
        <div className="timeline-body text-justify">
          <h2 className="font-light"><a href="#">{this.props.title}</a></h2>
          <p>{this.props.description}</p>

          <a className="btn-u btn-u-sm" href="#">Read More</a>
        </div>
        <div className="timeline-footer">
          <ul className="list-unstyled list-inline blog-info">
            <li><i className="fa fa-clock-o"></i> {this.props.date}</li>
          </ul>
        </div>
      </div>
    </li>

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
      return(
          <EventItem
            index={index}
            id={event.id}
            title = {event.title}
            description = {event.description}
            url = {event.url}
            date = {event.date}
          />
        )

    })
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
