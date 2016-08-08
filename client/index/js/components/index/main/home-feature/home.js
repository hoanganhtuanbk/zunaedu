import React from 'react';
import {render} from 'react-dom';
import Slider from 'react-slick'
import { Link, browserHistory } from 'react-router';



class SingleItem extends React.Component{

  render(){
    var settings = {
      dots: true,
      speed: 2000,
      autoplay: true,
      lazyLoad: true,
      arrows: false,
      fade: true,
      pauseOnHover: true

    };
    return (
      <section className="section-1">
        <Slider {...settings}>
          <div className="carousel-slide1">
            <div className="carousel-content">
              <h2><i>CLEAN &amp; FRESH</i> <br /> <i>FULLY RESPONSIVE</i> <br /> <i>DESIGN</i></h2>
              <p><i>Lorem ipsum dolor amet</i> <br /> <i>tempor incididunt ut</i> <br /> <i>veniam omnis </i></p>
              <img src="../index/img/bg-section1/slider-1-1.png" />
            </div>
          </div>
          <div className="carousel-slide2">
            <div className="carousel-content">
              <h2><i>CLEAN &amp; FRESH</i> <br /> <i>FULLY RESPONSIVE</i> <br /> <i>DESIGN</i></h2>
              <p><i>Lorem ipsum dolor amet</i> <br /> <i>tempor incididunt ut</i> <br /> <i>veniam omnis </i></p>
              <img src="../index/img/bg-section1/slider-1-1.png" />
            </div>

          </div>
        </Slider>
      </section>
    );
  }
}
class WhatItAbout extends React.Component{
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
class MultipleItems extends React.Component{

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
          <div className="headline"><h2>What people say</h2></div>
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


class Highlights extends React.Component{
  render(){
    return(
      <div className="bg-header">
        <div className="content-header text-center">
          <h2 className="section-title stm-title">Highlights</h2>
          <div className="line-bottom">
            <div className="line">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Menu extends React.Component{
  constructor(){
    super();
    this.state = {selected: ''}
  }
  setMenuActive(menu) {
    this.setState({selected  : menu})
  }

  isActive(value){
    return ((value===this.state.selected) ?'active tab-item':'tab-item');
  }
  render(){
    return(
      <div className="container">
        <div className="headline">
          <Link to="/home" className="title-text"><h2>Featured News</h2></Link>
        </div>

      </div>
    )
  }
}

class OurClients extends React.Component{

  render(){
    var settings = {
      dots: false,
      speed: 3000,
      autoplay: true,
      lazyLoad: true,
      slidesToShow: 7,
      arrows: false,
      responsive: [ { breakpoint: 768, settings: { slidesToShow: 3 } }, { breakpoint: 1024, settings: { slidesToShow: 5 } }, { breakpoint: 1200, settings: 7 } ]
    };
    return (
      <section className="section-5">
       <div className="container our-clients">
         <div className="headline"><h2>Our Clients</h2></div>
         <Slider {...settings}>
           <div >
             <img src="../index/img/ourClients/1.png" />
           </div>
           <div >
             <img src="../index/img/ourClients/2.png" />
           </div>
           <div >
             <img src="../index/img/ourClients/3.png" />
           </div>
           <div >
             <img src="../index/img/ourClients/4.png" />
           </div>
           <div >
             <img src="../index/img/ourClients/5.png" />
           </div>
           <div >
             <img src="../index/img/ourClients/6.png" />
           </div>
           <div >
             <img src="../index/img/ourClients/7.png" />
           </div>
           <div >
             <img src="../index/img/ourClients/8.png" />
           </div>
           <div >
             <img src="../index/img/ourClients/9.png" />
           </div>
         </Slider>
       </div>
      </section>
    );
  }
}


export class HomePage extends React.Component{

  render(){

    return (
      <div className="section">
        <SingleItem/>
        <div className="purchase">
          <div className="container overflow-h">
            <div className="row">
              <div className="col-md-9 animated fadeInLeft">
                <span>Unify is a clean and fully responsive incredible Template.</span>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi  vehicula sem ut volutpat. Ut non libero magna fusce condimentum eleifend enim a feugiat corrupti quos.</p>
              </div>
              <div className="col-md-3 btn-buy animated fadeInRight">
                <a href="#" className="btn-u btn-u-lg"><i className="fa fa-cloud-download"></i> Download Now</a>
              </div>
            </div>
          </div>
        </div>
        <section className="section-3">
          <Menu />
          <div className="container">
            {this.props.children}
          </div>
        </section>
        <WhatItAbout />
        <MultipleItems />
        <OurClients />
      </div>
    );
  }
}
