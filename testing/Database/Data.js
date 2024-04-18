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


router.post('/form-submit', (req, res) => {
    const choose = req.body.search_choice;
    const num = req.body.search_value;
    
    let sql= `select * from professor where EMP_NUM = ${num};`
    connection.query( sql, function (error, results) {
        if (error) throw error;
        if(results==0){
            console.log(`${results.length} rows returned not found`);
           return res.sendFile(path.join(`${__dirname}/html/notfound.html`));
        }else{
            console.log(`${results.length} rows returned`);
            return res.send(results);
        }
        });
});

app.listen(process.env.PORT, function() {
    console.log("Server listening at Port " 
+ process.env.PORT);
});

