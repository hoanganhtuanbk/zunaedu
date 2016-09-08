import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Stores from '../../../stores/stores'

import {
  Editor,
  EditorState,
  Entity,
  ContentState,
  convertFromRaw,
  convertToRaw
} from 'draft-js';
import ImageComponent from '../src/ImageComponent';

export class SubParent extends React.Component{
  constructor(props){
    super();
    this.state = {
      parent: {},
      editorState: EditorState.createEmpty(),
      key: ''
    };
    console.log('hi')
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
    this.getParentDetail(this);

  }
  componentWillReceiveProps(nextProps){ //Function nay chay mỗi khi có thay đổi props
    console.log(nextProps.params.key)
    this.getParentDetailPlus(this,nextProps.params.key)
  }
  getParentDetailPlus(t,key){
    Stores.find('/parents', {
      where:{
        key: key
      }
    }, function(parent){
      const jsObject = JSON.parse(parent[0].content);
      const contentState = convertFromRaw(jsObject);
      const editorState = EditorState.createWithContent(contentState);
      console.log(parent[0])
      t.setState({parent: parent[0],editorState:editorState})
    })
  }
  getParentDetail(t){
    Stores.find('/parents', {
      where:{
        key: t.props.params.key
      }
    }, function(parent){
      const jsObject = JSON.parse(parent[0].content);
      const contentState = convertFromRaw(jsObject);
      const editorState = EditorState.createWithContent(contentState);
      console.log(parent[0])
      t.setState({parent: parent[0],editorState:editorState})
    })
  }
  render(){
    return (
      <div className="news-v3 bg-content-detail margin-bottom-30">
        <div className="bg-article">
          <img className="img-responsive" src={this.state.parent.url} alt={this.state.parent.title}/>
        </div>
        <div className="news-v3-in">
          <ul className="list-inline posted-info">
            <li>Đăng bởi <a href="#">Alexander Jenni</a></li>
            <li>/ Ngày đăng {this.state.parent.date}</li>
          </ul>
          <h2>{this.state.parent.title}</h2>
          <Editor
            blockRendererFn={this.blockRenderer}
            editorState={this.state.editorState}
            readOnly={true}
          />

        </div>
      </div>
    );
  }
}
