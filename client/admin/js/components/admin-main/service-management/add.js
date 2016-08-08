
import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

export class AddService extends React.Component{
  render(){
    return(
      <div className="panel">
       <PanelHeader
              navigateBack = "true"
              name = "Add new a service"
        />
            <div className="panel-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label>Name</label> *
                      <input type="text" className="form-control "   />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-body panel-feature text-center" >
              <button type="button" className="btn btn-default  btn-form-left" onClick = {(e)=>{browserHistory.goBack()}}>
                Cancel
              </button>
              <button type="button" className="btn btn-primary btn-success btn-form-right" >Save</button>
            </div>
      </div>

    )
  }
}

