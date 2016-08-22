import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import Slider from 'react-slick'
import {HeaderPage} from '../src/header-page'

class LeftNavButton extends React.Component {
  render() {
    return  <a onClick={this.props.onClick} className="left slick-control">
      <i className="fa fa-angle-left"></i>
    </a>
  }
}
class RightNavButton extends React.Component {
  render() {
    return <a onClick={this.props.onClick} className="right slick-control">
        <i className="fa fa-angle-right"></i>
      </a>
  }
}
class Menu extends React.Component{
  render(){
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
    };
    return(
      <div className="col-md-4">
        <div className="headline-v2"><h2>Video nổi bật</h2></div>
        <div className="video-hit">
          <Slider {...settings} prevArrow={ <LeftNavButton /> } nextArrow={<RightNavButton />}>
            <div className="slide-video">
              <iframe height={250} src="https://www.youtube.com/embed/otsWFBYUZ10" frameBorder="0" ></iframe>
            </div>
            <div className="slide-video">
              <iframe height={250} src="https://www.youtube.com/embed/utS5Cvo3ILI" frameBorder="0"></iframe>          </div>
            <div className="slide-video">
              <iframe height={250} src="https://www.youtube.com/embed/lt8CPvZ8y7E" frameBorder="0" ></iframe>
            </div>
            <div className="slide-video">
              <iframe height={250} src="https://www.youtube.com/embed/FSJ6FEtIKfA" frameBorder="0"></iframe>
            </div>
            <div className="slide-video">
              <iframe height={250} src="https://www.youtube.com/embed/fUm737CYYds" frameBorder="0"></iframe>
            </div>
            <div className="slide-video">
              <iframe height={250} src="https://www.youtube.com/embed/GRP_aK934y4" frameBorder="0"></iframe>
            </div>

          </Slider>
        </div>

        <div className="headline-v2"><h2>Mục lục</h2></div>
        <ul className="list-unstyled blog-trending margin-bottom-50">
          <li>
            <h3><Link to="/van-tay-hoc/1">Vân tay học là gì ?</Link></h3>
            <small>23 Jan, 2015 / Admin</small>
          </li>
          <li>
            <h3><Link to="/van-tay-hoc/2">Lịch sử nghiên cứu sinh trắc học dấu vân tay.</Link></h3>
            <small>22 Jan, 2015 / Admin</small>
          </li>
          <li>
            <h3><Link to="/van-tay-hoc/3">Ứng dụng của vân tay học vào cuộc sống.</Link></h3>
            <small>19 Jan, 2015 / Admin</small>
          </li>
          <li>
            <h3><Link to="/van-tay-hoc/4">Cảm nhận </Link></h3>
            <small>17 Jan, 2015 /Admin</small>
          </li>
        </ul>
      </div>
    )
  }
}


export class FingerPage extends React.Component{
  render(){
    const bg = "../index/img/bg-components/sinh-trac-mini.jpg"
    return (
      <section className="fingerprint">
        <HeaderPage background={bg} />
        <div className="bg-color-light">
          <div className="container content-sm">
            <div className="row">
              <Menu />
              {this.props.children}
            </div>
          </div>
        </div>

      </section>
    );
  }
}
