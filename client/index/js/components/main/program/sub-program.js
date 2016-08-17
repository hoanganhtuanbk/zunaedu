import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Masonry from 'react-masonry-component';
import Stores from '../../../stores/stores'

class Header extends React.Component{
  render(){
    return(
      <div className="breadcrumbs-v1">
        <div className="container">
          <span>Zuna Việt Nam</span>
          <h1>Sách giáo dục</h1>
        </div>
      </div>
    )
  }
}

export class SubProgram extends React.Component{
  constructor(props){
    super();
    this.state = {
      programs : [],
      program: {}
    };
    console.log(props)
  }
  componentWillMount(){
    this.getProgramDetail(this);
    this.getProgram(this);

  }
  getProgramDetail(t){
    Stores.findById('/programs', t.props.params.id, function(program){
      console.log(program);
      t.setState({program: program})
    })
  }
  getProgram(t){
    Stores.getAll('/programs', function(programs, status) {
      if (programs) {
        t.setState({programs: programs});
      }
    });
  }
  render(){
    const childElements = this.state.programs.map(function(program,id){
      return (
        <li key={id}>
          <h3><a href="#">{program.title}</a></h3>
          <small>{program.date} <a href="#">Art,</a> <a href="#">Lifestyles</a></small>
        </li>
      );
    });
    return (
      <div className="bg-color-light ">
        <Header />
        <div className="container content-sm">
          <div className="row">
            <div className="col-md-9">
              {
                this.state.program ? <div className="news-v3 bg-color-white margin-bottom-30">
                  <img className="img-responsive full-width" src={this.state.program.url} alt=""/>
                  <div className="news-v3-in">
                    <ul className="list-inline posted-info">
                      <li>By Admin</li>
                      <li>Posted {this.state.program.date}</li>
                    </ul>
                    <h2>{this.state.program.title}</h2>
                    < div dangerouslySetInnerHTML={{ __html: this.state.program.content }}></div>
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
                </div> : null
              }

            </div>
            <div className="col-md-3">
              <div className="headline-v2"><h2>Trending</h2></div>
              <ul className="list-unstyled blog-trending margin-bottom-50">
                {childElements}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
