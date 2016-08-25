import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
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
import ImageComponent from '../src/ImageComponent';


class EventDetail extends React.Component{
  constructor(props){
    super();
    this.state = {
    };
    this.blockRenderer = (block) => {
      if (block.getType() === 'atomic') {
        return {
          component: ImageComponent
        };
      }
      return null;
    }
  }

  render(){
    return (
      <div className="news-v3 bg-color-white margin-bottom-30">
        <div className="bg-article">
          <img className="img-responsive" src={this.props.url} alt={this.props.title}/>
        </div>
        <div className="news-v3-in">
          <ul className="list-inline posted-info">
            <li>By <a href="#">Admin</a></li>
            <li>Posted {this.props.date}</li>
          </ul>
          <h2>{this.props.title}</h2>
          <Editor
            blockRendererFn={this.blockRenderer}
            editorState={this.props.editorState}
            readOnly={true}
          />

        </div>
      </div>
    );
  }
}

export class SubEvent extends React.Component{
  constructor(){
    super();
    this.state = {
      events : [],
      event: {},
      editorState: EditorState.createEmpty()
    }
  }
  componentWillMount(){
    this.getEventCorners(this);
    this.getEventDetail(this);

  }
  componentWillReceiveProps(nextProps){ //Function nay chay mỗi khi có thay đổi props
    this.getEventDetailPlus(this,nextProps.params.key)
  }
  getEventDetailPlus(t,key){
    Stores.find('/events', {
      where:{
        key: key
      }
    }, function(event){
      const jsObject = JSON.parse(event[0].content);
      const contentState = convertFromRaw(jsObject);
      const editorState = EditorState.createWithContent(contentState);
      console.log(event[0])
      t.setState({event: event[0],editorState:editorState})
    })
  }
  getEventDetail(t){
    Stores.find('/events', {
      where:{
        key: t.props.params.key
      }
    }, function(event){
      const jsObject = JSON.parse(event[0].content);
      const contentState = convertFromRaw(jsObject);
      const editorState = EditorState.createWithContent(contentState);
      t.setState({event: event[0],editorState:editorState})
    })
  }
  getEventCorners(t){
    Stores.getAll('/events', function(events, status) {
      console.log(events);
      if (events) {
        t.setState({events: events});
      }
    });
  }
  render(){
    const childElements = this.state.events.map(function(event,id){
      return (
        <li key={id}>
          <h3><Link to={`/su-kien/${event.key}`}>{event.title}</Link></h3>
          <small>{event.date} <a href="#">Admin,</a> <a href="#">Lifestyles</a></small>
        </li>
      );
    });
    return (
      <div className="bg-color-light ">
        <HeaderPage background={'../index/img/bg-components/goc-cha-me-mini.jpg'} />
        <div className="container content-sm">
          <div className="row">
            <div className="col-md-9">
              <EventDetail
                title = {this.state.event.title}
                content = {this.state.event.content}
                url = {this.state.event.url}
                date = {this.state.event.date}
                editorState = {this.state.editorState}

              />
            </div>
            <div className="col-md-3">
              <div className="headline-v2"><h2>Trending</h2></div>
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
