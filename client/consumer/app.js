import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, browserHistory, IndexRoute, useRouterHistory } from 'react-router';

import {AppManagement} from './js/components/main/app-management/app-management'
import {CreateApp} from './js/components/main/app-management/add'
import {ViewApp} from './js/components/main/app-management/view'
import {ListApp} from './js/components/main/app-management/list'
import {Overview} from './js/components/main/app-management/app-detail/overview'
import {Credentials} from './js/components/main/app-management/app-detail/credentials'
import {Enabled} from './js/components/main/app-management/app-detail/enabled'
import {Library} from './js/components/main/app-management/app-detail/library'

import Stores from './js/stores/stores'
import AdminNavbar from './js/components/main/navbar/navbar.js';


export class ConsumerMain extends React.Component{
	constructor(props){
    super(props);
    
    this.state = {
     	currentUser: {},
     	appId: 1
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
   getChildContext() {
    return {infoUser: this.state.currentUser};
  }
	render(){
		var items = [{
	      name: 'Overview',
	      icon: 'fa fa-crosshairs',
	      link: `/consumer/apis/overview/${this.state.appId}`
	    },{
	      name: 'Credentials',
	      icon: 'fa fa-key',
	      link: `/consumer/apis/credentials/${this.state.appId}`
	    }];
		return(
			<div className="index-center wrapper">
    			<AdminNavbar currentUser={this.state.currentUser}  />
			            	{this.props.children}
		    </div>
		)
	}
}
ConsumerMain.childContextTypes = {
  infoUser: React.PropTypes.object,
};
render(
	<Router history={browserHistory}>
		<Route path="/consumer/apis" component={ConsumerMain} >
			<IndexRoute component={ListApp} />
			<Route path="/consumer/apis/management" component={AppManagement} >
				<Route path="/consumer/apis/add" component={CreateApp}/>
			</Route>
			<Route path="/consumer/apis/:appId" component={ViewApp} >
				<Route path="/consumer/apis/overview/:appId" component={Overview} >
					<IndexRoute component={Enabled} />
					<Route path="/consumer/apis/library/:appId" component={Library} />
				</Route>
				<Route path="/consumer/apis/credentials/:appId" component={Credentials} />
			</Route>
		</Route>
	</Router>
	, document.getElementById('app')
)
