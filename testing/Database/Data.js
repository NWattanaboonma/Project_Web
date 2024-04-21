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

// get List_Admins
router.get('/List_Admin', (req, res) => {
    const sql = ' select * from Admins';
        connection.query( sql, function (error, results) {
        if (error) throw error;
            return res.send({ error: false, data: results});
        });
});
// get List_User
router.get('/List_User', (req, res) => {
    const sql = 'select * from Users;';
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
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!email) {
        return res.status(400).send({ error: true, message: 'Please provide email or the password' });
    }
    else if (!password) {
        return res.status(400).send({ error: true, message: 'Please provide the password' });
    }

    connection.query('SELECT * FROM users WHERE UserEmail = ? AND UserPassword = ?', [email, password], function (error, results) {
        if (error) {
            console.error('Error fetching user information:', error);
            return res.status(500).json({ error: true, message: 'Internal server error', details: error.message });
        }

        if (results.length === 0) {
            return res.status(201).json({ error: true, message: 'User not found' });
        }

        // Return the first result from the query
        const userData = results[0];
        return res.status(200).json({ error: false, data: userData, message: 'Login successful' });
    }); 
});


// select :detail product click image then pull information to front end (passsss)
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

// select all Product
router.get('/AllProduct', (req, res) => {
    connection.query("Select * from Product", function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Product list.' });
    });
});

// insert product *** fix / ***

  
// update product (from table product)(pass)
router.put('/updateProduct', (req,res) => {
   const product_id = req.body.id;
   const product = req.body.userData;

   if (!product_id || !product) {
        return res.status(400).send({ error: product, message: 'Please provide Product information' }); }
    connection.query("UPDATE Product set ? WHERE ProductID = ?",[product,product_id], function (error, results) {
        if (error) throw error;
        return res.send({error: false, data: results.affectedRows, message: 'Product has been updated successfully.'})
    });
});

// update product in stock can update follow by stockID 
router.put('/updateStock', (req,res) => {
    const stock_id = req.body.id;
    const stock = req.body.userData;
 
    if (!stock_id || !stock) {
         return res.status(400).send({ error: stock, message: 'Please provide Product information' }); }
     connection.query("UPDATE Stock set ? WHERE StockID = ?",[stock,stock_id], function (error, results) {
         if (error) throw error;
         return res.send({error: false, data: results.affectedRows, message: 'Product has been updated successfully.'})
     });
 });

// delete product (from stock and product table)
router.delete('/deleteProduct', (req,res) =>{
  const product_id = req.body.id;

  if (!product_id){
    return res.status(400).send({ error: true, message: 'Please provide product_id' });
  }
  connection.query('DELETE FROM Stock WHERE ProductID = ?', [product_id], function (error, results) {
    if (error) throw error;
    return res.send({ error: false, data: results.affectedRows, message: 'Product has been deleted from "Stock" successfully.' });
  });
  connection.query('DELETE FROM Product WHERE ProductID = ?',[product_id],function (error, results) {
    if (error) throw error;
    return res.send({ error: false, data: results.affectedRows, message: 'Product has been deleted successfully.' });
  });
});

// advance search (passs)
router.post('/adsearch/:name/:color/:collection', (req, res) => {
    const { name, color, collection } = req.params;
  
    const sql = `
      SELECT * FROM Product 
      WHERE ProductName LIKE ? AND Color LIKE ? AND Collection LIKE ?
    `;

    const params = [`%${name}%`, `%${color}%`, `%${collection}%`];

    connection.query(sql, params, (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        
        if (results.length === 0) {
            return res.status(404).json({ error: true, message: 'No products found' });
        }

        res.json({ error: false, data: results, message: 'Products search successful' });
    });
});

// insert admin 
router.post('/ad', (req, res) => {
    let student = req.body.student;
    console.log(student);

    if (!student) {
        return res.status(400).send({ error: true, message: 'Please provide studentinformation' });
    }
    connection.query("INSERT INTO personal_info SET ? ", student, function (error, results) {
        if (error) throw error;
        return res.send({error: false, data: results.affectedRows, message: 'New student has beencreated successfully.'});
    });
});


// select admin

// select allAdmin

// update admin

// delete admin

// insert user 

// select user

// select allAUser

// update user

// delete user

// search


app.listen(process.env.PORT, function() {
    console.log("Server listening at Port " 
+ process.env.PORT);
});

