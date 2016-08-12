import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';

class Header extends React.Component{
  render(){
    return(
      <div className="breadcrumbs-v1">
        <div className="container">
          <span>Zuna Việt Nam</span>
          <h1>Chương trình đào tạo</h1>
        </div>
      </div>
    )
  }
}

export class Program extends React.Component{
  render(){
    return(
      <div className="">
        <Header />
        <div className="container content-sm">
          <div className="row">
            <div className="col-md-9">
              <div className="row margin-bottom-20">
                <div className="col-sm-5 sm-margin-bottom-20">
                  <img className="img-responsive" src="../index/img/program/img12.jpg" alt=""/>
                </div>
                <div className="col-sm-7 news-v3">
                  <div className="news-v3-in-sm no-padding">
                    <ul className="list-inline posted-info">
                      <li>By Alexander Jenni</li>
                      <li>In <a href="#">Design</a></li>
                      <li>Posted January 24, 2015</li>
                    </ul>
                    <h2><a href="#">Incredible standard post “IMAGE”</a></h2>
                    <p>Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla lectus tellus, imperdiet molestie est volutpat at. Sed viverra cursus nibh, sed consectetur ipsum sollicitudin non metus inmi efficitur...</p>
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


              <div className="clearfix margin-bottom-20"><hr/></div>
              <div className="row margin-bottom-20">
                <div className="col-sm-5 sm-margin-bottom-20">
                  <div className="carousel slide carousel-v1" data-ride="carousel" id="myCarousel">
                    <ol className="carousel-indicators">
                      <li data-target="#blog-carousel" data-slide-to="0" className="rounded-x"></li>
                      <li data-target="#blog-carousel" data-slide-to="1" className="rounded-x active"></li>
                      <li data-target="#blog-carousel" data-slide-to="2" className="rounded-x"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                      <div className="item">
                        <img src="../index/img/program/img16.jpg" alt=""/>
                      </div>
                      <div className="item active">
                        <img src="../index/img/program/img18.jpg" alt=""/>
                      </div>
                      <div className="item">
                        <img src="../index/img/program/img23.jpg" alt=""/>
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
                <div className="col-sm-7 news-v3">
                  <div className="news-v3-in-sm no-padding">
                    <ul className="list-inline posted-info">
                      <li>By Luke Etheridge</li>
                      <li>In <a href="#">Design</a></li>
                      <li>Posted January 24, 2015</li>
                    </ul>
                    <h2><a href="#">Amazing post “IMAGE-SLIDER”</a></h2>
                    <p>Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla lectus tellus, imperdiet molestie est volutpat at. Sed viverra cursus nibh, sed consectetur ipsum sollicitudin non metus inmi efficitur...</p>
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
              <div className="clearfix margin-bottom-20"><hr/></div>
              <div className="row margin-bottom-20">
                <div className="col-sm-5 sm-margin-bottom-20">
                  <div className="responsive-video">
                    <iframe src="//player.vimeo.com/video/93094247?title=0&amp;byline=0&amp;portrait=0"></iframe>
                  </div>
                </div>
                <div className="col-sm-7 news-v3">
                  <div className="news-v3-in-sm no-padding">
                    <ul className="list-inline posted-info">
                      <li>By Alexander Jenni</li>
                      <li>In <a href="#">Design</a></li>
                      <li>Posted January 24, 2015</li>
                    </ul>
                    <h2><a href="#">Awesome post “VIDEO”</a></h2>
                    <p>Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla lectus tellus, imperdiet molestie est volutpat at. Sed viverra cursus nibh, sed consectetur ipsum sollicitudin non metus inmi efficitur...</p>
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

              <div className="clearfix margin-bottom-20"><hr/></div>
              <ul className="pager pager-v3 pager-sm no-margin-bottom">
                <li className="previous"><a href="#">← Older</a></li>
                <li className="page-amount">1 of 7</li>
                <li className="next"><a href="#">Newer →</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="headline-v2 bg-color-light"><h2>Trending</h2></div>
              <ul className="list-unstyled blog-trending margin-bottom-50">
                <li>
                  <h3><a href="#">Proin dapibus ornare magna.</a></h3>
                  <small>19 Jan, 2015 / <a href="#">Hi-Tech,</a> <a href="#">Technology</a></small>
                </li>
                <li>
                  <h3><a href="#">Fusce at diam ante.</a></h3>
                  <small>17 Jan, 2015 / <a href="#">Artificial Intelligence</a></small>
                </li>
                <li>
                  <h3><a href="#">Donec quis consequat magna...</a></h3>
                  <small>5 Jan, 2015 / <a href="#">Web,</a> <a href="#">Webdesign</a></small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
