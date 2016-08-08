import React from 'react';
import {render} from 'react-dom';
import { Link,browserHistory } from 'react-router';
import SideBar from '../../../../../sharedComponent/sidebar/sidebar';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header';
import Stores from '../../../stores/stores'
import Actions from '../../../actions/actions'
export class CreateApp extends React.Component{

	constructor(){
		super();
		this.state = {
			name: '',
			serviceId: [],
			services: []
		};
		this.handleCreateApp = this.handleCreateApp.bind(this);
	}

	componentWillMount(){
	    this.getService(this);
	    console.log(this.context)
	  }

  	getService(t) {
	    Stores.getAll('/services', function(services, status) {
		t.setState({services: services});
		})
  	}

	handleCreateApp(e){
    var apps = {
      name: this.state.name,
      serviceId: this.state.serviceId,
      userId: this.context.infoUser.id,
      clientSecret: guid()
    };
    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }


    Actions.create('/Apps', apps, function(data){
      console.log(data);
      browserHistory.goBack();
    })

  }
	render(){
		return(
			<div className="panel">
			<PanelHeader
	          name = "Create app"
	          />
				<div className="panel-body">
					<div className="row">
	                <div className="col-md-6">
	                  <div className="form-group row">
	                    <div className="col-md-12">
	                      <label>Name</label> *
	                      <input type="text" className="form-control "  onChange={(e) =>{this.setState({name : e.target.value})}} />
	                    </div>
	                  </div>
	                </div>
	                  <div className="col-md-6">
	                  <div className="form-group row">
	                    <div className="col-md-12">
	                    <label>Services</label>
	                    	{this.state.
	                    		services.
	                    				map(item =>{
	                    					const id = item.id.toString();
	                    					const serviceId = this.state.serviceId;
	                    					const enableService = function() {
	                    						if(serviceId.indexOf(id) == -1) {
	                    							serviceId.push(id)
	                    							this.setState({
	                    								serviceId: serviceId
	                    							})
	                    						} else {
	                    							const where = serviceId.indexOf(id);
	                    							serviceId.splice(where, 1);
	                    							this.setState({
	                    								serviceId: serviceId
	                    							})
	                    						}
	                    					}.bind(this);
	                    					return(
				                    		<div key={item.id}>
				                    		<div className="col-md-6">
						                    		{item.name}
						                    	</div>
						                    	<div className="col-md-3">

						                    		<span onClick={enableService}>
														{this.state.serviceId.indexOf(item.id.toString())==-1?'Enable':'Disable'}
						                    		</span>

												</div>
											</div>
	                    	)})
	                    }
	                    </div>
	                  </div>
	                </div>

	              </div>
				</div>
			  	<div className="panel-body panel-feature text-center" >
	              <button type="button" className="btn btn-default  btn-form-left" onClick = {(e)=>{browserHistory.goBack()}}>
	                Cancel
	              </button>
	              <button type="button" className="btn btn-primary btn-success btn-form-right" onClick={this.handleCreateApp}>Save</button>
	            </div>
            </div>
			)
	}
}
CreateApp.contextTypes = {
  infoUser: React.PropTypes.object
};
