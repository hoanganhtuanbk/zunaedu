import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router';
import Stores from '../../../stores/stores';
import {
  Editor,
  EditorState,
  Entity,
  ContentState,
  convertFromRaw,
  convertToRaw
} from 'draft-js';
import ImageComponent from '../src/ImageComponent';
import {FeedbackForm} from '../src/feedback-form'

class Trending extends React.Component{
  render(){
    return(
      <div className="row trending">
        <div className="col-md-3 trending-img">
          <img src={this.props.url} />
        </div>
        <div className="col-md-9 trending-title">
          <h3><Link to={`/van-tay-hoc/bi-mat-bo-nao/${this.props.keyNote}`}>{this.props.title}</Link></h3>
          <small>{this.props.date} / Admin</small>
        </div>
      </div>


    )
  }
}
export class DetailFingerPrint extends React.Component{
  constructor(){
    super();
    this.state = {
      dermatoglyphic: {},
      dermatoglyphics: [],
      editorState: EditorState.createEmpty(),
      key: ''
    };
    this.blockRenderer = (block) => {
      if (block.getType() === 'atomic') {
        return {
          component: ImageComponent
        };
      }
      return null;
    }
  }
  componentWillMount(){
    this.getDermatoglyphicDetail(this);
    this.getDermatoglyphicDatas(this);

  }
  componentWillReceiveProps(nextProps){ //Function nay chay mỗi khi có thay đổi props
    this.getDermatoglyphicDetailPlus(this,nextProps.params.key)
  }
  getDermatoglyphicDetailPlus(t,key){
    Stores.find('/dermatoglyphics', {
      where:{
        key: key
      },
      order: 'id DESC'
    }, function(dermatoglyphic){
      const jsObject = JSON.parse(dermatoglyphic[0].content);
      const contentState = convertFromRaw(jsObject);
      const editorState = EditorState.createWithContent(contentState);
      t.setState({dermatoglyphic: dermatoglyphic[0],editorState:editorState})
    })
  }
  getDermatoglyphicDetail(t){
    Stores.find('/dermatoglyphics', {
      where:{
        key: t.props.params.key
      }
    }, function(dermatoglyphic){
      const jsObject = JSON.parse(dermatoglyphic[0].content);
      const contentState = convertFromRaw(jsObject);
      const editorState = EditorState.createWithContent(contentState);
      t.setState({dermatoglyphic: dermatoglyphic[0],editorState:editorState})
    })
  }
  getDermatoglyphicDatas(t){
    Stores.find('/dermatoglyphics',{order: 'id DESC', limit: 5}, function(dermatoglyphics) {
      if (dermatoglyphics) {
        t.setState({dermatoglyphics: dermatoglyphics});
      }
    });
  }
  render(){
    const childElements = this.state.dermatoglyphics.map(function(item,id){
      return (
        <li key={id}>
          <Trending
            keyNote={item.key}
            title={item.title}
            date={item.date}
            url={item.url}
          />
        </li>
      );
    });
    return (
      <div className="bg-color-light content-sm">
        <div className="container ">
          <div className="row">
            <div className="col-md-9">
              <div className="news-v3 bg-content-detail margin-bottom-30">
                <div className="bg-article">
                  <img className="img-responsive" src={this.state.dermatoglyphic.url} alt={this.state.dermatoglyphic.title}/>
                </div>
                <div className="news-v3-in">
                  <ul className="list-inline posted-info">
                    <li>By <a href="#">Admin</a></li>
                    <li>Posted {this.state.dermatoglyphic.date}</li>
                  </ul>
                  <h2>{this.state.dermatoglyphic.title}</h2>
                  <Editor
                    blockRendererFn={this.blockRenderer}
                    editorState={this.state.editorState}
                    readOnly={true}
                  />


                </div>
              </div>
              <FeedbackForm/>
            </div>
            <div className="col-md-3">
              <div className="headline-v2 bg-trending"><h2>Dòng thời gian</h2></div>
              <ul className="list-unstyled blog-trending margin-bottom-50">
                {childElements}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

