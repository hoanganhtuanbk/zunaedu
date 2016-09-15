import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';

export class BackgroundManagement extends React.Component{
	render() {
      return (
        <div>
          <div className="content-header">
            <h3 >
              Backgrounds
              <small> Manager your backgrounds here!</small>
            </h3>
          </div>
          <div className="content">
            {this.props.children}
          </div>
        </div>
      )
  }
}
