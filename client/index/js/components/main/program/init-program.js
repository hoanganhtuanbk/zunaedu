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
    Stores.find('/programs',{order: 'id DESC'}, function(programs){
      t.setState({programs: programs})
    })
  }

  render(){
    const lenghData = this.state.programs.length;
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
         {
           index != (lenghData -1) ?  <div className="clearfix margin-bottom-20"><hr/></div> : null
         }

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
      <div className="row margin-bottom-20 feature-item">
        <div className="col-sm-5 sm-margin-bottom-20 feature-image">
          <Link to={`/dao-tao/${this.props.keyNote}`} >
            <img className="img-responsive" src={this.props.url} />
          </Link>
        </div>

        <div className="col-sm-7 news-v3">
          <div className="news-v3-in no-padding content-program">
            <ul className="list-inline posted-info">
              <li>Đăng bởi Admin</li>
              <li>/ Ngày đăng {this.props.date}</li>
            </ul>
            <h2>
              <Link to={`/dao-tao/${this.props.keyNote}`} >
                {this.props.title}
              </Link>
            </h2>
            <p>{this.props.description}</p>
            <Link to={`/dao-tao/${this.props.keyNote}`}  className="read-more">Xem chi tiết</Link>
          </div>
        </div>
      </div>
    )
  }
}
