import React from 'react';
import {render} from 'react-dom';
import Navbar from '../../../../../sharedComponent/navbar/navbar.js'
import Stores from '../../../stores/stores.js';


export default class AdminNavbar extends React.Component{
  constructor() {

    super();
    this.logOut = function(e) {
      e.preventDefault();
      Stores.logOut(function() {
        window.location = '/'
      })
    }
  }
  render() {
    return (
      <Navbar currentUser = {this.props.currentUser} link = "/admin/profile" logOut = {this.logOut} />
    )
  }
}
