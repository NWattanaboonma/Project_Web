class NavBar extends HTMLElement { //declares a new class named NavBar which extends HTMLElement
    constructor() {
        super(); // calls the constructor of the parent class (HTMLElement in this case). This is necessary because NavBar is extending HTMLElement
    }
    // lifecycle callback that gets invoked when the custom element is inserted into the DOM (Document Object Model). 
    connectedCallback() {
        // infromation to learn html 
        this.innerHTML = `
        <nav class="Menu">
        <div class="catagorize">
        <div class="Hypelogo">
        <a href="/" class ="logo_hyper_home_page black ">HYPEGEAR</a> 
        </div>
        <div class="Hypefunction">
        <a href="/" class="line space_between white"> Home</a>
        <a href="/Guess" class="line space_between white"> Guess the new Collection </a>
        <div id="ya" class="line space_between white"> Sale </div>
        <a href="/Support" class="line space_between white"> Support </a>
        </div>
        <div class="searchbox">
        <from>
        <input type="text" id="ss" placeholder="Search">
        </from>
        <a href="/Advance-Search" class="btn">Advance Search</a> 
        <a href="/login" class="loginbutton lastspace"><img src="/Nav/Login_Page.png" class="Logo_size"></a> 
        <a href="/Edit" class="tbars lastspace"><img src="/Nav/Line_admins.png" class="Logo_size"></a> 
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
        width: 1400px ;
        position: fixed;
        z-index: 1;
        background-color: white;
    } 
    .catagorize{
        display: flex;
        width: 100%;
        position: relative;
        justify-content: first-start;
        align-items: baseline;
        flex-direction: row;
    }
    body{
        margin: 0%;
        width: 1400px;
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
      
        position: left;
        display: flex;
        flex-flow : flex-start;
        align-items: baseline;
        justify-content:flex-start;
        flex-wrap: wrap;
        flex-direction: row;
    
    }
    
    .searchbox{
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 2rem;
        gap: 2rem;
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
    footer{
        width: 1400px;
        color-background: black;
    }
    .bottom_footer{
        padding: 14px 16px;
        background-color: black;
        display: flex;
        justify-content: space-evenly;
    }
    #ya{
        cursor: pointer;
    }
    </style> 
        `;
    // import than you can't put the html in from the scipt in the script using the document create the get script nect step using the append child to add the script element after innerhtml
    const script = document.createElement('script');
    // other import the data the get the element need to get all of it otherwirse the append child will not work
    script.textContent = `
    const inform = document.getElementById("ss");
        console.log("Search is working");
        inform.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                gotosearch(inform.value);
            }
        });

        function gotosearch(data) {
            localStorage.setItem("Search_Data",data);
            window.location.href = "/Search_showproducts";
        }
    const click_it = document.getElementById("ya");
        click_it.addEventListener("click", function(event){
            alert("There are no any Products sale Yet See you in a Winter!!!!!♥");
        });
    `;
    this.appendChild(script);
    }
    
}
// built-in JavaScript object that provides methods for registering and working with custom elements.
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
