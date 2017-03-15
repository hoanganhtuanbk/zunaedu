import React from 'react';
import {render} from 'react-dom';
import Slider from 'react-slick'
import { Link, browserHistory } from 'react-router';
import Stores from '../../../stores/stores'

export class OurClients extends React.Component{
  constructor(){
    super();
    this.state = {
      partners: []
    };
  }
  componentWillMount(){
    this.getPartner(this);
  }
  getPartner(t){
    Stores.getAll('/partners', function(partners, status) {
      if (partners) {
        t.setState({partners: partners})
      }
    });
  }
  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      autoplay: true,
      slidesToScroll: 1,
      arrows: false,
      pauseOnHover: true,
      slidesToShow: 6,
      responsive: [ { breakpoint: 768, settings: { slidesToShow: 1 } }, { breakpoint: 1024, settings: { slidesToShow: 2 } }, { breakpoint: 1200, settings: 6 } ]
    };
    const childPartner = this.state.partners.map(function(result, index){
      return(
        <div key={index}>
          <img src={result.url} alt={result.name} />
        </div>
      )
    });
    return (
      <section className="section-5">
        <div className="container our-clients">
          <div className="headline"><h2>Đối tác1</h2></div>
          <Slider {...settings}>
            {childPartner}
          </Slider>
        </div>
      </section>
    );
  }
}
