document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('Name').value;
        const color = document.getElementById('Color').value;
        const collection = document.getElementById('collection').value;

        fetch('http://localhost:2021/adsearch', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Name: name, Color: color, Collection: collection })
        })
        .then(response => {
            if (response.status== 201) {
                alert("There are no product that you are searching?")
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // console.log(data);
            const Detail=data.data;
            const Name = Detail.ProductName;
            const mt = Detail.Meterial;
            const Price = Detail.Price;
            const Img = Detail.Image;
            const color = Detail.Color; 
            const di = Detail.ProductID;
            // const uq = String("'"+di+"'")
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
function gotodetail(d) {
    console.log(d)
    const data = {
        "ID": d
    }
    const queryString = new URLSearchParams(data).toString();
    const url = "/product.html?"+ queryString;;
    window.location.href = url
}
