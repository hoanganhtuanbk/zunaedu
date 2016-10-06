import React from 'react';
import {render} from 'react-dom';
import Slider from 'react-slick'
import { Link, browserHistory } from 'react-router';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

class Header extends React.Component{
  render(){
    return(
      <div className="breadcrumbs">
        <div className="container">
          <h1 className="pull-left">Thông tin liên hệ</h1>
        </div>
      </div>
    )
  }
}
class Map extends React.Component{
  constructor(){
    super()
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }


  render(){
    const coords = {
      lat: 16.811280,
      lng: 107.102184
    };
    return(
      <Gmaps
        width={'100%'}
        height={'400px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={14}
        scrollwheel ={false}
        navigationControl={false}
        mapTypeControl={false}
        scaleControl={false}
        disableDefaultUI = {true}
        params={{v: '3.exp', key: 'AIzaSyDlmGqMOG0-atgWI8QqrVtHM1BIO0TfgIU'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'We are here'}
          onCloseClick={this.onCloseClick} />
      </Gmaps>
    )
  }
}

export class Contact extends React.Component{
  render(){
    return(
      <div>

        <Header />
        <Map />

        <div className="container content">
          <div className="row margin-bottom-30">
            <div className="col-md-9 mb-margin-bottom-30">
              <div className="headline"><h2>Mẫu liên hệ</h2></div>
              <p>Hãy cho chúng tôi biết cảm nhận của khách hàng khi sau khi tham gia trải nghiệm các chương trình đào tạo tại Zuna. Mỗi ý kiến đóng góp sẽ là động lực giúp Zuna ngày càng phát triển và nâng cao chất lượng đào tạo, công hiến nhiều hơn cho cộng đồng.</p>

              <form method="post" id="sky-form3" className="sky-form sky-changes-3" novalidate="novalidate">
                <fieldset>
                  <div className="row">
                    <section className="col col-6">
                      <label className="label">Tên khách hàng</label>
                      <label className="input">
                        <i className="icon-append fa fa-user"></i>
                        <input type="text" name="name" id="name" />
                      </label>
                    </section>
                    <section className="col col-6">
                      <label className="label">E-mail</label>
                      <label className="input">
                        <i className="icon-append fa fa-envelope-o"></i>
                        <input type="email" name="email" id="email"/>
                      </label>
                    </section>
                  </div>

                  <section>
                    <label className="label">Chủ đề</label>
                    <label className="input">
                      <i className="icon-append fa fa-tag"></i>
                      <input type="text" name="subject" id="subject"/>
                    </label>
                  </section>

                  <section>
                    <label className="label">Tin nhắn</label>
                    <label className="textarea">
                      <i className="icon-append fa fa-comment"></i>
                      <textarea rows="4" name="message" id="message"></textarea>
                    </label>
                  </section>
                </fieldset>

                <footer>
                  <button type="submit" className="btn-u">Gửi tin nhắn</button>
                </footer>

                <div className="message">
                  <i className="rounded-x fa fa-check"></i>
                  <p>Your message was successfully sent!</p>
                </div>
              </form>
            </div>

            <div className="col-md-3">
              <div className="headline"><h2>Liên hệ</h2></div>
              <ul className="list-unstyled who margin-bottom-30">
                <li><a href="#"><i className="fa fa-home"></i>Số 88 Hùng Vương</a></li>
                <li><a href="#"><i className="fa fa-envelope"></i>Đông Hà, Quảng Trị, Việt Nam</a></li>
                <li><a href="#"><i className="fa fa-phone"></i>Phone: 0935746886 – 0913905355</a></li>
                <li><a href="#"><i className="fa fa-globe"></i>Email: Zunavietnam@gmail.com</a></li>
              </ul>

              <div className="headline"><h2>Thời gian làm việc</h2></div>
              <ul className="list-unstyled margin-bottom-30">
                <li><strong>Thứ 2 - Thứ 6:</strong> 8:00 - 18:00</li>
                <li><strong>Thứ 7:</strong> 8:00 - 11:30</li>
              </ul>

              <div className="headline"><h2>Why we are?</h2></div>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
              <ul className="list-unstyled">
                <li><i className="fa fa-check color-green"></i> Odio dignissimos ducimus</li>
                <li><i className="fa fa-check color-green"></i> Blanditiis praesentium volup</li>
                <li><i className="fa fa-check color-green"></i> Eos et accusamus</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    )

  }
}
