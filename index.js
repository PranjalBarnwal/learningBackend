
const a=require("./index2");
// var joke=require("one-liner-joke");

// console.log(joke.getRandomJoke());
// console.log(a.first);


// var figlet=require("figlet");
// figlet("Hello",(err,data)=>{
// if(err) console.log("something went wrong");
// else console.log(data);
// })

const express= require("express");
const app=express();

app.use(function(req,res,next){
    console.log("hello from middleware");
    next();
});

app.use(function(req,res,next){
    console.log("hello from middleware2");
    next();
});

app.get("/",(req,res)=>{
    res.send("hello dosto kaise ho sab, aur kya halchal");
})
app.get("/profile",(req,res)=>{
    res.send("profile page");
})  

app.listen(3000);
