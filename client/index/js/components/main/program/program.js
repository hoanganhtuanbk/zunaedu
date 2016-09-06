import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Stores from '../../../stores/stores'
import {HeaderPage} from '../src/header-page'
import {FeedbackForm} from '../src/feedback-form'

class Trending extends React.Component{
  render(){
    return(
        <div className="row trending">
          <div className="col-md-3 trending-img">
            <img src={this.props.url} />
          </div>
          <div className="col-md-9 trending-title">
            <h3><Link to={`/van-tay-hoc/${this.props.keyNote}`}>{this.props.title}</Link></h3>
            <small>{this.props.date} / Admin</small>
          </div>
        </div>


    )
  }
}
export class Program extends React.Component{
  constructor(){
    super();
    this.state = {
      programs: []
    };
  }
  componentWillMount(){
    this.getPrograms(this);
  }
  getPrograms(t){
    Stores.find('/programs', {order:'id DESC'}, function(programs, status) {
      if (programs) {
        t.setState({programs: programs});
        console.log(t.state.programs)
      }
    });
  }
  render(){
    const programs = this.state.programs.map(function(item, index) {
      return (
        <li key={index}>
          <Trending
            keyNote={item.key}
            title={item.title}
            date={item.date}
            url={item.url}
          />
        </li>)
    });

    return(
      <div className="bg-color-white">
        <HeaderPage background={'../index/img/bg-components/chuong-trinh-mini.jpg'} />
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
              <div className="headline-v2 bg-trending"><h2>Bài đăng mới nhất</h2></div>
              <ul className="list-unstyled blog-trending margin-bottom-50">
                {programs}
              </ul>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
