function using(){
    fetch('http://localhost:2021/List_Product', {
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
            console.log(product[i]);
            const name = product.name;
            const collection = product.collection;
            const material = product.material;
            const picture = product.picture;
            const price = product.price;
            const color = product.color;
            const description=product.description;
            const sizeS = product.size_S;
            const sizeM = product.size_M;
            const sizeL = product.size_L;
            const sizeXL = product.size_XL;
            const sizeXXL = product.size_XXL;
            const sizeSuperXL = product.size_superXL;
            const quantity = product.quantity;
        

            document.getElementById("list").innerHTML += 
                `<div class='box'>
                    <div id="number">${i+1}</div>
                    <div class="product-info">
                        <img src="${picture}" alt="Product Image" class="product-image">
                        <div class="product-details">
                            <p><span class="collection">${collection}</span>, <span class="name">${name}</span> (<span class="color">${color}</span>)</p>
                            <p class="price">Price: $${price}</p>
                        </div>
                    </div>
                    <button class="edit-button">Edit</button>
                    
                </div>`;
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error); 
    });
}
function updateproduct(data){
    console.log(data)
    localStorage.setItem("product_id",data);
    window.location.href="/Product_List.html";
  }