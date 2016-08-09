import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'

class ConponentDashboard extends React.Component{
  render(){
    return(
      <Link to={this.props.link} className="col-md-4 ">
        <div className={this.props.class}>
        <div className="panel-content">
          <h1>{this.props.number}</h1>
          <h5>{this.props.title}</h5>
        </div>
          <div className="icon-dashboard"><i className={this.props.icon} ></i></div>
        </div>
      </Link>
      )
  }
}

export class DashBoard extends React.Component{
  constructor(){
    super();
    this.state={
      consumers : [],
      services : [],
      users : []
    }
  }

componentWillMount(){
    this.getAll(this);
  }

  getAll(t) {
    Stores.getAll('/services', function(services, status) {
      t.setState({services: services})
    });

    Stores.find('/users', {
      where: {
        privilege: 3
      }
    }, function(consumers, status){
      t.setState({consumers: consumers})
    });

    Stores.find('/users', {
      where: {
        privilege: {
          "neq": "3"
        }
      }
    },function(users, status){
      t.setState({users : users})
    })


  }
  render(){
    const items = [
      <ConponentDashboard
        key={0}
        class="panel bg-pink"
        title="Consumers"
        number={this.state.consumers.length}
        link="/admin/consumer"
        icon="fa fa-street-view"
        />
    ];
    if (this.props.currentUser.privilege == 1) {
      items.push(
        <ConponentDashboard
          key={1}
          class="panel bg-green"
          title="Services"
          number={this.state.services.length}
          link="/admin/service"
          icon="fa fa-forumbee"
          />,
        <ConponentDashboard
          key={2}
          class="panel bg-yellow"
          title="Users"
          number={this.state.users.length}
          link="/admin/users"
          icon="fa fa-users"
          />
      )
    }
    return(
      <div >
        <div className="content-header">
          <h3 >
            Home
          <small>  Welcome home, this is PAAS!</small>
          </h3>
        </div>
        <div className="content">
          <div className="row dashboard-style">
            {items}
          </div>
        </div>
      </div>
    )
  }
}

