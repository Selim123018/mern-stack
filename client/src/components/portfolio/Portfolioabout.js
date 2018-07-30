import React, { Component } from 'react';


class Portfolioabout extends Component{
	render(){
		return(
			<div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-info">My Bio</h3>
            <h5 className="textcolor">I am a Fullstack Web Developer</h5>
            <hr />

            <h3 className="text-center text-info">Skill Set</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">

                <div className="p-3">
                  <i className="fa fa-check"></i>JAVASCRIPT
                </div>
                <div className="p-3">
                  <i className="fa fa-check"></i>NODEJS
                </div>
                <div className="p-3">
                  <i className="fa fa-check"></i>EXPRESSJS
                </div>
                <div className="p-3">
                  <i className="fa fa-check"></i>REACTJS
                </div>
                <div className="p-3">
                  <i className="fa fa-check"></i>REDUX
                </div>
                <div className="p-3">
                  <i className="fa fa-check"></i>MONGODB
                </div>
                <div className="p-3">
                  <i className="fa fa-check"></i>MYSQL
                </div>
                <div className="p-3">
                  <i className="fa fa-check"></i>HTML
                </div>
                <div className="p-3">
                  <i className="fa fa-check"></i>CSS
                </div>
                <div className="p-3">
                  <i className="fa fa-check"></i>BOOTSTRAP
                </div>
                <div className="p-3">
                  <i className="fa fa-check"></i>GIT
                </div>
              </div>
            </div>
          </div>
        </div>
			</div>
		)
	}
}

export default Portfolioabout;