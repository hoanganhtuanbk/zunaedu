import React from 'react';
import {render,forceUpdate} from 'react-dom';
import {Link,browserHistory} from 'react-router';
import Stores from '../../../stores/stores'
import {HeaderPage} from '../src/header-page'
import {FeedbackForm} from '../src/feedback-form'
import {HitBooks} from '../src/hit-books'
import Actions from '../../../actions/actions'

class Trending extends React.Component{
  render(){
    return(
      <div className="row trending">
        <div className="col-md-3 trending-img">
          <img src={this.props.url} />
        </div>
        <div className="col-md-9 trending-title">
          <h3><Link to={`/su-kien/${this.props.keyNote}`}>{this.props.title}</Link></h3>
          <small>{this.props.date} / Admin</small>
        </div>
      </div>


    )
  }
}
export class Event extends React.Component{
  constructor(props){
    super();
    this.state = {
      events : [],
      url: ''

    };
  }
  componentWillMount(){
    this.getEventDatas(this);
    this.getBackground(this)

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
  getBackground(t){
    Actions.find('/backgrounds',{
        where:
        {
          feature: 'event'
        },
        order: 'id DESC'},
      function (background) {
        console.log(background);
        if(background[0]){
          t.setState({url: background[0].url})
        }
      })
  }
  render(){
    const childElements = this.state.events.map(function(item,id){
      return (
        <li key={id}>
          <Trending
            keyNote={item.key}
            title={item.title}
            date={item.date}
            url={item.url}
          />
        </li>
      );
    });
    return (
      <div className="bg-color-light">
        <HeaderPage background={this.state.url} />
        <div className="container content-sm">
          <div className="row">
            <div className="col-md-9">
              {this.props.children}
              <ul className="pager pager-v3 pager-sm no-margin-bottom">
                <li className="previous"><a href="#">← Older</a></li>
                <li className="page-amount">1 of 7</li>
                <li className="next"><a href="#">Newer →</a></li>
              </ul>
              <FeedbackForm/>

            </div>
            <div className="col-md-3">
              <div className="headline-v2 bg-trending"><h2>Dòng thời gian</h2></div>
              <ul className="list-unstyled blog-trending margin-bottom-50">
                {childElements}
              </ul>
              <HitBooks/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
