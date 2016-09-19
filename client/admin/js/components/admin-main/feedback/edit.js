import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink, browserHistory } from 'react-router';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'
import Stores from '../../../stores/stores';
import Actions from '../../../actions/actions.js'

export class EditFeedback extends React.Component{
  constructor() {
    super();
    this.state = {
      url : ''
    };
    this.save = this.save.bind(this);
  }

  componentWillMount(){
    this.findById(this);
  }
  findById(t) {
    Stores.findById('/feedbacks', this.props.params.id, function(feedback, status) {
      t.setState({name: feedback.name,job: feedback.job,content: feedback.content, url: feedback.url});
    })
  }
  save(e) {
    e.preventDefault();
    const data = {
      name : this.state.name,
      job : this.state.job,
      content: this.state.content,
    };
    if(this.state.file){
      console.log('hi');
      data.url= `/api/containers/files/download/${this.state.file.name}`;
      const imgData = new FormData();
      imgData.append('file', this.state.file);
      Actions.upload('/containers/files/upload',imgData,function(result, stt){
        console.log(result, stt)
      })
    }
    Actions.update('/feedbacks', this.props.params.id, data, function(result, status) {
      if(status = 'success'){browserHistory.goBack()}else alert(status)
    })
  }
  _handleImageChange(e) {
    e.preventDefault();
    console.log(this.state.file)

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    console.log(this.state.file)

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
                  <label>Name</label> *
                  <input type="text" value={this.state.name} className="form-control " onChange={(e)=>{this.setState({name: e.target.value })}}/>
                </div>
                <div className="col-md-12">
                <label>Job</label> *
                <input type="text" value={this.state.job} className="form-control " onChange={(e)=>{this.setState({job: e.target.value })}}/>
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

