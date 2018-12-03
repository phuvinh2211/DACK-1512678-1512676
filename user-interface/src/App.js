import React, { Component } from 'react';
import Navbar from './component/navbar'
import UserDetails from './component/user-detailts'
import Post from './component/post'

class App extends Component {
  render() {
    return (
      <div>
          <Navbar></Navbar>
          <div style={{float:'left'}}>
            <UserDetails></UserDetails>
          </div>
          <Post></Post>
          
      </div>
    );
  }
}

export default App;
