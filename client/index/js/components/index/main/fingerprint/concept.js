import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';


export class Concept extends React.Component{
  render(){
    return(
      <div className="col-md-9">
        <div className="news-v3 bg-color-white margin-bottom-60">
          <img className="img-responsive full-width" src="../index/img/concept/img12.jpg" alt="" />
          <div className="news-v3-in">
            <ul className="list-inline posted-info">
              <li>By <a href="#">Admin</a></li>
              <li>In <a href="#">Khai niem</a></li>
              <li>Posted January 24, 2015</li>
            </ul>
            <h2><a href="#">DERMATOGLYPHICS Là Gì?</a></h2>
            <p>Dựa trên những thành tựu nghiên cứu về tiềm năng con người, các nhà khoa học trên thế giới đã đúc kết công trình nghiên cứu về ngành khoa học dấu vân tay (Dermatoglyphics) có liên quan đến sự phát triển và hình thành não bộ con người. Các kiểm chứng cho thấy sinh trắc học dấu vân tay là cách duy nhất để giải các mật mã của não bộ.</p>
            <p>Bằng cách phân tích sinh trắc dấu vân tay (Dermatoglyphics), chúng tôi có thể giúp bạn khám phá ra các vị trí tiềm năng vượt trội được phân bổ trên não bộ. Từ đó có thể xác định được điểm mạnh và điểm yếu trong tố chất bẩm sinh của bạn, giúp bạn cân bằng hệ não bộ bằng các phương pháp giáo dục hỗ trợ tác động từ bên ngoài.</p>
            <p>Vân tay được cấu tạo bởi những lớp đệm da tay. Những lớp đệm có kích cỡ nhỏ sẽ tạo ra những vân dạng vòm; những lớp đệm kích cỡ lớn hơn sẽ tạo ra vân hình móc hoặc tròn. Nếu lớp đệm bị lệch thì nó sẽ tạo ra vân tay không đối xứng. Dấu vân tay của mỗi người là không đổi trong suốt cuộc đời. Người ta có thể làm phẫu thuật thay da ngón tay, nhưng chỉ sau một thời gian dấu vân tay lại được hồi phục như ban đầu.
            </p>
            <ul className="post-shares">
              <li>
                <a href="#">
                  <i className="rounded-x icon-speech"></i>
                  <span>26</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="rounded-x icon-share"></i>
                  <span>98</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="rounded-x icon-heart"></i>
                  <span>30</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="blog-post-quote bg-color-white margin-bottom-60">
          <p>Look deep into nature, and then you will understand everything better.</p>
          <span>- Albert Einstein</span>
        </div>
      </div>
    )
  }
}
