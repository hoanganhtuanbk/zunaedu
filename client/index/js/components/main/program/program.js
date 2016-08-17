import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Stores from '../../../stores/stores'
class Header extends React.Component{
  render(){
    return(
      <div className="breadcrumbs-v1">
        <div className="container">
          <span>Zuna Việt Nam</span>
          <h1>Chương trình đào tạo</h1>
        </div>
      </div>
    )
  }
}

class Trending extends React.Component{
  render(){
    return(
    <li key={this.props.id}>
      <h3><a href="#">{this.props.title}</a></h3>
      <small>{this.props.date} <a href="#">Hi-Tech,</a> <a href="#">Technology</a></small>
    </li>

    )
  }
}
class ListProgram extends React.Component{
  render(){
    return(
      <div>
        <div className="row margin-bottom-20">
          <div className="col-sm-5 sm-margin-bottom-20">
            <Link to={`/chuong-trinh/${this.props.id}`}> <img className="img-responsive" src={this.props.url} /> </Link>
          </div>

          <div className="col-sm-7 news-v3">
            <div className="news-v3-in-sm no-padding content-program">
              <ul className="list-inline posted-info">
                <li>By Admin</li>
                <li>Posted {this.props.date}</li>
              </ul>
              <h2><Link to={`/chuong-trinh/${this.props.id}`}>{this.props.title}</Link></h2>
              <div dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
              <Link className="read-more" to={`/chuong-trinh/${this.props.id}`}>Xem chi tiết</Link>
              <ul className="post-shares">
                <li>
                  <a href="#">
                    <i className="rounded-x icon-speech"></i>
                    <span>5</span>
                  </a>
                </li>
                <li><a href="#"><i className="rounded-x icon-share"></i></a></li>
                <li><a href="#"><i className="rounded-x icon-heart"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export class Program extends React.Component{
  constructor(){
    super();
    this.state = {
      programs: []
    };
  }
  componentWillMount(){
    this.getPrograms(this);
  }
  getPrograms(t){
    Stores.getAll('/programs', function(programs, status) {
      console.log(programs);
      if (programs) {
        t.setState({programs: programs});
        console.log(t.state.programs)
      }
    });
  }
  render(){
    const programs = this.state.programs.map(function(item, id) {
      return (<Trending
        key={id}
        id={item.id}
        title={item.title}
        date={item.date}
      />)
    });
    const listPrograms = this.state.programs.map(function(item, id) {
      return (<ListProgram
        key={id}
        id={item.id}
        title={item.title}
        date={item.date}
        content={item.content}
        url={item.url}
      />)
    });
    return(
      <div className="">
        <Header />
        <div className="container content-sm">
          <div className="row">
            <div className="col-md-9">
              {listPrograms}
              <div className="clearfix margin-bottom-20"><hr/></div>
              <ul className="pager pager-v3 pager-sm no-margin-bottom">
                <li className="previous"><a href="#">← Older</a></li>
                <li className="page-amount">1 of 7</li>
                <li className="next"><a href="#">Newer →</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="headline-v2 bg-color-light"><h2>Trending</h2></div>
              <ul className="list-unstyled blog-trending margin-bottom-50">
                {programs}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
