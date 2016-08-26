
import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink ,browserHistory} from 'react-router';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import RichEditor from '../src'

export class AddFeedback extends React.Component{
  constructor(props){
    super();
    this.state = {
      title: '',
      description: '',
      content: '',
      url: '',
      author: '',
      date: ''
    };
    this.handleCreateFeedback = this._handleCreateFeedback.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);

  }
  onChangeContent(content) {
    if(typeof(content) == 'string'){
      this.setState({content: content})
    }
  }
  _handleCreateFeedback(e){
    const dateNow = new Date();
    const apps = {
      title: this.state.title,
      description: this.state.description,
      content: this.state.content,
      url: `/api/containers/files/download/${this.state.file.name}`,
      date: dateNow.toDateString()
    };
    const data = new FormData();
    data.append('file', this.state.file);
    Actions.upload('/containers/files/upload',data,function(data, stt){
      console.log(data, stt)
    });
    Actions.create('/feedbacks', apps, function(data){
      console.log(data);
      browserHistory.goBack();
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
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
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
                    <div className="col-md-12">
                      <label>Description</label>
                      <textarea className="form-control " rows={8} onChange={(e) =>{this.setState({description : e.target.value})}} ></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="col-md-12">
                    <label>Url image</label>
                    <input type="file" className="form-control "  onChange={(e)=>this._handleImageChange(e)} />
                  </div>
                  <div className="col-md-12 previewImage" >
                    {$imagePreview}
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
              <button type="button" className="btn btn-primary btn-success btn-form-right" onClick={this.handleCreateFeedback} >Save</button>
            </div>
      </div>

    )
  }
}

