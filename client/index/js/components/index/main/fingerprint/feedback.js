import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';


export class Feedback extends React.Component{
  render(){
    const style={
      'visibility': 'visible',
      'animation-duration': '2s',
      'animation-name': 'bounceIn'
    };
    const style1 = {
      'visibility': 'visible',
      'animation-duration': '3s',
      'animation-name': 'bounceIn'
    }
    return(
      <div className="package">
          <div className="entry-content">
            <div className="col-md-12">
              <div className="col-md-6 wow bounceIn animated" data-wow-duration="2s" style={style}>
                <div className="clientsphoto">
                  <img src="../index/img/feedback/dan.jpg" alt="Dan"/>
                </div>

                <div className="quote">
                  <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia et pariatur ipsam tempora officia ea iusto expedita, nulla, hic odit saepe repellat nesciunt dolorum, officiis laborum ad, aliquam. Quos, et.</p>
                  </blockquote>
                  <h5>Dan Cederholm</h5>
                  <p>Co-Founder, Dribbble</p>
                </div>
              </div>
              <div className="col-md-6 wow bounceIn animated" data-wow-duration="3s" style={style1}>
                <div className="clientsphoto">
                  <img src="../index/img/feedback/bill.jpg" alt="Bill"/>
                </div>

                <div className="quote">
                  <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia et pariatur ipsam tempora officia ea iusto expedita, nulla, hic odit saepe repellat nesciunt dolorum, officiis laborum ad, aliquam. Quos, et. lorem</p>
                  </blockquote>
                  <h5>Bill S Kenney</h5>
                  <p>Art Director at Focus Lab LLC.</p>
                </div>
              </div>
              <div className="col-md-6 wow bounceIn animated" data-wow-duration="3s" style={style1}>
                <div className="clientsphoto">
                  <img src="../index/img/feedback/eric.png" alt="Eric"/>
                </div>

                <div className="quote">
                  <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia et pariatur ipsam tempora officia ea iusto expedita, nulla, hic odit saepe repellat nesciunt dolorum, officiis laborum ad, aliquam. Quos, et.</p>
                  </blockquote>
                  <h5>Eric Hoffman</h5>
                  <p>Principal Designer, JellyJar</p>
                </div>
              </div>
              <div className="col-md-6 wow bounceIn animated" data-wow-duration="2s" style={style}>
                <div className="clientsphoto">
                  <img src="../index/img/feedback/ramil.jpg" alt="Ramil"/>
                </div>

                <div className="quote">
                  <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia et pariatur ipsam tempora officia ea iusto expedita, nulla, hic odit saepe repellat nesciunt dolorum, officiis laborum ad, aliquam. Quos, et.</p>
                  </blockquote>
                  <h5>Ramil Derogongun</h5>
                  <p>Visual Designer, Bluroon</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
