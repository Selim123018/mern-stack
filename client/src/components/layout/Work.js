import React, { Component } from 'react';

class Work extends Component{
	render(){
		return(
			<div class="container">
        <div className="section-header">
          <h3 className="textcolor">Our Works</h3>
					<hr/>
        </div>
				<div className="row">
					<div className="col-md-4 center-block">
						 <div className="section-box-nine">
							 <figure>
								 <h3>React Todo App</h3>
								 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
								 <a href="https://lucid-johnson-a594ad.netlify.com" target="_blank" className="btn btn-read">Read More</a>
							 </figure>
							 <img src={require('../../img/todo.png')} alt="" className="img-responsive"/>
						 </div>
					</div>
					<div className="col-md-4 center-block">
						 <div className="section-box-nine">
							 <figure>
								 <h3>RUET UGC App</h3>
								 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
								 <a href="https://lucid-johnson-a594ad.netlify.com" target="_blank" className="btn btn-read">Read More</a>
							 </figure>
							 <img src={require('../../img/ruet.png')} alt="" className="img-responsive"/>
						 </div>
					</div>
					<div className="col-md-4 center-block">
						 <div className="section-box-nine">
							 <figure>
								 <h3>React Todo App</h3>
								 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
								 <a href="https://lucid-johnson-a594ad.netlify.com" target="_blank" className="btn btn-read">Read More</a>
							 </figure>
							 <img src={require('../../img/ruet.png')} alt="" className="img-responsive"/>
						 </div>
					</div>
				</div>
      </div>
		);
	}
}

export default Work;
