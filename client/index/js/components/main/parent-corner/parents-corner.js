import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import Stores from '../../../stores/stores'
import {HeaderPage} from '../src/header-page'
export class ParentsCorner extends React.Component{
  constructor(){
    super();
    this.state = {
      parents : []
    }
  }
  componentWillMount(){
    this.getParentCorners(this);
  }
  getParentCorners(t){
    Stores.getAll('/parents', function(parents, status) {
      console.log(parents);
      if (parents) {
        t.setState({parents: parents});
      }
    });
  }
  render(){
    const childElements = this.state.parents.map(function(parent,id){
      return (
        <li key={id}>
          <h3><Link to={`/goc-cha-me/${parent.id}`}>{parent.title}</Link></h3>
          <small>{parent.date} <a href="#">Art,</a> <a href="#">Lifestyles</a></small>
        </li>
      );
    });
    return (
      <div className="bg-color-light ">
        <HeaderPage background={'../index/img/bg-components/goc-cha-me-mini.jpg'} />
        <div className="container content-sm">
          <div className="row">
            <div className="col-md-9">
              {
                (this.state.parents.length > 0 ) ? <div className="news-v3 bg-color-white margin-bottom-30">
                  <div className="bg-article">
                    <img className="img-responsive" src={this.state.parents[0].url} alt=""/>
                  </div>
                  <div className="news-v3-in">
                    <ul className="list-inline posted-info">
                      <li>By <a href="#">Admin</a></li>
                      <li>Posted {this.state.parents[0].date}</li>
                    </ul>
                    <h2>{this.state.parents[0].title}</h2>
                    <p>{this.state.parents[0].description}</p>
                    <ul className="post-shares post-shares-lg">
                      <li>
                        <a href="#">
                          <i className="rounded-x icon-speech"></i>
                          <span>28</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="rounded-x icon-share"></i>
                          <span>35</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="rounded-x icon-heart"></i>
                          <span>17</span>
                        </a>
                      </li>
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
