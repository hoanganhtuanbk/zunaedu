import React from 'react';
import {render,forceUpdate} from 'react-dom';
import {Link,browserHistory} from 'react-router';
import Stores from '../../../stores/stores'
import {HeaderPage} from '../src/header-page'
export class Book extends React.Component{
  constructor(props){
    super();
    this.state = {
      books : [],
      test: false
    };
  }
  componentWillMount(){
    this.getBookDatas(this);
  }
  componentWillReceiveProps(nextProps){ //Function nay chay mỗi khi có thay đổi props
    this.setState({key:nextProps.params.key>this.props.params.key})
  }
  getBookDatas(t){
    Stores.getAll('/books', function(books, status) {
      console.log(books);
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
      <div className="bg-color-white">
        <HeaderPage background={'../index/img/bg-components/sach-mini.jpg'} />
        <div className="container content-sm">
          <div className="row">
            <div className="col-md-9">
              {this.props.children}
            </div>
            <div className="col-md-3">
              <div className="headline-v2 bg-trending"><h2>Dòng thời gian</h2></div>
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
