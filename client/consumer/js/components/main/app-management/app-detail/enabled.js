import React from 'react';
import {render} from 'react-dom';
import { Link, browserHistory } from 'react-router';
import Stores from '../../../../stores/stores'
import Actions from '../../../../actions/actions.js'
export class Enabled extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      appId: this.props.params.appId,
      services: [],
      serviceId: []
    };
  }
  componentWillMount(){
    this.getServiceConsumer(this);
  }
  getServiceConsumer(t){
    Stores.findById('/Apps', t.state.appId , function(apps, stt){
    	console.log(apps);
        t.setState({serviceId: apps.serviceId});
        var catchServices = t.state.services;
        apps.serviceId.forEach(function(result, index){
          Stores.findById('/services', result, function(result){
            catchServices.push(result);
            t.setState({services: catchServices});
          })
        });
      }
    );
  }

  render(){
    return(
      <div className="row">
        <div className="col-md-6">
          <p>Some APIs are enabled automatically. You can disable them if you're not using their services.</p>
          <div className="table-responsive ">
            <table className="table table-hover">
              <thead>
              <tr>
                <th>Name</th>
                <th>Action</th>

              </tr>
              </thead>
              <tbody>
              {
                this.state.
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
                      	console.log(this.state.serviceId);
                        Actions.update('/Apps', this.state.appId,{
                        	"serviceId": this.state.serviceId
                        } , function(apps, stt){
                            console.log(apps)
                          }
                        )
                      }.bind(this);
                      updateServiceConsumer();
                    }.bind(this);
                    return(
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td><button className="btn btn-default" onClick={updateService} type="button">
                          {this.state.serviceId.indexOf(item.id.toString()) != -1 ? 'Disnable' : 'Enable'}
                        </button></td>
                      </tr>
                    )
                  })
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
