import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Stores from '../../../stores/stores'
import Actions from '../../../actions/actions'

class Header extends React.Component{
  render(){
    return(
      <div className="breadcrumbs-v1">
        <div className="container">
          <span>Zuna Việt Nam</span>
          <h1>Góc cha mẹ</h1>
        </div>
      </div>
    )
  }
}
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
        <Header />
        <div className="container content-sm">
          <div className="row">
            <div className="col-md-9">
              {
                (this.state.parents.length > 0 ) ? <div className="news-v3 bg-color-white margin-bottom-30">
                  <img className="img-responsive full-width" src={this.state.parents[0].url} alt=""/>
                  <div className="news-v3-in">
                    <ul className="list-inline posted-info">
                      <li>By <a href="#">Admin</a></li>
                      <li>Posted {this.state.parents[0].date}</li>
                    </ul>
                    <h2>{this.state.parents[0].title}</h2>
                    < div dangerouslySetInnerHTML={{ __html: this.state.parents[0].content }}></div>

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
