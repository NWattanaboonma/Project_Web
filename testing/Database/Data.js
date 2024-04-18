const express = require("express");
const app = express();
const path = require('path');
const mysql = require('mysql2');
const dotenv = require("dotenv");
var cors = require('cors');
const router = express.Router();
app.use("/", router);

let corsOptions = {
    origin: 'http://localhost:3030',
    methods: 'GET,POST,PUT,DELETE'
}
app.use(cors());
app.use(cors(corsOptions));

console.log("photo is joined ya")
dotenv.config();

var connection = mysql.createConnection({
host : process.env.MYSQL_HOST,
user : process.env.MYSQL_USERNAME,
password : process.env.MYSQL_PASSWORD,
database : process.env.MYSQL_DATABASE
});
connection.connect(function(err){
    if(err) throw err;
    console.log(`Connected DB: ${process.env.MYSQL_DATABASE}`);
});

router.get('/', (req, res) => {
    console.log('Request at /');
    res.send('Hello World');
});

app.listen(process.env.PORT, function() {
    console.log("Server listening at Port " 
+ process.env.PORT);
});

