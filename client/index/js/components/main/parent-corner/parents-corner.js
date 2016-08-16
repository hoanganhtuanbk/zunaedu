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
              <div className="news-v3 bg-color-white margin-bottom-30">
                <img className="img-responsive full-width" src="../index/img/parent-corner/doctor.jpg" alt=""/>
                <div className="news-v3-in">
                  <ul className="list-inline posted-info">
                    <li>By <a href="#">Alexander Jenni</a></li>
                    <li>In <a href="#">Design</a></li>
                    <li>Posted January 24, 2015</li>
                  </ul>
                  <h2><a href="#">Incredible standard post “IMAGE”</a></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec arcu ipsum. Curabitur tincidunt nisi ex, ut eleifend turpis egestas vitae. Proin convallis et eros eget rutrum. Duis luctus lorem id mattis placerat. Etiam pharetra libero ut suscipit mollis. Morbi augue mi, maximus at lectus id, mollis ornare dui. Curabitur consequat, est non cursus suscipit, quam nulla porta enim, sed pharetra diam elit non nisi. Praesent pulvinar ante eu euismod cursus. Fusce quis est justo. Nullam id egestas diam. Etiam ac augue orci. Aliquam scelerisque convallis est sed pretium. In vel elementum lorem.</p>
                  <p>Pellentesque eleifend metus vitae commodo finibus. Proin eget mi a sem placerat facilisis. Aenean interdum aliquet sapien, non scelerisque massa vestibulum ut. Quisque mollis, ante nec volutpat dignissim, lectus libero porta magna, at volutpat massa orci a turpis. Duis tincidunt nunc magna, non semper metus tempus ut. Duis vulputate enim condimentum posuere lacinia. Ut venenatis massa ex.</p>
                  <blockquote className="hero">
                    <p><em>"Lorem ipsum dolor sit amet, consectetur adipiscing duis mollis, est non commodo luctus elit posuere erat a ante. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis lorem ipsum dolor sit amet, consectetur adipiscing"</em></p>
                  </blockquote>
                  <p>Sed placerat diam auctor eget. Mauris tellus eros, iaculis id leo quis, finibus aliquet ipsum. Duis volutpat lacus in purus bibendum, at sollicitudin eros malesuada. Sed nec diam a eros eleifend mattis. Phasellus in facilisis enim. Vestibulum sodales lacinia lectus, quis efficitur velit posuere sed.</p>
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
              </div>

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
