import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

export class ViewBook extends React.Component{
  constructor() {
    super();
    this.state = {
      book : {}
    };
  }
  componentWillMount(){
    Stores.findById('/books', this.props.params.id, function(book, status) {
      this.setState({book: book})
      console.log(book)
    }.bind(this));
    console.log(this.state.book)
  }
  render(){
    return(
      <div className="panel">
        <div className="fleet-feature">
          <PanelHeader
            navigateBack = "true"
            linkEdit={`/admin/book/${this.props.params.id}/edit`}
          />
        </div>
        <div className="table-responsive">
          <table className="table ">
            <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Content</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td >{this.state.book.id}</td>
              <td >{this.state.book.title}</td>
              <td >{this.state.book.content}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
