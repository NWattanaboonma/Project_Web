document.addEventListener("DOMContentLoaded", function() {
    // get the data from the url
    const urlParams = new URLSearchParams(window.location.search); //URLSearchParams// a built-in JavaScript class that provides methods and properties for working with query parameters in a URL.
    // this method for getting the information from the url
    const id = urlParams.get('ID');
    
    fetch('http://localhost:2021/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ product_id: id }) // Other hand you can use the pamas to depend on your database we recommend using body easier to use
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const Detail = data.data;
            const Img = Detail.Image;
            const Name = Detail.ProductName;
            const Des =  Detail.ProductDescription;
            const qu =  Detail.Quantity;
            const price =  Detail.Price;
            const mt =  Detail.Meterial;
            const color =  Detail.Color;
            const collection =  Detail.Collection;

            document.getElementById('page').innerHTML=`
        <div class="size">
            <img id="productimage" src="${Img}">
        </div>
        
        <div class="Detail">
            <div style="display: flex; align-items: flex-end;"><h1>${Name}<sub><small>@${id}</small></sub></h1></div>
            <div><h2>${price} THB</h2></div>
            <h2 id="event">Collection: ${collection}</h2>
            <h2>Description:</h2>
            <h3>${Des}</h3>
            <div class="same_line">
                <h2>SIZE:</h2>
                <select id="option">
                    <option id="S">S</option>
                    <option id="M">M</option>
                    <option id="L">L</option>
                    <option id="XL">XL</option>
                    <option id="XXL">XXL</option>
                    <option id="superXL">superXL</option>
                </select>
                
            </div>
            <h2><label>Quantity:</label><input type="number" id='number'></h2>
            <div class="center">
                <button class = "box_product_2" type="button">Buy</button>
            </div>
        </div>
            `;
            document.getElementById('number').value=qu;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
