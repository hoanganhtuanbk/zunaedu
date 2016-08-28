import React from 'react';
import {render} from 'react-dom';
import Slider from 'react-slick'
import { Link, browserHistory } from 'react-router';
import Stores from '../../../stores/stores'


class LeftNavButton extends React.Component {
  render() {
    return  <a onClick={this.props.onClick} className="left slick-control">
      <i className="fa fa-angle-left"></i>
    </a>
  }
}
class RightNavButton extends React.Component {
  render() {
    return <a onClick={this.props.onClick} className="right slick-control">
      <i className="fa fa-angle-right"></i>
    </a>
  }
}
export class WhatItAbout extends React.Component{
  constructor(){
    super();
    this.state = {
      events : []
    }
  }

  componentWillMount(){
    this.getEventDatas(this)
  }

  getEventDatas(t){
    Stores.find('/events',{
      order: 'id DESC',
      limit: 3 },function(datas){
      t.setState({events: datas})
    })
  }

  render(){
    var settings = {
      dots: false,
      speed: 1000,
      autoplay: true,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true
    };
    const childEvents = this.state.events.map(function(event,index){
      return(
        <Link to={`/su-kien/${event.key}`} key={index} className="upcoming-event">
          <div className="stm-event__body">
            <div className="stm-event__left">
              <div className="stm-event__date">
                <div className="stm-event__date-day">{event.date}</div>
                <div className="stm-event__date-month">{event.month}</div>
              </div>
            </div>
            <div className="stm-event__content">
              <div className="stm-event__meta">
                <ul>
                  <li>
											<span className="stm-event__time"><i className="fa fa-clock-o"></i>
                        {event.time}										</span>
                  </li>
                  <li><span className="stm-event__venue"><i className="fa fa-map-marker"></i>{event.address}</span></li>
                </ul>
              </div>
              <h5 className="stm-event__title">{event.title}</h5>
            </div>
          </div>

          <img src={event.url} />
        </Link>

      )
    })
    return(
      <section className="section-2">
        <div className="container">
          <div className="row margin-bottom-30">
            <div className="col-md-8 md-margin-bottom-40">
              <div className="headline"><h2>Đến với Zuna Education</h2></div>
              <div className="row">
                <div className="col-sm-4">
                  <img className="img-responsive" src="../index/img/info/giatricotloi.png" alt=""/>
                </div>
                <div className="col-sm-8">
                  <ul className="list-unstyled margin-bottom-20">
                    <li>Với sứ mệnh mang chất lượng dịch vụ, sản phẩm và xây dựng một nền tảng vững chắc cân bằng về Tâm – Thân – Trí cho khách hàng, ZenuEdu cũng tạo dựng cho mình những giá trị cốt lỗi bền vững:</li>
                    <li><i className="fa fa-check color-green"></i><strong>Tâm</strong>: Xây dựng và phát triển công ty từ TÂM.
                    </li>
                    <li><i className="fa fa-check color-green"></i><strong>Tín</strong>: Bảo vệ chữ TÍN được đặt lên hàng đầu.
                    </li>
                    <li><i className="fa fa-check color-green"></i><strong>Trí</strong>: Xem SÁNG TẠO là sức sống.
                    </li>
                    <li><i className="fa fa-check color-green"></i><strong>Nhân</strong>: Xây dựng các mối quan hệ với tinh thần nhân văn, là tài sản quý giá nhất.
                    </li>
                    <li><i className="fa fa-check color-green"></i><strong>Tốc</strong>: Suy nghĩ nhanh - Quyết định nhanh – Hành động nhanh .
                    </li>
                  </ul>
                </div>
              </div>

              <blockquote className="hero-unify">
                <p>"Bạn không thể giúp người khác thành công, bạn chỉ có thể TẠO ĐIỀU KIỆN và KHÍCH LỆ để người MUỐN THÀNH CÔNG thành công. </p>
                <small>C- John Maxwell</small>
              </blockquote>
            </div>

            <div className="col-md-4 slide-event">
              <div className="headline"><h2>Upcoming Event</h2></div>
              <Slider {...settings} prevArrow={ <LeftNavButton /> } nextArrow={<RightNavButton />}>
                {childEvents}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
