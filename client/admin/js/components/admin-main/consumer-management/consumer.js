import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router';

export class ConsumerManagement extends React.Component{
  render(){
    return(
        <div>
          <div className="content-header">
            <h3>
              Consumer
              <small>  Manager your consumer here!</small>
            </h3>
          </div>
          <div className="content">
            {this.props.children}
          </div>
        </div>
    )
  }
}

