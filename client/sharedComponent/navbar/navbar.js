import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import {DropdownProfile} from './dropdown.js'

export default class Navbar extends React.Component{

  constructor(){
    super();
    this.state = {
      displayProfile: false,
      displayApp: false,
      value: 2,
      link: "/consumer/apis/2"
    }
  };
  

  
  render(){
    var openTab = function(){
      $(".main-index").toggleClass("main-style");
      $(".sidebar").toggleClass("toggle-menu-transition");

    };
    var search = function(){
      $(".search-input").toggleClass("search-open");
      $(".search-feature").toggleClass("search-style");
    };

    var openProfile = function(){
      this.setState({displayProfile: !this.state.displayProfile}) ;
    }.bind(this);

    var handleClose =function() {
      this.setState({ displayProfile: false })
    }.bind(this);

    var openApp = function(){
      this.setState({displayApp: !this.state.displayApp}) ;
    }.bind(this);

    var closeApp = function(){
      this.setState({displayApp: false}) ;
    }.bind(this);
    const popover = {
      position: 'absolute',
      zIndex: '2',
      right:0,
      top: '60px'
    };
    const cover = {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
    return(

      <nav className="navbar">

        <li className="header">
          <span>PAAS</span>
        </li>

        <li>
          <button className="navbar-tab" onClick={openTab}>
            <i className="fa fa-align-justify" aria-hidden="true"></i>
          </button>
        </li>

        <li className="search">
          <input type="search" className="search-input"/>

        </li>
        <li className="search-feature">
          <button onClick={search}> <i className="fa fa-search" aria-hidden="true"></i></button>
          <button  ><i className="fa fa-bell-o" aria-hidden="true"></i></button>
          <button><i className="fa fa-envelope-o" aria-hidden="true"></i></button>
        </li>
       
        <li className="profile" onClick={openProfile}>

          <img src="./img/Avatar/avatar.png"/>
          <span>{this.props.currentUser.username}</span>
          <a><i className="fa fa-caret-down"></i></a>
        </li>

        { this.state.displayProfile ? <div style={ popover }>
          <div style= { cover } onClick={ handleClose }/>
          <DropdownProfile
            name= {this.props.currentUser.username}
            Avatar= "./img/Avatar/avatar.png"
            link = {this.props.link}
            logOut = {this.props.logOut}
            />
        </div> : null }


      </nav>
    )
  }
}

