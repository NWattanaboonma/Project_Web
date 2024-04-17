
const express = require('express');

// need for the url reading
const path = require('path');


const port = 2020;

// const http = require("http");
const fs = require('fs');

const Project_web = express();

const router = express.Router();
Project_web.use(router);


router.use(express.json());
router.use(express.urlencoded({ extended: true }));
// // Define MIME type for JavaScript files
// Project_web.use((req, res, next) => {
//     if (req.url.endsWith('.js')) {
//         res.set('Content-Type', 'application/javascript');
//     }
//     next();
// });

function call(Name,folder,file,url){
    router.use(express.static(path.join(__dirname, Name)));

    router.get(url, (req, res) => {
    res.sendFile(path.join(__dirname,Name,folder, file));
    console.log("work")
});
}

// // Home_page
call('Front_end','Home_page_website','Home_page.html','/');

// // See_more
call('Front_end','See_more','Im-not-a-god-Im-a-human-Collection.html','/Im-not-a-god-Im-a-human-Collection');
call('Front_end','See_more','MR.Bloom.html','/MR.Bloom');
call('Front_end','See_more','Special day.html','/Special-day');

// Footer
call('Front_end','Member','About_us.html','/About_us');
call('Front_end','Ourservice','Ourservice.html','/Ourservices');
call('Front_end','Privacy','Privacy.html','/Privacy');
call('Front_end','TermandCondition','terms_and_conditions.html','/TermandCondition');
call('Front_end','Support','support.html','/Support');
// call('Front-end')

// login
call('Front_end','Login','login.html','/login');
call('Front_end','Register','Register.html','/Register');


// 
// search
call('Front_end','Adv_search','Advance Search.html','/Advance-Search');
call('Front_end','Adv_search','Search_showproducts.html','/Search_showproducts')

// Project_web.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'Home_Page_Website', 'Home_page.html'));});

// w
// can't forget the listen function it will not work
// Project_web.listen(process.env.PORT, function() {
//     console.log("Server listening at Port " 
// + process.env.PORT);
// });


Project_web.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})