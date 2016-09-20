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
import {FeedbackForm} from '../src/feedback-form'

class Trending extends React.Component{
  render(){
    return(
      <div className="row trending">
        <div className="col-md-3 trending-img">
          <img src={this.props.url} />
        </div>
        <div className="col-md-9 trending-title">
          <h3><Link to={`/van-tay-hoc/${this.props.keyNote}`}>{this.props.title}</Link></h3>
          <small>{this.props.date} / Admin</small>
        </div>
      </div>


    )
  }
}
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
    Stores.find('/books',{order: 'id DESC', limit: 5}, function(books, status) {
      if (books) {
        t.setState({books: books});
      }
    });
  }
  render(){
    const childElements = this.state.books.map(function(item,id){
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
      <div>
        <div className="row">
          <div className="col-md-9">
            <div className="news-v3 bg-content-detail margin-bottom-30">
              <div className="bg-article">
                <img className="img-responsive" src={this.state.book.url} alt={this.state.book.title}/>
              </div>
              <div className="news-v3-in">
                <ul className="list-inline posted-info">
                  <li>By <a href="#">Admin</a></li>
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
    );
  }
}
