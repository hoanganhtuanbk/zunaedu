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
      dots: false,
      speed: 3000,
      autoplay: true,
      lazyLoad: true,
      slidesToShow: 6,
      arrows: false,
      responsive: [ { breakpoint: 768, settings: { slidesToShow: 3 } }, { breakpoint: 1024, settings: { slidesToShow: 5 } }, { breakpoint: 1200, settings: 7 } ]
    };
    const childPartner = this.state.partners.map(function(result, index){
      return(
        <div>
          <img src={result.url} alt={result.name} />
        </div>
      )
    });
    return (
      <section className="section-5">
        <div className="container our-clients">
          <div className="headline"><h2>Đối tác</h2></div>
          <Slider {...settings}>
            {childPartner}
          </Slider>
        </div>
      </section>
    );
  }
}
