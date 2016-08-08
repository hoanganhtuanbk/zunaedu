import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';

export class LoginFooter extends React.Component{
	render (){
		return (
	      <footer className="footer">
	        <div className="footer-info">
	          <div className="section">
	            <div className="container">
	              <div className="row">
	                <div className="col-sm-4">
	                  <div className="footer-company">
	                    <h3 className="footer-title">Who we are</h3>
	                    <div className="footer-logo">
	                    	<Link to="/">
	                    		<img src="../index/img/logo.png" alt="VN Dispatch" />
                			</Link>
	                    </div>
	                    <p>
	                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
	                    </p>
	                  </div>
	                  <div className="footer-social">
	                    <a href="#" className="social-button twiter"><i className="fa fa-twitter"></i></a>
	                    <a href="#" className="social-button gplus"><i className="fa fa-google-plus"></i></a>
	                    <a href="#" className="social-button facebook"><i className="fa fa-facebook"></i></a>
	                    <a href="#" className="social-button linkedin"><i className="fa fa-linkedin"></i></a>
	                  </div>
	                </div>

	                <div className="col-sm-4">
	                  <div className="footer-list">
	                    <h3 className="footer-title">Get in touch</h3>
	                    <ul>
	                      <li><a href="#">Auto Dispatch</a></li>
	                      <li><a href="#">Driver App</a></li>
	                      <li><a href="#">Passenger App</a></li>
	                      <li><a href="#">Online booking Systems</a></li>
	                      <li><a href="#">API Connection</a></li>
	                    </ul>
	                  </div>
	                </div>

	                <div className="col-sm-4">
	                  <div className="footer-form">
	                    <h3 className="footer-title">Free updates </h3>
	                    <p>Enter your email address to receive the updates from VNDispatch</p>
	                    <div className="subscribe">
	                        <form>
	                          <input className="subscribe-field form-input" type="text" placeholder="Enter your email"/>
	                          <a href="#" className="subscribe-control button button-small button-pink" type="submit">Subscribe</a>
	                        </form>
	                    </div>
	                    <div className="language">
	                      <div className="language-header">
	                        <a href="#" className="language-title button button-normal"><img src="../index/img/icon-en.png" alt=""/>Change language</a>
	                      </div>
	                      <div className="language-body">
	                        <div className="language-content">
	                          <a href="#" value='<img src="../index/img/icon-vi.png"/> Vietnamese'><img src="../index/img/icon-vi.png" alt="Flag Vi"/>Vietnamese</a>
	                          <a href="#" value='<img src="../index/img/icon-en.png"/> English'><img src="../index/img/icon-en.png" alt="Flag En"/>English</a>
	                        </div>
	                      </div>
	                    </div>
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>

	        <div className="footer-copyright">
	          <div className="container">
	            <div className="row">
	              <div className="col-sm-6">
	                <span className="">© 2016 VNDISPATCH. All rights reserved.</span>
	              </div>
	              <div className="col-sm-6">
	                <div className="footer-link">
	                  <a href="#">Term of Services</a><span>.</span>
	                  <a href="#">Privacy policy</a>
	                </div>
	              </div>
	            </div>
	          </div>

	          <div className="footer-action">
	            <a href="#"><i className="fa fa-angle-up"></i></a>
	          </div>
	        </div>
	      </footer>

		);
	}
}
