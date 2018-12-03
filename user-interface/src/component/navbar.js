import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><i class="fas fa-home"></i> Trang chủ</a>
            <a className="navbar-brand" href="#"><i class="far fa-bell"></i> Thông báo <span className="sr-only">(current)</span></a>
            <a className="navbar-brand" href="#"><i class="far fa-envelope"></i> Tin nhắn</a>


            <form className="form-inline col-md-6 col-md-offset-3 my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Tìm kiếm trên Twitter" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search   </button>
            </form>
            <ul className="nav navbar-nav navbar-center">
            <li className="dropdown">
                <a href="#" data-toggle = "dropdown" className="dropdown-toggle">
                    <i className = "fa fa-user"> Phạm Phú Vĩnh</i>
                </a> 
                <ul className="dropdown-menu">
                    <li><a href="#">My profile</a></li>
                    <li><a href="#">Đăng xuất</a></li>
                </ul>
            </li>
                
            </ul>
      </nav>
      </div>
    );
  }
}

export default Navbar;
