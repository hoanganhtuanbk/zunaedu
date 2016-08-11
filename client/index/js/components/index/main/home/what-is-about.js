import React from 'react';
import {render} from 'react-dom';
import Slider from 'react-slick'
import { Link, browserHistory } from 'react-router';

export class WhatItAbout extends React.Component{
  render(){
    var settings = {
      dots: false,
      speed: 3000,
      autoplay: true,
      lazyLoad: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      pauseOnHover: true
    };
    return(
      <section className="section-2">
        <div className="container">
          <div className="row margin-bottom-30">
            <div className="col-md-8 md-margin-bottom-40">
              <div className="headline"><h2>Welcome To ZunaEdu</h2></div>
              <div className="row">
                <div className="col-sm-4">
                  <img className="img-responsive margin-bottom-20" src="../index/img/info/img18.jpg" alt=""/>
                </div>
                <div className="col-sm-8">
                  <p>Unify is an incredibly beautiful responsive Bootstrap Template for corporate and creative professionals. It works on all major web browsers, tablets and phone.</p>
                  <ul className="list-unstyled margin-bottom-20">
                    <li><i className="fa fa-check color-green"></i> Donec id elit non mi porta gravida</li>
                    <li><i className="fa fa-check color-green"></i> Corporate and Creative</li>
                    <li><i className="fa fa-check color-green"></i> Responsive Bootstrap Template</li>
                    <li><i className="fa fa-check color-green"></i> Corporate and Creative</li>
                  </ul>
                </div>
              </div>

              <blockquote className="hero-unify">
                <p>Award winning digital agency. We bring a personal and effective approach to every project we work on, which is why. Unify is an incredibly beautiful responsive Bootstrap Template for corporate professionals.</p>
                <small>CEO, Jack Bour</small>
              </blockquote>
            </div>

            <div className="col-md-4">
              <div className="headline"><h2>Upcoming Event</h2></div>
              <Slider {...settings}>
                <div className="upcoming-event">
                  <div className="stm-event__body">
                    <div className="stm-event__left">
                      <div className="stm-event__date">
                        <div className="stm-event__date-day">15</div>
                        <div className="stm-event__date-month">April</div>
                      </div>
                    </div>
                    <div className="stm-event__content">
                      <div className="stm-event__meta">
                        <ul>
                          <li>
											<span className="stm-event__time"><i className="fa fa-clock-o"></i>
											4:30 pm											</span>
                          </li>
                          <li><span className="stm-event__venue"><i className="fa fa-map-marker"></i>Napoli, Pizarro 41/22</span></li>
                        </ul>
                      </div>
                      <h5 className="stm-event__title"><a href="http://smartyschool.stylemixthemes.com/meeting/henry-cluster-council/">Henry Cluster Council</a></h5>
                      <div className="stm-event__summary"><p>Discussion and community dialogue with school staff, parents and community members.</p>
                      </div>
                    </div>
                  </div>

                  <img src="../index/img/info/img4.jpg" />
                </div>
                <div className="upcoming-event">
                  <div className="stm-event__body">
                    <div className="stm-event__left">
                      <div className="stm-event__date">
                        <div className="stm-event__date-day">15</div>
                        <div className="stm-event__date-month">April</div>
                      </div>
                    </div>
                    <div className="stm-event__content">
                      <div className="stm-event__meta">
                        <ul>
                          <li>
											<span className="stm-event__time"><i className="fa fa-clock-o"></i>
											4:30 pm											</span>
                          </li>
                          <li><span className="stm-event__venue"><i className="fa fa-map-marker"></i>Napoli, Pizarro 41/22</span></li>
                        </ul>
                      </div>
                      <h5 className="stm-event__title"><a href="http://smartyschool.stylemixthemes.com/meeting/henry-cluster-council/">Henry Cluster Council</a></h5>
                      <div className="stm-event__summary"><p>Discussion and community dialogue with school staff, parents and community members.</p>
                      </div>
                    </div>
                  </div>

                  <img src="../index/img/info/img18.jpg" />
                </div>
                <div className="upcoming-event">
                  <div className="stm-event__body">
                    <div className="stm-event__left">
                      <div className="stm-event__date">
                        <div className="stm-event__date-day">15</div>
                        <div className="stm-event__date-month">April</div>
                      </div>
                    </div>
                    <div className="stm-event__content">
                      <div className="stm-event__meta">
                        <ul>
                          <li>
											<span className="stm-event__time"><i className="fa fa-clock-o"></i>
											4:30 pm											</span>
                          </li>
                          <li><span className="stm-event__venue"><i className="fa fa-map-marker"></i>Napoli, Pizarro 41/22</span></li>
                        </ul>
                      </div>
                      <h5 className="stm-event__title"><a href="http://smartyschool.stylemixthemes.com/meeting/henry-cluster-council/">Henry Cluster Council</a></h5>
                      <div className="stm-event__summary"><p>Discussion and community dialogue with school staff, parents and community members.</p>
                      </div>
                    </div>
                  </div>

                  <img src="../index/img/info/img24.jpg" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
