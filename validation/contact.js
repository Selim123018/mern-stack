const validator=require('validator');
const isEmpty = require('./is-empty');

module.exports=function validateContactInput(data){
	let errors={};

	data.name=!isEmpty(data.name)? data.name:'';
	data.email=!isEmpty(data.email)? data.email:'';
	data.subject=!isEmpty(data.subject)? data.subject:'';
	data.message=!isEmpty(data.message)? data.message:'';

	if(!validator.isLength(data.name, { min:2, max:30})){
		errors.name='Name must be between 2 and 30 characters';
	}
	if(validator.isEmpty(data.name)){
		errors.name='Name is required';
	}
	
	if(!validator.isEmail(data.email)){
		errors.email='Email is invalid';
	}
	if(validator.isEmpty(data.email)){
		errors.email='Email is required';
	}
	if(validator.isEmpty(data.subject)){
		errors.subject='Subject is required';
	}
	if(!validator.isLength(data.message, {min:15, max:500})){
		errors.message='Message must be at least 15 charaters';
	}
	


	return {
		errors,
		isValid:isEmpty(errors)
	}
}