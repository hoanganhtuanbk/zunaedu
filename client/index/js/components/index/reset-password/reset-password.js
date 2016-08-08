import React from 'react';
import {render} from 'react-dom';
import { Header } from '../header/header';
import { LoginFooter } from '../footer/login-footer';
import { Link, IndexLink } from 'react-router';
import SweetAlert from 'sweetalert-react';

export class ResetPassword extends React.Component{
  constructor(){
    super();
    this.state = {
      password: '',
      confirmation: ''
    };
    this.handleResetPassword = this.handleResetPassword.bind(this);
  }
  handleResetPassword(e){
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
      confirmation: this.state.confirmation,
      password: this.state.password
      //realm: this.state.username.toUpperCase() + '_' + makeid()
    };
    var access_token = window.location.search.split('=')[1];
    console.log(window.location.search);

    if (data.confirmation !== data.password) {
      swal({
          title: 'Error',
          text: 'Passwords do not match',
          type: "error",
          confirmButtonColor: "#ff2956",
          confirmButtonText: "OK",
          closeOnConfirm: true
        });
    } else if (!access_token) {
      swal({
        title: 'Error',
        text: 'Some Thing Went Wrong !, Please try again later',
        type: "error",
        confirmButtonColor: "#ff2956",
        confirmButtonText: "OK",
        closeOnConfirm: true
      });

    } else {
      $.ajax({
        method: 'POST',
        url: '/reset-password?access_token=' + access_token,
        data: data,
        headers: {
          "Authorization": access_token
        },
        error: (config, status, error)=> {
          var err = config.responseJSON.error;
          swal({
              title: err.name,
              text: err.message,
              type: "error",
              confirmButtonColor: "#ff2956",
              confirmButtonText: "OK",
              closeOnConfirm: true
            },
            function () {
            });
        },
        success: (data, status)=> {
          swal({
              title: "Password reset success",
              type: "success",
              text: "Your password has been reset successfully !",
              confirmButtonColor: "#ff2956",
              confirmButtonText: "Go to Login",
              closeOnConfirm: true
            },
            function () {
              window.location.href = "/login";
            });
        }
      })
    }
  }

  render (){
    return (
      <div className="wrapper">
        <Header />
        <div className="login-wrap">
          <div className="container">
            <div className="login-container">
              <div className="login-header">
                <h1>Reset Password!</h1>
              </div>
              <form className="login-form">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required
                    onChange={(e)=>{this.setState({password: e.target.value})}}
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required
                    onChange={(e)=>{this.setState({confirmation: e.target.value})}}
                    />
                </div>

                <button
                  type="submit"
                  className="button button-pink button-bold button-block button-login"
                  onClick={this.handleResetPassword}
                  >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
        <LoginFooter />
      </div>
    );
  }
}
