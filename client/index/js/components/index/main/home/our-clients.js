import React from 'react';
import {render} from 'react-dom';
import Slider from 'react-slick'
import { Link, browserHistory } from 'react-router';

export class OurClients extends React.Component{

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
