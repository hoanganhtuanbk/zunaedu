import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import {HeaderPage} from '../src/header-page'

export class Event extends React.Component{
  render(){
    return(
      <div>
        <HeaderPage background={'../index/img/bg-components/su-kien-mini.jpg'} />
        <div className="container content">
          <ul className="timeline-v1">
            <li className="item-event">
              <div className="timeline-badge primary"><i className="fa fa-dot-circle-o"></i></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <img className="img-responsive" src="../index/img/event/img12.jpg" alt="" />
                </div>
                <div className="timeline-body text-justify">
                  <h2 className="font-light"><a href="#">Printing and Type Setting Industry</a></h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <a className="btn-u btn-u-sm" href="#">Read More</a>
                </div>
                <div className="timeline-footer">
                  <ul className="list-unstyled list-inline blog-info">
                    <li><i className="fa fa-clock-o"></i> March 28, 2014</li>
                    <li><i className="fa fa-comments-o"></i> <a href="#">7 Comments</a></li>
                  </ul>
                  <a className="likes" href="#"><i className="fa fa-heart"></i>239</a>
                </div>
              </div>
            </li>
            <li className="item-event timeline-inverted">
              <div className="timeline-badge primary"><i className="fa fa-dot-circle-o invert"></i></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <img className="img-responsive" src="../index/img/event/img6.jpg" alt="" />
                </div>
                <div className="timeline-body text-justify">
                  <h2 className="font-light"><a href="#">Standards of Font Sizes</a></h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <a className="btn-u btn-u-sm" href="#">Read More</a>
                </div>
                <div className="timeline-footer">
                  <ul className="list-unstyled list-inline blog-info">
                    <li><i className="fa fa-clock-o"></i> March 16, 2014</li>
                    <li><i className="fa fa-comments-o"></i> <a href="#">12 Comments</a></li>
                  </ul>
                  <a className="likes" href="#"><i className="fa fa-heart"></i>87</a>
                </div>
              </div>
            </li>
            <li className="item-event">
              <div className="timeline-badge primarya"><i className="fa fa-dot-circle-o"></i></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <div className="carousel slide carousel-v1" id="myCarousel">
                    <div className="carousel-inner">
                      <div className="item">
                        <img className="img-responsive" src="../index/img/event/img7.jpg" alt=""/>
                        <div className="carousel-caption">
                          <p>Facilisis odio, dapibus ac justo acilisis gestinas.</p>
                        </div>
                      </div>
                      <div className="item active">
                        <img className="img-responsive" src="../index/img/event/img6.jpg" alt=""/>
                        <div className="carousel-caption">
                          <p>Mussum ipsum cacilds, vidis litro abertis.</p>
                        </div>
                      </div>
                      <div className="item">
                        <img className="img-responsive" src="../index/img/event/img9.jpg" alt=""/>
                        <div className="carousel-caption">
                          <p>Justo cras odio apibus ac afilisis lingestas de.</p>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-arrow">
                      <a data-slide="prev" href="#myCarousel" className="left carousel-control">
                        <i className="fa fa-angle-left"></i>
                      </a>
                      <a data-slide="next" href="#myCarousel" className="right carousel-control">
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="timeline-body text-justify">
                  <h2 className="font-light"><a href="#">Make a Type Specimen Book</a></h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <a className="btn-u btn-u-sm" href="#">Read More</a>
                </div>
                <div className="timeline-footer">
                  <ul className="list-unstyled list-inline blog-info">
                    <li><i className="fa fa-clock-o"></i> November 06, 2014</li>
                    <li><i className="fa fa-comments-o"></i> <a href="#">37 Comments</a></li>
                  </ul>
                  <a className="likes" href="#"><i className="fa fa-heart"></i>121</a>
                </div>
              </div>
            </li>
            <li className="item-event timeline-inverted">
              <div className="timeline-badge primary"><i className="fa fa-dot-circle-o"></i></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <img className="img-responsive" src="../index/img/event/img23.jpg" alt=""/>
                </div>
                <div className="timeline-body text-justify">
                  <h2 className="font-light"><a href="#">Gallery of Type and Scrambled</a></h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <a className="btn-u btn-u-sm" href="#">Read More</a>
                </div>
                <div className="timeline-footer">
                  <ul className="list-unstyled list-inline blog-info">
                    <li><i className="fa fa-clock-o"></i> November 02, 2014</li>
                    <li><i className="fa fa-comments-o"></i> <a href="#">24 Comments</a></li>
                  </ul>
                  <a className="likes" href="#"><i className="fa fa-heart"></i>34</a>
                </div>
              </div>
            </li>
            <li className="item-event">
              <div className="timeline-badge primary"><i className="fa fa-dot-circle-o invert"></i></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <img className="img-responsive" src="../index/img/event/img20.jpg" alt=""/>
                </div>
                <div className="timeline-body text-justify">
                  <h2 className="font-light"><a href="#">Lorem Ipsum is Simple</a></h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <a className="btn-u btn-u-sm" href="#">Read More</a>
                </div>
                <div className="timeline-footer primary">
                  <ul className="list-unstyled list-inline blog-info">
                    <li><i className="fa fa-clock-o"></i> February 26, 2014</li>
                    <li><i className="fa fa-comments-o"></i> <a href="#">93 Comments</a></li>
                  </ul>
                  <a className="likes" href="#"><i className="fa fa-heart"></i>355</a>
                </div>
              </div>
            </li>
            <li className="item-event timeline-inverted">
              <div className="timeline-badge primary"><i className="fa fa-dot-circle-o invert"></i></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe src="http://player.vimeo.com/video/9679622"></iframe>
                  </div>
                </div>
                <div className="timeline-body">
                  <h2 className="font-light"><a href="#">Make it Only Responsive</a></h2>
                  <p>I only make it responsive and remove the empty spaces to be more like Facebook timeline!</p>
                  <a className="btn-u" href="#">Read More</a>
                </div>
                <div className="timeline-footer primary">
                  <ul className="list-unstyled list-inline blog-info">
                    <li><i className="fa fa-clock-o"></i> November 29, 2013</li>
                    <li><i className="fa fa-comments-o"></i> <a href="#">162 Comments</a></li>
                  </ul>
                  <a className="likes" href="#"><i className="fa fa-heart"></i>798</a>
                </div>
              </div>
            </li>
            <li className="clearfix"></li>
          </ul>
        </div>
      </div>
    )
  }
}
