import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import '../../App.css';
import $ from 'jquery';
class Navbar extends Component{
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  componentDidMount() {
    $(document).ready(function () {
         // Custom function which toggles between sticky class (is-sticky)
         var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
             var stickyHeight = sticky.outerHeight();
             var stickyTop = stickyWrapper.offset().top;
             if (scrollElement.scrollTop() >= stickyTop) {
                 stickyWrapper.height(stickyHeight);
                 sticky.addClass("is-sticky");
             }
             else {
                 sticky.removeClass("is-sticky");
                 stickyWrapper.height('auto');
             }
         };

         // Find all data-toggle="sticky-onscroll" elements
         $('[data-toggle="sticky-onscroll"]').each(function () {
             var sticky = $(this);
             var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
             sticky.before(stickyWrapper);
             sticky.addClass('sticky');

             // Scroll & resize events
             $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
                 stickyToggle(sticky, stickyWrapper, $(this));
             });

             // On page load
             stickyToggle(sticky, stickyWrapper, $(window));
         });
     });
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
      <div className="container">
        <a className="navbar-brand" to="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav pull-right">
            <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/works">Our Work</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Products</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
                <Link className="btn btn-primary" to="/quote">GET A QUOTE</Link>
            </li>
          </ul>
        </div>
      </div>
    )

		return(
      <header>
        <nav className="navbar  navbar-expand-lg navbar-light top-navbar" data-toggle="sticky-onscroll">
          {isAuthenticated ? authLinks : guestLinks}
        </nav>
      </header>
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
