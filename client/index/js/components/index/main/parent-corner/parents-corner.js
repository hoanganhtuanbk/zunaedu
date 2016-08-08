import React from 'react';
import {render} from 'react-dom';


class Header extends React.Component{
  render(){
    return(
      <div className="breadcrumbs-v1">
        <div className="container">
          <span>Blog ZunaEdu</span>
          <h1>Góc cha mẹ</h1>
        </div>
      </div>
    )
  }
}
export class ParentsCorner extends React.Component{
  render(){
    return (
      <div className="bg-color-light ">
      <Header />
      <div className="container content-sm">
        <div className="row">
          <div className="col-md-9">
            <div className="news-v3 bg-color-white margin-bottom-30">
              <img className="img-responsive full-width" src="../index/img/parent-corner/doctor.jpg" alt=""/>
                <div className="news-v3-in">
                  <ul className="list-inline posted-info">
                    <li>By <a href="#">Alexander Jenni</a></li>
                    <li>In <a href="#">Design</a></li>
                    <li>Posted January 24, 2015</li>
                  </ul>
                  <h2><a href="#">Incredible standard post “IMAGE”</a></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec arcu ipsum. Curabitur tincidunt nisi ex, ut eleifend turpis egestas vitae. Proin convallis et eros eget rutrum. Duis luctus lorem id mattis placerat. Etiam pharetra libero ut suscipit mollis. Morbi augue mi, maximus at lectus id, mollis ornare dui. Curabitur consequat, est non cursus suscipit, quam nulla porta enim, sed pharetra diam elit non nisi. Praesent pulvinar ante eu euismod cursus. Fusce quis est justo. Nullam id egestas diam. Etiam ac augue orci. Aliquam scelerisque convallis est sed pretium. In vel elementum lorem.</p>
                  <p>Pellentesque eleifend metus vitae commodo finibus. Proin eget mi a sem placerat facilisis. Aenean interdum aliquet sapien, non scelerisque massa vestibulum ut. Quisque mollis, ante nec volutpat dignissim, lectus libero porta magna, at volutpat massa orci a turpis. Duis tincidunt nunc magna, non semper metus tempus ut. Duis vulputate enim condimentum posuere lacinia. Ut venenatis massa ex.</p>
                  <blockquote className="hero">
                    <p><em>"Lorem ipsum dolor sit amet, consectetur adipiscing duis mollis, est non commodo luctus elit posuere erat a ante. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis lorem ipsum dolor sit amet, consectetur adipiscing"</em></p>
                  </blockquote>
                  <p>Sed placerat diam auctor eget. Mauris tellus eros, iaculis id leo quis, finibus aliquet ipsum. Duis volutpat lacus in purus bibendum, at sollicitudin eros malesuada. Sed nec diam a eros eleifend mattis. Phasellus in facilisis enim. Vestibulum sodales lacinia lectus, quis efficitur velit posuere sed.</p>
                  <ul className="post-shares post-shares-lg">
                    <li>
                      <a href="#">
                        <i className="rounded-x icon-speech"></i>
                        <span>28</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-share"></i>
                        <span>355</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="rounded-x icon-heart"></i>
                        <span>107</span>
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
            <div className="blog-author margin-bottom-30">
              <img src="../index/img/parent-corner/img1-md.jpg" alt="" />
                <div className="blog-author-desc">
                  <div className="overflow-h">
                    <h4>Alexander Jenni</h4>
                    <ul className="list-inline">
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    </ul>
                  </div>
                  <p>In auctor fringilla turpis eu rhoncus. Vivamus quis nisi vel dui ultrices lacinia ac eu massa. Quis que vitae consequat sapien. Vivamus sit amet tincidunt ipsum, nec blandit ipsum. Lorem ipsu m dolor sit amet, consectetur adipiscing elit...</p>
                </div>
            </div>
            <div className="row news-v2 margin-bottom-50">
              <div className="col-sm-6 sm-margin-bottom-30">
                <div className="news-v2-badge">
                  <img className="img-responsive" src="../index/img/parent-corner/img18.jpg" alt=""/>
                    <p>
                      <span>23</span>
                      <small>Jan</small>
                    </p>
                </div>
                <div className="news-v2-desc">
                  <h3><a href="#">Reading Some Books</a></h3>
                  <small>By Admin | California, US | In <a href="#">Art</a></small>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="news-v2-badge">
                  <img className="img-responsive" src="../index/img/parent-corner/img16.jpg" alt=""/>
                    <p>
                      <span>22</span>
                      <small>Jan</small>
                    </p>
                </div>
                <div className="news-v2-desc">
                  <h3><a href="#">Interior Design</a></h3>
                  <small>By Admin | California, US | In <a href="#">Art</a></small>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="headline-v2"><h2>Trending</h2></div>
            <ul className="list-unstyled blog-trending margin-bottom-50">
              <li>
                <h3><a href="#">Praesent tincidunt ornare tortor</a></h3>
                <small>23 Jan, 2015 / <a href="#">Art,</a> <a href="#">Lifestyles</a></small>
              </li>
              <li>
                <h3><a href="#">Nunc leo leo, faucibus non gravida</a></h3>
                <small>22 Jan, 2015 / <a href="#">Marketing</a></small>
              </li>
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
            <div className="headline-v2"><h2>Latest Posts</h2></div>
            <ul className="list-unstyled blog-latest-posts margin-bottom-50">
              <li>
                <h3><a href="#">Wireframe for the news view...</a></h3>
                <small>5 Jan, 2015 / <a href="#">Web,</a> <a href="#">Webdesign</a></small>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam odio leo.</p>
              </li>
              <li>
                <h3><a href="#">It is a long established fact that a reader</a></h3>
                <small>17 Jan, 2015 / <a href="#">Artificial Intelligence</a></small>
                <p>Pellentesque efficitur blandit dui, porta cursus velit imperdiet sit amet.</p>
              </li>
              <li>
                <h3><a href="#">The point of using Lorem Ipsum</a></h3>
                <small>19 Jan, 2015 / <a href="#">Hi-Tech,</a> <a href="#">Technology</a></small>
                <p>Phasellus ullamcorper pellentesque ex. Cras venenatis elit orci, vitae dictum elit egestas a. Nunc nec auctor mauris, semper scelerisque nibh.</p>
              </li>
              <li>
                <h3><a href="#">Many desktop publishing packages...</a></h3>
                <small>23 Jan, 2015 / <a href="#">Art,</a> <a href="#">Lifestyles</a></small>
                <p>Integer vehicula sed justo ac dapibus. In sodales nunc non varius accumsan.</p>
              </li>
            </ul>
            <div className="headline-v2"><h2>Tags</h2></div>
            <ul className="list-inline tags-v2 margin-bottom-50">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Economy</a></li>
              <li><a href="#">Sport</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Books</a></li>
              <li><a href="#">Elections</a></li>
              <li><a href="#">Flickr</a></li>
              <li><a href="#">Politics</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Web Hosting</a></li>
              <li><a href="#">Wrapbootstrap</a></li>
              <li><a href="#">Art</a></li>
            </ul>
            <div className="headline-v2"><h2>Photostream</h2></div>
            <div className="headline-v2"><h2>Newsletter</h2></div>
            <div className="blog-newsletter">
              <p>Subscribe to our newsletter for good news, sent out every month.</p>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Email" />
								<span className="input-group-btn">
									<button className="btn-u" type="button">Subscribe</button>
								</span>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
  }
}
