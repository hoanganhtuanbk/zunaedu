import React from 'react';
import {render,forceUpdate} from 'react-dom';
import {Link,browserHistory} from 'react-router';
import Stores from '../../../stores/stores'
import {HeaderPage} from '../src/header-page'
export class Book extends React.Component{
  constructor(props){
    super();
  }
  render(){

    return (
      <div className="bg-color-white book">
        <HeaderPage background={'../index/img/bg-components/sach-mini.jpg'} />
        <div className="container content-sm">
          {this.props.children}
        </div>
      </div>
    );
  }
}
