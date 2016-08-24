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
export class EditDermatoglyphic extends React.Component{
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
    Stores.findById('/dermatoglyphics', this.props.params.id, function(dermatoglyphic, status) {
      const jsObject = JSON.parse(dermatoglyphic.content);
      const contentState = convertFromRaw(jsObject);
      const editorState = EditorState.createWithContent(contentState);
      t.setState({title: dermatoglyphic.title, editorState: editorState,content: dermatoglyphic.content,description: dermatoglyphic.description, url: dermatoglyphic.url});
    })
  }
  save(e) {
    e.preventDefault();
    const data = {
      title : this.state.title,
      content: this.state.content,
      key: this._changeToSlug(this.state.title),
      description: this.state.description
    };
    if(this.state.file){
      data.url= `/api/containers/files/download/${this.state.file.name}`
    }
    Actions.update('/dermatoglyphics', this.props.params.id, data, function(result, status) {
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
  _changeToSlug(title){
    var slug;
    slug = title.toLowerCase();
    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    return slug
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

