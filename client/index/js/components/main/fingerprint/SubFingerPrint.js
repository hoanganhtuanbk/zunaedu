import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router';
import Stores from '../../../stores/stores'

class Trending extends React.Component{
  render(){
    return(
      <div className="row trending">
        <div className="col-md-3 trending-img">
          <img src={this.props.url} />
        </div>
        <div className="col-md-9 trending-title">
          <h3><Link to={`/goc-cha-me/${this.props.keyNote}`}>{this.props.title}</Link></h3>
          <small>{this.props.date} / Admin</small>
        </div>
      </div>


    )
  }
}
class FingerPrintItem extends React.Component{
  render(){
    return(
      <div className="row margin-bottom-20 feature-item">
        <div className="col-sm-5 sm-margin-bottom-20 feature-image">
          <Link to={`/van-tay-hoc/bi-mat-bo-nao/${this.props.keyNote}`} >
            <img className="img-responsive" src={this.props.url} />
          </Link>
        </div>

        <div className="col-sm-7 news-v3">
          <div className="news-v3-in no-padding content-program">
            <ul className="list-inline posted-info">
              <li>Đăng bởi Admin</li>
              <li>/ Ngày đăng {this.props.date}</li>
            </ul>
            <h2>
              <Link to={`/van-tay-hoc/bi-mat-bo-nao/${this.props.keyNote}`} >
                {this.props.title}
              </Link>
            </h2>
            <p>{this.props.description}</p>
            <Link to={`/van-tay-hoc/bi-mat-bo-nao/${this.props.keyNote}`} className="read-more">Xem chi tiết</Link>
          </div>
        </div>
      </div>
    )
  }
}
export class SubFingerPrint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fingerprint: [],
    };
  }

  componentWillMount() {
    this.getFingerprintDatas(this)
  }

  getFingerprintDatas(t) {
    Stores.find('/dermatoglyphics', {order: 'id DESC'}, function (fingerprint) {
      t.setState({fingerprint: fingerprint})
    })
  }
  render() {
    const childElements = this.state.fingerprint.map(function(item,id){
      return (
        <li key={id}>
          <Trending
            keyNote={item.key}
            title={item.title}
            date={item.date}
            url={item.url}
          />
        </li>
      );
    });
    const FingerPrintList = this.state.fingerprint.map(function(fingerprint,index){
      return(
        <div key={index}>
          <FingerPrintItem
            keyNote={fingerprint.key}
            title={fingerprint.title}
            description={fingerprint.description}
            date={fingerprint.dateCreate}
            url={fingerprint.url}
          />
          <div className="clearfix margin-bottom-20"><hr/></div>
        </div>
      )
    });


    return (
      <div className="bg-color-light content-sm">
        <div className="container ">
          <div className="row">
            <div className="col-md-9">
              {FingerPrintList}
            </div>
            <div className="col-md-3">
              <div className="headline-v2 bg-trending"><h2>Bài đăng mới nhất</h2></div>
              <ul className="list-unstyled blog-trending margin-bottom-50">
                {childElements}
              </ul>
            </div>
          </div>
        </div>
      </div>


    )
  }
}


