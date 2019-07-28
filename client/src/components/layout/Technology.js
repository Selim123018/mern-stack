import React, { Component } from 'react';
import $ from 'jquery';



class Technology extends Component{
	componentDidMount(){
		$(document).ready(function(){
		  $('[data-toggle="tooltip"]').tooltip;
		});
	}
	render(){
		return(
			<div className="container">
			<div className="section-header">
				<h3 className="textcolor">Technology we use</h3>
				<hr/>
			</div>
			<div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h4 className="text-center text-info">Programming Language</h4>
            <hr />
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
								<div className="col-md-2">
								  <a data-toggle="tooltip" data-placement="top" title="Javascript"><img className="center" src={require('../../img/javascript.png')} alt=""/></a>
                </div>
								<div className="col-md-2">
									<a data-toggle="tooltip" data-placement="top" title="Typescript"><img className="center" src={require('../../img/typescript.png')} alt=""/></a>
								</div>
								<div className="col-md-2">
								  <a data-toggle="tooltip" data-placement="top" title="Python"><img className="center" src={require('../../img/python.jpg')} alt=""/></a>
                </div>
								<div className="col-md-2">
								  <a data-toggle="tooltip" data-placement="top" title="Php"><img className="center" src={require('../../img/php.png')} alt=""/></a>
                </div>
              </div>
            </div>
          </div>
					<div className="card card-body bg-light mb-3">
            <h4 className="text-center text-info">Web Development</h4>
            <hr />
						<div className="row">
							<div className="d-flex flex-wrap justify-content-center align-items-center">
								<div className="col-md-2">
									<a data-toggle="tooltip" data-placement="top" title="Nodejs"><img className="center" src={require('../../img/node.png')} alt=""/></a>
								</div>
								<div className="col-md-2">
									<a data-toggle="tooltip" data-placement="top" title="Expressjs"><img className="center" src={require('../../img/express.png')} alt=""/></a>
								</div>
								<div className="col-md-2">
									<a data-toggle="tooltip" data-placement="top" title="LoopBack"><img className="center" src={require('../../img/loopback.png')} alt=""/></a>
								</div>
								<div className="col-md-2">
									<a data-toggle="tooltip" data-placement="top" title="Reactjs"><img className="center" src={require('../../img/react.jpg')} alt=""/></a>
								</div>
								<div className="col-md-2">
									<a data-toggle="tooltip" data-placement="top" title="Angular"><img className="center" src={require('../../img/angular.png')} alt=""/></a>
								</div>
								<div className="col-md-2">
									<a data-toggle="tooltip" data-placement="top" title="Jquery"><img className="center" src={require('../../img/jquery.png')} alt=""/></a>
								</div>
								<div className="col-md-2">
									<a data-toggle="tooltip" data-placement="top" title="Django"><img className="center" src={require('../../img/django.png')} alt=""/></a>
								</div>
								<div className="col-md-2">
									<a data-toggle="tooltip" data-placement="top" title="Laravel"><img className="center" src={require('../../img/laravel.png')} alt=""/></a>
								</div>
								<div className="col-md-2">
									<a data-toggle="tooltip" data-placement="top" title="Material UI"><img className="center" src={require('../../img/material.png')} alt=""/></a>
								</div>
								<div className="col-md-2">
									<a data-toggle="tooltip" data-placement="top" title="Bootstrap"><img className="center" src={require('../../img/bootstrap.png')} alt=""/></a>
								</div>
								<div className="col-md-2">
									<a data-toggle="tooltip" data-placement="top" title="HTML5"><img className="center" src={require('../../img/html.png')} alt=""/></a>
								</div>
								<div className="col-md-2">
									<a data-toggle="tooltip" data-placement="top" title="CSS3"><img className="center" src={require('../../img/css.png')} alt=""/></a>
								</div>
							</div>
						</div>
          </div>
					<div className="card card-body bg-light mb-3">
            <h4 className="text-center text-info">Mobile and Desktop Application Development</h4>
            <hr />
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
								<div className="col-md-2">
								  <a data-toggle="tooltip" data-placement="top" title="Ionic"><img className="center" src={require('../../img/ionic.png')} alt=""/></a>
                </div>
								<div className="col-md-2">
									<a data-toggle="tooltip" data-placement="top" title="React native"><img className="center" src={require('../../img/react.jpg')} alt=""/></a>
								</div>
								<div className="col-md-2">
								  <a data-toggle="tooltip" data-placement="top" title="Electron"><img className="center" src={require('../../img/electron.png')} alt=""/></a>
                </div>
              </div>
            </div>
          </div>
					<div className="card card-body bg-light mb-3">
            <h4 className="text-center text-info">Database</h4>
            <hr />
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
								<div className="col-md-2">
								  <a data-toggle="tooltip" data-placement="top" title="Mongodb"><img className="center" src={require('../../img/mongodb.png')} alt=""/></a>
                </div>
								<div className="col-md-2">
									<a data-toggle="tooltip" data-placement="top" title="Mysql"><img className="center" src={require('../../img/mysql.png')} alt=""/></a>
								</div>
								<div className="col-md-2">
								  <a data-toggle="tooltip" data-placement="top" title="Postgresql"><img className="center" src={require('../../img/postgresql.png')} alt=""/></a>
                </div>
              </div>
            </div>
          </div>
					<div className="card card-body bg-light mb-3">
            <h4 className="text-center text-info">Package/Task/Testing Tools</h4>
            <hr />
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
								<div className="col-md-2">
								  <a data-toggle="tooltip" data-placement="top" title="Webpack"><img className="center" src={require('../../img/webpack.jpg')} alt=""/></a>
                </div>
								<div className="col-md-2">
									<a data-toggle="tooltip" data-placement="top" title="Bower"><img className="center" src={require('../../img/bower.jpg')} alt=""/></a>
								</div>
								<div className="col-md-2">
								  <a data-toggle="tooltip" data-placement="top" title="Grunt"><img className="center" src={require('../../img/grunt.png')} alt=""/></a>
                </div>
								<div className="col-md-2">
								  <a data-toggle="tooltip" data-placement="top" title="Gulp"><img className="center" src={require('../../img/gulp.png')} alt=""/></a>
                </div>
								<div className="col-md-2">
								  <a data-toggle="tooltip" data-placement="top" title="Karma"><img className="center" src={require('../../img/karma.png')} alt=""/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
			</div>
		</div>
		)
	}
}


export default Technology;
