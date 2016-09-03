import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import {OurClients} from '../main/home/our-clients'

export class Footer extends React.Component{
  render (){

    return (
      <div>
        <OurClients />
        <div className="footer-v1">
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-3 md-margin-bottom-40">
                  <a href="index.html"> Công ty TNHH Đầu Tư Phát Triển Giáo Dục ZuNa</a>
                  <p>Tầm nhìn:</p>

                  <p> Trở thành một tổ chức hàng đầu Việt Nam trong lĩnh vực Đào tạo kỹ năng - Phát triển tiềm năng con người - Tư vấn định hướng giáo dục, nghề nghiệp.</p>

                </div>
                <div className="col-md-3 md-margin-bottom-40">
                  <div className="posts">
                    <div className="headline"><h2>Bài mới đăng</h2></div>
                    <ul className="list-unstyled latest-list">
                      <li>
                        <a href="#">Incredible content</a>
                        <small>May 8, 2014</small>
                      </li>
                      <li>
                        <a href="#">Best shoots</a>
                        <small>June 23, 2014</small>
                      </li>
                      <li>
                        <a href="#">New Terms and Conditions</a>
                        <small>September 15, 2014</small>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-3 md-margin-bottom-40">
                  <div className="headline"><h2>Liên kết hữu ích</h2></div>
                  <ul className="list-unstyled link-list">
                    <li><Link to="/">Trang chủ</Link><i className="fa fa-angle-right"></i></li>
                    <li><Link to="/van-tay-hoc">Vân tay học</Link><i className="fa fa-angle-right"></i></li>
                    <li><Link to="/chuong-trinh">Chương trình</Link><i className="fa fa-angle-right"></i></li>
                    <li><Link to="/su-kien">Sự kiện</Link><i className="fa fa-angle-right"></i></li>
                    <li><Link to="/sach-giao-duc">Sách giáo dục</Link><i className="fa fa-angle-right"></i></li>
                    <li><Link to="/goc-cha-me">Góc cha mẹ</Link><i className="fa fa-angle-right"></i></li>
                    <li><Link to="/lien-he">Liên hệ</Link><i className="fa fa-angle-right"></i></li>
                  </ul>
                </div>

                <div className="col-md-3 map-img md-margin-bottom-40">
                  <div className="headline"><h2>Liên hệ</h2></div>

                  <address className="md-margin-bottom-40">
                    Số 88 Hùng Vương
                    <br />
                    Đông Hà, Quảng Trị, Việt Nam<br />
                    Phone: 0935746886  –  0913905355<br />
                    Email: <a href="mailto:info@anybiz.com" className="">Zunavietnam@gmail.com</a>
                  </address>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p>
                    Zunaedu.com © Copyright 2016.
                    <a href="#">Thiết kế bởi QTN Silicon </a> | <a href="#">Chapter của QTN Global</a>
                  </p>
                </div>

                <div className="col-md-6">
                  <ul className="footer-socials list-inline">
                    <li>
                      <a href="#" className="tooltips">
                        <i className="fa fa-facebook"> </i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tooltips">
                        <i className="fa fa-google-plus"> </i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tooltips">
                        <i className="fa fa-twitter"> </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
