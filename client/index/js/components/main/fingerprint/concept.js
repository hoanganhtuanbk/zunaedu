import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Stores from '../../../stores/stores'
import Actions from '../../../actions/actions'

export class Concept extends React.Component{
  constructor(){
    super();
    this.state = {
      concept : {}
    }
  }
  componentWillMount(){
    this.getParentCorners(this);
  }
  getParentCorners(t){
    Stores.findById('/dermatoglyphics', 1, function(dermatoglyphic, status) {
      if (dermatoglyphic) {
        t.setState({concept: dermatoglyphic});
      }
    });
  }
  render(){
    return(
      <div className="col-md-9">
        <div className="news-v3 bg-color-white margin-bottom-60">
          <img className="img-responsive full-width" src={this.state.concept.url} alt="" />
          <div className="news-v3-in">
            <ul className="list-inline posted-info">
              <li>By <a href="#">Admin</a></li>
              <li>In <a href="#">Khai niem</a></li>
              <li>Posted {this.state.concept.date}</li>
            </ul>
            <h2><a href="#">{this.state.concept.title}</a></h2>
              <p>{this.state.concept.content}</p>
          </div>
        </div>
        <div className="blog-post-quote bg-color-white margin-bottom-60">
          <p>Look deep into nature, and then you will understand everything better.</p>
          <span>- Albert Einstein</span>
        </div>
      </div>
    )
  }
}
