import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import Slider from 'react-slick'
import {HeaderPage} from '../src/header-page'
import Stores from '../../../stores/stores'
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

class DermatoglyphicsItem extends React.Component{
  render(){
    return(
      <li>
        <h3><Link to={`/van-tay-hoc/${this.props.id}`}>{this.props.title}</Link></h3>
        <small>{this.props.date} / Admin</small>
      </li>
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
    this._handelGetDatas(this)
  }
  _handelGetDatas(t){
    Stores.getAll('/dermatoglyphics', function(datas){
      t.setState({dermatoglyphics: datas})
    })
  }
  render(){
    const DermatoglyphicsList = this.state.dermatoglyphics.map(function(item){
      return(
        <DermatoglyphicsItem
          id = {item.id}
          title = {item.title}
          date = {item.date}
        />
      )
    })
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
          {DermatoglyphicsList}
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
