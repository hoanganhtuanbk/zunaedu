import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink, browserHistory } from 'react-router';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'
import Stores from '../../../stores/stores';
import Actions from '../../../actions/actions.js'
import RichEditor from '../src'
import {
  Editor,
  EditorState,
  Entity,
  ContentState,
  convertFromRaw,
  convertToRaw
} from 'draft-js';
import ImageComponent from '../src/components/ImageComponent';
export class EditBook extends React.Component{
  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
      url: '',
      editorState: EditorState.createEmpty(),

    };
    this.save = this.save.bind(this);
    this.blockRenderer = (block) => {
      if (block.getType() === 'atomic') {
        return {
          component: ImageComponent
        };
      }
      return null;
    };
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
  updateContent(content) {
    this.setState({
      content
    });
  }
  findById(t) {
    var id = window.location.pathname.split('/')[3];
    Stores.findById('/books', this.props.params.id, function(book, status) {
      const jsObject = JSON.parse(book.content);
      const contentState = convertFromRaw(jsObject);
      const editorState = EditorState.createWithContent(contentState);
      t.setState({title: book.title, editorState: editorState, url: book.url});
      console.log(t.state);
    })
  }
  save(e) {
    e.preventDefault();

    const data = {
      title : this.state.title,
      content: this.state.content,
      url: this.state.url
    };
    Actions.update('/books', this.props.params.id, data, function(result, status) {
      console.log(result);
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
    let $imagePreview = this.state.url;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
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
              <RichEditor onChangeContent = {this.onChangeContent} initEditorState = {this.state.editorState} />
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

