import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Slider from 'react-slick'
import Stores from '../../../stores/stores'
import Actions from '../../../actions/actions'


export class Application extends React.Component{
  constructor(){
    super();
    this.state = {
      application : {}
    }
  }
  componentWillMount(){
    this.getParentCorners(this);
  }
  getParentCorners(t){
    Stores.findById('/dermatoglyphics', 3, function(dermatoglyphic, status) {
      if (dermatoglyphic) {
        t.setState({application: dermatoglyphic});
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
              <li>Posted January 24, 2015</li>
            </ul>
            <h2>{this.state.application.title}</h2>

            <img className="img-responsive medium-width" src={this.state.application.url} alt="" />
            < div dangerouslySetInnerHTML={{ __html: this.state.application.content }}></div>

          </div>
        </div>
      </div>
    )
  }
}
