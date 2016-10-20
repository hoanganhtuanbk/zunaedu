import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import {HeaderPage} from '../src/header-page'
import Actions from '../../../actions/actions'

export class FingerPage extends React.Component{
  constructor(){
    super();
    this.state = {
      url: ''
    };
  }
  componentWillMount(){
    this.getBackground(this)
  }
  getBackground(t){
    Actions.find('/backgrounds',{
        where:
        {
          feature: 'dmit'
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
      <section className="fingerprint">
        <HeaderPage background={this.state.url} />
        <div className="">
          {this.props.children}
        </div>
      </section>
    );
  }
}
