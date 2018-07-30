import React, { Component } from 'react';

class Project extends Component{
	render(){
		return(
			<div className="container wow fadeIn">
        <div className="section-header">
          <h3 className="textcolor">Projects</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="box">
              <a href="https://lucid-johnson-a594ad.netlify.com" target="_blank" rel="noopener noreferrer"><img src={require('../../img/todo.png')} alt="" /></a>
              <h4>React todo app</h4>
              <p>HTML, CSS AND REACTJS</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="box">
              <a href="https://powerful-inlet-43757.herokuapp.com" target="_blank" rel="noopener noreferrer"><img src={require('../../img/ruet.png')} alt="" /></a>
              <h4>RUET UGC Website</h4>
              <p>HTML, CSS, NODEJS, EXPRESSJS AND MONGODB</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="box">
              <a href="https://stark-island-59204.herokuapp.com" target="_blank" rel="noopener noreferrer"><img src={require('../../img/it.png')} alt="" /></a>
              <h4>Simple Website</h4>
              <p>HTML, CSS, BOOTSTRAP, NODEJS, EXPRESSJS AND MONGODB</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="box">
              <a href="https://mighty-lake-15255.herokuapp.com" target="_blank" rel="noopener noreferrer"><img src={require('../../img/map.png')} alt="" /></a>
              <h4>Location Tracking App</h4>
              <p>HTML, CSS, JAVASCRIPT, NODEJS, EXPRESSJS AND SOCKET.IO</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="box">
              <a href="https://serene-waters-16664.herokuapp.com" target="_blank" rel="noopener noreferrer"><img src={require('../../img/payment.png')} alt="" /></a>
              <h4>Online payment stripe app</h4>
              <p>HTML, CSS, BOOTSTRAP, JAVASCRIPT, NODEJS, EXPRESSJS AND STRIPE</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="box">
              <a href="https://selim123018.github.io/quizapp" target="_blank" rel="noopener noreferrer"><img src={require('../../img/quiz.png')} alt=""/></a>
              <h4>Online quiz app</h4>
              <p>HTML, CSS AND JAVASCRIPT</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="box">
              <a href="https://selim123018.github.io/weatherapp" target="_blank" rel="noopener noreferrer"><img src={require('../../img/weather.png')} alt=""/></a>
              <h4>Online weather app</h4>
              <p>HTML, CSS AND JAVASCRIPT</p>
            </div>
          </div>
          
          
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="box">
              <a href="https://selim123018.github.io/speechtotext" target="_blank" rel="noopener noreferrer"><img src={require('../../img/speech.png')} alt=""/></a>
              <h4>Speech to Text Converter</h4>
              <p>HTML, CSS AND JAVASCRIPT</p>
            </div>
          </div>

      </div>
      </div>
		);
	}
}

export default Project;