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
                  <a href="index.html">Zuna Edu</a>
                  <p>Tầm nhìn:</p>

                  <p> Trở thành một tổ chức hàng đầu Việt Nam trong lĩnh vực Đào tạo kỹ năng - Phát triển tiềm năng con người - Tư vấn định hướng giáo dục, nghề nghiệp.</p>
                  <p>Với phương châm hoạt động “Hãy là người cho đi trước” chúng tôi đặt mục tiêu giúp đỡ, hỗ trợ, phát triển tiềm năng của mỗi trẻ em trên toàn Việt Nam.</p>

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
                  <div className="headline"><h2>Useful Links</h2></div>
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
                  <div className="headline"><h2>Contact Us</h2></div>
                  <address className="md-margin-bottom-40">
                    25, Lorem Lis Street, Orange<br />
                    California, US<br />
                    Phone: 800 123 3456<br />
                    Fax: 800 123 3456<br />
                    Email: <a href="mailto:info@anybiz.com" className="">info@anybiz.com</a>
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
                    2016 © All Rights Reserved.
                    <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
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
