import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import {HeaderPage} from '../src/header-page'
import Stores from '../../../stores/stores'
import Slider from 'react-slick'


class VideoGioiThieu extends React.Component{
  render(){
    return(
      <div className="container ">
        <div className="watch-video-intro">
          <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-4">
              <div className="column-inner">
                <button className="btn btn-active" >XEM VIDEO CLIP GIỚI THIỆU</button>
              </div>
            </div>
            <div className="col-md-4">
            </div>
          </div>
        </div>
      </div>

    )
  }
}
class KichHoatTiemNang extends React.Component{
  render(){
    return(
      <div className="session-1 container">
        <div className="title-ss-1 text-justify">
          Kích hoạt tiềm năng vượt trội bên trong bạn
        </div>
        <div className="content-ss-1">
          <div className="row">
            <div className="col-md-6 column-inner ">
                <p className="text-justify">Bạn có bao giờ tự hỏi: “Tại sao có những người, thành công đến với họ dường như dễ dàng hơn những người khác? Yếu tố gì giúp họ vượt lên nhanh và sớm như vậy trong khi đa số mọi người vẫn loay hoay ở phía sau?”</p>
                <p className="text-justify">Trong bài nói chuyện nổi tiếng của mình, nhà giáo dục người Anh, người được chính Nữ hoàng Anh phong tước hiệp sĩ thời hiện đại – Ngài Ken Robinson – đã từng chia sẻ rằng: <strong>Khủng hoảng lớn nhất chúng ta đang gặp hôm nay không phải là khủng hoảng về tài nguyên thiên nhiên mà là khủng hoảng về tài nguyên con người. Chúng ta lãng phí tài năng của mình bởi vì rất nhiều người trải qua cả cuộc đời của mình không biết tài năng tiềm ẩn bên trong của mình là gì.</strong></p>
            </div>
            <div className="col-md-6 column-inner">
              <div className="text-center ">
                <img width="575" height="235" src="../index/img/van-tay-hoc/1.png" className="" alt="DMIT_anhminhhoa"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
class TieuDe extends React.Component{
  render(){
    return(
      <div className="session-2">
        <div className="title-ss-2">
          <h3 className="text-center">Sinh Trắc Vân Tay Đa Trí Thông Minh (DMIT) là gì?</h3>
        </div>

      </div>
    )
  }
}
class NoiDungGioiThieu extends React.Component{
  render(){
    return(
      <div className="session-3 container">
        <div className="title-ss-3 column-inner">
            <h5 className="text-justify">Trong xã hội, chỉ có rất ít người may mắn sớm phát hiện ra tiềm năng của bản thân, từ đó họ phát huy để đạt được thành công. Đa số còn lại sống cả cuộc đời lãng phí tài năng của mình vì tất cả chỉ dừng lại ở mức tiềm năng, nhiều khi còn không được nhận biết.</h5>
        </div>
        <div className="row">
            <div className="col-md-6">
              <div className="column-inner">

              <div className="video-ss-3">
                <iframe src="https://www.youtube.com/embed/otsWFBYUZ10" frameBorder="0" ></iframe>

              </div>
                </div>
            </div>
            <div className="col-md-6">
              <div className="column-inner">
                <blockquote className="text-justify quote text-big blockquote-reverse"><em>“Tiềm năng con người cũng như tài nguyên thiên nhiên, được chôn vùi rất sâu. Bạn phải nỗ lực tìm kiếm chứ nó không nằm ngay trên bề mặt. Bạn thậm chí phải tạo ra hoàn cảnh để nó có thể được bộc lộ.”&nbsp;</em>(Sir Ken Robinson)</blockquote>
                <p className="text-justify"><strong>Không có con đường đến với thành công dễ dàng nhưng luôn có con đường dễ hơn</strong> (tại sao phải chọn đường khó nhất khi có con đường dễ hơn đó là phát hiện và phát huy tiềm năng bên trong mình). <strong>Sinh Trắc Vân Tay Đa Trí Thông Minh – Dermatoglyphics Multiple Intelligence Test</strong> (gọi tắt <strong>DMIT</strong>) là phương pháp khoa học phân tích dấu vân tay chính xác và mới nhất hiện nay, nhằm xác định những thế mạnh độc đáo của bạn hoặc người thân của bạn. Để từ đó học cách phát huy sao cho hiệu quả nhất.</p>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
class DoiTuongDichVu extends React.Component{
  render(){
    return(
      <div>
        <div className="session-4">
          <div className="title-ss-4">
            <h3 className="text-center">Dịch vụ này dành cho độ tuổi nào?</h3>
          </div>

        </div>
        <div className="session-5 container">
          <div className="title-ss-5">
            <div className="column-inner">
              <h5 className="text-center">Với trẻ em, kỹ thuật <strong>Trắc Vân Tay Đa Trí Thông Minh (DMIT)</strong> sẽ:</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <ul>
                <li>
                  <div className="icon-ss">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                  <div className="text-ss">
                    <p className="text-justify">Giúp cha mẹ <strong>khám phá được những tài năng thiên bẩm</strong> của con và bắt đầu định hướng phát triển từ sớm.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-ss">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                  <div className="text-ss">
                    <p className="text-justify">Giúp cha mẹ hiểu được tương quan giữa các chỉ số divên quan mật thiết đến thành công <strong>IQ, EQ, AQ, CQ</strong> mà con sở hữu.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-ss">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                  <div className="text-ss">
                    <p className="text-justify">Giúp cha mẹ dựa vào <strong>mô hình 8 loại trí thông minh</strong> của Giáo sư Howard Garner xác định loại thông minh của con và định hướng sớm, đặc biệt là trong giai đoạn trước 18 tuổi.</p>
                  </div>
                </li>
              </ul>

            </div>
            <div className="col-md-4">
              <div className="img-ss-5 text-center">
                <img width="315" height="315" src="../index/img/van-tay-hoc/tre-em.png" className="vc_single_image-img attachment-large" alt="DMIT_anh2" />
              </div>
            </div>
            <div className="col-md-4">
              <ul>
                <li>
                  <div className="icon-ss">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                  <div className="text-ss">
                    <p className="text-justify">Giúp cha mẹ xác định các chỉ số đặc biệt khác của con như là: <strong>TFRC</strong> (thể hiện mật độ tế bào thần kinh trên vỏ não), <strong>VAK</strong> (phương pháp tiếp nhận thông tin hiệu quả), <strong>ATD</strong> (tốc độ tiếp thu nhanh chậm), cấu trúc thùy não (thùy trước trán, thùy đỉnh, thùy chẩm, thùy trán, thùy thái dương).</p>

                  </div>
                </li>
                <li>
                  <div className="icon-ss">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                  <div className="text-ss">
                    <p className="text-justify">Giúp cha mẹ <strong>hiểu và có phương pháp</strong> nuôi dạy con phù hợp hơn ngay từ sớm.</p>
                    </div>

                </li>
              </ul>

            </div>
          </div>
        </div>
        <div className="session-5 container">
          <div className="title-ss-5">
            <div className="column-inner">
              <h5 className="text-center">Với người trưởng thành, kỹ thuật <strong>Sinh Trắc Vân Tay Đa Trí Thông Minh (DMIT)</strong> sẽ:</h5>
            </div>
          </div>
          <div className="content-ss-5">
            <div className="row">
              <div className="col-md-4">
                <ul>
                  <li>
                    <div className="icon-ss">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div className="text-ss">
                    <p className="text-justify">Giúp hiểu rõ điểm yếu và <strong>điểm mạnh</strong> của bản thân để định hướng sự nghiệp.</p>
                  </div>
                  </li>
                  <li>
                    <div className="icon-ss">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div className="text-ss">
                      <p className="text-justify">Giúp phát triển điểm mạnh để đạt được <strong>sự tự tin và chuyên nghiệp</strong> cao nhất.</p>

                      </div>
                  </li>
                  <li>
                    <div className="icon-ss">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div className="text-ss">
                      <p className="text-justify">Giúp <strong>tự tin phát huy những tố chất sẵn có</strong> của mình để vươn đến những tầm cao mới trong công việc lẫn cuộc sống.</p>

                      </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <div className="img-ss-5 text-center">
                  <img width="315" height="315" src="../index/img/van-tay-hoc/nguoi-truong-thanh.png" className="vc_single_image-img attachment-large" alt="DMIT_anh2" />

                </div>
              </div>
              <div className="col-md-4">
                <ul>
                  <li>
                    <div className="icon-ss">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div className="text-ss">
                      <p className="text-justify">Giúp <strong>vạch ra mục tiêu rõ ràng hơn</strong> và tin tưởng, tập trung vào mục tiêu của bản thân hơn.</p>

                      </div>
                  </li>
                  <li>
                    <div className="icon-ss">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div className="text-ss">
                      <p className="text-justify">Giúp<strong> lý giải những mâu thuẫn</strong> trong tính cách khiến bạn băn khoăn bấy lâu nay.</p>
                      </div>

                  </li>
                  <li>
                    <div className="icon-ss">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div className="text-ss">
                      <p className="text-justify">Giúp <strong>xây dựng các mối quan hệ tốt hơn</strong> với người xung quanh thông qua việc thấu hiểu cách tư duy và hành động của&nbsp;bản thân bạn.</p>

                      </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="session-5 container">
          <div className="title-ss-5">
            <div className="column-inner">
              <h5 className="text-center">Với gia đình:<strong>Sinh Trắc Vân Tay Đa Trí Thông Minh (DMIT)</strong> sẽ:</h5>
            </div>
          </div>
          <div className="content-ss-5">
            <div className="row">
              <div className="col-md-4">
                <ul>
                  <li>
                    <div className="icon-ss">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div className="text-ss">
                      <p className="text-justify">Giúp cha mẹ thấu hiểu các <strong>năng khiếu bẩm sinh</strong> điểm manh và điểm yếu của con em mình.</p>

                      </div>
                  </li>
                  <li>
                    <div className="icon-ss">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div className="text-ss">
                      <p className="text-justify">Giúp định hướng trẻ phát huy tối đa <strong>tiềm năng</strong></p>
                      </div>

                  </li>

                </ul>
              </div>
              <div className="col-md-4">
                <div className="img-ss-5 text-center">
                  <img width="315" height="315" src="../index/img/van-tay-hoc/gia-dinh.png" className="vc_single_image-img attachment-large" alt="DMIT_anh2" />

                </div>
              </div>
              <div className="col-md-4">
                <ul>

                  <li>
                    <div className="icon-ss">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div className="text-ss">
                      <p className="text-justify">Giúp <strong>tư vấn cải thiện </strong> các bất đồng quan điểm giữa cha mẹ và con trẻ..</p>
                      </div>

                  </li>
                  <li>
                    <div className="icon-ss">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div className="text-ss">
                      <p className="text-justify">Giúp<strong> thấu hiểu </strong> lẫn nhau – Nâng cao giá trị gia đình.</p>
                      </div>

                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="session-5 container">
          <div className="title-ss-5">
            <div className="column-inner">
              <h5 className="text-center">Với tổ chức, cơ quan, doanh nghiệp:<strong>Sinh Trắc Vân Tay Đa Trí Thông Minh (DMIT)</strong> sẽ:</h5>
            </div>
          </div>
          <div className="content-ss-5">
            <div className="row">
              <div className="col-md-4">
                <ul>
                  <li>
                    <div className="icon-ss">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div className="text-ss">
                      <p className="text-justify">Giúp doanh nghiệp <strong>sàng lọc trong tuyển dụng</strong>. Đánh giá năng lực thực hiện công việc và phong cách của ứng viên.</p>
                      </div>

                  </li>
                  <li>
                    <div className="icon-ss">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div className="text-ss">
                      <p className="text-justify">Giúp <strong>khám phá tiềm năng</strong> của nhân viên nhằm bố trí đúng người vào đúng vị trí.</p>
                      </div>

                  </li>
                  <li>
                    <div className="icon-ss">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div className="text-ss">
                      <p className="text-justify">Giúp <strong>phát huy tiềm năng</strong> nhân viên tạo <strong>đột phá</strong> cho doanh nghiệp.</p>

                      </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <div className="img-ss-5 text-center">
                  <img width="315" height="315" src="../index/img/van-tay-hoc/doanh-nghiep.png" className="vc_single_image-img attachment-large" alt="DMIT_anh2" />

                </div>
              </div>
              <div className="col-md-4">
                <ul>
                  <li>
                    <div className="icon-ss">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div className="text-ss">
                      <p className="text-justify">Giúp <strong>tư vấn củng cố nguồn nhân lực. Tìm ra các lãnh đạo tài ba.</strong></p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-ss">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div className="text-ss">
                      <p className="text-justify">Giúp <strong>tư vấn đào tạo</strong>  và <strong>phát triển</strong> nhân sự.</p>

                      </div>
                  </li>
                  <li>
                    <div className="icon-ss">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div className="text-ss">
                      <p className="text-justify">Giúp <strong>tối ưu hóa</strong> chi phí tuyển dụng, đào tạo nhân sự.</p>
                      </div>

                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
class DiemKhacBiet extends React.Component{
  render(){
    return(
      <div>
        <div className="session-7 container">
          <div className="title-ss-7">
            <div className="column-inner">
              <h3 className="text-center">Những điểm <span><strong>ĐẶC BIỆT và KHÁC BIỆT</strong></span> khi làm<strong><br/>
                Sinh Trắc Vân Tay Đa Trí Thông Minh (DMIT)</strong> với Zuna:</h3>
            </div>
          </div>
          <div className="content-ss-7">
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <li>
                    <p className="text-justify">Vốn đã nổi tiếng ở Việt Nam hơn 6 năm qua với việc đầu tư vào chất lượng sản phẩm, từ việc xuất bản sách chất lượng cao đến các khóa đào tạo hàng đầu, Zuna  tiếp tục <strong>cam kết chất lượng cao nhất cho dịch vụ Sinh Trắc Vân Tay Đa Trí Thông Minh (DMIT)</strong> của mình.</p>
                  </li>
                  <li>
                    <p className="text-justify">Mặc dù trong sinh trắc vân tay thì <strong>khâu tư vấn sau khi có kết quả là khâu quan trọng nhất</strong>, nhưng Zuna  vẫn đầu tư bài bản cho khâu phân tích vân tay bằng cách kết hợp với đối tác có chuyên môn cao trong việc phân tích dấu vân tay sử dụng thiết bị, phần mềm và công nghệ được chuyển giao từ Trung Tâm Nghiên Cứu Sinh Trắc Vân Tay Châu Á <strong>(Asian Dermatoglyphics Research Centre – ADRC)</strong> để cho ra kết quả phân tích chính xác nhất. Từ đó đảm bảo<strong> tư vấn kết quả không chỉ chuyên nghiệp mà còn chính xác và cá nhân hóa.</strong></p>
                  </li>
                  <li>
                    <p className="text-justify">Không những vậy, máy móc dù hiện đại đến đâu luôn có những giới hạn nhất định. Cho nên với Zuna , <strong>kết quả phân tích của máy sẽ được kiểm tra một lần nữa kỹ lưỡng bởi con người, để đảm bảo kết quả chính xác nhất cho bạn.</strong></p>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className="img-ss-7 text-center">
                  <img src="https://tgm.cdn.vccloud.vn/wp-content/uploads/2016/02/Sinh-Trac-Van-Tay-TGM-550x480.jpg" className="vc_single_image-img attachment-large" alt="Sinh-Trac-Van-Tay-TGM-550x480"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="session-8">
          <div className="content-ss-8">
            <div className="wrap-ss-8">
              <i className="fa fa-get-pocket" aria-hidden="true"></i>
              <h5 className="text-justify"><strong>Zuna CAM KẾT VỀ VIỆC BẢO MẬT THÔNG TIN DẤU VÂN TAY CHO KHÁCH HÀNG. CÁC MẪU VÂN TAY SAU KHI PHÂN TÍCH SẼ ĐƯỢC TIÊU HỦY ĐỂ ĐẢM BẢO TÍNH BẢO MẬT&nbsp;VÀ SỰ AN TOÀN&nbsp;THÔNG TIN CÁ NHÂN.</strong></h5>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

class QuyTrinh extends React.Component{
  render(){
    return(
      <div className="session-9 ">
        <div className="container">
          <div className="title-ss-9">
            <div className="column-inner">
              <h3 className="text-center">Quy trình làm dịch vụ<br/>
                <strong>Sinh Trắc Vân Tay Đa Trí Thông Minh (DMIT)</strong> tại Zuna :</h3>
            </div>
          </div>
          <div className="content-ss-9">
            <div className="row">
              <div className="col-md-3 text-center">
                <div className="around-icon">
                  <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                </div>

                <h3 className="sub-title-ss-9 ult-responsive">Bước 1</h3>
                <div className="description-ss-9 ult-responsive" ><p></p>
                  <p className="text-center">Khách hàng<strong> lấy dấu vân tay tại văn phòng Zuna </strong>&nbsp;bằng máy scan ở Hà Nội hoặc TP.HCM.<br/>
                    (1 tuần)</p>
                  <p></p>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="around-icon">
                  <i className="fa fa-television" aria-hidden="true"></i>
                </div>


                <h3 className="sub-title-ss-9 ult-responsive">Bước 2</h3>
                <div className="description-ss-9 ult-responsive"><p></p>
                  <p className="text-center">Các chuyên viên<strong>&nbsp;phân tích dấu vân tay bằng hệ thống</strong> máy tính và phần mềm mới nhất.<br/>
                    (1 tuần)</p>
                  <p></p>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="around-icon">
                  <i className="fa fa-check-square-o" aria-hidden="true"></i>

                </div>
                <h3 className="sub-title-ss-9 ult-responsive">Bước 3</h3>
                <div className="description-ss-9 ult-responsive" ><p></p>
                  <p className="text-center"><strong>Chuyên viên phân tích kiểm tra lại lần nữa</strong> để đảm bảo kết quả chính xác nhất.<br/>
                    (1 tuần)</p>
                  <p></p></div>
              </div>
              <div className="col-md-3 text-center">
                <div className="around-icon">
                  <i className="fa fa-users" aria-hidden="true"></i>

                </div>
                <h3 className="sub-title-ss-9 ult-responsive">Bước 4</h3>
                <div className="description-ss-9 ult-responsive"><p></p>
                  <p className="text-center;"><strong>Tư vấn trực tiếp 1-1 với &nbsp;Professional Coach của Zuna </strong> để hiểu rõ về kết quả&nbsp;và ứng dụng.<br/>
                    (1 giờ tiêu chuẩn)</p>
                  <p></p></div>
              </div>
            </div>
          </div>
          <div className="square-ss-9" >
            <div className="header-ss-9">
              <h3 className="text-center">ĐẶC BIỆT</h3>
            </div>
            <div className="description"><p></p>
              <p className="text-justify">Sau buổi tư vấn, khách hàng sẽ nhận được <strong>bản báo cáo giấy</strong> (được in như một quyển sách dành riêng cho bạn), <strong>file mềm PDF</strong> và <strong>file ghi âm toàn bộ buổi tư vấn</strong> qua email. Đồng thời, dịch vụ sẽ được <strong>bảo hành trọn đời</strong> thông qua email trao đổi với chuyên viên tư vấn sinh trắc vân tay của bạn. Mọi thắc mắc liên quan đều sẽ được trả lời một cách nhiệt tình để đảm bảo hiệu quả cao nhất cho bạn.</p>
              <p className="text-justify">Như vậy, từ khi bạn đóng phí dịch vụ cho đến khi hoàn thành dịch vụ <strong>cần khoảng 3-4 tuần để đảm bảo chất lượng.</strong> Nếu bạn muốn tăng tốc thì bạn có thể sắp xếp thời gian để lấy dấu vân tay càng sớm càng tốt, cũng như sắp xếp lịch hẹn càng sớm càng tốt ngay sau khi có thông báo kết quả sinh trắc vân tay của bạn đã sẵn sàng.</p>
              <p></p>
            </div>
          </div>
          <div className="step-items">
            <div className="row">
              <div className="col-md-4 text-center">
                <div className="step-img">
                  <img className="img-icon" alt="null" src="https://tgm.cdn.vccloud.vn/wp-content/uploads/2016/06/DMIT_baocao1.png" />
                </div>
                <div className="aio-icon-header">
                  <h3 className="sub-title-ss-9">Bản báo cáo</h3>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="step-img">
                  <img className="img-icon" alt="null" src="https://tgm.cdn.vccloud.vn/wp-content/uploads/2016/06/DMIT_baocao2.png" />
                </div>
                <div className="aio-icon-header">
                  <h3 className="sub-title-ss-9" >File PDF</h3>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="step-img">
                  <img className="img-icon" alt="null" src="https://tgm.cdn.vccloud.vn/wp-content/uploads/2016/06/DMIT_baocao3.png" />
                </div>
                <div className="aio-icon-header">
                  <h3 className="sub-title-ss-9">File ghi âm</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    )
  }
}
class UuDaiDangKy extends React.Component{
  constructor(){
    super();
    this.state ={
      feedbacks: []
    }
  }
  componentWillMount(){
    this.getFeedbackDatas(this)
  }
  getFeedbackDatas(t){
    Stores.find('/feedbacks',{order:'id DESC',limit: 5}, function(feedbacks){
      t.setState({feedbacks: feedbacks})
    })
  }
  render(){
    var settings = {
      speed: 1000,
      autoplaySpeed: 7000,
      autoplay: true,
      fade: true,
      arrows: false,
      dots: true,
      infinite: true,

    };
    const limitContent= 315;
    var childFeedback = this.state.feedbacks.map(function(result,index){
      return(
        <div  key={index} className="testimonials-v4 feedback md-margin-bottom-50">
          <div className="testimonials-v4-in">
            <p>{
              result.content.length > 350 ? `${result.content.substr(0, limitContent)}...` : `${result.content}`
            }</p>
          </div>
          <img className="rounded-x" src={result.url} alt="thumb" />
          <span className="testimonials-author">
								Cảm nhận của {result.name}<br/>
								<em>{result.job}</em>
							</span>
        </div>
      )
    });
    return(
      <div>
        <div className="session-8" style={{'margin-top':'0'}}>
          <div className="register-now">
            <div className="row">
              <div className="col-md-4">
                <span className="step_line"></span>
              </div>
              <div className="col-md-4 text-center">
                <a className="text-justify"><strong>ĐĂNG KÝ NGAY</strong></a>
              </div>
              <div className="col-md-4">
                <span className="step_line"></span>
              </div>

            </div>
          </div>

        </div>
        <div className="session-10 container">
          <div className="row ">
            <div className="col-md-6 promotion">
              <div className="ts-info-panel-info-icon">
                <i className="fa fa-diamond" aria-hidden="true"></i>
              </div>
              <div className=" ts-info-panel-info-desc">
                <div className="ts-info-panel-info-title">ƯU ĐÃI ĐẶC BIỆT CHO NGƯỜI HIỂU ĐƯỢC GIÁ TRỊ</div>
                <div className="ts-info-panel-info-main">
                  <p></p>
                  <p className="text-justify">Để khuyến khích và ưu đãi cho những bạn hiểu được giá trị của dịch vụ<strong>&nbsp;Sinh Trắc Vân Tay Đa Trí Thông Minh (DMIT) </strong>và muốn khám phá bản thân mình càng sớm càng tốt, Zuna  xin dành <span style={{'color': '#ff0000'}}><strong>25 suất ưu đãi</strong></span>&nbsp;<span style={{'color': '#ff0000'}}><strong>GIẢM 25%</strong></span>&nbsp;(từ <strong><del>4.000.000</del><sup>đ&nbsp;</sup></strong>chỉ còn&nbsp;<span style={{'color': '#ff0000'}}><strong>3.000.000<sup>đ</sup></strong></span>&nbsp;– giúp bạn tiết kiệm được&nbsp;<strong>1.000.000<sup>đ</sup></strong>) nếu bạn đăng ký trước ngày <strong>10/09/2016</strong>.</p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 select-address text-center">
              <div className="uvc-heading " >
                <div className="uvc-main-heading ult-responsive">
                  <h2 fontWeight={'normal'}>Chọn vùng miền phù hợp</h2></div><div className="uvc-heading-spacer line_with_icon">
                <div className="ult-just-icon-wrapper  ">
                  <div className="align-icon text-center">
                    <div className="aio-icon">
                      <i className="fa fa-shield" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
                <div className="uvc-sub-heading ult-responsive">
                  <p></p>
                  <p className="text-center"><span style={{'color': '#ff0000'}}>
                        <strong>CAM KẾT HOÀN TIỀN 100% NẾU BẠN KHÔNG HÀI LÒNG VỚI CHẤT LƯỢNG<br/></strong></span></p>
                  <p></p>
                </div>
                <div className="row" style={{'padding':'0'}} >
                  <div className="text-center col-md-6">
                    <button className="btn btn-address btn-default">Đăng ký tại Quảng Trị</button>
                  </div>
                  <div className="text-center col-md-6">
                    <button className="btn btn-address  btn-default">Đăng ký tại Quảng Bình</button>
                  </div>
                  <div className="text-center col-md-6">
                    <button className="btn btn-address btn-default">Đăng ký tại Huế </button>
                  </div>
                  <div className="text-center col-md-6">
                    <button className="btn btn-address btn-default">Đăng ký tại Đà Nẵng</button>
                  </div>
                </div>


              </div>
            </div>
            <div className="col-md-6">
              <div className="img-feedback">
                <img width="570" height="300" src="https://tgm.cdn.vccloud.vn/wp-content/uploads/2016/06/Testimonial_575x300_xanh.png" className="vc_single_image-img attachment-large" alt="Testimonial_575x300_xanh" />
              </div>
            </div>
            <div className="col-md-6">
              <Slider {...settings}>
                {childFeedback}

              </Slider>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
class CamKet extends React.Component{
  render(){
    return(
      <div>
        <div className="session-11 ">
          <div className="container">
            <div className="commitment text-center">
              <img width="500" height="228" src="https://tgm.cdn.vccloud.vn/wp-content/uploads/2016/06/CamketDMIT.png" alt="CamketDMIT" />
            </div>
            <div className="row">
              <div className="col-md-4">
                <p className="text-justify">Với phương châm <em>“do người Việt, vì người Việt”</em> hướng đến mục tiêu <em>“1 triệu người Việt Nam hạnh phúc và thành công hơn”</em>, Zuna sẵn sàng nhận hết rủi ro về phần mình để tạo cho bạn cơ hội tham gia các chương trình đào tạo chất lượng cao của Zuna.</p>
              </div>
              <div className="col-md-4">
                <p className="text-justify">Chính vì thế, sau khi tham gia đầy đủ 100%, nếu bạn cảm thấy dịch vụ phân tích và tư vấn kết quả sinh trắc vân tay không làm bạn hài lòng,<strong> bạn có thể yêu cầu hoàn lại 100% phí&nbsp;</strong>qua bộ phận Tư vấn của Zuna &nbsp;mà không cần phải chứng minh gì cả.</p>

              </div>
              <div className="col-md-4">
                <p className="text-justify">Nghĩa là bạn không có bất kỳ rủi ro nào cả. Rủi ro duy nhất là nếu bạn không cho mình hoặc người thân một cơ hội thì có thể bạn sẽ vô tình lãng phí những tiềm năng bên trong mình, hoặc thậm chí là lãng phí cuộc đời mình.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="session-8" style={{'margin-top':'0'}}>
          <div className="content-ss-8">
            <div className="wrap-ss-8">
              <div className="icon-ss-8">
                <i className="fa fa-bell-o" aria-hidden="true"></i>
              </div>

              <h5 className="text-justify">
                <strong>
                  CON NGƯỜI CHÚNG TA ĐƯỢC SINH RA VỚI TIỀM NĂNG ĐÁNG KINH NGẠC. CÓ NHỮNG NGƯỜI, Ở ĐỘ TUỔI 40, HỌ CẢM THẤY TIẾC NUỐI VÌ LÚC CÒN TRẺ ĐÃ KHÔNG BIẾT KHÁM PHÁ VÀ PHÁT HUY TIỀM NĂNG CỦA BẢN THÂN. ĐỪNG BAO GIỜ LÃNG PHÍ TIỀM NĂNG CỦA MÌNH, VÌ ĐÂY LÀ PHẦN THƯỞNG QUÝ GIÁ MÀ TẠO HÓA BAN TẶNG CHO BẠN.

                </strong></h5>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
class HoiDapTruyenHinh extends React.Component{
  constructor(){
    super();
    this.state = {
      displayVideo : 0
    };
    this.changeDisplayVideo = this._changeDisplayVideo.bind(this)
  }

  _changeDisplayVideo(number) {
    if (this.state.displayVideo == number) {
      this.setState({displayVideo: 0})
    } else {
      this.setState({displayVideo: number})
    }
  }
  render(){
    const listVideo = [
      {
        name : 'Cơ sở khoa học của dịch vụ Sinh Trắc Vân Tay?',
        link: 'https://www.youtube.com/embed/Zs4QXq_zmtQ?rel=0',
        number: 1
      },
      {
        name : 'Phân tích Sinh Trắc Vân Tay để làm gì?',
        link: 'https://www.youtube.com/embed/eMAbwlPCcqA?rel=0',
        number: 2
      },
      {
        name : 'Ý nghĩa của việc thực hiện Sinh Trắc Vân Tay?',
        link: 'https://www.youtube.com/embed/r_3MbxqiuH4?rel=0',
        number: 3
      },
      {
        name : 'Nội dung bản báo cáo Sinh Trắc Vân Tay bao gồm những gì?',
        link: 'https://www.youtube.com/embed/N5NY8zzT-os?rel=0',
        number: 4
      },
      {
        name : 'Có tất cả bao nhiêu chủng vân tay?',
        link: 'https://www.youtube.com/embed/PEPISvTj-KA?rel=0',
        number: 5
      },
      {
        name : 'Mối liên hệ giữa vân tay và não bộ?',
        link: 'https://www.youtube.com/embed/ZBmQ_h3IUuc?rel=0',
        number: 6
      },
      {
        name : 'Độ tuổi nào phù hợp làm Sinh Trắc Vân Tay?',
        link: 'https://www.youtube.com/embed/kRjlPyIzp-8?rel=0',
        number: 7
      },{
        name : 'Người trưởng thành có làm Sinh Trắc Vân Tay được không?',
        link: 'https://www.youtube.com/embed/tdxjdOnPVf0?rel=0',
        number: 8
      },{
        name : 'Sinh Trắc Vân Tay có phải bói toán thời hiện đại?',
        link: 'https://www.youtube.com/embed/yZTahXWZcb0?rel=0',
        number: 9
      },
    ];
    const display = this.state.displayVideo;
    const change = function(number){
      this.changeDisplayVideo(number)
    }.bind(this);
    const showVideo = listVideo.map(function(data,index){
      return(
        <li key={index}>
          <div className="video-item">
            <div className="vc_toggle_title" onClick={()=>{change(data.number)}}>
              {
                display == data.number ? <i className="fa fa-minus-square-o" aria-hidden="true"></i> : <i className="fa fa-plus-square-o" aria-hidden="true"></i>

              }
              <h4>{data.name}</h4>
            </div>
            {
              display == data.number ?  <div className="text-center video-format" style={{'padding':'20px 0'}}><iframe src={data.link} width={640} height={360} frameBorder={0} ></iframe>
              </div> : null
            }

          </div>
        </li>
      )

    })
    return(
      <div className="session-1 container" style={{'margin-top': '35px'}}>
        <div className="text-center">
          <div className="title-ss-1 ">
            Hỏi - Đáp về Sinh Trắc Vân Tay qua truyền hình
          </div>
        </div>

        <div className="video-hoi-dap">
          <ul>
            {showVideo}
          </ul>
        </div>
      </div>
    )
  }
}
export class FingerPage extends React.Component{


  render(){
    const bg = "../index/img/bg-components/sinh-trac-mini.jpg";

    return (
      <section className="fingerprint">
        <HeaderPage background={bg} />
        <div className="">
          <div className="content-sm">
            <VideoGioiThieu />
            <KichHoatTiemNang />
            <TieuDe />
            <NoiDungGioiThieu />
            <DoiTuongDichVu/>
            <DiemKhacBiet />
            <QuyTrinh />
            <UuDaiDangKy />
            <CamKet />
            <HoiDapTruyenHinh />
          </div>
        </div>
      </section>
    );
  }
}
