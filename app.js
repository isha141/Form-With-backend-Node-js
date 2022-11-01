// static files are the files which are loaded into the srever 
// in which some  of the file are public in which anyone can use it 
// without login to that website 


// ../ mean--> to come one directory out 



// import express module
const express=require("express");
const { format } = require("path");
const path=require("path"); 
const fs=require("fs");
 
// creating an app in nodejs
const app=express(); 
const port=80;
// if the app get "/" then the call back will run



//EXPRESS RELATED STUFF
app.use('/static',express.static('static'));  
app.use(express.urlencoded())



// PUG RELATED STUFF 

// set the template engine as pug 
app.set('view engine', 'pug')
//set the views directory of pug  
app.set('views',path.join(__dirname,'views'));

 
 // our pug demo endpoint 
// app.get('/', (req, res) => {
//       res.status(200).render('demo.pug');
// //   res.status(200).render('demo', { title: 'Hey', message: 'Khatu shyam ji please bless me !!' })
// });
 
app.get('/',(req,res)=>{ 
    const con="Jai shree shyam  , Please bless me kanhaji "; 
    const params={'title':'Isha Jindal is software developer at Microsoft',"content" : con};
    res.status(200).render('index.pug',params);
});

// post callback 
app.post('/',(req,res)=>{ 
//   console.log(req.body); 
    Name=req.body.Name; 
    Email=req.body.Email;
    Contact=req.body.Contact;
    Address=req.body.Address; 
    // console.log(`Name is ${Name}`);
    // console.log(`Name is ${Email}`);
    // console.log(`Name is ${Contact}`);
    // console.log(`Name is ${Address}`); 
    var outputToWrite = `The name of the person is ${Name} ,Email is ${Email}, Contact is ${Contact} and the address is ${Address}`;
    fs.writeFileSync('output.txt',outputToWrite);
  const params={'message': 'Your form has been submitted successfully '};
  res.status(200).render('index.pug',params);
});




//get method is basically used to set the amount of data

// END POINTS
// app.get("/",(req,res)=>{ 
// res.status(400).send("This is my first app (homepage) by express")
// });

// app.get("/about",(req,res)=>{
// res.send("This is abount of an express")
// });

// app.get("/contact",(req,res)=>{
// res.send("this is contact page of an express");
// });

// app.post("/contact",(req,res)=>{
// res.send("this is post contact page of an express");
// }); 


// app.get("/this",(req,res)=>{
// res.status(404).send("This page is not found");
// }); 

// app.get("/service",(req,res)=>{
// res.send("this is the service page of an express");
// })



// strat the server 
app.listen(port , ()=>{
 console.log("isha jindal is software developer at Microsoft ");
});
