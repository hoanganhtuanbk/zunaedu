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
    }.bind(this));
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
        <div className="panel-body">
          <img src={this.state.book.url} />
         <h3> {this.state.book.name}</h3>
         
        </div>

      </div>
    )
  }
}
