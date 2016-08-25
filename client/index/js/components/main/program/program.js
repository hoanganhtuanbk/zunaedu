import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Stores from '../../../stores/stores'
import {HeaderPage} from '../src/header-page'


class Trending extends React.Component{
  render(){
    return(
    <li >
      <h3><Link to={`/chuong-trinh/${this.props.keyNote}`}>{this.props.title}</Link></h3>
      <small>{this.props.date} <a href="#">Admin</a></small>
    </li>

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
    const programs = this.state.programs.map(function(item, index) {
      return (
        <div key={index}>
          <Trending
            keyNote={item.key}
            title={item.title}
            date={item.date}
          />
        </div>)
    });

    return(
      <div className="">
        <HeaderPage background={'../index/img/bg-components/chuong-trinh-mini.jpg'} />
        <div className="container content-sm">
          <div className="row">
            <div className="col-md-9">
              {this.props.children}
              <ul className="pager pager-v3 pager-sm no-margin-bottom">
                <li className="previous"><a href="#">← Older</a></li>
                <li className="page-amount">1 of 7</li>
                <li className="next"><a href="#">Newer →</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="headline-v2 bg-color-light"><h2>Dòng thời gian</h2></div>
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
