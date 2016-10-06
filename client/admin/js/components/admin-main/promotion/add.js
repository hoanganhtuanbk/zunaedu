import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink ,browserHistory} from 'react-router';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import RichEditor from '../src'

export class AddPromotion extends React.Component{
  constructor(){
    super();
    this.state = {
      title: '',
      content: '',
    };
    this.handleCreatePromotion = this._handleCreatePromotion.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
  }
  onChangeContent(content){
    if(typeof(content) == 'string'){
      this.setState({content: content})
    }
  }
  _handleCreatePromotion(e){
    var apps = {
      title: this.state.title,
      content: this.state.content,
    };
    Actions.create('/promotions', apps, function(data){
      console.log(data);
      browserHistory.goBack();
    })

  }
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
                      <label>Title</label>
                      <input type="text" className="form-control "  onChange={(e) =>{this.setState({title : e.target.value})}} />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <label>Content</label>
                  <RichEditor onChangeContent = {this.onChangeContent} />
                </div>
              </div>
            </div>
            <div className="panel-body panel-feature text-center" >
              <button type="button" className="btn btn-default  btn-form-left" onClick = {(e)=>{browserHistory.goBack()}}>
                Cancel
              </button>
              <button type="button" className="btn btn-primary btn-success btn-form-right" onClick={this.handleCreatePromotion} >Save</button>
            </div>
      </div>

    )
  }
}

