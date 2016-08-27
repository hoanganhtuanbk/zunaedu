import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Stores from '../../../stores/stores'

class BookItem extends React.Component{
  render(){
    return(
      <div className="row margin-bottom-20 feature-item">
        <div className="col-sm-5 sm-margin-bottom-20 feature-image">
          <Link to={`/goc-cha-me/${this.props.keyNote}`} >
            <img className="img-responsive" src={this.props.url} />
          </Link>
        </div>

        <div className="col-sm-7 news-v3">
          <div className="news-v3-in no-padding content-program">
            <ul className="list-inline posted-info">
              <li>By Admin</li>
              <li>Posted {this.props.date}</li>
            </ul>
            <h2>
              <Link to={`/goc-cha-me/${this.props.keyNote}`} >
                {this.props.title}
              </Link>
            </h2>
            <p>{this.props.description}</p>
            <Link to={`/goc-cha-me/${this.props.keyNote}`} className="read-more">Xem chi tiết</Link>
          </div>
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
    Stores.find('/books',{limit: 5}, function(books){
      console.log(books);
      t.setState({books: books})
    })
  }

  render(){
   const BookList = this.state.books.map(function(book,index){
     return(
       <div key={index}>
         <BookItem
           keyNote={book.key}
           title={book.title}
           description={book.description}
           date={book.date}
           url={book.url}
         />
         <div className="clearfix margin-bottom-20"><hr/></div>
       </div>
       )
   });
    return (
      <div>
        {BookList}
      </div>
    );
  }
}

