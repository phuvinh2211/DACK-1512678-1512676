import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
        <div className="container">	
        <div className="row">
          <h2>Login</h2>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {/* Start form */}
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Private key</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter private key" />
              </div>
              <div className="form-check"> 
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
            {/* End form */}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;