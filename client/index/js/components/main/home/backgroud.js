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
              <img className="img-responsive" src="../index/img/bg-section1/vantay.jpg" alt=""/>
              <div className="carousel-caption">
              </div>
            </Link>
          </div>
          <div className="carousel-content">
            <Link to="/chuong-trinh" className="item">
              <img className="img-responsive" src="../index/img/bg-section1/chuongtrinh.jpg" alt=""/>
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
              <img className="img-responsive" src="../index/img/bg-section1/sach.jpg" alt="" />
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
