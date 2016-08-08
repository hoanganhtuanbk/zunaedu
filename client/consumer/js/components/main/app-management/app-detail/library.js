import React from 'react';
import {render} from 'react-dom';
import Stores from '../../../../stores/stores'
import Actions from '../../../../actions/actions.js'
import { Link, browserHistory } from 'react-router';

export class Library extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      appId: this.props.params.appId,
      services: [],
      serviceId: []

    }
  }
  componentWillMount(){
    this.getServiceConsumer(this);
    this.getAllService(this);

  }

  getAllService(t){
    Stores.getAll('/services', function(services, status) {
      
      t.setState({services: services});

    });

  }
  getServiceConsumer(t){
    Stores.findById('/Apps', t.state.appId , function(apps, stt){
        t.setState({serviceId: apps.serviceId});
      }
    );
  }
  render(){
    return(
      <div className="row">
        <div className="col-md-6">
          <p>You can enable popular APIs or <strong>search</strong> APIs different from their storage. </p>

          <div className="form-group row">
            <div className="col-md-12">
              <input type="text" className="form-control " />
            </div>
          </div>
          <div className="table-responsive ">
            <table className="table table-hover">
              <thead>
              <tr>
                <th>Name</th>
                <th>Active</th>
				<th>Action</th>
              </tr>
              </thead>
              <tbody>
              {this.state.
                services.
                map(item =>{
                  const id = item.id.toString();
                  const serviceId = this.state.serviceId;
                  const updateService = function(){
                    if(serviceId.indexOf(id) == -1) {
                      serviceId.push(id);
                      console.log(serviceId);
                      this.setState({
                        serviceId: serviceId
                      })
                    } else {
                      const where = serviceId.indexOf(id);
                      serviceId.splice(where, 1);
                      console.log(serviceId);
                      this.setState({
                        serviceId: serviceId
                      })
                    };

                    const updateServiceConsumer =function(){
                      Actions.update('/Apps', this.state.appId, {
                          "serviceId" : this.state.serviceId
                        }, function(apps, stt){
                          console.log(apps)
                        }
                      )
                    }.bind(this);
                    updateServiceConsumer();
                  }.bind(this);
                  return(
                    <tr key={item.id}>
                      <td>{item.name}</td>
                        <td>
                        <span>
                        {this.state.serviceId.indexOf(item.id.toString()) == -1 ? 'False' : 'True'}
                      </span>
                      </td>
                      <td>
                      <button className="btn btn-default" onClick={updateService}>
                        {this.state.serviceId.indexOf(item.id.toString()) == -1 ? 'Enable' : 'Disable'}
                      </button >
                      </td>
                    </tr>
                  )

                }
              )
              }


              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
