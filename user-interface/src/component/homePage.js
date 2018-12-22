import React, { Component } from 'react';
import Navbar from './navbar'
import UserDetails from './user-detailts'
import NewPost from './newPost'
import OldPost from './postHistory'
import Footer from './footer'
import Trends from './trends'
import ListFriends from './listfriends'
import Suggestions from './suggestions'


import Slideshow from './slideshow/slideshow';
import img1 from '../images/logo.png';
import img2 from '../images/image1.png';
import img3 from '../images/image2.png';
import img4 from '../images/image3.png';

const collection = [
  { src: img1, caption: "Logo" },
  { src: img2, caption: "1512678-1512676" },
  { src: img3, caption: "1512676" },
  { src: img4, caption: "1512678" },
];

class HomePage extends Component {
  render() {
    return (
        <div style={{color: '#14171a'}}>
            <Navbar></Navbar>

          <div class="row">
            <div class="col">
              <UserDetails></UserDetails>
              <Suggestions></Suggestions>
              <Trends></Trends>
            </div>
            <div class="col-6">
              <NewPost></NewPost>
              <OldPost></OldPost>
            </div>
            <div class="col" style={{marginTop: 40 + 'px'}}>
              <Slideshow 
                input={collection}  
                ratio={`3:2`}
                mode={`automatic`}
                timeout={`3000`}
              />
              <ListFriends></ListFriends>
              <Footer></Footer>
            </div>
          </div>
          </div>
    );
  }
}

export default HomePage;