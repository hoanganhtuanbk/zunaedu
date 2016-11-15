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

export class SubEvent extends React.Component{
  constructor(props){
    super();
    this.state = {
      event: {},
      editorState: EditorState.createEmpty(),
      key: '',
      urls: []
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
    this.getEventDetail(this);

  }
  componentWillReceiveProps(nextProps){ //Function nay chay mỗi khi có thay đổi props
    console.log(nextProps.params.key)
    this.getEventDetailPlus(this,nextProps.params.key)
  }
  getEventDetailPlus(t,key){
    Stores.find('/events', {
      where:{
        key: key
      }
    }, function(event){
      const jsObject = JSON.parse(event[0].content);
      const contentState = convertFromRaw(jsObject);
      const editorState = EditorState.createWithContent(contentState);
      console.log(event[0])
      t.setState({event: event[0],editorState:editorState})
    })
  }
  getEventDetail(t){
    Stores.find('/events', {
      where:{
        key: t.props.params.key
      }
    }, function(event){
      const jsObject = JSON.parse(event[0].content);
      const contentState = convertFromRaw(jsObject);
      const editorState = EditorState.createWithContent(contentState);
      console.log(event[0])
      t.setState({event: event[0],urls:event[0].urls,editorState:editorState})
    })
  }
  render(){
    const ImageAlbum = this.state.urls.map(function(result,index) {
      return(
        <div className="text-center" style={{'padding':'50px'}} key={index}>
          <img src={result} />
        </div>
      )
    })
    return (
      <div className="news-v3 bg-content-detail margin-bottom-30">
        <div className="bg-article">
          <img className="img-responsive" src={this.state.event.url} alt={this.state.event.title}/>
        </div>
        <div className="news-v3-in event-style">
          <h2>{this.state.event.title}</h2>
          <Editor
            blockRendererFn={this.blockRenderer}
            editorState={this.state.editorState}
            readOnly={true}
          />
          {ImageAlbum}
        </div>
      </div>
    );
  }
}
