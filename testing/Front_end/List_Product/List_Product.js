function using(){
    fetch('http://localhost:2021/List_Products', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(result => result.json())
    .then(data => {
        console.log(data); 
        const products = data.data;
        console.log(products);
        for (var i=0; i<products.length; i++){
            const product = products[i];
            const picture = product.picture;
            const name = product.name;
            const collection = product.collection;
            const color = product.color;
            const price = product.price;

            document.getElementById("list").innerHTML += `
                <div class='box'>
                    <div id="number">${i+1}</div>
                    <div class="product-info">
                        <img src="${picture}" alt="Product Image" class="product-image">
                        <div class="product-details">
                            <p><span class="collection">${collection}</span>, <span class="name">${name}</span> (<span class="color">${color}</span>)</p>
                            <p class="price">Price: $${price}</p>
                        </div>
                    </div>
                    <button class="edit-button">Edit</button>
                </div>
            `;
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error); 
    });
}
