document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('form');
// List for the the user that click on the product
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('Name').value;
        const color = document.getElementById('Color').value;
        const collection = document.getElementById('collection').value;
//  go to the database
        fetch('http://localhost:2021/adsearch', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // setting information for the req.body.information
            body: JSON.stringify({ Name: name, Color: color, Collection: collection })
        })
        .then(response => {
            if (response.status== 201) {
                // from the data that there are not have that product see the 201 for make it work and using the alert to tell the user that you information are wrong
                alert("There are no product that you are searching?")
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const Detail=data.data;
            const Name = Detail.ProductName;
            const mt = Detail.Meterial;
            const Price = Detail.Price;
            const Img = Detail.Image;
            const color = Detail.Color; 
            const di = Detail.ProductID;
            // this process setting the a html to the id='show'
                document.getElementById('show').innerHTML=` 
                <div class="Product">
                <img src = ${Img} class = "imgproducts" >
                <div class="info">
                    <div id="collection"><b><br>${Name}<br>${mt}</b></div>
                        <div id="color">${color}</div>
                        <div id="price">${Price} Baht<br></div>
                        <button class="button-35" type="submit" onclick="gotodetail('${di}')">buy</button>
                    </div>
                </div>
            </div>`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    });
});
//  send the id product to add to the url and use pamas or call other way.
function gotodetail(d) {
    console.log(d)
    const data = {
        "ID": d
    }
    const queryString = new URLSearchParams(data).toString();
    const url = "/product.html?"+ queryString;;
    window.location.href = url
}
