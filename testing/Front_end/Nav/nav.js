class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<nav class="Menu">
        <div class="catagorize">
        <div class="Hypelogo">
        <a href="/" class ="logo_hyper_home_page black ">HYPEGEAR</a>
        </div>
        <div class="Hypefunction">
        <a href="/" class="line space_between white"> Home</a>
        <a href="/" class="line space_between white"> Collection</a>
        <a href="Sale_Product.html" class="line space_between white"> Sale</a>
        <a href="/Support" class="line space_between white"> Support</a>
        </div>
        <div class="searchbox">
        <form></form> 
        <a href="/Search_showproducts" class="space_between"><input type="text" id="ss"  placeholder="Search" ></a>
        <a href="/Advance-Search" class="btn">Advance Search</a>
        <a href="/login" class="loginbutton lastspace"><img src="/Nav/Login_Page.png" class="Logo_size"></a>
        <a href="#" class="tbars lastspace"><img src="/Nav/Line_admins.png" class="Logo_size"></a>
        </div>
        </div>
    </nav > 
    

    <style>
    font-face {
        font-family: Playfair;
        font-style: normal;
        font-weight: 400;
        font-stretch: 100%;
        src: url(https://fonts.gstatic.com/s/playfair/v2/0nkQC9D7PO4KhmUJ5_zTZ_4MYQXznAK-TUcZXKO3UMnW6VNpe4-SiiZ4b8h5G3GutPkUeugeqyIA5g.woff2) format('woff2');
        unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    .Menu{
        Top: 0;
        width: 1440px ;
        position: fixed;
        z-index: 1;
        background-color: white;
        // display: flex;
        // justify-content: space-between;
    } 
    .catagorize{
        display: flex;
        width: 1440;
        position: relative;
        justify-content: first-start;
        align-items: baseline;
        flex-direction: row;
    }
    body{
        margin: 0%;
    }
    .bar{
        height: 5rem;
    }
    .Hypelogo{
        display:flex;
        position: relative;
        justify-content: flex-start;
        text-align: center;
        padding: 1rem 2rem;
    }
    .Hypelogo.Hypefunction, .searchbox, .toolsbar{
        flex-grow: 1;
    }
    .Hypefunction{
        font-size: 1rem;
        width: 55%;
        position: left;
        display: flex;
        flex-flow : flex-start;
        align-items: baseline;
        justify-content:flex-start;
        flex-wrap: wrap;
        flex-direction: row;
    
    }
    
    .searchbox{
        display: flex;
        justify-content: space-around;
        margin: auto;
        align-items: center;
        width: auto;
       padding-right:2rem;
    
    }

    .searchbox input{
        outline:none;
        background: white;
        height: 100%;
        padding:0 10px;
        font-size:16px;
        width: 350px;
    
    }

    a{
        text-decoration: none;
        padding: 0%;
    }
    
    /* bc this;-; */
    .logo_hyper_home_page{
        padding: 1rem;
        border: 10cm;
        border-radius: 49%;
        font-family: 'Playfair Display'serif;
        font-size: 52;
        color: white;
        background-color: black;
    }
    
    .line{
        display: inline-block;
        
    }
    .space_between{
        padding-left: 5ch;
    }
    .lastspace{
        padding-left: 1ch;
    }

    .shape{
        
        border-radius: 30%;
        
    }
    .black{
        color: white;
    }
    .white{
        color: black;
       
    }
    #ss{
        width: 7cm;
        margin-right: 0.2ch;
    }
    .Logo_size{
        width: 20px ;
        height: 20px;
        float: right;
    }
    
    .btn{
        padding: 1px;
        padding-left: 15px;
        width: 8rem;
        height: 20px;
        border-style: none;
        font-weight: bold;
        outline: none;
        magin: auto;
        background-color:rgb(239, 153, 41);
    }
    .btn:hover{
        background-color:rgba(230, 162, 95, 0.783);
    }
    .bottom_footer{
        width: 1440px;
        padding: 14px 16px;
        background-color: black;
        display: flex;
        justify-content: space-evenly;
    }
    </style>   
        `;
    }
}

customElements.define('navbar-component', NavBar);

class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="bottom_footer black">
            <a href="/About_us" class="black">About us</a>
            <a href="/Ourservices" class="black">Our Services</a>
            <a href="/Privacy" class="black">Privacy Policy</a>
            <a href="/TermandCondition" class="black">Term & conditions</a>
        </div>
        </footer>`;
    }
}


customElements.define('footer-component', Footer);