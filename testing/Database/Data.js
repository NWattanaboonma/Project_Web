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
// get all Product
router.get('/List_Product', (req, res) => {
    const sql = 'select * from Product;';
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
        return res.status(400).send({ error: true, message: 'Please provide email' });
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

// insert product
router.post('/insertProduct', (req, res) => {
    let product = req.body.productData;

    if (!product) {
        return res.status(400).send({ error: true, message: 'Please provide Product information' });
    }
    connection.query("INSERT INTO Product SET ? ", product, function (error, results) {
        if (error) throw error;
        return res.send({error: false, data: results.affectedRows, message: 'New product has been created successfully.'});
    });
});

// select :detail product click image then pull information to front end (passsss)
router.post('/product', (req, res) => { 
    const productId = req.body.product_id;

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


// update product 
router.put('/updateProduct', (req,res) => {
    const product_id = req.body.id;
    const product = req.body.productData;
 
    if (!product_id || !product) {
         return res.status(400).send({ error: admin, message: 'Please provide Product information' }); }
     connection.query("UPDATE Product set ? WHERE ProductID = ?",[product,product_id], function (error, results) {
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
  connection.query('DELETE FROM Product WHERE ProductID = ?', [product_id], function (error, results) {
    if (error) throw error;
    return res.send({ error: false, data: results.affectedRows, message: 'Product has been deleted successfully.' });
  });

});

// advance search (passs)
router.post('/adsearch', (req, res) => {
    const name = req.body.Name;
    const color = req.body.Color;
    const collection = req.body.Collection;
  
    const sql = `
      SELECT * FROM Product 
      WHERE ProductName LIKE ? AND Color LIKE ? AND Collection LIKE ?
    `;


    connection.query(sql, [name,color,collection], (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        
        if (results.length === 0) {
            return res.status(201).json({ error: true, message: 'No products found' });
        }
        const product = results[0]; 
        return res.send({ error: false, data: product, message: 'Products search successful' });
    });
});

// insert admin 
router.post('/insertAdmin', (req, res) => {
    let admin = req.body.admin;

    if (!admin) {
        return res.status(400).send({ error: true, message: 'Please provide Admin information' });
    }
    connection.query("INSERT INTO Admins SET ? ", admin, function (error, results) {
        if (error) throw error;
        return res.send({error: false, data: results.affectedRows, message: 'New admid has been created successfully.'});
    });
});

// select admin
router.post('/admin', (req, res) => {
    const adminId = req.body.id;

    connection.query('SELECT * FROM Admins WHERE AdminID = ?', adminId, function (error, results) {
        if (error) {
            console.error('Error fetching product:', error.message);
            return res.status(500).json({ error: true, message: 'An error occurred', details: error.message }); 
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        const product = results[0]; 
        return res.status(200).json({ error: false, data: product, message: 'Admin retrieved successfully' }); 
    });
});



// update admin
router.put('/updateAdmin', (req,res) => {
    const admin_id = req.body.id;
    const admin = req.body.userData;
 
    if (!admin_id || !admin) {
         return res.status(400).send({ error: admin, message: 'Please provide Admin information' }); }
     connection.query("UPDATE Admins set ? WHERE AdminID = ?",[admin,admin_id], function (error, results) {
         if (error) throw error;
         return res.send({error: false, data: results.affectedRows, message: 'Admin has been updated successfully.'})
     });
 });

// delete admin
router.delete('/deleteAdmin', (req,res) =>{
    const admin_id = req.body.id;
  
    if (!admin_id){
      return res.status(400).send({ error: true, message: 'Please provide admin_id' });
    }
    connection.query('DELETE FROM Admins WHERE AdminID = ?', [admin_id], function (error, results) {
      if (error) throw error;
      return res.send({ error: false, data: results.affectedRows, message: 'Admin has been deleted from successfully.'});
    });
});


// insert user 
router.post('/insertUser', (req, res) => {
    let user = req.body.userData;

    if (!user) {
        return res.status(400).send({ error: true, message: 'Please provide User information' });
    }
    connection.query("INSERT INTO Users SET ? ", user, function (error, results) {
        if (error) throw error;
        return res.send({error: false, data: results.affectedRows, message: 'New user has been created successfully.'});
    });
});

// select user
router.post('/User', (req, res) => {
    
    const userMail = req.body.id;
    connection.query('SELECT * FROM Users WHERE UserEmail = ?', userMail, function (error, results) {
        if (error) {
            console.error('Error fetching product:', error.message);
            return res.status(500).json({ error: true, message: 'An error occurred', details: error.message }); 
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const product = results[0]; 
        return res.status(200).json({ error: false, data: product, message: 'User retrieved successfully' }); 
    });
});




// update user
router.put('/updateUser', (req,res) => {
    const user_email = req.body.email;
    const user = req.body.userData;
 
    if (!user_email || !user) {
         return res.status(400).send({ error: user, message: 'Please provide User information' }); }
     connection.query("UPDATE Users set ? WHERE UserEmail = ?",[user,user_email], function (error, results) {
         if (error) throw error;
         return res.send({error: false, data: results.affectedRows, message: 'User has been updated successfully.'})
     });
 });

// delete user
router.delete('/deleteUser', (req,res) =>{
    const user_email = req.body.id;
  
    if (!user_email){
      return res.status(400).send({ error: true, message: 'Please provide user_email' });
    }
    connection.query('DELETE FROM Users WHERE UserEmail = ?', [user_email], function (error, results) {
      if (error) throw error;
      return res.send({ error: false, data: results.affectedRows, message: 'User has been deleted from successfully.'});
    });
});



app.listen(process.env.PORT, function() {
    console.log("Server listening at Port " 
+ process.env.PORT);
});

