const express=require('express');
const bcrypt=require('bcryptjs');
const keys=require('../../config/keys');

const validateContactInput=require('../../validation/contact');

const Contact=require('../../models/Contact');

const router=express.Router();


router.post('/message',(req,res)=>{

	const {errors, isValid}=validateContactInput(req.body);

  if(!isValid){
  	return res.status(400).json(errors);
  }
	
	const newContact= new Contact({
		name    :req.body.name,
		email   :req.body.email,
		subject :req.body.subject,
		message :req.body.message
	})

	newContact.save()
	.then((user)=>{
		res.json(user);
	})
	.catch((err)=>{
		console.log(err);
	})
})



module.exports=router;