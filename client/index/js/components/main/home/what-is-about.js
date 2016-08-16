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
              <div className="headline"><h2>Đến với Zuna Education</h2></div>
              <div className="row">
                <div className="col-sm-4">
                  <img className="img-responsive margin-bottom-20" src="../index/img/info/giatricotloi.png" alt=""/>
                </div>
                <div className="col-sm-8">
                  <ul className="list-unstyled margin-bottom-20">
                    <li><i className="fa fa-check color-green"></i><strong>Tâm</strong>: Xây dựng và phát triển công ty từ TÂM, mỗi nhân viên phải có đạo đức kinh doanh, lấy khách hàng làm trung tâm.
                    </li>
                    <li><i className="fa fa-check color-green"></i><strong>Tín</strong>: Bảo vệ chữ TÍN được đặt lên hàng đầu, luôn chuẩn bị đầy đủ và nỗ lực hết mình để đảm bảo đúng cam kết, lời nói phải đi đôi với hành động.
                    </li>
                    <li><i className="fa fa-check color-green"></i><strong>Trí</strong>: Xem SÁNG TẠO là sức sống, là đòn bẩy phát triển, đề cao tinh thần dám nghĩ, dám làm, tư duy tích cực, chủ trương xây dựng doanh nghiệp là một ngôi trường, mỗi nhân viên là một học trò cũng là một người thầy.
                    </li>
                    <li><i className="fa fa-check color-green"></i><strong>Nhân</strong>: Xây dựng các mối quan hệ với tinh thần nhân văn; coi trọng các thành viên trong doanh nghiệp  như là tài sản quý giá nhất. Xây dựng con người dựa trên sự công bằng, liêm chính. Tạo lập một doanh nghiệp đoàn kết phát huy sức mạnh nội tại của từng cá nhân, thông qua đó phát huy sức mạnh tối ưu của doanh nghiệp. Xây dựng con người – con người xây dựng kinh doanh.
                    </li>
                    <li><i className="fa fa-check color-green"></i><strong>Tốc</strong>: Suy nghĩ nhanh - Quyết định nhanh – Hành động nhanh .
                    </li>
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
