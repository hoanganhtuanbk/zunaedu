import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink, browserHistory } from 'react-router';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'
import Stores from '../../../stores/stores';
import Actions from '../../../actions/actions.js'

export class EditBackground extends React.Component{
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
    Stores.findById('/backgrounds', this.props.params.id, function(background, status) {
      t.setState({feature: background.feature, url: background.url});
    })
  }
  save(e) {
    e.preventDefault();
    const data = {
      feature : this.state.feature,
    };
    if(this.state.file){
      data.url= `/api/containers/files/download/${this.state.file.name}`
    }
    Actions.update('/backgrounds', this.props.params.id, data, function(result, status) {
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
          name = "Edit a background"
        />
        <div className="panel-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">

                <div className="col-md-12">
                  <label>Feature</label> *
                  <select name="" id="" value={this.state.feature} onChange={e=>{this.setState({feature: e.target.value})}}>
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
                <label>Background</label>
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

