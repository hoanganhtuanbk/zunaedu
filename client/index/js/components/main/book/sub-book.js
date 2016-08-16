import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Masonry from 'react-masonry-component';
import Stores from '../../../stores/stores'

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

export class SubBook extends React.Component {
  constructor(){
    super();
    this.state = {
      books : []
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
        console.log(t.state.books)
      }
    });
  }
  render(){
    const masonryOptions = {
      transitionDuration: 0
    };
    const childElements = this.state.books.map(function(book,stt){
      return (
        <li key={stt} className="col-md-4 image-element-class">
          <div className="masonry-main">
            <img src={book.url} />
            <div   className="grid-boxes-caption">
              <h3><a href="#">{book.title}</a></h3>
              <ul   className="list-inline grid-boxes-news">
                <li><span>By</span> <a href="#">Kathy Reyes</a></li>
                <li>|</li>
                <li><i   className="fa fa-clock-o"></i> {book.date}</li>
                <li>|</li>
                <li><a href="#"><i   className="fa fa-comments-o"></i> 06</a></li>
              </ul>
              <p>{book.content}</p>
            </div>
          </div>
        </li>
      );
    });
    return(
      <div>
        <Header />
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
