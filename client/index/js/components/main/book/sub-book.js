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

export class SubBook extends React.Component{
  constructor(props){
    super();
    this.state = {
      book: {},
      books: [],
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
    this.getBookDetail(this);
    this.getBookDatas(this);

  }
  componentWillReceiveProps(nextProps){ //Function nay chay mỗi khi có thay đổi props
    this.getBookDetailPlus(this,nextProps.params.key)
  }
  getBookDetailPlus(t,key){
    Stores.find('/books', {
      where:{
        key: key
      },
      order: 'id DESC'
    }, function(book){
      const jsObject = JSON.parse(book[0].content);
      const contentState = convertFromRaw(jsObject);
      const editorState = EditorState.createWithContent(contentState);
      t.setState({book: book[0],editorState:editorState})
    })
  }
  getBookDetail(t){
    Stores.find('/books', {
      where:{
        key: t.props.params.key
      }
    }, function(book){
      const jsObject = JSON.parse(book[0].content);
      const contentState = convertFromRaw(jsObject);
      const editorState = EditorState.createWithContent(contentState);
      t.setState({book: book[0],editorState:editorState})
    })
  }
  getBookDatas(t){
    Stores.find('/books',{order: 'id DESC'}, function(books, status) {
      if (books) {
        t.setState({books: books});
      }
    });
  }
  render(){
    const childElements = this.state.books.map(function(book,id){
      return (
        <li key={id}>
          <h3><Link to={`/sach-giao-duc/${book.key}`} >{book.title}</Link></h3>
          <small>{book.date} <a href="#">Art,</a> <a href="#">Lifestyles</a></small>
        </li>
      );
    });
    return (
    <div className="row">
      <div className="col-md-9">
        <div className="news-v3 bg-content-detail margin-bottom-30">
          <div className="bg-article">
            <img className="img-responsive" src={this.state.book.url} alt={this.state.book.title}/>
          </div>
          <div className="news-v3-in">
            <ul className="list-inline posted-info">
              <li>By <a href="#">Alexander Jenni</a></li>
              <li>In <a href="#">Design</a></li>
              <li>Posted {this.state.book.date}</li>
            </ul>
            <h2>{this.state.book.title}</h2>
            <Editor
              blockRendererFn={this.blockRenderer}
              editorState={this.state.editorState}
              readOnly={true}
            />

          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="headline-v2 bg-trending"><h2>Dòng thời gian</h2></div>
        <ul className="list-unstyled blog-trending margin-bottom-50">
          {childElements}
        </ul>
      </div>
    </div>

    );
  }
}
