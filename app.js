const express= require("express");

const app=express();
app.use(logger);

app.get("/books",logger1,(req,res)=>{
 return res.send({status:"fetching all book"})
})

app.get("/name1",(req,res)=>{
  return res.send({book:"Forty nine days",
  author:"Amrita Pritam"});
})
app.get("/name2",(req,res)=>{
  return res.send({book:"Kalpana chawla-Alife",
  author:"Anil Padmanabham"});
})
app.get("/name3",(req,res)=>{
  return res.send({book:"Fasting feasting",
  author:"Anita Desai"});
})
function logger1(req,res,next){
  console.log("logger1")
  next();
}
function logger(req,res,next){
  console.log("fetching all books");
  next();
}
app.listen(5000,()=>{
  console.log("listenig 5000");
}) 


