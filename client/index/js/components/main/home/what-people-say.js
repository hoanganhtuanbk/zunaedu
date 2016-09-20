import React from 'react';
import {render} from 'react-dom';
import Slider from 'react-slick'
import { Link, browserHistory } from 'react-router';
import Stores from '../../../stores/stores'

export class WhatPeopleSay extends React.Component{
  constructor(){
    super();
    this.state = {
      feedbacks: []
    }
  }

  componentWillMount(){
    this.getFeedbackDatas(this)
  }
  getFeedbackDatas(t){
    Stores.find('/feedbacks',{order:'id DESC',limit: 5}, function(feedbacks){
      t.setState({feedbacks: feedbacks})
    })
  }
  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      autoplay: true,
      slidesToScroll: 1,
      arrows: false,
      pauseOnHover: true,
      slidesToShow: 3,
      responsive: [ { breakpoint: 768, settings: { slidesToShow: 1 } }, { breakpoint: 1024, settings: { slidesToShow: 2 } }, { breakpoint: 1200, settings: 3 } ]
    };
    const limitContent= 315;
    const childFeedback = this.state.feedbacks.map(function(result, index){
      return(
        <div  className="instructor">
          <div key={result.id} className="instructor-item">
            <div className="avatar">
              <img alt="" src={result.url}  className="avatar avatar-65 photo" height="65" width="65"/>
            </div>
            <div className="instructor-info">
              <h4 className="name">{result.name}</h4>
              <p className="job">{result.job}</p>
            </div>
            <div className="description">{
              `${result.content.substr(0, 200)}...`
            }</div><Link to="/van-tay-hoc/phan-hoi" className="readmore btn-u btn-u-sm">Xem thêm</Link>
          </div>
        </div>
      )
    });
    return (
      <section className="section-4 bg-green">
        <div className="container">
          <div className="row">
            <Slider {...settings}>
                {childFeedback}
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
