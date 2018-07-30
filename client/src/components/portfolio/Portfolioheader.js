import React, { Component } from 'react';

class Portfolioheader extends Component{
	render(){
		return(
			<div className="row">
			  <div className="col-md-12">
			    <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img className="rounded-circle" src={require('../../img/selim.jpg')} alt=""/>
              </div>
            </div>

            <div className="text-center">
              <h1 className="display-4 text-center">Selim Reza</h1>
              <p className="textcolor">Fullstack Javascript Developer</p>
            </div>
			    </div>
			  </div>
			</div>
		)
	}
}

export default Portfolioheader;
