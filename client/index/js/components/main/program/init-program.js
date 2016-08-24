import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router';
import Stores from '../../../stores/stores'

export class InitProgram extends React.Component{
  constructor(props){
    super();
    this.state = {
      programs: []
    };
  }
  componentWillMount(){
    this.getPrograms(this);
  }
  getPrograms(t){
    Stores.find('/programs',{limit: 5}, function(programs){
      console.log(programs);
      t.setState({programs: programs})
    })
  }

  render(){
   const ProgramList = this.state.programs.map(function(program,index){
     return(
       <div key={index}>
         <ProgramItem
           keyNote={program.key}
           title={program.title}
           description={program.description}
           date={program.date}
           url={program.url}
         />
         <div className="clearfix margin-bottom-20"><hr/></div>
       </div>

       )
   });
    return (
      <div>
        {ProgramList}
      </div>
    );
  }
}
class ProgramItem extends React.Component{
  render(){
    return(
      <div className="row margin-bottom-20">
        <div className="col-sm-5 sm-margin-bottom-20">
          <Link to={`/chuong-trinh/${this.props.keyNote}`} >
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
              <Link to={`/chuong-trinh/${this.props.keyNote}`} >
                {this.props.title}
              </Link>
            </h2>
            <p>{this.props.description}</p>
            <Link to={`/chuong-trinh/${this.props.keyNote}`}  className="read-more">Xem chi tiết</Link>
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
