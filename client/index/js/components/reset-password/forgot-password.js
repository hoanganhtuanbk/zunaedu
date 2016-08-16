import React from 'react';
import {render} from 'react-dom';
import { Header } from '../header/header';
import { LoginFooter } from '../footer/login-footer';
import { Link, IndexLink } from 'react-router';
import SweetAlert from 'sweetalert-react';

export class ForgotPassword extends React.Component{
  constructor(){
    super();
    this.state = {
      email: ''
    };
    this.forgotPassword = this.forgotPassword.bind(this);
  }
  forgotPassword(e){
    e.preventDefault();

    //function makeid(){
    //  var text = "";
    //  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    //
    //  for( var i=0; i < 3; i++ )
    //    text += possible.charAt(Math.floor(Math.random() * possible.length));
    //
    //  return text;
    //}

    var data = {
      email: this.state.email
    };

    console.log(data);

    $.ajax({
      method: 'POST',
      url: '/password-reset-request',
      data: data,
      error: (error)=>{
        swal({
              title: error.statusText,
              text: error.responseJSON.code,
              type: "error",
              confirmButtonColor: "#ff2956",
              confirmButtonText: "OK",
              closeOnConfirm: true
            },
            function(){
            });
      },
      success: (data, status)=>{
        swal({
            title: "Password reset requested",
            type: "success",
            text: "Check your email for further instructions !",
            confirmButtonColor: "#ff2956",
            confirmButtonText: "Go to Login",
            closeOnConfirm: true
          },
          function(){
            window.location.href = "/login";
          });
      }
    })
  }

  render (){
    return (
      <div className="wrapper">
        <Header />
        <div className="login-wrap">
          <div className="container">
            <div className="login-container">
              <div className="login-header">
                <h1>Request Reset Password!</h1>
              </div>
              <form className="login-form">
                <div className="form-group">
                  <label>Your email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email address"
                    required
                    onChange={(e)=>{this.setState({email: e.target.value})}}
                  />
                </div>
                <button
                  type="submit"
                  className="button button-pink button-bold button-block button-login"
                  onClick={this.forgotPassword}
                  >
                  Request reset password
                </button>
              </form>
              <div className="login-footer">
                <span><strong><Link to="/login" >Login instead</Link></strong></span>
              </div>
            </div>
          </div>
        </div>
        <LoginFooter />
      </div>
    );
  }
}
