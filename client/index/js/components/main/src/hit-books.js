import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import Stores from '../../../stores/stores'


class BookItem extends React.Component{
  render(){
    return(
      <Link to={`/sach-giao-duc/${this.props.keyNote}`}><img className="hover-effect" alt={this.props.title} src={this.props.url}/></Link>
    )
  }
}
export class HitBooks extends React.Component {
  constructor() {
    super();
    this.state = {
      books: []
    }
  }
  componentWillMount() {
    this._handelGetBooks(this)
  }
  _handelGetBooks(t) {
    Stores.find('/books', {where: {url: {neq: null}}, order: 'id DESC', limit: 8}, function (datas) {
      t.setState({books: datas})
    })
  }
  render(){
    const BooksList = this.state.books.map(function(item,index){
      return(
        <li key={index} >
          <BookItem
            keyNote = {item.key}
            title = {item.title}
            url = {item.url}
          />
        </li>
      )
    });
    return(
      <div>
        <div className="headline-v2"><h2>Sách hay cho ngày mới</h2></div>
        <ul className="list-unstyled blog-photos margin-bottom-50">
          {BooksList}
        </ul>
      </div>
    )
  }
}
