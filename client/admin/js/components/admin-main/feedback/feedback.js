import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';

export class EventManagement extends React.Component{
	render() {
      return (
        <div>
          <div className="content-header">
            <h3 >
              Events
              <small> Manager your events here!</small>
            </h3>
          </div>
          <div className="content">
            {this.props.children}
          </div>
        </div>
      )
  }
}
