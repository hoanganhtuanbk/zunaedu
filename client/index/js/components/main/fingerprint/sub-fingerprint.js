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
    console.log(this.props)
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
    Stores.findById('/dermatoglyphics', this.props.params.id, function(dermatoglyphic, status) {
        console.log(dermatoglyphic);
      if (dermatoglyphic) {
        const jsObject = JSON.parse(dermatoglyphic.content);
        const contentState = convertFromRaw(jsObject);
        const editorState = EditorState.createWithContent(contentState);
        t.setState({concept: dermatoglyphic,editorState:editorState});
      }
    });
  }
  render(){
    return(
      <div className="col-md-8">
        <div className="news-v3 bg-color-white margin-bottom-60">
          <div className="bg-article">
          <img className="img-responsive" src={this.state.concept.url} alt="" />
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
