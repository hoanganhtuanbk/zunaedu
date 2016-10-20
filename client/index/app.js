import React from 'react';
import {render} from 'react-dom';
import { Router,IndexRedirect, Route, hashHistory, browserHistory, Link, IndexRoute, useRouterHistory } from 'react-router';
import { Header } from './js/components/header/header';
import { Footer} from './js/components/footer/footer';

import { HomePage } from './js/components/main/home/home';

import { FingerPage } from './js/components/main/fingerprint/fingerprint';
import { InfoFingerprint } from './js/components/main/fingerprint/info-fingerprint';

import { SubFingerPrint } from './js/components/main/fingerprint/sub-fingerprint';

import { Program } from './js/components/main/program/program'
import { SubProgram } from './js/components/main/program/sub-program'
import { InitProgram } from './js/components/main/program/init-program'

import { Event } from './js/components/main/event/event'
import { SubEvent } from './js/components/main/event/sub-event'
import { InitEvent } from './js/components/main/event/init-event'

import { Book } from './js/components/main/book/book'
import { SubBook } from './js/components/main/book/sub-book'
import { InitBook } from './js/components/main/book/init-book'

import {ParentsCorner} from './js/components/main/parent-corner/parents-corner'
import {SubParent} from './js/components/main/parent-corner/sub-parent'
import {InitParent} from './js/components/main/parent-corner/init-parent'

import { Contact } from './js/components/main/contact/contact';

import { Login } from './js/components/login/login';
import { Register} from './js/components/register/register';

import { EmailVerified } from './js/components/register/verified.js';
import { ResetPassword } from './js/components/reset-password/reset-password.js';
import { ForgotPassword } from './js/components/reset-password/forgot-password.js';


class Index extends React.Component {
  render () {
    const returnTop = function(){
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    };
    return (
      <div className="wrapper ">
        <Header />
        {this.props.children}
        <div id="topcontrol" className="returnTop" onClick={returnTop} title="Scroll Back to Top" ></div>
        <Footer />
      </div>
    )
  }
}
render(
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={HomePage}/>
      <Route path="/van-tay-hoc" component={FingerPage}>
        <IndexRoute component={InfoFingerprint}/>
        <Route path="/van-tay-hoc/phan-hoi" component={SubFingerPrint}/>
      </Route>

      <Route path="/dao-tao" component={Program}>
        <IndexRoute component={InitProgram}/>
        <Route path="/dao-tao/:key" component={SubProgram}/>
      </Route>

      <Route path="/su-kien" component={Event}>
        <IndexRoute component={InitEvent}/>
        <Route path="/su-kien/:key" component={SubEvent}/>
      </Route>

      <Route path="/sach-giao-duc" component = {Book} >
        <IndexRoute component={InitBook}/>
        <Route path="/sach-giao-duc/:key" component = {SubBook} />
      </Route>

      <Route path="/goc-cha-me" component = {ParentsCorner} >
        <IndexRoute component={InitParent}/>
        <Route path="/goc-cha-me/:key" component = {SubParent} />
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
