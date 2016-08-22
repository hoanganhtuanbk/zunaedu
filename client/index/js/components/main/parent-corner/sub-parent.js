import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Stores from '../../../stores/stores'
import {HeaderPage} from '../src/header-page'

import {
  Editor,
  EditorState,
  Entity,
  ContentState,
  convertFromRaw,
  convertToRaw
} from 'draft-js';
import ImageComponent from '../src/ImageComponent';

class Header extends React.Component{
  render(){
    return(
      <div className="breadcrumbs-v1">
        <div className="container">
          <span>Zuna Việt Nam</span>
          <h1>Góc cha mẹ</h1>
        </div>
      </div>
    )
  }
}
export class SubParent extends React.Component{
  constructor(props){
    super();
    this.state = {
      parents : [],
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
    this.getParentCorners(this);

  }
  getParentDetail(t){
    Stores.findById('/parents', t.props.params.id, function(parent){
      const jsObject = JSON.parse(parent.content);
      const contentState = convertFromRaw(jsObject);
      const editorState = EditorState.createWithContent(contentState);
      t.setState({parent: parent,editorState:editorState})
    })
  }
  getParentCorners(t){
    Stores.getAll('/parents', function(parents, status) {
      if (parents) {
        t.setState({parents: parents});
      }
    });
  }
  render(){
    const childElements = this.state.parents.map(function(parent,id){
      return (
        <li key={id}>
          <h3><Link to={`/goc-cha-me/${parent.id}`}>{parent.title}</Link></h3>
          <small>{parent.date} ,<a href="#">Admin</a></small>
        </li>
      );
    });
    return (
      <div className="bg-color-light ">
        <HeaderPage background={'../index/img/bg-components/goc-cha-me-mini.jpg'} />
        <div className="container content-sm">
          <div className="row">
            <div className="col-md-9">
              {
                this.state.parent ? <div className="news-v3 bg-color-white margin-bottom-30">
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
                </div> : null
              }

            </div>
            <div className="col-md-3">
              <div className="headline-v2"><h2>Trending</h2></div>
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
