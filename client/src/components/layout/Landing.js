import React, {Component} from 'react';
import Content from './Content';
import Work from './Work';
import Contact from './Contact';

class Landing extends Component{
  render(){
  	return(
		  <div>
	      <Content/>
	      <Work/>
        <Contact/>
	    </div>
    );
  }
};

export default Landing;
