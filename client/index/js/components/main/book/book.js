import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import Masonry from 'react-masonry-component';
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

export class Book extends React.Component {
  constructor(){
    super();
    this.state = {
      books : [],
      editorState: EditorState.createEmpty()
    };
    this.coverFromRaw= (content) =>{
      const jsObject = JSON.parse(content);
      const editorState = convertFromRaw(jsObject);
      return editorState;
    }
  }
  componentWillMount(){
    this.getBooks(this);
  }

  getBooks(t){
    Stores.getAll('/books', function(books, status) {
      console.log(books);
      if (books) {
        t.setState({books: books});
      };
      t.state.books.forEach(function(book){
        const jsObject = JSON.parse(book.content);
        const editorState = convertFromRaw(jsObject);
        book.objContent = EditorState.createWithContent(editorState)
      })
    });
  }
  render(){
    const masonryOptions = {
      transitionDuration: 0
    };
    const childElements = this.state.books.map(function(book,stt){

      return (
        <li key={stt} className="col-md-4 image-element-class">
          <div className="masonry-main news-v3">
            <Link to={`/sach-giao-duc/${book.id}`}>
              <img src={book.url} />
            </Link>
            <div   className="grid-boxes-caption">
              <h3><Link to={`/sach-giao-duc/${book.id}`}>{book.title}</Link></h3>
              <ul   className="list-inline grid-boxes-news">
                <li><span>By</span> <a href="#">Kathy Reyes</a></li>
                <li>|</li>
                <li><i   className="fa fa-clock-o"></i> {book.date}</li>
                <li>|</li>
                <li><a href="#"><i   className="fa fa-comments-o"></i> 06</a></li>
              </ul>
              <Editor
                editorState={this.state.editorState}
                readOnly={true}
              />
              <Link className="read-more" to={`/sach-giao-duc/${book.id}`}>Xem chi tiết</Link>
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
        </li>
      );
    }.bind(this));
    return(
      <div>
        <HeaderPage background={'../index/img/bg-components/sach-mini.jpg'} />
        <div className="container content masonry">
          <Masonry
            className={'row masonry'} // default ''
            elementType={'ul'} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          >
            {childElements}
          </Masonry>
        </div>
      </div>

    )

  }
}
