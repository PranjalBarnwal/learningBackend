var express = require('express');
var router = express.Router();
const userModel=require("./users");

router.get('/', function(req, res) {
 res.render("index");
});

router.get("/create",async function(req,res){
 const usercreated = await userModel.create({
    username:"Happy@100",
    age:20,
    name:"happy"
  });

  res.send(usercreated);
})

router.get("/allusers",async function(req,res){
  let allusers=await userModel.find();
  res.send(allusers);
})

router.get("/allusers",async function(req,res){
  let allusers=await userModel.findOne({username:"happy@100"});
  console.log(allusers);
  res.send(allusers);
})

router.get('/delete',async function(req,res){
   let deleteduser=await userModel.findOneAndDelete({username:"Happy@100"});
   res.send(deleteduser);
})


module.exports = router;
