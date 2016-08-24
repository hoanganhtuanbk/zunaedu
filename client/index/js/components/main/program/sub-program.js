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
      <div>
        <div className="row margin-bottom-20">
          <div className="col-sm-5 sm-margin-bottom-20">
           <img className="img-responsive" src={this.state.program.url} />
          </div>

          <div className="col-sm-7 news-v3">
            <div className="news-v3-in-sm no-padding content-program">
              <ul className="list-inline posted-info">
                <li>By Admin</li>
                <li>Posted {this.state.program.date}</li>
              </ul>
              <h2>{this.state.program.title}</h2>
              {
                this.state.editorActive == true ? <p>{this.state.program.description}</p> : <div>
                  <Editor
                    blockRendererFn={this.blockRenderer}
                    editorState={this.state.editorState}
                    readOnly={true}
                  />
                </div>

              }
              <a className="read-more" onClick={activeEditor}>Xem chi tiết</a>
              <ul className="post-shares">
                <li>
                  <a href="#">
                    <i className="rounded-x icon-speech"></i>
                    <span>5</span>
                  </a>
                </li>
                <li><a href="#"><i className="rounded-x icon-share"></i></a></li>
                <li><a href="#"><i className="rounded-x icon-heart"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
