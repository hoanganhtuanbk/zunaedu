import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';


export class Application extends React.Component{
  render(){
    return(
      <div className="package gray">
        <div className="container">
          <div className="entry-content">
            <div className="fingerprint_view_list">
              <div className="entry-body">
                <div className="entry-thumbnail-container">
                  <div className="entry-thumbnail">
                    <a href=""><img width="700" height="480" src="../index/img/app1.jpg" /></a>
                    <ul className="fingerprint-categories">
                      <li><a href="" rel="category tag">Athletics</a></li></ul>
                  </div>
                </div>
                <div className="entry-details-container">
                  <div className="entry-details">
                    <h5 className="entry-title">
                      <a href="http://smartyschool.stylemixthemes.com/drawing-and-painting-lessons/">Drawing and Painting Lessons</a>
                    </h5>
                    <div className="entry-summary">
                      <p>Each class is taught by a Master’s degree-certified teacher. Children with hearing loss receive additional services from a licensed Teacher of the Deaf or Hard of Hearing.</p>
                    </div>
                    <ul className="entry-meta">
                      <li><i className="fa fa-clock-o"></i><a href="http://smartyschool.stylemixthemes.com/drawing-and-painting-lessons/">November 26, 2015</a></li>
                      <li><i className="fa fa-commenting-o"></i><a href="http://smartyschool.stylemixthemes.com/drawing-and-painting-lessons/#respond"><span className="leave-reply">Leave a comment</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="entry-content">
            <div className="fingerprint_view_list">
              <div className="entry-body">
                <div className="entry-thumbnail-container">
                  <div className="entry-thumbnail">
                    <a href=""><img width="700" height="480" src="../index/img/app2.jpg" /></a>
                    <ul className="fingerprint-categories">
                      <li><a href="" rel="category tag">Athletics</a></li></ul>
                  </div>
                </div>
                <div className="entry-details-container">
                  <div className="entry-details">
                    <h5 className="entry-title">
                      <a href="http://smartyschool.stylemixthemes.com/drawing-and-painting-lessons/">We are at Independent Schools Show</a>
                    </h5>
                    <div className="entry-summary">
                      <p>The Workshop focused on Dr. Templeton’s The Jareks, adapted by Edward Ford and brought to the stage by Nathan Xavier.</p>
                    </div>
                    <ul className="entry-meta">
                      <li><i className="fa fa-clock-o"></i><a href="http://smartyschool.stylemixthemes.com/drawing-and-painting-lessons/">November 26, 2015</a></li>
                      <li><i className="fa fa-commenting-o"></i><a href="http://smartyschool.stylemixthemes.com/drawing-and-painting-lessons/#respond"><span className="leave-reply">Leave a comment</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    )
  }
}
