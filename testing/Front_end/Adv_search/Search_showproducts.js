function showProducts(filteredProducts) {
    var productsContainer = document.querySelector(".products");
    productsContainer.innerHTML = ""; 

    filteredProducts.forEach(function(product) {
        var productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Collection: ${product.collection}</p>
            <p>Color: ${product.color}</p>
            <button class="buy">Buy</button>`;
        productsContainer.appendChild(productDiv);
    });
}
function searchProducts() {
    var nameInput = document.getElementById("nameInput").value.toLowerCase();
    var collectionInput = document.getElementById("collectionInput").value.toLowerCase();
    var colorInput = document.getElementById("colorInput").value.toLowerCase();
    var filteredProducts = products.filter(function(product) {
        return (
            product.name.toLowerCase().includes(nameInput) && product.collection.toLowerCase().includes(collectionInput) && product.color.toLowerCase().includes(colorInput)
        );
    });
    displayProducts(filteredProducts);
}
displayProducts(products);
