import React from 'react';
import {render} from 'react-dom';

export class HeaderPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const st = this.props.background;
    const bg = {'background': `url(${st})`};
    return(
      <div className="breadcrumbs-v1">
        <img src={st} />
      </div>
    )
  }
}
