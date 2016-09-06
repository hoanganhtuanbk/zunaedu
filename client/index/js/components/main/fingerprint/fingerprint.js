import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import Slider from 'react-slick'
import {HeaderPage} from '../src/header-page'
import Stores from '../../../stores/stores'
import {WhatPeopleSay} from '../home/what-people-say'
import {HitBooks} from '../src/hit-books'
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

class FingerPrintItem extends React.Component{
  render(){
    return(
      <div className="row trending">
        <div className="col-md-3 trending-img">
          <img src={this.props.url} />
        </div>
        <div className="col-md-9 trending-title">
          <h3><Link to={`/van-tay-hoc/${this.props.keyNote}`}>{this.props.title}</Link></h3>
          <small>{this.props.date} / Admin</small>
        </div>
      </div>

    )
  }
}

class BookItem extends React.Component{
  render(){
    return(
      <Link to={`/sach-giao-duc/${this.props.keyNote}`}><img className="hover-effect" alt={this.props.title} src={this.props.url}/></Link>
    )
  }
}

class Menu extends React.Component{
  constructor(){
    super();
    this.state = {
      dermatoglyphics: []
    }
  }
  componentWillMount(){
    this._handelGetDatas(this);
  }
  _handelGetDatas(t){
    Stores.find('/dermatoglyphics',{order: 'id DESC', limit: 5}, function(datas){
      t.setState({dermatoglyphics: datas})
    })
  }

  render(){
    const DermatoglyphicsList = this.state.dermatoglyphics.map(function(item,index){
      return(
        <li key={index} >
          <FingerPrintItem
            keyNote = {item.key}
            title = {item.title}
            date = {item.date}
            url = {item.url}
          />
        </li>

      )
    });

    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
    };
    const date = new Date();
    const dateToString = date.toDateString();
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

        <div className="headline-v2"><h2>Bài đăng mới nhất</h2></div>
        <ul className="list-unstyled blog-trending margin-bottom-50">
          {DermatoglyphicsList}
          <li>
            <h3><Link to={`/van-tay-hoc/phan-hoi`}>Cảm nhận từ khách hàng</Link></h3>
            <small>{dateToString} / Admin</small>
          </li>
        </ul>
        <HitBooks />
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
        <div className="bg-color-light">
          <div className="container content-sm">
            <div className="row">
              <div>
                {this.props.children}
              </div>
              <Menu />
            </div>
          </div>
        </div>
        <WhatPeopleSay />
      </section>
    );
  }
}
