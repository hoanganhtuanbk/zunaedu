
import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink ,browserHistory} from 'react-router';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import RichEditor from '../src'

export class AddProgram extends React.Component{
  constructor(props){
    super();
    this.state = {
      title: '',
      content: `
      <h1>This is a content</h1>
      <p>Here's some text, it's useful</p>
      <p>More text, some inline <strong>styling</strong> for <em>some</em> elements</p>
    `,
      url: '',
      author: '',
      date: ''
    };
    this.handleCreateProgram = this.handleCreateProgram.bind(this);
  }
  updateContent(content) {
    this.setState({
      content
    });
  }
  handleCreateProgram(e){
    var dateNow = new Date();
    var apps = {
      title: this.state.title,
      content: this.state.content,
      url: this.state.url,
      date: dateNow.toDateString()
    };
    Actions.create('/programs', apps, function(data){
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
                <div className="col-md-6">
                  <div className="col-md-12">
                    <label>Url image</label>
                    <input type="text" className="form-control "  onChange={(e) =>{this.setState({url : e.target.value})}} />
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
              <button type="button" className="btn btn-primary btn-success btn-form-right" onClick={this.handleCreateProgram} >Save</button>
            </div>
      </div>

    )
  }
}

