import React from 'react';
import {render} from 'react-dom';
import Slider from 'react-slick'
import { Link, browserHistory } from 'react-router';

export class Backgroud extends React.Component{
  constructor(){
    super()
  }
  componentWillMount(){
  }

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
              <img className="img-responsive" src="../index/img/bg-components/sinh-trac-mini.jpg" alt="van-tay-hoc-viet-nam"/>
              <div className="carousel-caption">
              </div>
            </Link>
          </div>
          <div className="carousel-content">
            <Link to="/dao-tao" className="item">
              <img className="img-responsive" src="../index/img/bg-components/chuong-trinh-mini.jpg" alt="van-tay-hoc-viet-nam"/>
              <div className="carousel-caption">
              </div>
            </Link>
          </div>
          <div className="carousel-content">
            <Link to="/su-kien" className="item">
              <img className="img-responsive" src="../index/img/bg-components/su-kien-mini.jpg" alt="van-tay-hoc-viet-nam" />
              <div className="carousel-caption">
              </div>
            </Link>
          </div>
          <div className="carousel-content">
            <Link to="/sach-giao-duc" className="item">
              <img className="img-responsive" src="../index/img/bg-components/sach-mini.jpg" alt="van-tay-hoc-viet-nam" />
              <div className="carousel-caption">
              </div>
            </Link>
          </div>
          <div className="carousel-content">
            <Link to="/goc-cha-me" className="item">
              <img className="img-responsive" src="../index/img/bg-components/goc-cha-me-mini.jpg" alt="van-tay-hoc-viet-nam" />
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
              <p>Trở thành một tổ chức hàng đầu Việt Nam trong lĩnh vực Đào tạo kỹ năng - Phát triển tiềm năng con người -
                Tư vấn định hướng giáo dục, nghề nghiệp. Với phương châm hoạt động “Hãy là người cho đi trước” chúng tôi đặt mục tiêu giúp đỡ,
                hỗ trợ, phát triển năng lực nội tại của mỗi trẻ em trên toàn Việt Nam bằng các chương trình đào tạo đặc biệt, các phương pháp
                 kiểm tra khoa học mang tính ứng dụng thực tiễn cao.</p>


            </div>
            <div className="col-md-3 btn-buy animated fadeInRight">
              <Link to="/dao-tao" className="btn-u btn-u-lg"><i className="fa fa-graduation-cap"></i> Tham gia ngay</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
