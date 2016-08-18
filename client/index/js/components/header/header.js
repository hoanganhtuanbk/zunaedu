import React from 'react';
import {render} from 'react-dom';
import { Link, IndexLink } from 'react-router';
import { Button,DropdownButton,ButtonGroup,MenuItem } from 'react-bootstrap';
export class Header extends React.Component{
  constructor (){
    super();
    this.state = {
      selected: '',
      activeMenu: false
    }
  }

  setMenuActive(menu) {
    this.setState({selected  : menu});
    if(menu =="van-tay-hoc"){
      this.setState({activeMenu: !this.state.activeMenu})
    }
  }

  isActive(value){
    return ((value===this.state.selected) ?'active':'');

  }
  handleClose(){
    this.setState({activeMenu: false});
  }
  render (){
    const activeNavbar = function(){
      $(".navbar-collapse").toggleClass("in");
    }
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
        <div className="navbar-collapse mega-menu navbar-responsive-collapse collapse ">
          <div className="container">
            <div className="user-feature">
              <Link to="/login">Login</Link>
            </div>
            <ul className="nav navbar-nav">
              <li className={this.isActive('')} onClick={this.setMenuActive.bind(this, '')}><Link className="route-page" to="/">Trang chủ</Link></li>
              <li className={this.isActive('van-tay-hoc')} onClick={this.setMenuActive.bind(this, 'van-tay-hoc')}><a className="route-page">Sinh trắc vân tay</a>
                {this.state.activeMenu == true ? <div className="fingerprint_menu" onMouseLeave={this.handleClose.bind(this)}>
                  <ul className="">
                    <li><Link to="/van-tay-hoc" className={this.isActive('')} onClick={this.setMenuActive.bind(this, '')}>Khái niệm</Link></li>

                    <li><Link to="/van-tay-hoc/lich-su-hinh-thanh" className={this.isActive('history')} onClick={this.setMenuActive.bind(this, 'history')}>Lịch sử hình thành</Link></li>
                    <li><Link to="/van-tay-hoc/ung-dung" className={this.isActive('application')} onClick={this.setMenuActive.bind(this, 'application')}>Ứng dụng</Link></li>
                    <li><Link to="/van-tay-hoc/phan-hoi" className={this.isActive('feedback')} onClick={this.setMenuActive.bind(this, 'feedback')}>Phản hồi khách hàng</Link></li>
                  </ul>
                </div>
                  : null}
              </li>

              <li className={this.isActive('chuong-trinh')} onClick={this.setMenuActive.bind(this, 'chuong-trinh')}><Link className="route-page" to="/chuong-trinh">Chương trình đào tạo</Link></li>
              <li className={this.isActive('su-kien')} onClick={this.setMenuActive.bind(this, 'su-kien')}><Link className="route-page" to="/su-kien">Tổ chức sự kiện</Link></li>
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
