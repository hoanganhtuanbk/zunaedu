import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Actions from '../../../actions/actions.js'
import Stores from '../../../stores/stores.js'
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'

class FeedbacksView extends React.Component{
  deleteFeedback(t){
    console.log(t);
    Actions.deleteById('/feedbacks', t.props.id, function(resutl){
    })
  }
  render() {
    return (
      <tr>
        <td >{this.props.id}</td>
        <td >{this.props.title}</td>
        <td>
          <span className="btn-group">
            <Link className="btn btn-xs btn-default" to={`/admin/feedback/${this.props.id}`}>
              <i className="fa fa-eye"></i>
            </Link>
            <Link to={`/admin/feedback/${this.props.id}/edit`} className="btn btn-xs btn-default" >
              <i className="fa fa-pencil"></i>
            </Link>
            <a className="btn btn-xs btn-default" onClick={this.deleteFeedback.bind(this.props.id,this)} >
              <i className="fa fa-times"></i>
            </a>
          </span>
        </td>
      </tr>
    )
  }
}

export class ListFeedback extends React.Component{
  constructor() {
    super();
    this.state = {
      feedbacks: []
    };
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount(){
    this.getAll(this);
  }
  componentDidMount(){
    Stores.addChangeListener('feedbacks', this.onChange);
  }
  componentWillUnmount(){
    Stores.removeChangeListener('feedbacks', this.onChange)
  }
  onChange(){
    this.getAll(this);
  }
  getAll(t) {
    Stores.getAll('/feedbacks', function(feedbacks, status) {
      console.log(feedbacks);
      if (feedbacks) {
        t.setState({feedbacks: feedbacks})
      }
    });
  }

  render(){

    const feedbacks = this.state.feedbacks.map(function(item, id) {
      return (<FeedbacksView
        key={id}
        id={item.id}
        title={item.title}
        />)
    });
    return(
      <div className="panel">
      <PanelHeader
              name = "Feedbacks"
              link = "/admin/feedback/add"
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
              {feedbacks}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
