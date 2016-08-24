import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Stores from '../../../stores/stores'

export class InitParent extends React.Component{
  constructor(props){
    super();
    this.state = {
     parents: []
    };
  }
  componentWillMount(){
    this.getParents(this);
  }
  getParents(t){
    Stores.find('/parents',{limit: 5}, function(parents){
      console.log(parents);
      t.setState({parents: parents})
    })
  }

  render(){
   const ParentList = this.state.parents.map(function(parent,index){
     return(
       <div key={index}>
         <ParentItem
           keyNote={parent.key}
           title={parent.title}
           description={parent.description}
           date={parent.date}
           url={parent.url}
         />
         <div className="clearfix margin-bottom-20"><hr/></div>
       </div>

       )
   });
    return (
      <div>
        {ParentList}
      </div>
    );
  }
}
class ParentItem extends React.Component{
  render(){
    return(
      <div className="row margin-bottom-20">
        <div className="col-sm-5 sm-margin-bottom-20">
          <Link to={`/goc-cha-me/${this.props.keyNote}`} >
            <img className="img-responsive" src={this.props.url} />
          </Link>
        </div>

        <div className="col-sm-7 news-v3">
          <div className="news-v3-in-sm no-padding content-program">
            <ul className="list-inline posted-info">
              <li>By Admin</li>
              <li>Posted {this.props.date}</li>
            </ul>
            <h2>
              <Link to={`/goc-cha-me/${this.props.keyNote}`} >
                {this.props.title}
              </Link>
            </h2>
            <p>{this.props.description}</p>
            <Link to={`/goc-cha-me/${this.props.keyNote}`} className="read-more">Xem chi tiết</Link>
            <ul className="post-shares">
              <li>
                <a href="#">
                  <i className="rounded-x icon-speech"></i>
                  <span>5</span>
                </a>
              </li>
              <li><a href="#"><i className="rounded-x icon-share"></i></a></li>
              <li><a href="#"><i className="rounded-x icon-heart"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
