import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

class Contact extends Component{
  constructor(){
    super();

    this.state={
      name:'',
      email:'',
      subject:'',
      message:'',
      errors:{},
      send:false
    }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit(e){
    e.preventDefault();

    const newContact={
      name:this.state.name,
      email:this.state.email,
      subject:this.state.subject,
      message:this.state.message
    }
    axios.post('/api/contacts/message', newContact)
    .then(res=>{
      this.setState({
      name:'',
      email:'',
      subject:'',
      message:'',
      send:true
    })
    })
    .catch(err=>{
      this.setState({errors:err.response.data});
    })
  }

	render(){
    const { errors }=this.state;
		return(
			<div>
        <div className="container wow fadeInUp">
        <div className="section-header">
          <h3 className="textcolor">Contact Us</h3>
          <hr/>
        </div>
          <div className="row justify-content-center">

            <div className="col-lg-3 col-md-4">

              <div className="info">
                <div>
                  <i className="fa fa-map-marker"></i>
                  <p>Adorsho Nagor, Middle Badda<br/>Dhaka-1212, Bangladesh</p>
                </div>

                <div>
                  <i className="fa fa-envelope"></i>
                  <p>selimcse12st@gmail.com</p>
                </div>

                <div>
                  <i className="fa fa-phone"></i>
                  <p>+8801714415657</p>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-8">
              {this.state.send===true ?(
                <div id="sendmessage" style={{color:'green'}}>Message has been sent</div>
              ):null
              }
              <div className="form">
                <form noValidate onSubmit={this.onSubmit} >
                  <div className="form-group">
                    <input
                    type="text"
                    name="name"
                    className={classnames('form-control',{
                      'is-invalid':errors.name
                    })}
                    placeholder="Your Name"
                    value={this.state.name}
                    onChange={this.onChange}
                    />
                    {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                  </div>
                  <div className="form-group">
                    <input
                    type="email"
                    name="email"
                    className={classnames('form-control',{
                      'is-invalid':errors.email
                    })}
                    placeholder="Your Email"
                    value={this.state.email}
                    onChange={this.onChange}
                    />
                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                  </div>
                  <div className="form-group">
                    <input
                    type="text"
                    name="subject"
                    className={classnames('form-control',{
                      'is-invalid':errors.subject
                    })}
                    placeholder="Subject"
                    value={this.state.subject}
                    onChange={this.onChange}
                    />
                    {errors.subject && (<div className="invalid-feedback">{errors.subject}</div>)}
                  </div>
                  <div className="form-group">
                    <textarea
                    type="text"
                    name="message"
                    className={classnames('form-control',{
                      'is-invalid':errors.message
                    })}
                    placeholder="Message"
                    rows='5'
                    value={this.state.message}
                    onChange={this.onChange}
                    />
                    {errors.message && (<div className="invalid-feedback">{errors.message}</div>)}
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
		)
	}
}

export default Contact;
