import React from 'react';
import {render} from 'react-dom';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Link, IndexLink } from 'react-router';

export class Login extends React.Component{
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      validate: 'error'
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin (e) {
    e.preventDefault();
    var credentials = {
      email: this.state.email,
      password: this.state.password
    };
    var rememberMe = this.refs.rememberMe.checked;
    console.log(credentials);
    $.ajax({
      method: 'POST',
      url: '/api/users/login',
      data: credentials,
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
      timeout: ()=>{alert('Connection timeout')},
      success: (data)=>{
        if(rememberMe){
          localStorage.access_token = data.id;
          localStorage.userId = data.userId;
        }else{
          sessionStorage.access_token = data.id;
          sessionStorage.userId = data.userId;
        }
        this.getCurrentUser(function(user) {
          console.log(user, user.privilege);
          // switch (user.privilege) {
          //   case 3: window.location = '/consumer/apis';
          //         break;
          //   case 2: window.location = '/admin';
          //         break;
          //   case 1: window.location = '/admin';
          //         break;
          // }
          window.location = '/admin'
        })
      }
    });

  }

  getCurrentUser (cb) {
    var userId, access_token;
    if (localStorage.userId) {
      userId = localStorage.userId;
      access_token = localStorage.access_token;
    } else {
      userId = sessionStorage.userId;
      access_token = sessionStorage.access_token;
    }
    $.ajax({
      method: 'GET',
      url: '/api/users/' + userId,
      headers: {
        "Authorization": access_token
      },
      error: (config, status, error)=>{
      },
      success: (data, status)=>{
        console.log(userId);
        cb(data);
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
						    <h1>Nice to see you!</h1>
						  </div>
						  <form className="login-form">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    onChange={(e)=>{this.setState({email: e.target.value})}}
                    required/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e)=>{this.setState({password: e.target.value})}}
                    required/>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" ref="rememberMe"/> Remember me
                  </label>
                  <span className="pull-right"><Link to="/forgot-password">Forgot password ?</Link></span>
                </div>
                <button type="submit" onClick={this.handleLogin} className="button button-pink button-bold button-block button-login">Login</button>
						  </form>
						  <div className="login-footer">
						    <span>Not a member? <strong><Link to="/register" >Sign up now</Link></strong></span>
						  </div>
					    </div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
