    import React from 'react';
import {render} from 'react-dom';
import {browserHistory,Link } from 'react-router';

export class PanelHeader extends React.Component{
	render(){
		var navigateBack = function(){
    	browserHistory.goBack()
    }
		return(
			<div className="panel-header">
				{
					this.props.navigateBack == "true" ? <button className="btn btn-previous btn-default" onClick={navigateBack}>
					<i className="fa fa-chevron-left"></i></button> : null 
				}
                
                {this.props.name}

                {
                	this.props.link ? <Link to={this.props.link} className="btn btn-xs btn-success">
        		<i className="fa fa-plus"></i>
        		</Link>: null
                }
                {
                	this.props.linkEdit ? <Link to={this.props.linkEdit} className="btn btn-xs btn-success">
        		<i className="fa fa-pencil"></i>
        		</Link>: null
                }
            </div>
			)
	}
}

