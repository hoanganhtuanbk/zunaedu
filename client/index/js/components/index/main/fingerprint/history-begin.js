import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';


export class HistoryBegin extends React.Component{
  render(){
    return(
      <div className="col-md-9">
        <div className="news-v3 bg-color-white margin-bottom-60">
          <div className="news-v3-in">
            <ul className="list-inline posted-info">
              <li>By <a href="#">Admin</a></li>
              <li>In <a href="#">Khai niem</a></li>
              <li>Posted January 24, 2015</li>
            </ul>
            <h2><a href="#">Lịch Sử Nghiên Cứu Sinh Trắc Học Dấu Vân Tay</a></h2>
            <p>Năm 1823: Joannes Evangelista Purkinji tìm thấy các mô hình và hình dạng của ngón tay.</p>
            <p>Năm 1880, Henry Faulds và W.J Herschel, trong một công trình công bố tên là “Nature”, đã đề xuất sử dụng vân tay như là phương thức độc đáo để xác định bản chất của con người.</p>
            <p>Cuối thế kỉ 19 năm 1880, Tiến sĩ Henry Faulds đưa ra lý luận số lượng vân tay TRC (Total Ridge Count) có thể dự đoán tương đối chính xác mức độ phụ thuộc của chúng vào gen di truyền của con người được thừa kế trong đó có liên quan đến tiềm năng và trí tuệ của con người.
            </p>
            <img className="img-responsive medium-width" src="../index/img/concept/img13.jpg" alt="" />
            <p>Năm 1892, ông Francis Galton đã chỉ ra rằng: vân tay của những cặp song sinh, anh em và di truyền cùng dòng máu thì có sự tương đồng. Chính điều này đã mở ra ngành nhân học.</p>
            <p>Năm 1902, Harris Hawthorne Wilder đã thiết lập hệ thống cơ bản của môn hình thái học, di truyền học, và nghiên cứu trên chủng loại lòng bàn tay và vân tay.
              Năm 1926, Harold Cummins đề xuất “Dermatoglyphics” (Sinh trắc học dấu vân tay) như là một thuật ngữ cho chuyên ngành nghiên cứu dấu vân tay tại Hiệp hội hình thái học của Mỹ. Từ đó, Dermatoglyphics chính thức trở thành một ngành nghiên cứu riêng biệt.</p>
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
