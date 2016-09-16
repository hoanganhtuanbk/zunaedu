import React from 'react';
import {render,forceUpdate} from 'react-dom';
import {Link,browserHistory} from 'react-router';
import Stores from '../../../stores/stores'
import {HeaderPage} from '../src/header-page'
import Actions from '../../../actions/actions'

export class Book extends React.Component{
  constructor(props){
    super();
    this.state = {
      url: ''
    }
  }
  componentWillMount(){
    this.getBackground(this)
  }
  getBackground(t){
    Actions.find('/backgrounds',{
        where:
        {
          feature: 'book'
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

    return (
      <div className="bg-color-white book">
        <HeaderPage background={this.state.url} />
        <div className="container content-sm">
          {this.props.children}
        </div>
      </div>
    );
  }
}
