
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

// app.use(function(req,res,next){
//     console.log("hello from middleware2");
//     next();
// });
app.set("view engine","ejs");
app.use(express.static("./public"));


app.get("/",(req,res)=>{
    res.render("index",{name:"Pranjal"});
})

app.get("/contact",(req,res)=>{
    res.render("contact");
})

//dynamic routing
app.get("/profile/:resName",(req,res)=>{
    res.send(`${req.params.resName} loves you so much`);
})  

app.listen(3000);