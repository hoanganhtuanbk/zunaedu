import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Stores from '../../../stores/stores'
import Actions from '../../../actions/actions'
import {
  Editor,
  EditorState,
  Entity,
  ContentState,
  convertFromRaw,
  convertToRaw
} from 'draft-js';
import ImageComponent from '../src/ImageComponent';
export class SubFingerPrint extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      concept : {},
      editorState: EditorState.createEmpty()

    };
    this.blockRenderer = (block) => {
      if (block.getType() === 'atomic') {
        return {
          component: ImageComponent
        };
      }
      return null;
    };
  }
  componentWillMount(){
    this.getParentCorners(this);
  }
  getParentCorners(t){
     Stores.find('/dermatoglyphics', {
       where:{
         key : this.props.params.key
       }
     }, function(dermatoglyphic, status) {
       console.log(dermatoglyphic[0]);
       if (dermatoglyphic[0]) {
         const jsObject = JSON.parse(dermatoglyphic[0].content);
         const contentState = convertFromRaw(jsObject);
         const editorState = EditorState.createWithContent(contentState);
         t.setState({concept: dermatoglyphic[0],editorState:editorState});
       }
     });
  }
  render(){
    if(this.props.params.key == "phan-hoi"){
      return(
        <div className="col-md-8 ">
          <div className="testimonials-v4 feedback md-margin-bottom-50">
            <div className="testimonials-v4-in">
              <p>Tôi đánh giá cao công nghệ sinh trắc vân tay. Sau khi phân tích bài báo cáo phân tích cho bản thân, con trai và nhân viên, tôi càng hiểu rõ hơn về sự khác biệt ở mỗi các nhân. Đặc biệt, thông qua bài báo cáo giúp tôi biết được phong cách giao tiếp phù hợp với con mình hơn. Tôi rất hài lòng về dịch vụ này. Tôi đánh giá cao độ chính xác của bài báo cáo phân tích là 95%</p>
            </div>
            <img className="rounded-x" src="../index/img/feedback/img5.jpg" alt="thumb" />
            <span className="testimonials-author">
								Cảm nhận của Thầy Duy Hải<br/>
								<em>Web Developer, <a href="#">Google Inc.</a></em>
							</span>
          </div>
        </div>
      )
    } else return(
      <div className="col-md-8">
        <div className="news-v3 bg-color-white margin-bottom-60">
          <div className="bg-article">
          <img className="img-responsive" src={this.state.concept.url} alt={this.state.concept.title} />
            </div>
          <div className="news-v3-in">
            <ul className="list-inline posted-info">
              <li>By <a href="#">Admin</a></li>
              <li>Posted {this.state.concept.date}</li>
            </ul>
            <h2>{this.state.concept.title}</h2>
            <Editor
              blockRendererFn={this.blockRenderer}
              editorState={this.state.editorState}
              readOnly={true}
            />

              </div>
              </div>
              <div className="blog-post-quote bg-color-white margin-bottom-60">
              <p>Look deep into nature, and then you will understand everything better.</p>
              <span>- Albert Einstein</span>
              </div>
              </div>
              )
            }
            }
