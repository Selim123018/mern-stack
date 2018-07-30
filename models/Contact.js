const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const contactSchema=new Schema({
	name:{
		type:String,
		require:true
	},
	email:{
		type:String,
		require:true
	},
	subject:{
		type:String,
		require:true
	},
	message:{
		type:String,
		require:true
	},
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=Contact=mongoose.model('contacts',contactSchema);