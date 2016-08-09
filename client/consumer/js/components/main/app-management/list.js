import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router';
import SideBar from '../../../../../sharedComponent/sidebar/sidebar';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header';
import Stores from '../../../stores/stores'

export class ListApp extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      apps:[
      ],
    };
  }
  componentWillMount(){
    this.getAll(this);
  }

  getAll(t) {
    Stores.find('/Apps',{
      where:{
        userId: t.context.infoUser.id
      }
    }, function(apps, status) {
      t.setState({apps: apps})
    });
  }
  render(){
    const items = [{
      name: 'Dashboard',
      icon: 'fa fa-envira',
      link: `/consumer/apis`
    }]
    const color = {
      color: 'red'
    }
    return(
      <div>
        <SideBar items={items}/>
        <div className="main-index panel-header">
          <div className="content">
            <div className="panel">
              <PanelHeader
                name = "Your app"
                link = "/consumer/apis/add"
                />
              <div className="content">
                {( this.state.apps.length > 0) ? <div className="panel-body">
                  { this.state.apps.map(app =>(
                    <div key={app.id}>
                      <Link to={`/consumer/apis/overview/${app.id}`}>{app.name}</Link>
                    </div>
                  ))}
                </div> : <div className="panel-body">
                  <span>Please <Link style={color} to="/consumer/apis/add">create</Link> app to use our services</span>
                </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
ListApp.contextTypes = {
  infoUser: React.PropTypes.object
};
