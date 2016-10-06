
import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink ,browserHistory} from 'react-router';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import RichEditor from '../src'

export class AddEvent extends React.Component{
  constructor(props){
    super();
    this.state = {
      title: '',
      description: '',
      content: '',
      url: [],
      dateCreate: '',
      file: []
    };
    this.handleCreateEvent = this._handleCreateEvent.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);

  }
  onChangeContent(content) {
    if(typeof(content) == 'string'){
      this.setState({content: content})
    }
  }
  _handleCreateEvent(e){
    const dateNow = new Date();
    const apps = {
      title: this.state.title,
      key: this._changeToSlug(this.state.title),
      description: this.state.description,
      content: this.state.content,
      urls: [],
      url: '',
      dateCreate: dateNow.toDateString()
    };

    const data = new FormData();
    if(this.state.files.length>0){
      for(var i=0;i < this.state.files.length;i++){
        data.append('file', this.state.files[i]);
        apps.urls.push(`/api/containers/files/download/${this.state.files[i].name}`);
        Actions.upload('/containers/files/upload',data,function(data, stt){
          console.log(data, stt)
        });
      }
    }
    if(this.state.file){
      data.append('file', this.state.file);
      apps.url = `/api/containers/files/download/${this.state.file.name}`
      Actions.upload('/containers/files/upload',data,function(data, stt){
        console.log(data, stt)
      });
    }
    Actions.create('/events', apps, function(data){
      console.log(data);
      browserHistory.goBack();
    })

  }
  _handleAvaterChange(e) {
    e.preventDefault();
    console.log(e.target.files)
    let reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file)
  }
  _handleImageChange(e) {
    e.preventDefault();
    console.log(e.target.files)
    // let reader = new FileReader();
    const files = e.target.files;
    // for(var i=0;i < file.length;i++){
    //   url.push(`/api/containers/files/download/${file[i].name}`)
    // }
    this.setState({
      files: files,
      // imagePreviewUrl: reader.result
    });

    // reader.readAsDataURL(file)
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
                    <label>Image Represent</label>
                    <input type="file" className="form-control " onChange={(e)=>this._handleAvaterChange(e)} />
                  </div>
                  <div className="col-md-12 previewImage" >
                    {$imagePreview}
                  </div>
                  <div className="col-md-12">
                    <label>Image Album</label>
                    <input type="file" className="form-control " multiple onChange={(e)=>this._handleImageChange(e)} />
                  </div>
                  <div className="col-md-12 previewImage" >

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
              <button type="button" className="btn btn-primary btn-success btn-form-right" onClick={this.handleCreateEvent} >Save</button>
            </div>
      </div>

    )
  }
}

