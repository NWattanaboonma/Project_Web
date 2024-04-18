const express = require("express");
const app = express();
const path = require('path');
const mysql = require('mysql2');
const dotenv = require("dotenv");
const router = express.Router();

app.use("/", router);

dotenv.config();

var connection = mysql.createConnection({
    // host : process.env.host,
    // user : process.env.DB_user,
    // password : process.env.DB_pass,
    // database : process.env.DB_name
});

connection.connect(function(err){
  if(err) throw err;
  console.log(`Connected DB: ${process.env.DB_name}`);
});

function getResponses() {
    let query = document.getElementById("name").value;
    let rount = "https://api.spoonacular.com/recipes/complexSearch?apiKey="+"548b3572a843413cae59a2d5919afde6"+"&query="+query;
    
    fetch(rount)
    .then((res)=> res.json())
    .then((data)=>{
    console.log(data);
    document.querySelector("ul").innerHTML=" ";
    for (let i=0;i<data.number;i++){
        document.querySelector("ul").innerHTML += "<li><b>"+data.results[i].title+":</b></li>" + '<img src="'+data.results[i].image+'">';
    }
    })
    }


