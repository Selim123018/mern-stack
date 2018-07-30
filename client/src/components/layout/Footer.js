import React, { Component } from 'react';
class footer extends Component{
	render(){
  return(
    <footer className="page-footer font-small stylish-color-dark pt-4">
      
   
    <div className="bg-dark text-white mt-5 p-4 text-center">
      <ul className="list-unstyled list-inline text-center">
        <li className="list-inline-item">
          <a className="btn-floating btn-fb mx-1" href="https://www.facebook.com/profile.php?id=100006769382819" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-tw mx-1">
            <i className="fa fa-twitter"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-gplus mx-1">
            <i className="fa fa-google-plus"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-li mx-1" href="https://www.linkedin.com/in/selim-reza-70042114b" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-dribbble mx-1" rel="noopener noreferrer">
            <i className="fa fa-dribbble"> </i>
          </a>
        </li>
      </ul>
    © 2018 Copyright:
      <a href="https:website123018.herokuapp.com" rel="noopener noreferrer"> websolution</a>
    </div>
  </footer>
  );
}
}

export default footer;
