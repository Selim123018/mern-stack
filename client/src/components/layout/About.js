import React, { Component } from 'react';

class About extends Component{
	render(){
		return(
			<div className="about">
	      <h2 className="textcolor">About Us</h2>
	      <hr/>
	      <h6>
	      Our team is a small team that makes a huge impact. We are agile in our approach to solving your problems, 
	      and have the expertise to make your big dreams into reality.
	      </h6><br/><br/>
	      <div className="">
	      <h3>Our Teachnology</h3>
	      <h6>
	        <ul>
	        <li>JAVASCRIPT</li>
	        <li>NODEJS</li>
	        <li>EXPRESSJS</li>
	        <li>REACTJS</li>
	        <li>REDUX</li>
	        <li>MONGODB</li>
	        <li>MYSQL</li>
	        <li>HTML</li>
	        <li>CSS</li>
	        <li>BOOTSTRAP</li>
	        </ul>
	      </h6>
	      </div>
	    </div>
		)
	} 
}

export default About;