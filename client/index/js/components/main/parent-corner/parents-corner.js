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
          <h3><Link to={`/goc-cha-me/${parent.key}`}>{parent.title}</Link></h3>
          <small>{parent.date} <a href="#">Art,</a> <a href="#">Lifestyles</a></small>
        </li>
      );
    });
    return (
      <div className="">
        <HeaderPage background={'../index/img/bg-components/goc-cha-me-mini.jpg'} />
        <div className="container content-sm">
          <div className="row">
            <div className="col-md-9">
              {this.props.children}
            </div>
            <div className="col-md-3">
              <div className="headline-v2 bg-color-light"><h2>Trending</h2></div>
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
