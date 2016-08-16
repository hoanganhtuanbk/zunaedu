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
export class SubParent extends React.Component{
  constructor(props){
    super();
    this.state = {
      parents : [],
      parent: {}
    };
    console.log(props)
  }
  componentWillMount(){
    this.getParentDetail(this);
    this.getParentCorners(this);

  }
  getParentDetail(t){
    console.log('hi')
    Stores.findById('/parents', t.props.params.id, function(parent){
      console.log(parent);
      t.setState({parent: parent})
    })
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
          <h3><a href="#">{parent.title}</a></h3>
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
                this.state.parent ? <div className="news-v3 bg-color-white margin-bottom-30">
                  <img className="img-responsive full-width" src={this.state.parent.url} alt=""/>
                  <div className="news-v3-in">
                    <ul className="list-inline posted-info">
                      <li>By <a href="#">Alexander Jenni</a></li>
                      <li>In <a href="#">Design</a></li>
                      <li>Posted {this.state.parent.date}</li>
                    </ul>
                    <h2>{this.state.parent.title}</h2>
                    <p>{this.state.parent.content}</p>
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
