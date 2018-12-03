import React, { Component } from 'react';
import '../App.css'

class UserDetails extends Component {
  render() {
    return (
      <div >
            <div className="container">
            <header>
            <div className="bio">
                <img src="http://www.croop.cl/UI/twitter/images/up.jpg" alt="background" className="bg" />
                <div className="desc">
                <h3>@carlf</h3>
                <p>Carl Fredricksen is the protagonist in Up. He also appeared in Dug's Special Mission as a minor character.</p>
                </div>
            </div>
            <div className="avatarcontainer">
                <img src="http://www.croop.cl/UI/twitter/images/carl.jpg" alt="avatar" className="avatar" />
                <div className="hover">
                <div className="icon-twitter" />
                </div>
            </div>
            </header>
            <div className="content">
            <div className="data">
                <ul>

                <li>
                    1,119
                    <span>Followers </span>
    
                </li>

                <li>
                    530
                    <span>Following</span>
                </li>
                </ul>
            </div>
            <div className="follow"> <div className="icon-twitter" /> Follow</div>
            </div>
        </div>
      </div>
    );
  }
}

export default UserDetails;
