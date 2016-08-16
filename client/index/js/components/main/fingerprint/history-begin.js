import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Stores from '../../../stores/stores'
import Actions from '../../../actions/actions'


export class HistoryBegin extends React.Component{
  constructor(){
    super();
    this.state = {
      history : {}
    }
  }
  componentWillMount(){
    this.getParentCorners(this);
  }
  getParentCorners(t){
    Stores.findById('/dermatoglyphics', 2, function(dermatoglyphic, status) {
      if (dermatoglyphic) {
        t.setState({history: dermatoglyphic});
      }
    });
  }
  render(){
    return(
      <div className="col-md-9">
        <div className="news-v3 bg-color-white margin-bottom-60">
          <div className="news-v3-in">
            <ul className="list-inline posted-info">
              <li>By <a href="#">Admin</a></li>
              <li>In <a href="#">Khai niem</a></li>
              <li>Posted {this.state.history.date}</li>
            </ul>
            <h2>{this.state.history.title}</h2>

            <img className="img-responsive medium-width" src={this.state.history.url} alt="" />
            <p>{this.state.history.content}</p>
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
