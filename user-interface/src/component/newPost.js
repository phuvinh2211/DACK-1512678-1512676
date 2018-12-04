import React, { Component } from 'react';

class NewPost extends Component {
  render() {
    return (
        <div className="panel panel-default">
        <br></br>
        <div className="panel-content">
            <form onSubmit={this.submitForm} className="form center-block">
                <input type="hidden" ref="imagepath" />
                <div className="panel-body">
                    <div className="form-group">
                        <textarea  ref="sharing" className="form-control input-lg" placeholder="Chuyện gì đang xảy ra ?"></textarea>
                    </div>
                </div>
                <div className="panel-footer">
                    <div>

                        <button type="submit" className="btn btn-primary btn-sm postbutton" >Post</button>
                    </div>
                </div>
            </form>

        </div>
    </div>
    );
  }
}

export default NewPost;
