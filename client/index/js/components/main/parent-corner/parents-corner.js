import React from 'react';
import {render,forceUpdate} from 'react-dom';
import {Link,browserHistory} from 'react-router';
import Stores from '../../../stores/stores'
import {HeaderPage} from '../src/header-page'
import {FeedbackForm} from '../src/feedback-form'

export class ParentsCorner extends React.Component{
  constructor(props){
    super();
    this.state = {
      parents : [],
      test: false
    };
  }
  componentWillMount(){
    this.getParentCorners(this);
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
        <HeaderPage background={'../index/img/bg-components/goc-cha-me-mini.jpg'} />
        <div className="container content-sm">
          <div className="row">
            <div className="col-md-9">
              {this.props.children}
            </div>
            <div className="col-md-3">
              <div className="headline-v2 bg-trending"><h2>Dòng thời gian</h2></div>
              <ul className="list-unstyled blog-trending margin-bottom-50">
                {childElements}
              </ul>
            </div>
          </div>
        </div>
        <FeedbackForm/>
      </div>
    );
  }
}
