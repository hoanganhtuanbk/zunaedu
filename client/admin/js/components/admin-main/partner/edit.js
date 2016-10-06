import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink, browserHistory } from 'react-router';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'
import Stores from '../../../stores/stores';
import Actions from '../../../actions/actions.js'
export class EditPartner extends React.Component{
  constructor() {
    super();
    this.state = {
      name:'',
      url: ''
    };
    this.save = this.save.bind(this);
  }
  componentWillMount(){
    this.findById(this);
  }
  onChangeContent(content){
    if(typeof(content) == 'string'){
      this.setState({content: content})
    }
  }
  findById(t) {
    Stores.findById('/partners', this.props.params.id, function(partner, status) {
      t.setState({
        name: partner.name,
        url: partner.url,
      });
    })
  }
  save(e) {
    e.preventDefault();
    const data = {
      name: this.state.name,
    };
    if(this.state.file){
      data.url= `/api/containers/files/download/${this.state.file.name}`;
      const imgData = new FormData();
      imgData.append('file', this.state.file);
      Actions.upload('/containers/files/upload',imgData,function(result, stt){
        console.log(result, stt)
      })
    }
    Actions.update('/partners', this.props.params.id, data, function(result, status) {
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
                  <label>Name</label> *
                  <input type="text" value={this.state.name} className="form-control " onChange={(e)=>{this.setState({name: e.target.value })}}/>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-12">
                <label>Url image</label>
                <input type="file" className="form-control " onChange={(e)=>this._handleImageChange(e)} />
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

