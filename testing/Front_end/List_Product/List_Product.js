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
            // const product = products;
            // console.log(product[i]);
            const name = product.ProductName;
            const collection = product.Collection;
            const material = product.Meterial;
            const image = product.Image;
            const price = product.Price;
            const color = product.Color;
            const description=product.ProductDescription;
            const sizeS = product.size_S;
            const sizeM = product.size_M;
            const sizeL = product.size_L;
            const sizeXL = product.size_XL;
            const sizeXXL = product.size_XXL;
            const sizeSuperXL = product.size_superXL;
            const quantity = product.Quantity;
        

            document.getElementById("list").innerHTML += 
                `<div class='box'>
                    <div id="number"><img src="${image}" alt="Product Image" class="product-image"></div>
                    <div class="product-info">
                        
                        <div class="product-details">
                            <p><span class="name">${name}</span><span class="collection"> ${collection}</span></p>
                            <p><span class="color">Color: ${color}</span>, Material: ${material}</p>
                            <p class="price">Price: ${price}฿</p><p class="Des">Description: ${description}</p>
                            <p class="sizes">SizeS:${sizeS},SizeM:${sizeM},SizeL:${sizeL},SizeXL:${sizeXL}</p>
                            <p class="bsize">SizeXXL:${sizeXXL},SizeSuperXL:${sizeSuperXL},Quantity: ${quantity}</p>
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