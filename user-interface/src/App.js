import React, { Component } from 'react';
import Navbar from './component/navbar'
import UserDetails from './component/user-detailts'
import NewPost from './component/newPost'
import OldPost from './component/postHistory'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>

      <div class="row">
        <div class="col">
          <UserDetails></UserDetails>
        </div>
        <div class="col-6">
          <NewPost></NewPost>
          <OldPost></OldPost>
        </div>
        <div class="col">
          
        </div>
      </div>
      </div>
    );
  }
}

export default App;
