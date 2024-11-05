
const express = require('express');

// need for the url reading
const path = require('path');

const port = 2020;

const Project_web = express();

const router = express.Router();
Project_web.use(router);


router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use("/Nav",express.static(path.join(__dirname, 'Nav')));
router.use("/product",express.static(path.join(__dirname, 'porduct')));
function call(Name,file,url){
    router.use(express.static(path.join(__dirname, Name)));
    
    router.get(url, (req, res) => {
    res.sendFile(path.join(__dirname,Name, file));
    console.log(`working: Server AT ${file}`)
});
}

// // Home_page
call('Home_page_website','Home_page.html','/');

// // See_more
call('See_more','Im-not-a-god-Im-a-human-Collection.html','/Im-not-a-god-Im-a-human-Collection');
call('See_more','MR.Bloom.html','/MR.Bloom');
call('See_more','Special day.html','/Special-day');

// Footer
call('Member','About_us.html','/About_us');
call('Ourservice','Ourservice.html','/Ourservices');
call('Privacy','Privacy.html','/Privacy');
call('TermandCondition','terms_and_conditions.html','/TermandCondition');
call('Support','support.html','/Support');
// call('Front-end')

// login
call('Login','login.html','/login');
call('Register','Register.html','/Register');


// search
call('Adv_search','Advance Search.html','/Advance-Search');
call('Adv_search','Search_showproducts.html','/Search_showproducts');

// Password_Process
call('Edit','Edit.html','/Edit');

// List
call('List','list_user.html','/List_User')
call('List','List_admin.html','/List_Admin')
call('List','Admin_detail.html','/Admin_detail')
call('List','user_list.html','/user_list')
call("List_Product",'List_product.html','/List_product')
call('List','Admin_detail_add.html','/Admin_detail_add')

// Product
call('product','product.html','/Detail')
// Guess it
call('Guess','Guess.html','/Guess')


// listen import 
Project_web.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})