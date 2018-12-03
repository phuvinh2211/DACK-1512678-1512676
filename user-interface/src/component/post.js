import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
        <div className="panel panel-default">
        <div className="panel-content">
            <div className="panel-heading">
                Update Status
            </div>
            <form onSubmit={this.submitForm} className="form center-block">
                <input type="hidden" ref="imagepath" />
                <div className="panel-body">
                    <div className="form-group">
                        <textarea  ref="sharing" className="form-control input-lg" placeholder="Chuyện gì đang xảy ra ?"></textarea>
                    </div>
                </div>
                <div className="panel-footer">
                    <div>

                        <button type="submit" className="btn btn-primary btn-sm postbutton">Post</button>
                    </div>
                </div>
            </form>

        </div>
    </div>
    );
  }
}

export default Post;
