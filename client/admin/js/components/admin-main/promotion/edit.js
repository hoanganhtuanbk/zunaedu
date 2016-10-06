import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink, browserHistory } from 'react-router';
import {PanelHeader} from '../../../../../sharedComponent/main/panel-header'
import Stores from '../../../stores/stores';
import Actions from '../../../actions/actions.js'
import {
  Editor,
  EditorState,
  Entity,
  ContentState,
  convertFromRaw,
  convertToRaw
} from 'draft-js';
import ImageComponent from '../src/components/ImageComponent';
export class EditPromotion extends React.Component{
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
      url : ''
    };
    this.onChange = (editorState) => {
      const contentState1 = editorState.getCurrentContent();
      const contentState = convertToRaw(contentState1);
      this.setState({ editorState,content: JSON.stringify(contentState) });

    };
    this.blockRenderer = (block) => {
      if (block.getType() === 'atomic') {
        return {
          component: ImageComponent
        };
      }
      return null;
    };
    this.save = this.save.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
  }

  componentWillMount(){
    this.findById(this);
  }
  onChangeContent(content){
    if(typeof(content) == 'string'){
      this.setState({content: content})
    }
  }

  findById(t) {
    var id = window.location.pathname.split('/')[3];
    Stores.findById('/promotions', this.props.params.id, function(promotion, status) {
      const jsObject = JSON.parse(promotion.content);
      const contentState = convertFromRaw(jsObject);
      const editorState = EditorState.createWithContent(contentState);
      t.setState({title: promotion.title, editorState: editorState,content: promotion.content,description: promotion.description, url: promotion.url});
    })
  }
  save(e) {
    e.preventDefault();
    const data = {
      title : this.state.title,
      content: this.state.content,
    };
    Actions.update('/promotions', this.props.params.id, data, function(result, status) {
      if(status = 'success'){browserHistory.goBack()}else alert(status)
    })
  }

  render(){
    return(
      <div className="panel">
        <PanelHeader
          navigateBack = "true"
          name = "Edit a promotion"
        />
        <div className="panel-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <div className="col-md-12">
                  <label>Title</label> *
                  <input type="text" value={this.state.title} className="form-control " onChange={(e)=>{this.setState({title: e.target.value })}}/>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <label>Content</label>
              <Editor
                blockRendererFn={this.blockRenderer}
                editorState={this.state.editorState}
                onChange={this.onChange}
              />
            </div>
          </div>
        </div>
        <div className="panel-body panal-feature text-center" >
          <button type="button" className="btn  btn-default btn-form-left" onClick = {(e)=>{browserHistory.goBack()}}>
            Cancel
          </button>
          <button type="button" onClick={this.save} className="btn btn-primary btn-success btn-form-right" >Save</button>
        </div>
      </div>
    )
  }
}

