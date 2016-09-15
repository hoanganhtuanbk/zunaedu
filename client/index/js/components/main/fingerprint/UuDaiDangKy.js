import React from 'react';
import {render} from 'react-dom';
import Stores from '../../../stores/stores'
import Actions from '../../../actions/actions'
import Modal from 'react-modal'

export class UuDaiDangKy extends React.Component{
  constructor(){
    super();
    this.state = {
      feedbacks: [],
      modalIsOpen: false,
      nameParent: '',
      email: '',
      phone: '',
      address: '',
      nameChildren: '',
      oldChildren: '',
      sexChildren: 'Nam',
      media: 'Facebook',
      content: ''

    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.handleRegisterService = this._handleRegisterService.bind(this);

  }

  componentWillMount(){
    this.getFeedbackDatas(this)
  }
  getFeedbackDatas(t){
    Stores.find('/feedbacks',{order:'id DESC',limit: 5}, function(feedbacks){
      t.setState({feedbacks: feedbacks})
    })
  }
  openModal(t){
    this.setState({modalIsOpen: true});
  };

  afterOpenModal(t){
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  };

  closeModal(t){
    this.setState({modalIsOpen: false});
  };
  _handleRegisterService(t){
    const dateNow = new Date();
    const apps = {
      nameParent: this.state.nameParent,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      nameChilden: this.state.nameChildren,
      oldChilden: this.state.oldChildren,
      sexChilden: this.state.sexChildren,
      media: this.state.media,
      content: this.state.content,
      dateCreate: dateNow.toDateString()
    };
    Actions.create('/RegisterServices', apps, function(data){
      console.log(data);
    });
    t.setState({modalIsOpen:false})
  }
  render(){
    const customStyles = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.29)'
      },
      content: {
        position: 'absolute',
        width: '700px',
        margin: '0 auto',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        transition: 'all 1s ease-in'


      }
    };

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
            <div className="col-md-12">
              <div className="col-md-6 promotion">
                <div className="ts-info-panel-info-icon">
                  <i className="fa fa-diamond" aria-hidden="true"></i>
                </div>
                <div className=" ts-info-panel-info-desc">
                  <div className="ts-info-panel-info-title">ƯU ĐÃI ĐẶC BIỆT CHO NGƯỜI HIỂU ĐƯỢC GIÁ TRỊ</div>
                  <div className="ts-info-panel-info-main">
                    <p></p>
                    <p className="text-justify">
                      ƯU ĐÃI ĐẶC BIỆT CHO CÁC THIÊN THẦN NHỎ NHÂN DỊP TRUNG THU<br/>
                      Nhân dịp lễ Trung Thu, chúng tôi dành những phần quà đặc biệt cho những bạn hiểu được giá trị của dịch vụ <strong>&nbsp;Sinh Trắc Vân Tay Đa Trí Thông Minh (DMIT)</strong> và muốn khám phá bản thân mình càng sớm càng tốt, Zuna xin dành <span style={{'color': '#ff0000'}}><strong>15 suất ưu đãi GIẢM 25%</strong></span>&nbsp; (từ <strong>2.800.000 vnđ</strong> chỉ còn <span style={{'color': '#ff0000'}}><strong>2.200.000đ</strong></span>&nbsp; – giúp bạn tiết kiệm được <strong>600.000đ</strong>) nếu bạn đăng ký trước ngày <strong>30/09/2016</strong>.

                    </p><p></p>
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
                      <button className="btn btn-address btn-default" onClick={this.openModal}>Đăng ký tại Quảng Trị</button>
                    </div>
                    <div className="text-center col-md-6">
                      <button className="btn btn-address  btn-default" onClick={this.openModal}>Đăng ký tại Quảng Bình</button>
                    </div>
                    <div className="text-center col-md-6">
                      <button className="btn btn-address btn-default" onClick={this.openModal}>Đăng ký tại Huế </button>
                    </div>
                    <div className="text-center col-md-6">
                      <button className="btn btn-address btn-default" onClick={this.openModal}>Đăng ký tại Đà Nẵng</button>
                    </div>
                  </div>
                  <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles} >

                    <h2 ref="subtitle" className="subTitle">Đăng ký làm dịch vụ SINH TRẮC VÂN TAY
                      <br/>
                      <small style={{'line-height':'25px','font-size':'50%'}}>Các bạn vui lòng đăng ký và trả lời các câu hỏi bên dưới để chúng tôi có thể liên hệ và phục vụ bạn tốt hơn.</small>
                    </h2>

                    <button onClick={this.closeModal} style={{'position': 'absolute','top': '10px','right': '20px'}} className="btn btn-default"><i className="fa fa-times" aria-hidden="true"></i></button>
                    <form method="post" id="sky-form3" className="sky-form sky-changes-3" novalidate="novalidate">
                      <fieldset>
                        <div className="row">
                          <section className="col col-6">
                            <label className="label">Họ và tên bố mẹ</label>
                            <label className="input">
                              <i className="icon-append fa fa-user"></i>
                              <input type="text" name="nameParent" onChange={e=>{this.setState({nameParent: e.target.value})}}/>
                            </label>
                          </section>
                          <section className="col col-6">
                            <label className="label">Email liên lạc</label>
                            <label className="input">
                              <i className="icon-append fa fa-envelope-o"></i>
                              <input type="email" name="email" onChange={e=>{this.setState({email: e.target.value})}}/>
                            </label>
                          </section>
                          <section className="col col-6">
                            <label className="label">Số điện thoại liên lạc</label>
                            <label className="input">
                              <i className="icon-append fa fa-phone"></i>
                              <input type="number" name="number" onChange={e=>{this.setState({phone: e.target.value})}} />
                            </label>
                          </section>
                          <section className="col col-6">
                            <label className="label">Địa chỉ nơi bạn đang sinh sống *</label>
                            <label className="input">
                              <i className="icon-append fa fa-envelope-o"></i>
                              <input type="text" name="text" onChange={e=>{this.setState({address: e.target.value})}}/>
                            </label>
                          </section>
                          <section className="col col-6">
                            <label className="label">Họ tên bé đi học và kèm tên ở nhà</label>
                            <label className="input">
                              <i className="icon-append fa fa-heart-o"></i>
                              <input type="text" name="text" onChange={e=>{this.setState({nameChildren: e.target.value})}}/>
                            </label>
                          </section>
                          <section className="col col-6">
                            <label className="label">Độ tuổi</label>
                            <label className="input">
                              <i className="icon-append fa fa-venus-mars"></i>
                              <input type="number" onChange={e=>{this.setState({oldChildren: e.target.value})}} />
                            </label>
                          </section>
                          <section className="col col-6">
                            <label className="label">Giới tính </label>
                            <label className="select" >
                              <select id="state" onChange={e=>{console.log(e.target.value)}}>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                              </select>
                            </label>
                          </section>
                          <section className="col col-6">
                            <label className="label">Bạn biết chương trình này thông qua kênh nào?</label>
                            <label className="select">
                              <select onChange={e=>{this.setState({media: e.target.value})}}>
                                <option value="Facebook">Facebook</option>
                                <option value="Bạn bè giới thiệu">Bạn bè giới thiệu</option>
                                <option value="Đã từng tham dự chương trình trước">Đã từng tham dự chương trình trước</option>
                                <option value="Khác">Khác</option>
                              </select>
                            </label>
                          </section>
                          <section className="col col-12">
                            <label className="label">Bạn mong muốn nhận được gì từ dịch vụ Sinh Trắc Vân Tay tại Zuna
                            </label>
                            <label className="textarea">
                              <textarea rows="4" name="message" onChange={e=>{this.setState({content: e.target.value})}}></textarea>
                            </label>
                          </section>
                        </div>

                      </fieldset>

                      <footer>
                        <section className="col col-6 text-center">
                          <button type="button" className="btn-form-left btn" onClick={this.handleRegisterService}>Đăng ký</button>
                        </section>
                        <section className="col col-6 text-center" >
                          <button type="button" className="btn-form-right btn" onClick={this.closeModal}>Thoát</button>
                        </section>
                      </footer>

                      <div className="message">
                        <i className="rounded-x fa fa-check"></i>
                        <p>Your message was successfully sent!</p>
                      </div>
                    </form>
                  </Modal>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
