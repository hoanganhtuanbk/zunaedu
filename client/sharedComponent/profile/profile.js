import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
// import {AppMap} from './steepless'

export default class Profile extends React.Component{
  render(){
    return(
      <div className="content-header">
        <h1 >
          Profile
          <small>  Manager your profile here!</small>
        </h1>
      </div>
    )
  }
}

