import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import { Button,DropdownButton,ButtonGroup,MenuItem } from 'react-bootstrap';
export class Header extends React.Component{
  constructor (){
    super();
    this.state = {
      selected: '',
    }
  }

  setMenuActive(menu) {
    this.setState({selected  : menu});
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    $(".navbar-collapse").toggleClass("in");
  }

  isActive(value){
    return ((value===this.state.selected) ?'active':'');
  }
  render (){
    const activeNavbar = function(){
      $(".navbar-collapse").toggleClass("in");
    };
    return (
      <header className="header">
        <div className="container">
          <div className="header-logo">
            <Link to="/" ><img src="../index/img/logo/logo-zuna.png" /> </Link>
            <button onClick={activeNavbar} type="button" className="navbar-toggle">
              <span className="sr-only">Toggle navigation</span>
              <span className="fa fa-bars"></span>
            </button>
          </div>
        </div>
        <div className="navbar-collapse mega-menu navbar-responsive-collapse collapse menu-nav">
          <div className="container">
            <div className="user-feature">
              <Link to="/login">Login</Link>
            </div>
            <ul className="nav navbar-nav">
              <li className={this.isActive('')} onClick={this.setMenuActive.bind(this, '')}><Link className="route-page" to="/">Trang chủ</Link></li>
              <li className={this.isActive('van-tay-hoc')} onClick={this.setMenuActive.bind(this, 'van-tay-hoc')}><Link to="/van-tay-hoc/dermatoglyphics-la-gi" className="route-page">Sinh trắc vân tay</Link> </li>
              <li className={this.isActive('dao-tao')} onClick={this.setMenuActive.bind(this, 'dao-tao')}><Link className="route-page" to="/dao-tao">Đào tạo</Link></li>
              <li className={this.isActive('su-kien')} onClick={this.setMenuActive.bind(this, 'su-kien')}><Link className="route-page" to="/su-kien">Sự kiện</Link></li>
              <li className={this.isActive('sach-giao-duc')} onClick={this.setMenuActive.bind(this, 'sach-giao-duc')}><Link  className="route-page" to="/sach-giao-duc">Sách giáo dục</Link></li>
              <li className={this.isActive('goc-cha-me')} onClick={this.setMenuActive.bind(this, 'goc-cha-me')}><Link className="route-page" to="/goc-cha-me">Góc cha mẹ</Link></li>
              <li className={this.isActive('lien-he')} onClick={this.setMenuActive.bind(this, 'lien-he')}><Link className="route-page" to="/lien-he">Liên hệ</Link></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}
