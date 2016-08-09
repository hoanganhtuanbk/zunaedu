import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Slider from 'react-slick'


export class Application extends React.Component{
  render(){

    var settings = {
      dots: true,
      speed: 3000,
      autoplay: true,
      lazyLoad: true,
    };
    return(
      <div className="col-md-9">
        <div className="news-v3 bg-color-white margin-bottom-60">
          <div className="">
            <Slider {...settings}>
              <div className="upcoming-event up-app">
                <img src="../index/img/info/img4.jpg" />
              </div>
              <div className="upcoming-event up-app">
                <img src="../index/img/info/img18.jpg" />
              </div>
              <div className="upcoming-event up-app">
                <img src="../index/img/info/img24.jpg" />
              </div>
            </Slider>
          </div>

          <div className="news-v3-in">
            <ul className="list-inline posted-info">
              <li>By <a href="#">Admin</a></li>
              <li>In <a href="#">Khai niem</a></li>
              <li>Posted January 24, 2015</li>
            </ul>
            <h2><a href="#">Lợi Ích Của Bài Phân Tích Dấu Vân Tay</a></h2>
            <h3>Phụ Huynh</h3>
            <ul>Cha mẹ là người sinh thành và dưỡng dục con cái nên là người hiểu về con em mình hơn ai hết. Tuy nhiên, cần bao nhiêu thời gian để bạn có thể phát hiện được tố chất bẩm sinh của trẻ? Ngay hôm nay, 10 năm sau hay lâu hơn nữa?

              <li> Làm thế nào để giao tiếp với con hiệu quả nhất?</li>

              <li>Tố chất tài năng con mình là gì? Làm sao để phát hiện?</li>

              Bạn nên đầu tư cho con học khoá học nào vừa phát huy tài năng của con vừa tiết kiệm thời gian và chi phí cho bạn?</ul>
            <h3>Trẻ Em</h3>

            <ul>
              <li>Giúp khám phá năng lực cốt lõi, bẩm sinh cũng như điểm mạnh, điểm yếu của trẻ</li>

              <li>Xác định trí thông minh vượt trội của trẻ theo mô hình 8 trí thông minh của Giáo sư Howard Garner</li>

              <li>Nhận biết cách tiếp thu tốt nhất của trẻ từ đó đề ra phương pháp dạy phù hợp</li>

              <li>Xây dựng cho trẻ sự tự tin trong học tập và giao tiếp</li>
            </ul>

          </div>
        </div>
      </div>
    )
  }
}
