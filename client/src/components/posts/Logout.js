import React, { Component } from 'react';

import Link from 'react-router-dom';

class Logout extends Component{
	render(){
		return(){
			<div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/feed" className="btn btn-light mb-3">
                Back To Feed
              </Link>
              {postContent}
            </div>
          </div>
        </div>
      </div>
		}
	}
}