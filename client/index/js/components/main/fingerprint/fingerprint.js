import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import {HeaderPage} from '../src/header-page'

export class FingerPage extends React.Component{
  render(){
    const bg = "../index/img/bg-components/sinh-trac-mini.jpg";
    return (
      <section className="fingerprint">
        <HeaderPage background={bg} />
        <div className="">
          <div className="container-fluid content-sm">
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
            <div className="session-1">
              <div className="title-ss-1">
                Kích hoạt tiềm năng vượt trội bên trong bạn
              </div>
              <div className="content-ss-1">
                <div className="row">
                  <div className="col-md-6">
                    <div className="column-inner ">
                      <p className="text-justify">Bạn có bao giờ tự hỏi: “Tại sao có những người, thành công đến với họ dường như dễ dàng hơn những người khác? Yếu tố gì giúp họ vượt lên nhanh và sớm như vậy trong khi đa số mọi người vẫn loay hoay ở phía sau?”</p>
                      <p className="text-justify">Trong bài nói chuyện nổi tiếng của mình, nhà giáo dục người Anh, người được chính Nữ hoàng Anh phong tước hiệp sĩ thời hiện đại – Ngài Ken Robinson – đã từng chia sẻ rằng: <strong>Khủng hoảng lớn nhất chúng ta đang gặp hôm nay không phải là khủng hoảng về tài nguyên thiên nhiên mà là khủng hoảng về tài nguyên con người. Chúng ta lãng phí tài năng của mình bởi vì rất nhiều người trải qua cả cuộc đời của mình không biết tài năng tiềm ẩn bên trong của mình là gì.</strong></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-center">
                      <img width="575" height="235" src="https://tgm.cdn.vccloud.vn/wp-content/uploads/2016/06/DMIT_anhminhhoa.png" className="" alt="DMIT_anhminhhoa"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="session-2">
              <div className="title-ss-2">
                <h3 className="text-center">Sinh Trắc Vân Tay Đa Trí Thông Minh (DMIT) là gì?</h3>
              </div>
              <div className="description-ss-2">
                <div className="column-inner">
                  <h5 className="text-justify">Trong xã hội, chỉ có rất ít người may mắn sớm phát hiện ra tiềm năng của bản thân, từ đó họ phát huy để đạt được thành công. Đa số còn lại sống cả cuộc đời lãng phí tài năng của mình vì tất cả chỉ dừng lại ở mức tiềm năng, nhiều khi còn không được nhận biết.</h5>
                </div>
              </div>
            </div>
            <div className="session-3">
              <div className="row">
                <div className="column-inner">
                  <div className="col-md-6">
                    <div className="video-ss-3">
                      <iframe src="https://www.youtube.com/embed/otsWFBYUZ10" frameBorder="0" ></iframe>

                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="">
                      <blockquote className="text-justify quote text-big blockquote-reverse"><em>“Tiềm năng con người cũng như tài nguyên thiên nhiên, được chôn vùi rất sâu. Bạn phải nỗ lực tìm kiếm chứ nó không nằm ngay trên bề mặt. Bạn thậm chí phải tạo ra hoàn cảnh để nó có thể được bộc lộ.”&nbsp;</em>(Sir Ken Robinson)</blockquote>
                      <p className="text-justify"><strong>Không có con đường đến với thành công dễ dàng nhưng luôn có con đường dễ hơn</strong> (tại sao phải chọn đường khó nhất khi có con đường dễ hơn đó là phát hiện và phát huy tiềm năng bên trong mình). <strong>Sinh Trắc Vân Tay Đa Trí Thông Minh – Dermatoglyphics Multiple Intelligence Test</strong> (gọi tắt <strong>DMIT</strong>) là phương pháp khoa học phân tích dấu vân tay chính xác và mới nhất hiện nay, nhằm xác định những thế mạnh độc đáo của bạn hoặc người thân của bạn. Để từ đó học cách phát huy sao cho hiệu quả nhất.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="session-4">
              <div className="title-ss-4">
                <h3 className="text-center">Dịch vụ này dành cho độ tuổi nào?</h3>
              </div>
              <div className="description-ss-4">
                <div className="column-inner">
                  <h5 className="text-center">Với trẻ em, kỹ thuật Sinh Trắc Vân Tay Đa Trí Thông Minh (DMIT) sẽ:</h5>
                </div>
              </div>
            </div>
            <div className="session-5">
              <div className="row">
                <div className="col-md-4">
                  <ul>
                    <li>
                      <p className="text-justify">Giúp cha mẹ <strong>khám phá được những tài năng thiên bẩm</strong> của con và bắt đầu định hướng phát triển từ sớm.</p>
                    </li>
                    <li>
                      <p className="text-justify">Giúp cha mẹ hiểu được tương quan giữa các chỉ số liên quan mật thiết đến thành công <strong>IQ, EQ, AQ, CQ</strong> mà con sở hữu.</p>
                    </li>
                    <li>
                      <p className="text-justify">Giúp cha mẹ dựa vào <strong>mô hình 8 loại trí thông minh</strong> của Giáo sư Howard Garner xác định loại thông minh của con và định hướng sớm, đặc biệt là trong giai đoạn trước 18 tuổi.</p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <img width="315" height="315" src="https://tgm.cdn.vccloud.vn/wp-content/uploads/2016/06/DMIT_anh2.png" className="vc_single_image-img attachment-large" alt="DMIT_anh2" />
                </div>
                <div className="col-md-4">
                  <ul>
                    <li>
                      <p className="text-justify">Giúp cha mẹ xác định các chỉ số đặc biệt khác của con như là: <strong>TFRC</strong> (thể hiện mật độ tế bào thần kinh trên vỏ não), <strong>VAK</strong> (phương pháp tiếp nhận thông tin hiệu quả), <strong>ATD</strong> (tốc độ tiếp thu nhanh chậm), cấu trúc thùy não (thùy trước trán, thùy đỉnh, thùy chẩm, thùy trán, thùy thái dương).</p>
                    </li>
                    <li>
                      <p className="text-justify">Giúp cha mẹ <strong>hiểu và có phương pháp</strong> nuôi dạy con phù hợp hơn ngay từ sớm.</p>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
            <div className="session-6">
              <div className="title-ss-6">
                <div className="column-inner">
                  <h5 className="text-center">Với người trưởng thành, kỹ thuật <strong>Sinh Trắc Vân Tay Đa Trí Thông Minh (DMIT)</strong> sẽ:</h5>
                </div>
              </div>
              <div className="content-ss-6">
                <div className="row">
                  <div className="col-md-4">
                    <ul>
                      <li>
                        <p className="text-justify">Giúp hiểu rõ điểm yếu và <strong>điểm mạnh</strong> của bản thân để định hướng sự nghiệp.</p>
                      </li>
                      <li>
                        <p className="text-justify">Giúp phát triển điểm mạnh để đạt được <strong>sự tự tin và chuyên nghiệp</strong> cao nhất.</p>
                      </li>
                      <li>
                        <p className="text-justify">Giúp <strong>tự tin phát huy những tố chất sẵn có</strong> của mình để vươn đến những tầm cao mới trong công việc lẫn cuộc sống.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <img width="315" height="315" src="https://tgm.cdn.vccloud.vn/wp-content/uploads/2016/06/DMIT_anh3.png" className="vc_single_image-img attachment-large" alt="DMIT_anh2" />
                  </div>
                  <div className="col-md-4">
                    <ul>
                      <li>
                        <p className="text-justify">Giúp <strong>vạch ra mục tiêu rõ ràng hơn</strong> và tin tưởng, tập trung vào mục tiêu của bản thân hơn.</p>
                      </li>
                      <li>
                        <p className="text-justify">Giúp<strong> lý giải những mâu thuẫn</strong> trong tính cách khiến bạn băn khoăn bấy lâu nay.</p>
                      </li>
                      <li>
                        <p className="text-justify">Giúp <strong>xây dựng các mối quan hệ tốt hơn</strong> với người xung quanh thông qua việc thấu hiểu cách tư duy và hành động của&nbsp;bản thân bạn.</p>
                      </li>
                    </ul>

                  </div>
                </div>
              </div>

            </div>
            <div className="session-7">
              <div className="title-ss-7">
                <div className="column-inner">
                <h3 className="text-center">Những điểm <span><strong>ĐẶC BIỆT và KHÁC BIỆT</strong></span> khi làm<strong><br/>
                  Sinh Trắc Vân Tay Đa Trí Thông Minh (DMIT)</strong> với TGM:</h3>
                  </div>
              </div>
              <div className="content-ss-7">
                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li>
                        <p className="text-justify">Vốn đã nổi tiếng ở Việt Nam hơn 6 năm qua với việc đầu tư vào chất lượng sản phẩm, từ việc xuất bản sách chất lượng cao đến các khóa đào tạo hàng đầu, TGM tiếp tục <strong>cam kết chất lượng cao nhất cho dịch vụ Sinh Trắc Vân Tay Đa Trí Thông Minh (DMIT)</strong> của mình.</p>
                      </li>
                      <li>
                        <p className="text-justify">Mặc dù trong sinh trắc vân tay thì <strong>khâu tư vấn sau khi có kết quả là khâu quan trọng nhất</strong>, nhưng TGM vẫn đầu tư bài bản cho khâu phân tích vân tay bằng cách kết hợp với đối tác có chuyên môn cao trong việc phân tích dấu vân tay sử dụng thiết bị, phần mềm và công nghệ được chuyển giao từ Trung Tâm Nghiên Cứu Sinh Trắc Vân Tay Châu Á <strong>(Asian Dermatoglyphics Research Centre – ADRC)</strong> để cho ra kết quả phân tích chính xác nhất. Từ đó đảm bảo<strong> tư vấn kết quả không chỉ chuyên nghiệp mà còn chính xác và cá nhân hóa.</strong></p>
                      </li>
                      <li>
                        <p className="text-justify">Không những vậy, máy móc dù hiện đại đến đâu luôn có những giới hạn nhất định. Cho nên với TGM, <strong>kết quả phân tích của máy sẽ được kiểm tra một lần nữa kỹ lưỡng bởi con người, để đảm bảo kết quả chính xác nhất cho bạn.</strong></p>
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
          </div>
        </div>
      </section>
    );
  }
}
