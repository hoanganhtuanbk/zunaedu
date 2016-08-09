import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';


export class Feedback extends React.Component{
  render(){
    return(
      <div className="col-md-9 ">
        <div className="testimonials-v4 feedback md-margin-bottom-50">
          <div className="testimonials-v4-in">
            <p>Tôi đánh giá cao công nghệ sinh trắc vân tay. Sau khi phân tích bài báo cáo phân tích cho bản thân, con trai và nhân viên, tôi càng hiểu rõ hơn về sự khác biệt ở mỗi các nhân. Đặc biệt, thông qua bài báo cáo giúp tôi biết được phong cách giao tiếp phù hợp với con mình hơn. Tôi rất hài lòng về dịch vụ này. Tôi đánh giá cao độ chính xác của bài báo cáo phân tích là 95%</p>
          </div>
          <img className="rounded-x" src="../index/img/feedback/img5.jpg" alt="thumb" />
							<span className="testimonials-author">
								Cảm nhận của Thầy Duy Hải<br/>
								<em>Web Developer, <a href="#">Google Inc.</a></em>
							</span>
        </div>
      </div>
    )
  }
}
