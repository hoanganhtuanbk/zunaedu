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
export class EditProgram extends React.Component{
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
      url : ''
    };
    this.onChange = (editorState) => {
      const contentState1 = editorState.getCurrentContent();
      const contentState = convertToRaw(contentState1);
      this.setState({ editorState,content: JSON.stringify(contentState) });

    };
    this.blockRenderer = (block) => {
      if (block.getType() === 'atomic') {
        return {
          component: ImageComponent
        };
      }
      return null;
    };
    this.save = this.save.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
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
    var id = window.location.pathname.split('/')[3];
    Stores.findById('/programs', this.props.params.id, function(program, status) {
      const jsObject = JSON.parse(program.content);
      const contentState = convertFromRaw(jsObject);
      const editorState = EditorState.createWithContent(contentState);
      t.setState({title: program.title, editorState: editorState,content: program.content,description: program.description, url: program.url});
    })
  }
  save(e) {
    e.preventDefault();
    const data = {
      title : this.state.title,
      content: this.state.content,

      description: this.state.description
    };
    if(this.state.file){
      data.url= `/api/containers/files/download/${this.state.file.name}`
    }
    Actions.update('/programs', this.props.params.id, data, function(result, status) {
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
                  <label>Description</label>
                  <textarea className="form-control " value={this.state.description} rows={8} onChange={(e) =>{this.setState({description : e.target.value})}} ></textarea>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-12">
                <label>Url image</label>
                <input type="file" className="form-control "  onChange={(e)=>this._handleImageChange(e)} />
              </div>
              <div className="col-md-12 previewImage" >
                {$imagePreview == null ? <img src={this.state.url} /> : <div>{$imagePreview} </div>}
              </div>
            </div>
            <div className="col-md-12">
              <label>Content</label>
              <Editor
                blockRendererFn={this.blockRenderer}
                editorState={this.state.editorState}
                onChange={this.onChange}
              />
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

