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


