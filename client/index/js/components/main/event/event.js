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
    Stores.find('/events',{order: 'id DESC'}, function(events, status) {
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
          <small>{event.date} <a href="#">Art,</a> <a href="#">Admin</a></small>
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
        <div className="container padding-bottom-50">
          <div className="headline"><h2>Cảm nhận khách hàng</h2></div>
          <div className="row">
            <div className="col-sm-6">
              <div className="input-group margin-bottom-10">
                <span className="input-group-addon"><i className="fa fa-user"></i></span>
                <input type="name" placeholder="Tên khách hàng" className="form-control"/>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-group margin-bottom-20">
                <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                <input type="email" placeholder="Email" className="form-control"/>
              </div>
            </div>
          </div>
          <textarea rows="5" className="form-control margin-bottom-20" placeholder="Nội dung..."></textarea>
          <button className="btn-u btn-u-sm pull-right" type="button">Gửi cảm nhận</button>
        </div>
      </div>
    );
  }
}
