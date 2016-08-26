import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';

export class FeedbackManagement extends React.Component{
	render() {
      return (
        <div>
          <div className="content-header">
            <h3 >
              Feedbacks
              <small> Manager your feedbacks here!</small>
            </h3>
          </div>
          <div className="content">
            {this.props.children}
          </div>
        </div>
      )
  }
}
