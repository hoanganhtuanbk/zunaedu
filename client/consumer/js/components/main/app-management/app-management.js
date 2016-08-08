import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router';
import SideBar from '../../../../../sharedComponent/sidebar/sidebar';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'
export class AppManagement extends React.Component{

	constructor(){
		super();
	}

	render(){
		
		var items = [{
	      name: 'Dashboard',
	      icon: 'fa fa-envira',
	      link: `/consumer/apis`
	    }]
		return(
			<div>
			<SideBar items={items}/>
			<div className="main-index panel-header">
					<div className="content">
						{this.props.children}
		          	</div>
		     	 </div>
			
	       	</div>
			)
	}
}