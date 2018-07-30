import React, {Component} from 'react';
import Content from './Content';
import Project from './Project';

class Landing extends Component{
  render(){
  	return(
		  <div>
	      <Content/>
	      <Project/>
	    </div>
    );
  }
};

export default Landing;