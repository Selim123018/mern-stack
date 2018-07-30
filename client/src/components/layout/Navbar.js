import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import '../../App.css';
class Navbar extends Component{
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }


  

	render(){
    const { isAuthenticated, user } = this.props.auth;
    const authLinks=(
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="#" >{user.name}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/feed">Post Feed</Link>
        </li>
        
        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
          Logout
          </a>
        </li>

      </ul> 
    )

    const guestLinks=(
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/project">Project</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Sign up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </ul> 
    )

		return(
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="#">Websolution</Link>
          
          <div className="collapse navbar-collapse">
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
	}
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser})(
  Navbar
);