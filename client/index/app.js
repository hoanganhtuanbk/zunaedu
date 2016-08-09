import React from 'react';
import {render} from 'react-dom';
import { Router,IndexRedirect, Route, hashHistory, browserHistory, Link, IndexRoute, useRouterHistory } from 'react-router';
import { Header } from './js/components/index/header/header';
import { Footer} from './js/components/index/footer/footer';

import { HomePage } from './js/components/index/main/home-feature/home';
import {FeaturedNews} from './js/components/index/main/home-feature/featuredNews'
import {UpcomingEvent} from './js/components/index/main/home-feature/upcomingEvent'


import { PricingPage } from './js/components/index/main/fingerprint/fingerprint';
import { Concept } from './js/components/index/main/fingerprint/concept';
import { HistoryBegin } from './js/components/index/main/fingerprint/history-begin';
import { Application } from './js/components/index/main/fingerprint/application';
import { Feedback } from './js/components/index/main/fingerprint/feedback';

import {ParentsCorner} from './js/components/index/main/parent-corner/parents-corner'
import { Contact } from './js/components/index/main/contact/contact';

import { Login } from './js/components/index/login/login';
import {Register} from './js/components/index/register/register';

import {EmailVerified} from './js/components/index/register/verified.js';
import {ResetPassword} from './js/components/index/reset-password/reset-password.js';
import {ForgotPassword} from './js/components/index/reset-password/forgot-password.js';


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
      <Route path="/lien-he" component={Contact}/>

      <Route path="/goc-cha-me" component = {ParentsCorner} />
    </Route>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/verified" component = {EmailVerified} />
    <Route path="/forgot-password" component = {ForgotPassword} />
    <Route path="/reset-password" component = {ResetPassword} />
  </Router>
  , document.getElementById('app')
);
