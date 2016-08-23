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
          <h1 className="pull-left">Our Contacts</h1>
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
      lat: 16.047116,
      lng: 108.199885
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
              <div className="headline"><h2>Contact Form</h2></div>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas feugiat. Et harum quidem rerum facilis est et expedita distinctio lorem ipsum dolor sit amet, consectetur adipiscing elit landitiis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas feugiat.</p><br/>

              <form method="post" id="sky-form3" className="sky-form sky-changes-3" novalidate="novalidate">
                <fieldset>
                  <div className="row">
                    <section className="col col-6">
                      <label className="label">Name</label>
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
                    <label className="label">Subject</label>
                    <label className="input">
                      <i className="icon-append fa fa-tag"></i>
                      <input type="text" name="subject" id="subject"/>
                    </label>
                  </section>

                  <section>
                    <label className="label">Message</label>
                    <label className="textarea">
                      <i className="icon-append fa fa-comment"></i>
                      <textarea rows="4" name="message" id="message"></textarea>
                    </label>
                  </section>

                  <section>
                    <label className="checkbox"><input type="checkbox" name="copy"/><i></i>Send a copy to my e-mail address</label>
                  </section>
                </fieldset>

                <footer>
                  <button type="submit" className="btn-u">Send message</button>
                </footer>

                <div className="message">
                  <i className="rounded-x fa fa-check"></i>
                  <p>Your message was successfully sent!</p>
                </div>
              </form>
            </div>

            <div className="col-md-3">
              <div className="headline"><h2>Contacts</h2></div>
              <ul className="list-unstyled who margin-bottom-30">
                <li><a href="#"><i className="fa fa-home"></i>5B Streat, City 50987 New Town US</a></li>
                <li><a href="#"><i className="fa fa-envelope"></i>info@example.com</a></li>
                <li><a href="#"><i className="fa fa-phone"></i>1(222) 5x86 x97x</a></li>
                <li><a href="#"><i className="fa fa-globe"></i>http://www.example.com</a></li>
              </ul>

              <div className="headline"><h2>Business Hours</h2></div>
              <ul className="list-unstyled margin-bottom-30">
                <li><strong>Monday-Friday:</strong> 10am to 8pm</li>
                <li><strong>Saturday:</strong> 11am to 3pm</li>
                <li><strong>Sunday:</strong> Closed</li>
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
