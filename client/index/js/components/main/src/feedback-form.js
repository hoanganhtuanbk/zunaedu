import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Stores from '../../../stores/stores'

export class FeedbackForm extends React.Component{
  constructor(){
    super();

  }
  render(){
    return(
      <div className="feedback-form padding-bottom-50">
        <div className="headline"><h2></h2></div>
        <div className="row">
          <div className="col-sm-6">
            <div className="input-group margin-bottom-10">
              <span className="input-group-addon"><i className="fa fa-user"></i></span>
              <input type="name" placeholder="Tên khách hàng" className="form-control"/>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="input-group margin-bottom-20">
              <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
              <input type="email" placeholder="Email" className="form-control"/>
            </div>
          </div>
        </div>
        <textarea rows="5" className="form-control margin-bottom-20" placeholder="Nội dung..."></textarea>
        <button style={{'border':'1px solid white'}} className="btn-u btn-u-sm pull-right" type="button">Gửi cảm nhận</button>
      </div>

    )
  }
}
