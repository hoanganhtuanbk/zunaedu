import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink, browserHistory } from 'react-router';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'
import Stores from '../../../stores/stores';
import Actions from '../../../actions/actions.js'
import {
  Editor,
  EditorState,
  Entity,
  ContentState,
  convertFromRaw,
  convertToRaw
} from 'draft-js';
import ImageComponent from '../src/components/ImageComponent';
export class EditFeedback extends React.Component{
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
      url : ''
    };
    this.save = this.save.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
  }

  componentWillMount(){
    this.findById(this);
  }
  findById(t) {
    var id = window.location.pathname.split('/')[3];
    Stores.findById('/feedbacks', this.props.params.id, function(feedback, status) {
      t.setState({title: feedback.title,content: feedback.content, url: feedback.url});
    })
  }
  save(e) {
    e.preventDefault();
    const data = {
      title : this.state.title,
      content: this.state.content,
    };
    if(this.state.file){
      data.url= `/api/containers/files/download/${this.state.file.name}`
    }
    Actions.update('/feedbacks', this.props.params.id, data, function(result, status) {
      if(status = 'success'){browserHistory.goBack()}else alert(status)
    })
  }
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file)

  }
  render(){
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null ;
    if (imagePreviewUrl ) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    }
    return(
      <div className="panel">
        <PanelHeader
          navigateBack = "true"
          name = "Edit a service"
        />
        <div className="panel-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">

                <div className="col-md-12">
                  <label>Title</label> *
                  <input type="text" value={this.state.title} className="form-control " onChange={(e)=>{this.setState({title: e.target.value })}}/>
                </div>
                <div className="col-md-12">
                  <label>Content</label>
                  <textarea className="form-control " value={this.state.content} rows={8} onChange={(e) =>{this.setState({content : e.target.value})}} ></textarea>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-12">
                <label>Avatar</label>
                <input type="file" className="form-control "  onChange={(e)=>this._handleImageChange(e)} />
              </div>
              <div className="col-md-12 previewImage" >
                {$imagePreview == null ? <img src={this.state.url} /> : <div>{$imagePreview} </div>}
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

