import React from 'react';
import {render,forceUpdate} from 'react-dom';
import {Link,browserHistory} from 'react-router';
import Stores from '../../../stores/stores'
import {HeaderPage} from '../src/header-page'
export class Event extends React.Component{
  constructor(props){
    super();
    this.state = {
      events : [],
      test: false
    };
  }
  componentWillMount(){
    this.getEventDatas(this);
  }
  componentWillReceiveProps(nextProps){ //Function nay chay mỗi khi có thay đổi props
    this.setState({key:nextProps.params.key>this.props.params.key})
  }
  getEventDatas(t){
    Stores.getAll('/events', function(events, status) {
      console.log(events);
      if (events) {
        t.setState({events: events});
      }
    });
  }

  render(){
    const childElements = this.state.events.map(function(event,id){
      return (
        <li key={id}>
          <h3><Link to={`/su-kien/${event.key}`} >{event.title}</Link></h3>
          <small>{event.date} <a href="#">Art,</a> <a href="#">Lifestyles</a></small>
        </li>
      );
    });
    return (
      <div className="bg-color-light">
        <HeaderPage background={'../index/img/bg-components/su-kien-mini.jpg'} />
        <div className="container content-sm">
          <div className="row">
            <div className="col-md-9">
              {this.props.children}
            </div>
            <div className="col-md-3">
              <div className="headline-v2 bg-trending"><h2>Dòng thời gian</h2></div>
              <ul className="list-unstyled blog-trending margin-bottom-50">
                {childElements}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
