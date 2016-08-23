import React from 'react';
import {render} from 'react-dom';
import Slider from 'react-slick'
import { Link, browserHistory } from 'react-router';
import {FeaturedNews} from './featuredNews'
import {Backgroud,Purchase} from './backgroud'
import {WhatItAbout} from './what-is-about'
import {OurClients} from './our-clients'
import {WhatPeopleSay} from './what-people-say'

export class HomePage extends React.Component{
  render(){
    return (
      <div className="section">
        <Backgroud/>
        <Purchase />
        <WhatItAbout />
        <FeaturedNews />
        <WhatPeopleSay />
      </div>
    );
  }
}
