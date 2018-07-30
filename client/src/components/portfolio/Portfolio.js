import React, { Component } from 'react';
import Portfolioheader from './Portfolioheader';
import Portfolioabout from './Portfolioabout';
import Education from './Education';

class Portfolio extends Component{
	render(){
		return(
      <div>
        <Portfolioheader/>
        <Portfolioabout/>
        <Education/>
      </div>
		)
	}
}

export default Portfolio;