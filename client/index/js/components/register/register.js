import React from 'react';
import {render} from 'react-dom';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Link, IndexLink } from 'react-router';
import SweetAlert from 'sweetalert-react';

export class Register extends React.Component{
  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: ''
    };
    this.handleRegister = this.handleRegister.bind(this);
  }
  handleRegister(e){
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
      fisrtName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
      //realm: this.state.username.toUpperCase() + '_' + makeid()
    };
    swal({
      title: "Waiting",
      showConfirmButton: false
    });
    $.ajax({
      method: 'POST',
      url: '/api/users',
      data: data,
      error: (config, status, error)=>{
        var err = config.responseJSON.error;
        swal({
              title: err.name,
              text: err.message,
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
            title: "Register successfully",
            type: "success",
            text: "Please verify your email before login !",
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
                <h1>Create an account!</h1>
              </div>
              <form className="login-form">
                <div className="form-group">
                  <label>First name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    onChange={(e)=>{this.setState({firstName: e.target.value})}}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    required
                    onChange={(e)=>{this.setState({lastName: e.target.value})}}
                  />
                </div>
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
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    required
                    onChange={(e)=>{this.setState({username: e.target.value})}}
                  />
                </div>
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
                <button
                  type="submit"
                  className="button button-pink button-bold button-block button-login"
                  onClick={this.handleRegister}
                  >
                  Create account
                </button>
              </form>
              <div className="login-footer">
                <span><strong><Link to="/login" >Login instead</Link></strong></span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
