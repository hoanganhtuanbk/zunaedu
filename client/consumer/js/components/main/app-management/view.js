import React from 'react';
import {render} from 'react-dom';
import { Link, browserHistory } from 'react-router';
import SideBar from '../../../../../sharedComponent/sidebar/sidebar';
import AdminNavbar from '../navbar/navbar.js';

export class ViewApp extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			appId: this.props.params.appId
		}
	}

	render(){
		var items = [
		{
	      name: 'Dashboard',
	      icon: 'fa fa-envira',
	      link: `/consumer/apis`
	    },{
	      name: 'Overview',
	      icon: 'fa fa-crosshairs',
	      link: `/consumer/apis/overview/${this.state.appId}`
	    },{
	      name: 'Credentials',
	      icon: 'fa fa-key',
	      link: `/consumer/apis/credentials/${this.state.appId}`
	    }];
		return(
			<div>
				<SideBar items={items}/>
				<div className="main-index">
					<div className="content">
						<div className="panel">
				            	{this.props.children}
		            	</div>
		          	</div>
		     	 </div>
          	</div>
			)
	}
}