const express = require("express");
const app = express();
const path = require('path');
const mysql = require('mysql2');
const dotenv = require("dotenv");
var cors = require('cors');
const router = express.Router();
app.use("/", router);

// let corsOptions = {
//     origin: 'http://localhost:3030',
//     methods: 'GET,POST,PUT,DELETE'
// }
// app.use(cors());
// app.use(cors(corsOptions));

// console.log("photo is joined ya")
dotenv.config();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

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

// register
router.post('/register', (req, res) => {

    const data = req.body.infor;

    if (error) {
        console.error('Error fetching shirt:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }

    if (!data) {
        return res.status(400).json({ error: true, message: 'Please provide user information' });
    }

    const sql = 'INSERT INTO Users SET ?';

    connection.query(sql, data, (error, results) => {
        if (error) {
            console.error('Error signing up user:', error);
            return res.status(500).json({ error: 'An error occurred while signing up' });
        } else {
            console.log('User signed up successfully');
            return res.status(201).json({ message: 'User signed up successfully' });
        }
    });
});

// login
router.post('/login/:email', (req, res) => {
    const email = req.params.email;

    if (!email) {
        return res.status(400).send({ error: true, message: 'Please provide email' });
    }

    connection.query('SELECT UserEmail FROM Users WHERE UserEmail = ? UNION SELECT Username FROM Admins WHERE AdEmail = ?', [email, email], function (error, results) {
        if (error) {
            console.error('Error fetching user information:', error);
            return res.status(500).json({ error: true, message: 'Internal server error', details: error.message });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: true, message: 'User not found' });
        }

        // Return the first result from the query
        const userData = results[0];
        return res.status(200).json({ error: false, data: userData, message: 'Login successful' });
    }); 
});


// detail product click image then pull information to front end
router.get('/product/:product_id', (req, res) => { 
    const productId = req.params.product_id;

    connection.query('SELECT * FROM Product WHERE ProductID = ?', productId, function (error, results) {
        if (error) {
            console.error('Error fetching product:', error.message);
            return res.status(500).json({ error: true, message: 'An error occurred', details: error.message }); 
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const product = results[0]; 
        return res.status(200).json({ error: false, data: product, message: 'Product retrieved successfully' }); 
    });
});


// insert product *** fix / ***
router.post('/product' , (req, res) => { 
    const data = req.body.infor_p;
 
    if (error) {
        console.error('Error fetching shirt:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }

    if (!data) {
        return res.status(400).json({ error: true, message: 'Please provide product information' });
    }

    const sql = 'INSERT INTO Product SET ?';

    connection.query(sql, data, (error, results) => {
        if (error) {
            console.error('Error inserting product:', error);
            return res.status(500).json({ error: 'An error occurred while insert' });
        } else {
            console.log('User signed up successfully');
            return res.status(201).json({ message: 'Product add successfully' });
        }
    });
});


// add product

// delete product

// advance search

// search

app.listen(process.env.PORT, function() {
    console.log("Server listening at Port " 
+ process.env.PORT);
});

