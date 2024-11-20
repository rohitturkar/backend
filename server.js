// Server :- Server is kind of software and computer program that is provide service to another computer i.e client, server is process the request , manages access to resources and deliver content such as webpages to client, and database to client, the server is also used to  create the API's

// Express js :- Express js is lightweight framework of node js , basically used to create server on the backend efficiently , the Express js provides a roboust set of feature for web and mobile application

// let's create a server

const express = require("express");
const app = express();
const db=require('./db')

const Person=require('./models/Person')

//basically the app.get() takes the two paramter that is path and callback function like this "app.get(path, callback)"

app.get("/", (req, res) => {
  res.send("Hello we are the homepage");
});

app.get("/about",(req,res)=>{ 

  const data={
    name:'Rohit',
    age:21,
  }
  res.send(data)
})





app.get("/idli",(req,res)=>{

  const data={
    name:'idli',
    size:21,
  }
  res.send(data)
})

app.post('/person',(req,res)=>{
  // const data={
  //   name:'idli',
  //   size:21,
  //   description:'idli is awesome, preety much !'
  // }
  res.send(`data is saved !!`)

})



app.listen(3000,()=>{
  console.log("Server is Running")
})