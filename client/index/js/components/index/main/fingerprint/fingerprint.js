import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';


class Header extends React.Component{
  render(){
    return(
      <div className="stm-page-head">
        <div className="container">
          <div className="stm-page-head__content">
            <h1 className="stm-page-head__title">About our School</h1>

            <div className="stm-page-head__separator">
              <div className="stm-page-head__separator-line"></div>
            </div>

          </div>
        </div>

        <div className="stm-page-head__overlay"></div>
      </div>
    )
  }
}



export class PricingPage extends React.Component{

  constructor (){
    super();
    this.state = {selected: ''}
  }

  setMenuActive(menu) {
    this.setState({selected  : menu})
  }

  isActive(value){
    return ((value===this.state.selected) ?'active':'');
  }
  render(){
    return (
      <section className="pricing">
        <Header />

        <div className="pricing-body">
          <div className="container">
              {this.props.children}
            </div>
        </div>
        <div className="pricing-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1">
                <h2 className="title">Ready to start trial <span>Now !</span></h2>
                <div className="sumary">
                  <p>Use vndispatch put the car anytime , anywhere to experience a safe trip , comfortable . Fit on foot phones running iOS , Android.</p>
                </div>
                <div className="link">

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
