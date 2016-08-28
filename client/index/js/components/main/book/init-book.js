import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Stores from '../../../stores/stores'
import Masonry from 'react-masonry-component'

class BookItem extends React.Component{
  render(){
    return(
          <div className="thumbnails thumbnail-style thumbnail-kenburn">
            <div className="thumbnail-img">
              <div className="overflow-hidden">
                <img className="img-responsive" src={this.props.url} alt="" />
              </div>
              <Link className="btn-more hover-effect" to={`/sach-giao-duc/${this.props.keyNote}`}>Xem thêm +</Link>
            </div>
            <div className="caption">
              <h3><Link className="hover-effect" to={`/sach-giao-duc/${this.props.keyNote}`}>{this.props.title}</Link></h3>
              <p>{this.props.description}</p>
            </div>
          </div>
    )
  }
}
export class InitBook extends React.Component{
  constructor(props){
    super();
    this.state = {
     books: []
    };
  }
  componentWillMount(){
    this.getBooks(this);
  }
  getBooks(t){
    Stores.find('/books',{order: 'id DESC'}, function(books){
      console.log(books);
      t.setState({books: books})
    })
  }

  render(){
   const BookList = this.state.books.map(function(book,index){
     return(
       <div className="col-md-3 col-sm-6" key={index}>
         <BookItem
           keyNote={book.key}
           title={book.title}
           description={book.description}
           date={book.date}
           url={book.url}
         />
       </div>
       )
   });
    return (
      <div className="feature-new row margin-bottom-20">
      {BookList}
      </div>
    );
  }
}

