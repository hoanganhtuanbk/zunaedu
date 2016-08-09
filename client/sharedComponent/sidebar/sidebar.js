import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router';

class MenuItem extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <li>
        <Link to={this.props.link} activeClassName="active" >
        <i className={this.props.icon}></i>
        <span>{this.props.name}</span>
        </Link>
      </li>
    )
  }
}

export default class SideBar extends React.Component{
  constructor (props){
    super(props);
  }

  render(){
      var items = this.props.items.map(function(item, id) {
        return (
          <MenuItem
            key = {id}
            name= {item.name}
            icon={item.icon}
            link={item.link}
            />
        )
      });
    return(
      <section className="sidebar" >
      {this.context.appId}
      <div className="menu_section">
        <ul className="sidebar-main sidebar-main-admin nav side-menu">
          {items}
        </ul>
      </div>
      </section>
    )
  }
}
SideBar.contextTypes = {
  appId: React.PropTypes.number
};