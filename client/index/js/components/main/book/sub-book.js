import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
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
class Header extends React.Component{
  render(){
    return(
      <div className="breadcrumbs-v1">
        <div className="container">
          <span>Zuna Việt Nam</span>
          <h1>Sách giáo dục</h1>
        </div>
      </div>
    )
  }
}

export class SubBook extends React.Component{
  constructor(props){
    super();
    this.state = {
      books : [],
      book: {},
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
    this.getBookDetail(this);
    this.getBook(this);

  }
  getBookDetail(t){
    Stores.findById('/books', t.props.params.id, function(book){
      const jsObject = JSON.parse(book.content);
      const contentState = convertFromRaw(jsObject);
      const editorState = EditorState.createWithContent(contentState)
      t.setState({book: book,editorState:editorState})
    })
  }
  getBook(t){
    Stores.getAll('/books', function(books, status) {
      if (books) {
        t.setState({books: books});
      }
    });
  }
  render(){
    const childElements = this.state.books.map(function(book,id){
      return (
        <li key={id}>
          <h3><Link to={`/sach-giao-duc/${book.id}`}>{book.title}</Link></h3>
          <small>{book.date}, Admin</small>
        </li>
      );
    });


    return (
      <div className="bg-color-light ">
        <Header />
        <div className="container content-sm">
          <div className="row">
            <div className="col-md-9">
              {
                this.state.book ? <div className="news-v3 bg-color-white margin-bottom-30">
                  <div className="bg-article">
                  <img className="img-responsive" src={this.state.book.url} alt=""/>
                    </div>
                  <div className="news-v3-in">
                    <ul className="list-inline posted-info">
                      <li>By Admin</li>
                      <li>Posted {this.state.book.date}</li>
                    </ul>
                    <h2>{this.state.book.title}</h2>
                    <Editor
                      blockRendererFn={this.blockRenderer}
                      editorState={this.state.editorState}
                      readOnly={true}
                    />
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
