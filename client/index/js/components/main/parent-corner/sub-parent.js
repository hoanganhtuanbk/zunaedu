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
      editorState: EditorState.createEmpty()
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
    this.getParentDetail(this);

  }
  getParentDetail(t){
    Stores.findById('/parents', t.props.params.id, function(parent){
      const jsObject = JSON.parse(parent.content);
      const contentState = convertFromRaw(jsObject);
      const editorState = EditorState.createWithContent(contentState);
      t.setState({parent: parent,editorState:editorState})
    })
  }
  render(){
    return (
      <div className="news-v3 bg-color-white margin-bottom-30">
        <div className="bg-article">
          <img className="img-responsive" src={this.state.parent.url} alt=""/>
        </div>
        <div className="news-v3-in">
          <ul className="list-inline posted-info">
            <li>By <a href="#">Alexander Jenni</a></li>
            <li>In <a href="#">Design</a></li>
            <li>Posted {this.state.parent.date}</li>
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
