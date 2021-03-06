import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Stores from '../../../stores/stores'

class EventItem extends React.Component{
  render(){
    return(
      <div className="row margin-bottom-20 feature-item">
        <div className="col-sm-5 sm-margin-bottom-20 feature-image">
          <Link to={`/su-kien/${this.props.keyNote}`} >
            <img className="img-responsive" src={this.props.url} />
          </Link>
        </div>

        <div className="col-sm-7 news-v3">
          <div className="news-v3-in no-padding content-program">
            <ul className="list-inline posted-info">
              <li>Đăng bởi Admin</li>
              <li>/ Ngày đăng {this.props.date}</li>
            </ul>
            <h2>
              <Link to={`/su-kien/${this.props.keyNote}`} >
                {this.props.title}
              </Link>
            </h2>
            <p>{this.props.description}</p>
            <Link to={`/su-kien/${this.props.keyNote}`} className="read-more">Xem chi tiết</Link>
          </div>
        </div>
      </div>
    )
  }
}
export class InitEvent extends React.Component{
  constructor(props){
    super();
    this.state = {
     events: []
    };
  }
  componentWillMount(){
    this.getEvents(this);
  }
  getEvents(t){
    Stores.find('/events',{order:'id DESC'}, function(events){
      t.setState({events: events})
    })
  }

  render(){
   const EventList = this.state.events.map(function(event,index){
     return(
       <div key={index}>
         <EventItem
           keyNote={event.key}
           title={event.title}
           description={event.description}
           date={event.dateCreate}
           url={event.url}
         />
         <div className="clearfix margin-bottom-20"><hr/></div>
       </div>
       )
   });
    return (
      <div>
        {EventList}
      </div>
    );
  }
}

