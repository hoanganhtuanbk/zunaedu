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
    return (
      <header className="header container">
        <div className="container">
          <div className="user-feature">
            <Link to="/login"><i className="fa fa-lock"></i>Login</Link>

          </div>
        </div>

        <div className="row header-content">
          <div className="col-sm-3 col-md-3">
            <div className="header-logo">
              <Link to="/" ><img src="../index/img/logo/logo.jpg" /> </Link>
            </div>
          </div>
          <div className="col-sm-9 col-md-9">
            <nav className="header-menu navigation">
              <ul>
                <li className={this.isActive('')} onClick={this.setMenuActive.bind(this, '')}><Link to="/">Trang chủ</Link></li>
                <li className={this.isActive('van-tay-hoc')} onMouseEnter={this.setMenuActive.bind(this, 'van-tay-hoc')}><Link to="/van-tay-hoc">Vân tay học</Link>
                  {this.state.activeMenu == true ? <div className="fingerprint_menu" onMouseLeave={this.handleClose.bind(this)}>
                    <ul className="">
                      <li><Link to="/van-tay-hoc/khai-niem" className={this.isActive('')} onClick={this.setMenuActive.bind(this, '')}>Khái niệm</Link></li>

                      <li><Link to="/van-tay-hoc/lich-su-hinh-thanh" className={this.isActive('history')} onClick={this.setMenuActive.bind(this, 'history')}>Lịch sử hình thành</Link></li>
                      <li><Link to="/van-tay-hoc/ung-dung" className={this.isActive('application')} onClick={this.setMenuActive.bind(this, 'application')}>Ứng dụng</Link></li>
                      <li><Link to="/van-tay-hoc/phan-hoi" className={this.isActive('feedback')} onClick={this.setMenuActive.bind(this, 'feedback')}>Phản hồi khách hàng</Link></li>
                    </ul>
                  </div>
                    : null}
                </li>

                <li className={this.isActive('chuong-trinh')} onClick={this.setMenuActive.bind(this, 'chuong-trinh')}><Link to="/chuong-trinh">Chương trình</Link></li>
                <li className={this.isActive('su-kien')} onClick={this.setMenuActive.bind(this, 'su-kien')}><Link to="/su-kien">Sự kiện</Link></li>
                <li className={this.isActive('sach-giao-duc')} onClick={this.setMenuActive.bind(this, 'sach-giao-duc')}><Link to="/sach-giao-duc">Sách giáo dục</Link></li>

                <li className={this.isActive('goc-cha-me')} onClick={this.setMenuActive.bind(this, 'goc-cha-me')}><Link to="/goc-cha-me">Góc cha mẹ</Link></li>
                <li className={this.isActive('lien-he')} onClick={this.setMenuActive.bind(this, 'lien-he')}><Link to="/lien-he">Liên hệ</Link></li>

              </ul>
            </nav>
          </div>
        </div>

      </header>
    );
  }
}
