const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const passport=require('passport');
const path=require('path');
const users=require('./routes/api/users');
const posts=require('./routes/api/posts');
const contacts=require('./routes/api/contacts');


const app=express();

const port=process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(passport.initialize());

require('./config/passport')(passport);

//DB config
const db=require('./config/keys').mongoURI;

//MongoDB connect
mongoose
.connect(db,{ useNewUrlParser: true })
.then(()=>console.log('MongoDB connected'))
.catch((err)=> console.log(err));


//use routes
app.use('/api/users',users);
app.use('/api/posts',posts);
app.use('/api/contacts',contacts);

if(process.env.NODE_ENV==='production'){
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {  
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});	
}


app.listen(port,()=>{
	console.log('server is running on port: '+port);
})
