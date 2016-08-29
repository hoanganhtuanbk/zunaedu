import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Stores from '../../../stores/stores'
import Actions from '../../../actions/actions'
import Slider from 'react-slick'

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
    this.getDermatoglyphicCorners(this);
  }
  componentWillReceiveProps(nextProps){ //Function nay chay mỗi khi có thay đổi props
    this.getDermatoglyphicDetailPlus(this,nextProps.params.key)
  }
  getDermatoglyphicDetailPlus(t,key){
    Stores.find('/dermatoglyphics', {
      where:{
        key: key
      }
    }, function(dermatoglyphic){
      const jsObject = JSON.parse(dermatoglyphic[0].content);
      const contentState = convertFromRaw(jsObject);
      const editorState = EditorState.createWithContent(contentState);
      console.log(dermatoglyphic[0])
      t.setState({concept: dermatoglyphic[0],editorState:editorState})
    })
  }
  getDermatoglyphicCorners(t){
    Stores.find('/dermatoglyphics', {
      where:{
        key : this.props.params.key
      }
    }, function(dermatoglyphic, status) {
      if (dermatoglyphic[0]) {
        const jsObject = JSON.parse(dermatoglyphic[0].content);
        const contentState = convertFromRaw(jsObject);
        const editorState = EditorState.createWithContent(contentState);
        t.setState({concept: dermatoglyphic[0],editorState:editorState});
      }
    });
  }
  render(){
    var settings = {
      speed: 1000,
      autoplaySpeed: 3000,
      autoplay: true,
      fade: true,
      arrows: false,
    };
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
        <div className="news-v3 bg-content-detail margin-bottom-60">
          <div className="bg-article">
            <img className="img-responsive" src={this.state.concept.url} alt={this.state.concept.title} />
          </div>
          <div className="news-v3-in">
            <ul className="list-inline posted-info">
              <li>Đăng bởi <a href="#">Admin</a></li>
              <li>/ Ngày đăng {this.state.concept.date}</li>
            </ul>
            <h2>{this.state.concept.title}</h2>
            <Editor
              blockRendererFn={this.blockRenderer}
              editorState={this.state.editorState}
              readOnly={true}
            />

          </div>
        </div>
        <Slider {...settings}>
          <div className="blog-post-quote bg-content-detail margin-bottom-60">
            <div className="blog-post-quote-item">
              <p>"Trẻ con là những kẻ bắt chước bẩm sinh hành động giống như cha mẹ mình bất chấp mọi nỗ lực để dạy chúng cách xử thế." </p>
              <small>- Khuyết danh -</small>
            </div>

          </div>
          <div className="blog-post-quote bg-content-detail margin-bottom-60">
            <div className="blog-post-quote-item">
              <p>"Trẻ nhỏ sẽ không nhớ bạn vì vật chất bạn cho chúng, mà vì tình cảm bạn dành cho chúng." </p>
              <small>- Richard L Evans -</small>
              </div>

          </div>
          <div className="blog-post-quote bg-content-detail margin-bottom-60">
            <div className="blog-post-quote-item">
              <p>"Tôi nhận ra một điều rằng cuộc sống không có nghĩa gì nhiều nếu bạn không sẵn lòng đóng góp phần nhỏ bé của mình nhằm để lại cho con cháu chúng ta - tất cả con cháu chúng ta - một thế giới tốt đẹp hơn. Kẻ ngốc nào cũng có thể có con. Điều đó không khiến bạn trở thành một người cha. Chính lòng can đảm trong việc nuôi dạy đứa trẻ mới khiến bạn là một người cha." </p>
              <small>- Barack Obama -</small>
            </div>

          </div>
          <div className="blog-post-quote bg-content-detail margin-bottom-60">
            <div className="blog-post-quote-item">
              <p>"Mỗi người sẽ sớm học được mình hiểu biết ít đến thế nào khi con trẻ bắt đầu đặt câu hỏi." </p>
              <small>- Richard L Evans -</small>
            </div>

          </div>
          <div className="blog-post-quote bg-content-detail margin-bottom-60">
            <div className="blog-post-quote-item">
              <p>"Chẳng bao giờ có loại thuốc bổ chữa được những căn bệnh xã hội hữu hiệu tốt hơn một mái ấm khỏe khoắn và hạnh phúc. Chẳng bao giờ có nguồn ổn định xã hội lớn hơn một gia đình yêu thương và biết cảm thông. Chẳng bao giờ có cách giúp trẻ em hạnh phúc tốt hơn lời tâm tình của bậc cha mẹ sáng suốt và trìu mến." </p>
              <small>- Richard L Evans -</small>
            </div>

          </div>
          <div className="blog-post-quote bg-content-detail margin-bottom-60">
            <div className="blog-post-quote-item">
              <p>"Trẻ nhỏ vừa là hy vọng, vừa là lời hứa hẹn của nhân loại." </p>
              <small>- Maria Montessori -</small>
            </div>

        </div>
          <div className="blog-post-quote bg-content-detail margin-bottom-60">
            <div className="blog-post-quote-item">
              <p>"Đừng bao giờ giúp đứa trẻ với việc mà nó cảm thấy mình có thể thành công." </p>
              <small>- Maria Montessori -</small>
            </div>

        </div>
        </Slider>

      </div>
    )
  }
}
