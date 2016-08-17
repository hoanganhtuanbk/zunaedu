import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink, browserHistory } from 'react-router';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'
import Stores from '../../../stores/stores';
import Actions from '../../../actions/actions.js'
import BasicHtmlEditor from '../src/BasicHtmlEditor';

export class EditParent extends React.Component{
  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
      url: ''
    };
    this.save = this.save.bind(this);
  }
  componentWillMount(){
    this.findById(this);
  }
  updateContent(content) {
    this.setState({
      content
    });
  }
  findById(t) {
    var id = window.location.pathname.split('/')[3];
    Stores.findById('/parents', this.props.params.id, function(parent, status) {
      t.setState({title: parent.title, content: parent.content, url: parent.url});
      console.log(t.state);
    })
  }
  save(e) {
    e.preventDefault();
    const data = {
      title : this.state.title,
      content: this.state.content,
      url: this.state.url
    }
    Actions.update('/parents', this.props.params.id, data, function(result, status) {
      console.log(result)
      browserHistory.goBack();
    })
  }
  render(){
    return(
      <div className="panel">
        <PanelHeader
          navigateBack = "true"
          name = "Edit a service"
          />
        <div className="panel-body">
          <div className="row">
            <div className="col-md-6">
              <div className="col-md-12">
                <label>Title</label> *
                <input type="text" value={this.state.title} className="form-control " onChange={(e)=>{this.setState({title: e.target.value })}}/>
              </div>
              <div className="col-md-12">
                <label>Content</label>
                <BasicHtmlEditor
                  value={this.state.content }
                  onChange={ (content) => this.updateContent(content) }
                  debounce={ 500 }
                />
              </div>

            </div>
            <div className="col-md-6">
              <div className="col-md-12">
                <label>Url</label> *
                <input type="text" value={this.state.url} className="form-control " onChange={(e)=>{this.setState({url: e.target.value })}}/>
              </div>
              <div className="col-md-12">
                <div style={{ margin: '30px 10px 10px 10px' }}>
                  <code>Exported HTML</code>
                  <hr/>
                  <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="panel-body panal-feature text-center" >
          <button type="button" className="btn  btn-default btn-form-left" onClick = {(e)=>{browserHistory.goBack()}}>
            Cancel
          </button>
          <button type="button" onClick={this.save} className="btn btn-primary btn-success btn-form-right" >Save</button>
        </div>
      </div>
    )
  }
}

