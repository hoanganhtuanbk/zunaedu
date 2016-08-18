import React from 'react';
import {render} from 'react-dom';
import { Router,IndexRedirect, Route, hashHistory, browserHistory, Link, IndexRoute, useRouterHistory } from 'react-router';
import { Header } from './js/components/header/header';
import { Footer} from './js/components/footer/footer';

import { HomePage } from './js/components/main/home/home';
import { PricingPage } from './js/components/main/fingerprint/fingerprint';
import { Concept } from './js/components/main/fingerprint/concept';
import { HistoryBegin } from './js/components/main/fingerprint/history-begin';
import { Application } from './js/components/main/fingerprint/application';
import { Feedback } from './js/components/main/fingerprint/feedback';
import { Program } from './js/components/main/program/program'
import { SubProgram } from './js/components/main/program/sub-program'

import { Event } from './js/components/main/event/event'
import { Book } from './js/components/main/book/book'
import { SubBook } from './js/components/main/book/sub-book'
import {ParentsCorner} from './js/components/main/parent-corner/parents-corner'
import {SubParent} from './js/components/main/parent-corner/sub-parent'

import { Contact } from './js/components/main/contact/contact';

import { Login } from './js/components/login/login';
import { Register} from './js/components/register/register';

import { EmailVerified } from './js/components/register/verified.js';
import { ResetPassword } from './js/components/reset-password/reset-password.js';
import { ForgotPassword } from './js/components/reset-password/forgot-password.js';


class Index extends React.Component {
  render () {
    return (
    	<div className="wrapper">
      	<Header />
        {this.props.children}
      	<Footer />
    	</div>
    	)
  }
}
render(
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={HomePage}/>
      <Route path="/van-tay-hoc" component={PricingPage}>
        <IndexRoute component={Concept}/>
        <Route path="/van-tay-hoc/lich-su-hinh-thanh" component={HistoryBegin}/>
        <Route path="/van-tay-hoc/ung-dung" component={Application}/>
        <Route path="/van-tay-hoc/phan-hoi" component={Feedback}/>
      </Route>
      <Route path="/chuong-trinh" component={Program}>
        <Route path="/chuong-trinh/:id" component={SubProgram}/>
      </Route>

      <Route path="/su-kien" component={Event}/>

      <Route path="/sach-giao-duc" component = {Book} >
        <Route path="/sach-giao-duc/:id" component = {SubBook} />
      </Route>

      <Route path="/goc-cha-me" component = {ParentsCorner} >
        <Route path="/goc-cha-me/:id" component = {SubParent} />
      </Route>

      <Route path="/lien-he" component={Contact}/>

    </Route>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/verified" component = {EmailVerified} />
    <Route path="/forgot-password" component = {ForgotPassword} />
    <Route path="/reset-password" component = {ResetPassword} />
  </Router>
  , document.getElementById('app')
);
