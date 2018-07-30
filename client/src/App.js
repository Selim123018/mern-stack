import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux'; 
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Contact from './components/layout/Contact';
import Project from './components/layout/Project';
import About from './components/layout/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Portfolio from './components/portfolio/Portfolio';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import store from './store';
import PrivateRoute from './components/common/PrivateRoute';


if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = '/login';
  }
}


class App extends Component {
  render() {
    return (
    	<Provider store={store}>
	    	<Router>
		      <div className="App">
		        <Navbar/>
		        <Route exact path="/" component={Landing} />
	          <div className="container">
	            <Route exact path="/register" component={Register} />
	            <Route exact path="/login" component={Login} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/project" component={Project} />
	            <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/about" component={About} />
	            <Switch>
                <PrivateRoute exact path="/feed" component={Posts} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/post/:id" component={Post} />
              </Switch>
	          </div>
		        <Footer/>
		      </div>
		    </Router>
	    </Provider>  
    );
  }
}

export default App;
