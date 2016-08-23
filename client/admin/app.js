import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, browserHistory, Link, IndexRoute, useRouterHistory } from 'react-router';

import {ProgramManagement} from './js/components/admin-main/program/program'
import {ViewProgram} from './js/components/admin-main/program/view'
import {AddProgram} from './js/components/admin-main/program/add'
import {EditProgram} from './js/components/admin-main/program/edit'
import {ListProgram} from './js/components/admin-main/program/list'

import {EventManagement} from './js/components/admin-main/event/event'
import {ViewEvent} from './js/components/admin-main/event/view'
import {AddEvent} from './js/components/admin-main/event/add'
import {EditEvent} from './js/components/admin-main/event/edit'
import {ListEvent} from './js/components/admin-main/event/list'

import {BookManagement} from './js/components/admin-main/book/book'
import {ViewBook} from './js/components/admin-main/book/view'
import {AddBook} from './js/components/admin-main/book/add'
import {EditBook} from './js/components/admin-main/book/edit'
import {ListBook} from './js/components/admin-main/book/list'

import {ParentManagement} from './js/components/admin-main/parent/parent'
import {ViewParent} from './js/components/admin-main/parent/view'
import {AddParent} from './js/components/admin-main/parent/add'
import {EditParent} from './js/components/admin-main/parent/edit'
import {ListParent} from './js/components/admin-main/parent/list'

import {Dermatoglyphics} from './js/components/admin-main/dermatoglyphic/dermatoglyphic'
import {ViewDermatoglyphic} from './js/components/admin-main/dermatoglyphic/view'
import {AddDermatoglyphic} from './js/components/admin-main/dermatoglyphic/add'
import {EditDermatoglyphic} from './js/components/admin-main/dermatoglyphic/edit'
import {ListDermatoglyphic} from './js/components/admin-main/dermatoglyphic/list'

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
    const items = [{
      name: 'Dashboar',
      icon: 'fa fa-envira',
      link: '/admin/dashBoard'
    },
      {
        name: 'Dermatoglyphics',
        icon: 'fa fa-forumbee',
        link: '/admin/dermatoglyphic'
      }, {
        name: 'Programs',
        icon: 'fa fa-forumbee',
        link: '/admin/program'
      }, {
        name: 'Event',
        icon: 'fa fa-forumbee',
        link: '/admin/event'
      },
      {
        name: 'Books',
        icon: 'fa fa-forumbee',
        link: '/admin/book'
      },
      {
        name: 'Parent-corners',
        icon: 'fa fa-forumbee',
        link: '/admin/parent'
      },
      {
        name: 'Profile',
        icon: 'fa fa-user',
        link: '/admin/profile'
      }];
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
      <Route path="/admin/profile" component={AdminProfile}>
        <IndexRoute component={ViewAdminProfile}/>
        <Route path="/admin/profile/edit" component={EditAdminProfile}/>
      </Route>

      <Route path="/admin/program" component={ProgramManagement} >
        <IndexRoute component={ListProgram} />
        <Route path="/admin/program/add" component={AddProgram} />
        <Route path="/admin/program/:id/edit" component={EditProgram}/>
        <Route path="/admin/program/:id" component={ViewProgram} />
      </Route>

      <Route path="/admin/event" component={EventManagement} >
        <IndexRoute component={ListEvent} />
        <Route path="/admin/event/add" component={AddEvent} />
        <Route path="/admin/event/:id/edit" component={EditEvent}/>
        <Route path="/admin/event/:id" component={ViewEvent} />
      </Route>

      <Route path="/admin/book" component={BookManagement} >
        <IndexRoute component={ListBook} />
        <Route path="/admin/book/add" component={AddBook} />
        <Route path="/admin/book/:id/edit" component={EditBook}/>
        <Route path="/admin/book/:id" component={ViewBook} />
      </Route>
      <Route path="/admin/parent" component={ParentManagement} >
        <IndexRoute component={ListParent} />
        <Route path="/admin/parent/add" component={AddParent} />
        <Route path="/admin/parent/:id/edit" component={EditParent}/>
        <Route path="/admin/parent/:id" component={ViewParent} />
      </Route>
      <Route path="/admin/dermatoglyphic" component={Dermatoglyphics} >
      <IndexRoute component={ListDermatoglyphic} />
      <Route path="/admin/dermatoglyphic/add" component={AddDermatoglyphic} />
      <Route path="/admin/dermatoglyphic/:id/edit" component={EditDermatoglyphic}/>
      <Route path="/admin/dermatoglyphic/:id" component={ViewDermatoglyphic} />
    </Route>
    </Route>
  </Router>
  , document.getElementById('app')
);
