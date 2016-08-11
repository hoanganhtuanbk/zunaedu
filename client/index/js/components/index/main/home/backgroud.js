import React from 'react';
import {render} from 'react-dom';
import Slider from 'react-slick'
import { Link, browserHistory } from 'react-router';

export class Backgroud extends React.Component{

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
            <div className="carousel-content container">
              <h2><i>CLEAN &amp; FRESH</i> <br /> <i>FULLY RESPONSIVE</i> <br /> <i>DESIGN</i></h2>
              <p><i>Lorem ipsum dolor amet</i> <br /> <i>tempor incididunt ut</i> <br /> <i>veniam omnis </i></p>
              <img src="../index/img/bg-section1/slider-1-1.png" />
            </div>
          </div>
          <div className="carousel-slide2">
            <div className="carousel-content container">
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
export class Purchase extends React.Component{
  render(){
    return(
      <div className="purchase">
        <div className="container overflow-h">
          <div className="row">
            <div className="col-md-9 animated fadeInLeft">
              <span>Zuna là đơn vị hàng đầu trong lĩnh vực Đào tạo - Phát triển con người .</span>
              <p>Với phương châm hoạt động “Hãy là người tiên phong” mục tiêu của chúng tôi là khai sáng, hỗ trợ, phát triển tiềm năng của trẻ nhỏ, bằng các chương trình đào tạo đặc biệt, các phương pháp kiểm tra khoa học mang tính ứng dụng thực tiễn cao.</p>
            </div>
            <div className="col-md-3 btn-buy animated fadeInRight">
              <a href="#" className="btn-u btn-u-lg"><i className="fa fa-graduation-cap"></i> Tham gia ngay</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
