import React from 'react';
import {render} from 'react-dom';
import Slider from 'react-slick'
import { Link, browserHistory } from 'react-router';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

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
        zoom={16}
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

        <section className="section section-contact contact">
          <div className="page-title-wrapper">
            <div className="banner-wrapper container">
              <h1>Contact</h1>
            </div>
          </div>

        </section>
        <Map />

        <div className="section contact-info">
          <div className="contact-detail">
            <div className="">
              <span>Phone</span>
              <p>+7 (800) 123 45 69</p>
            </div>
            <div className="">
              <span>Email</span>
              <p>hello@eduma.com</p>
            </div>
          </div>
          <div className="contact-detail">
            <div className="">
              <span>Address</span>
              <p>PO Box 97845 Baker st. 567, Los Angeles, California, US.</p>
            </div>
          </div>
        </div>

        <div className="section contact-form container">
              <div className="contact-title">
                <h2>Feedback Form
                </h2>
              </div>
              <form role="form " >
                <div className="row">

                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" id="email"/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" id="pwd"/>
                  </div>
                  <div className="form-group">
                    <input type="number" className="form-control" placeholder="Phone" id="pwd"/>

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea className="form-control"></textarea>
                  </div>
                </div>


                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>

        </div>

      </div>
    )

  }
}
