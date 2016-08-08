import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';


export class Concept extends React.Component{
  render(){
    return(
      <div className="package ">
          <div className="col-md-12">
              <div className="wpb_wrapper">
                <h2 className="stm-title stm-font_color_dark-blue stm-title_sep_bottom">

                  SINH TRẮC HỌC DẤU VÂN TAY LÀ GÌ?
                </h2>
                <div className="stm-separator stm-clearfix stm-separator_type_title">
                  <div className="stm-separator__line stm-border-b_color_dark-blue"></div>
                </div>
                <div className="stm-blockquote">
                  <div className="stm-blockquote__content">

                    <div className="stm-blockquote__body">
                      <p>
                        Công nghệ Sinh trắc học (Biometric) là một công nghệ sử dụng những thuộc tính vật lý hoặc các mẫu hành vi, các đặc điểm sinh học đặc trưng như dấu vân tay, mẫu mống mắt, giọng nói, khuôn mặt, dáng đi,… để nhận diện con người.
                        <strong>Sinh trắc học là một công cụ kiểm tra cá nhân hữu hiệu chưa từng có trong lịch sử.</strong></p>
                      <img src="../index/img/concept/concept2.png" width={300} />
                      <p></p>
                      <p>Công nghệ sinh trắc học được áp dụng phổ biến và lâu đời nhất là công nghệ nhận dạng vân tay. Dấu vân tay là một đặc điểm quan trọng để phân biệt giữa người này và người khác. Chính vì vậy, sự phát triển của công nghệ thông tin có thể giúp thu nhận và ghi nhớ được hàng triệu các ghi chép dưới dạng số hoá. Kỹ thuật này được đánh giá sẽ là chìa khoá của một cuộc cách mạng công nghệ mới, khi những thiết bị có khả năng nhận dạng vân tay để bảo vệ dữ liệu được ứng dụng ngày càng nhiều.
                      </p>
                      <p>Nguyên lý hoạt động của Công nghệ nhận dạng vân tay là khi đặt ngón tay lên trên một thiết bị nhận dạng dấu vân tay, ngay lập tức thiết bị này sẽ quét hình ảnh ngón tay đó và đối chiếu các đặc điểm của ngón tay đó với dữ liệu đã được lưu trữ trong hệ thống. Quá trình xử lý dữ liệu sẽ được thiết bị chuyển sang các dữ liệu số và ra thông báo rằng dấu vân tay đó là hợp lệ hay không hợp lệ để cho phép hệ thống thực hiện các chức năng tiếp theo.</p>
                      <img src="../index/img/concept/concept3.jpg" width={300} />
                      <footer><strong>Mrs Joanna McQuaid</strong>, Principal</footer>
                    </div>
                  </div>
                </div>
                <div className="stm-spacing"></div>
              </div>
          </div>
      </div>
    )
  }
}
