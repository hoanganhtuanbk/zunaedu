import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

class BookView extends React.Component{
  deleteProgram(t){
    console.log(t);
    Actions.deleteById('/books', t.props.id, function(resutl){
    })
  }
  render() {
    return (
      <tr>
        <td >{this.props.id}</td>
        <td >{this.props.title}</td>
        <td>
          <span className="btn-group">
            <Link className="btn btn-xs btn-default" to={`/admin/book/${this.props.id}`}>
              <i className="fa fa-eye"></i>
            </Link>
            <Link to={`/admin/book/${this.props.id}/edit`} className="btn btn-xs btn-default" >
              <i className="fa fa-pencil"></i>
            </Link>
            <a onClick={this.deleteProgram.bind(this.props.id,this)} className="btn btn-xs btn-default">
              <i className="fa fa-times"></i>
            </a>
          </span>
        </td>
      </tr>
    )
  }
}

export class ListBook extends React.Component{
  constructor() {
    super();
    this.state = {
      books: []
    };
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount(){
    this.getAll(this);
  }
  componentDidMount(){
    Stores.addChangeListener('books', this.onChange);
  }
  componentWillUnmount(){
    Stores.removeChangeListener('books', this.onChange)
  }
  onChange(){
    this.getAll(this);
  }
  getAll(t) {
    Stores.getAll('/books', function(books, status) {
      console.log(books);
      if (books) {
        t.setState({books: books})
      }
    });
  }
  render(){
    const books = this.state.books.map(function(item, id) {
      return (<BookView
        key={id}
        id={item.id}
        title={item.title}
        />)
    });
    return(
      <div className="panel">
      <PanelHeader
              name = "Books"
              link = "/admin/book/add"
        />

        <div className="table-responsive">
          <table className="table ">
            <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
              {books}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
