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
export class SubProgram extends React.Component{
  constructor(props){
    super();
    this.state = {
      program: {},
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
    this.getProgramDetail(this);
  }
  componentWillReceiveProps(nextProps){ //Function nay chay mỗi khi có thay đổi props
    console.log(nextProps.params.key)
    this.getParentDetailPlus(this,nextProps.params.key)
  }
  getParentDetailPlus(t,key){
    Stores.find('/programs', {
      where:{
        key: key
      }
    }, function(program){
      const jsObject = JSON.parse(program[0].content);
      const contentState = convertFromRaw(jsObject);
      const editorState = EditorState.createWithContent(contentState);
      console.log(program[0])
      t.setState({program: program[0],editorState:editorState})
    })
  }
  getProgramDetail(t){
   try{
     Stores.find('/programs', {
       where:{
         key: t.props.params.key
       }
     }, function(program){
       console.log(program[0]);
       const jsObject = JSON.parse(program[0].content);
       const contentState = convertFromRaw(jsObject);
       const editorState = EditorState.createWithContent(contentState);
       t.setState({program: program[0],editorState:editorState})
     })
   } catch(error){
     console.log(error)
   }
  }

  render(){
    const activeEditor = function(){
      this.setState({editorActive : !this.state.editorActive})
    }.bind(this);
    return (
      <div className="news-v3 bg-content-detail margin-bottom-30">
        <div className="bg-article">
          <img className="img-responsive" src={this.state.program.url} alt={this.state.program.title}/>
        </div>
        <div className="news-v3-in">
          <ul className="list-inline posted-info">
            <li>Đăng bởi <a href="#">Alexander Jenni</a></li>
            <li>/ Ngày đăng {this.state.program.date}</li>
          </ul>
          <h2>{this.state.program.title}</h2>
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
