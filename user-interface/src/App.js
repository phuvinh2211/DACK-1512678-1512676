import React, { Component } from 'react';
import Navbar from './component/navbar'
import UserDetails from './component/user-detailts'
import Post from './component/post'
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
          <Post></Post>
        </div>
        <div class="col">
          3 of 3
        </div>
      </div>
          <div className="column col-sm-2 col-xs-1 sidebar-offcanvas" style={{float: 'left'}}>
            
          </div>
          <div className="col-sm-12" >
            
          </div>
          

      </div>
    );
  }
}

export default App;
