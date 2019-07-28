import React, {Component} from 'react';

class Service extends Component{

  render(){
    return(
      <div className="container wow fadeIn">
        <div className="section-header">
          <h3 className="textcolor">Our Services</h3>
          <hr/>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="box">
              <img src={require('../../img/web.png')} alt="" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="box">
              <img src={require('../../img/android.png')} alt="" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="box">
              <img src={require('../../img/ios.png')} alt="" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="box">
              <img src={require('../../img/desktop.png')} alt="" />
            </div>
          </div>
       </div>
      </div>
    );
  }
}
export default Service;
