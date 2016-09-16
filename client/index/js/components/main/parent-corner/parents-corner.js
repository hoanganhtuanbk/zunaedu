import React from 'react';
import {render,forceUpdate} from 'react-dom';
import {Link,browserHistory} from 'react-router';
import Stores from '../../../stores/stores'
import Actions from '../../../actions/actions'

import {HeaderPage} from '../src/header-page'
import {FeedbackForm} from '../src/feedback-form'
import {HitBooks} from '../src/hit-books'

export class ParentsCorner extends React.Component{
  constructor(props){
    super();
    this.state = {
      parents : [],
      url: ''
    };
  }
  componentWillMount(){
    this.getParentCorners(this);
    this.getBackground(this)
  }
  componentWillReceiveProps(nextProps){ //Function nay chay mỗi khi có thay đổi props
  this.setState({key:nextProps.params.key>this.props.params.key})
}
  getParentCorners(t){
    Stores.find('/parents',{order: 'id DESC'}, function(parents, status) {
      if (parents) {
        t.setState({parents: parents});
      }
    });
  }
  getBackground(t){
    Actions.find('/backgrounds',{
      where:
      {
      feature: 'parent-corner'
    },
    order: 'id DESC'},
      function (background) {
      console.log(background);
      if(background[0]){
        t.setState({url: background[0].url})
      }
    })
  }
  render(){
    const childElements = this.state.parents.map(function(parent,id){
      return (
        <li key={id}>
          <h3><Link to={`/goc-cha-me/${parent.key}`} >{parent.title}</Link></h3>
          <small>{parent.date} <a href="#">Art,</a> <a href="#">Lifestyles</a></small>
        </li>
      );
    });
    return (
      <div className="bg-color-white">
        <HeaderPage background={this.state.url} />
        <div className="container content-sm">
          <div className="row">
            <div className="col-md-9">
              {this.props.children}
              <ul className="pager pager-v3 pager-sm no-margin-bottom">
                <li className="previous"><a href="#">← Older</a></li>
                <li className="page-amount">1 of 7</li>
                <li className="next"><a href="#">Newer →</a></li>
              </ul>
              <FeedbackForm/>

            </div>
            <div className="col-md-3">
              <div className="headline-v2 bg-trending"><h2>Bài đăng mới nhất</h2></div>
              <ul className="list-unstyled blog-trending margin-bottom-50">
                {childElements}
              </ul>
              <HitBooks/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
