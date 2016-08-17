import React from 'react';
import {render} from 'react-dom';
import Slider from 'react-slick'
import { Link, browserHistory } from 'react-router';

export class Backgroud extends React.Component{

  render(){
    var settings = {
      dots: true,
      speed: 1000,
      autoplay: true,
      lazyLoad: true,
      arrows: false,
      fade: true,
    };
    return (
      <section className="section-1">
        <Slider {...settings}>
          <div className="carousel-content">
            <Link to="/van-tay-hoc" className="item active">
              <img className="img-responsive" src="../index/img/bg-section1/sinhtrac.jpg" alt=""/>
              <div className="carousel-caption">
              </div>
            </Link>
          </div>
          <div className="carousel-content">
            <Link to="/chuong-trinh" className="item">
              <img className="img-responsive" src="../index/img/bg-section1/chuongtrinhgiaoduc.jpg" alt=""/>
              <div className="carousel-caption">
              </div>
            </Link>
          </div>
          <div className="carousel-content">
            <Link to="/su-kien" className="item">
              <img className="img-responsive" src="../index/img/bg-section1/sukien.jpg" alt="" />
              <div className="carousel-caption">
              </div>
            </Link>
          </div>
          <div className="carousel-content">
            <Link to="/sach-giao-duc" className="item">
              <img className="img-responsive" src="../index/img/bg-section1/sachgiaoduc.jpg" alt="" />
              <div className="carousel-caption">
              </div>
            </Link>
          </div>
          <div className="carousel-content">
            <Link to="/goc-cha-me" className="item">
              <img className="img-responsive" src="../index/img/bg-section1/gocchame.jpg" alt="" />
              <div className="carousel-caption">
              </div>
            </Link>
          </div>
        </Slider>
      </section>
    );
  }
}
