import React, { Component } from 'react';


class Education extends Component{
	render(){
		return(
			<div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-info">Education</h3>
            <hr />

            <h3 className="text-center text-info">Bachelor of Science (Engr) in Computer Science and Engineering</h3>
            <h5 className="textcolor">Rajshahi University of Engineering and Technology</h5>
            <h5 className="textcolor">CGPA 2.95 out of (4. 00)</h5><br/>

            <h3 className="text-center text-info">Higher School Certifcate (H.S.C)</h3>
            <h5 className="textcolor">Adina Fazlul Haque Govt. College, Shingonj, Chapai Nawabganj[2012]</h5>
            <h5 className="textcolor">Science group (GPA 5.00)</h5><br/>

            <h3 className="text-center text-info">Secondary School Certifcate (S.S.C)</h3>
            <h5 className="textcolor">Dadonchalk H M High School, Shingonj, Chapai Nawabgonj [2010]</h5>
            <h5 className="textcolor">Science group (GPA 5.00)</h5>
            
          </div>
        </div>
			</div>
		)
	}
}

export default Education;