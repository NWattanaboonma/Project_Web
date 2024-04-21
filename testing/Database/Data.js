const express = require("express");
const app = express();
const path = require('path');
const mysql = require('mysql2');
const dotenv = require("dotenv");
var cors = require('cors');
const router = express.Router();
dotenv.config();


router.use(cors())
app.use("/", router);


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

router.get('/List_Admin', (req, res) => {
    const sql = ' select * from Admins';
        connection.query( sql, function (error, results) {
        if (error) throw error;
            return res.send({ error: false, data: results});
        });
});

//register (passsss)
router.post('/register', (req, res) => {

    const data = req.body.userData;

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





// login (passsss)
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


// detail product click image then pull information to front end (passsss)
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

  
  
// add product

// delete product

// advance search
router.post('/adsearch/:name/:color/:collection', (req, res) => {
    const { name, color, collection } = req.body;

    const query = `SELECT * FROM Product WHERE 
        (Productname LIKE ? OR ? IS NULL) AND 
        (Color LIKE ? OR ? IS NULL) AND 
        (Collection LIKE ? OR ? IS NULL)`;

    connection.query(query, [`%${name}%`, name || null, `%${color}%`, color || null, `%${collection}%`, collection || null], (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        // Send back the query results as JSON response
        res.json(results);
    });
});


// search

app.listen(process.env.PORT, function() {
    console.log("Server listening at Port " 
+ process.env.PORT);
});

