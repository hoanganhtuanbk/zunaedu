
import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink ,browserHistory} from 'react-router';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import RichEditor from '../src'

export class AddBackground extends React.Component{
  constructor(props){
    super();
    this.state = {
      url: '',
      feature: 'event'
    };
    this.handleCreateBackground = this._handleCreateBackground.bind(this);
  }
  _handleCreateBackground(e){
    const apps = {
      feature: this.state.feature,
      url: `/api/containers/files/download/${this.state.file.name}`,
    };
    const data = new FormData();
    data.append('file', this.state.file);
    Actions.upload('/containers/files/upload',data,function(data, stt){
      console.log(data, stt)
    });
    Actions.create('/backgrounds', apps, function(data){
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
              name = "Add new a background"
        />
            <div className="panel-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label>Feature</label>
                      <select name="" id="" onChange={e=>{this.setState({feature: e.target.value})}}>
                        <option value="event">Event</option>
                        <option value="program">Program</option>
                        <option value="dmit">Dmit</option>
                        <option value="book">Book</option>
                        <option value="parent-corner">Parent-corner</option>
                        <option value="contact">Contact</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="col-md-12">
                    <label>Upload background</label>
                    <input type="file" className="form-control "  onChange={(e)=>this._handleImageChange(e)} />
                  </div>
                  <div className="col-md-12 previewImage" >
                    {$imagePreview}
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-body panel-feature text-center" >
              <button type="button" className="btn btn-default  btn-form-left" onClick = {(e)=>{browserHistory.goBack()}}>
                Cancel
              </button>
              <button type="button" className="btn btn-primary btn-success btn-form-right" onClick={this.handleCreateBackground} >Save</button>
            </div>
      </div>

    )
  }
}

