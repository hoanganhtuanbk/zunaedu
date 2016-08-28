import React from 'react';
import {render} from 'react-dom';
import Slider from 'react-slick'
import { Link, browserHistory } from 'react-router';

export class WhatPeopleSay extends React.Component{

  render(){
    var settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      arrows: false,
      pauseOnHover: true

    };
    return (
      <section className="section-4">
        <div className="container">
          <div className="headline"><h2></h2></div>
          <div className="row">
            <Slider {...settings}>
              <div className="feedback">
                <div className="carousel-header">
                  <img className="rounded-x img-bordered" src="../index/img/feedback/bill.jpg" />
                  <div className="testimonials-v3-title">
                    <p>David Case</p>
                    <span>Web Developer, Google</span>
                  </div>
                </div>
                <div className="carousel-content">
                  <p>I just wanted to tell you how much I like to use Unify - <strong>it's so sleek and elegant!</strong>
                    The customisation options you implemented are countless, and I feel sorry I can't use them all. Good job, and keep going! </p>
                </div>

              </div>
              <div className="feedback">
                <div className="carousel-header">
                  <img className="rounded-x img-bordered" src="../index/img/feedback/dan.jpg" />
                  <div className="testimonials-v3-title">
                    <p>David Case</p>
                    <span>Web Developer, Google</span>
                  </div>
                </div>
                <div className="carousel-content">
                  <p>I just wanted to tell you how much I like to use Unify - <strong>it's so sleek and elegant!</strong>
                    The customisation options you implemented are countless, and I feel sorry I can't use them all. Good job, and keep going! </p>
                </div>

              </div>
              <div className="feedback">
                <div className="carousel-header">
                  <img className="rounded-x img-bordered" src="../index/img/feedback/eric.png" />
                  <div className="testimonials-v3-title">
                    <p>David Case</p>
                    <span>Web Developer, Google</span>
                  </div>
                </div>
                <div className="carousel-content">
                  <p>I just wanted to tell you how much I like to use Unify - <strong>it's so sleek and elegant!</strong>
                    The customisation options you implemented are countless, and I feel sorry I can't use them all. Good job, and keep going! </p>
                </div>

              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
