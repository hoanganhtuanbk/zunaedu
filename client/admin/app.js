import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, browserHistory, Link, IndexRoute, useRouterHistory } from 'react-router';

import {ListUser} from './js/components/admin-main/user-management/list';
import {AddUser} from './js/components/admin-main/user-management/add';
import {EditUser} from './js/components/admin-main/user-management/edit';
import {UserManagement} from './js/components/admin-main/user-management/user'
import {ViewUser} from './js/components/admin-main/user-management/view/'

import {ConsumerManagement} from './js/components/admin-main/consumer-management/consumer';
import {ListConsumer} from './js/components/admin-main/consumer-management/list'
import {ViewConsumer} from './js/components/admin-main/consumer-management/view'
import {AddConsumer} from './js/components/admin-main/consumer-management/add';
import {EditConsumer} from './js/components/admin-main/consumer-management/edit';

import {ServiceManagement} from './js/components/admin-main/service-management/service'
import {ViewService} from './js/components/admin-main/service-management/view'
import {AddService} from './js/components/admin-main/service-management/add'
import {EditService} from './js/components/admin-main/service-management/edit'
import {ListService} from './js/components/admin-main/service-management/list'

import SideBar from '../sharedComponent/sidebar/sidebar';
import AdminNavbar from './js/components/admin-main/navbar/navbar.js';

import {AdminProfile, EditAdminProfile, ViewAdminProfile} from './js/components/admin-main/profile/profile.js';

import {DashBoard} from './js/components/admin-main/dashboard/dashboard'
import Stores from './js/stores/stores'

export class AdminCenter extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser: {}
    };
    this.getCurrent(this);
  }

  getCurrent(t) {
    Stores.getCurrentUser(function(user, status, err) {
      if (err) {
        console.log(err);
        window.location.href='/';
      }
      else {
        t.setState({currentUser: user});
      }
    })
  }

  render(){
    var items = [{
      name: 'Dashboar',
      icon: 'fa fa-envira',
      link: '/admin/dashBoard'
    }];
    if (this.state.currentUser.privilege == 1) {
      items.push({
        name: 'Consumer',
        icon: 'fa fa-street-view',
        link: '/admin/consumer'
      }, {
        name: 'Service',
        icon: 'fa fa-forumbee',
        link: '/admin/service'
      }, {
        name: 'User',
        icon: 'fa fa-users',
        link: '/admin/users'
      })
    } else if (this.state.currentUser.privilege == 2) {
      items.push({
        name: 'Consumer',
        icon: 'fa fa-street-view',
        link: '/admin/consumer'
      })
    } else {

    }
    items.push({
      name: 'Profile',
      icon: 'fa fa-user',
      link: '/admin/profile'
    });
    return(
      <div className="index-center wrapper">
        <AdminNavbar currentUser={this.state.currentUser}  />
        <SideBar items={items}/>
        <div className="main-index">
        {this.props.children && React.cloneElement(this.props.children, {
          currentUser: this.state.currentUser
        })}
        </div>
      </div>
    )
  }
}
render(
  <Router history={browserHistory}>
    <Route path="/admin" component={AdminCenter}>
      <IndexRoute component={DashBoard}/>
      <Route path="/admin/dashBoard" component={DashBoard}/>

      <Route path="/admin/consumer" component={ConsumerManagement}>
        <IndexRoute component={ListConsumer} />
        <Route path="/admin/consumer/add" component={AddConsumer}/>
        <Route path="/admin/consumer/:id" component={ViewConsumer}/>
        <Route path="/admin/consumer/:id/edit" component={EditConsumer}/>
      </Route>

      <Route path="/admin/users" component={UserManagement}>
        <IndexRoute component={ListUser}/>
        <Route path="/admin/users/:id/edit" component={EditUser}/>
        <Route path="/admin/users/add" component={AddUser}/>
        <Route path="/admin/users/:id" component={ViewUser}/>
      </Route>
      <Route path="/admin/profile" component={AdminProfile}>
        <IndexRoute component={ViewAdminProfile}/>
        <Route path="/admin/profile/edit" component={EditAdminProfile}/>
      </Route>
      <Route path="/admin/service" component={ServiceManagement} >
        <IndexRoute component={ListService} />
        <Route path="/admin/service/add" component={AddService} />
        <Route path="/admin/service/:id/edit" component={EditService}/>
        <Route path="/admin/service/:id" component={ViewService} />
      </Route>
    </Route>
  </Router>
  , document.getElementById('app')
);
