import React, { Component } from 'react';
import '../App.css'

class UserDetails extends Component {
  render() {
      const user = {
            id:"1",
            name:"Phạm phú Vĩnh",
            imgB:"http://www.croop.cl/UI/twitter/images/up.jpg",
            imgAvatar:"http://www.croop.cl/UI/twitter/images/carl.jpg",
            numFollower:20,
            numFollowing:100
      }
      console.log(user)
    return (
      <div >
            <div className="containers">
            <header>
            <div className="bio">
                <img src={user.imgB} alt="background" className="bg" />
                <div className="desc">
                <h3>@carlf</h3>
                <p>Carl Fredricksen is the protagonist in Up. He also appeared in Dug's Special Mission as a minor character.</p>
                </div>
            </div>
            <div className="avatarcontainer">
                <img src={user.imgAvatar} alt="avatar" className="avatar" />
                <div className="hover">
                <div className="icon-twitter" />
                </div>
            </div>
            </header>
            <div className="content">
            <div className="data">
                <ul>

                <li>
                    {user.numFollower}
                    <span>Followers </span>
    
                </li>

                <li>
                    {user.numFollowing}
                    <span>Following</span>
                </li>
                </ul>
            </div>
            {/* <div className="follow"> <div className="icon-twitter" /> Follow</div> */}
            </div>
        </div>
      </div>
    );
  }
}

export default UserDetails;
