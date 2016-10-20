import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Stores from '../../../stores/stores'
import Actions from '../../../actions/actions'
import Slider from 'react-slick'
import {FeedbackForm} from '../src/feedback-form'

class Trending extends React.Component{
  render(){
    return(
      <div className="row trending">
        <div className="col-md-3 trending-img">
          <img src={this.props.url} />
        </div>
        <div className="col-md-9 trending-title">
          <h3><Link to={`/goc-cha-me/${this.props.keyNote}`}>{this.props.title}</Link></h3>
          <small>{this.props.date} / Admin</small>
        </div>
      </div>


    )
  }
}
export class SubFingerPrint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbacks: [],
      parents: []
    };
  }

  componentWillMount() {
    this.getFeedbackDatas(this);
    this.getParentCorners(this);

  }

  getFeedbackDatas(t) {
    Stores.find('/feedbacks', {order: 'id DESC'}, function (feedbacks) {
      t.setState({feedbacks: feedbacks})
    })
  }
  getParentCorners(t){
    Stores.find('/parents',{order: 'id DESC', limit: '10'}, function(parents, status) {
      if (parents) {
        t.setState({parents: parents});
      }
    });
  }
  render() {
    const childElements = this.state.parents.map(function(item,id){
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
    const childFeedback = this.state.feedbacks.map(function (result, index) {
      return (
        <div key={index} className="testimonials-v4 padding-top-50 feedback margin-bottom-20">
          <div className="testimonials-v4-in">
            <p>{result.content}</p>
          </div>
          <img className="rounded-x" src={result.url} alt="thumb"/>
          <span className="testimonials-author">
								Cảm nhận của {result.name}<br/>
								<em>{result.job}</em>
							</span>
        </div>
      )
    });
    return (
      <div className="content-sm">
        <div className="container ">
          <div className="row">
            <div className="col-md-9">
              <div className="session-1">
                <div className="title-ss-1 text-justify">
                  Phản hồi khách hàng
                </div>
              </div>
              {childFeedback}
              <FeedbackForm/>
            </div>
            <div className="col-md-3">
              <div className="headline-v2 bg-trending"><h2>Bài đăng mới nhất</h2></div>
              <ul className="list-unstyled blog-trending margin-bottom-50">
                {childElements}
              </ul>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
