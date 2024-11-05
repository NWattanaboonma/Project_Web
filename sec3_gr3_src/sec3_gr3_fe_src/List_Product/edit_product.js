document.addEventListener("DOMContentLoaded", function() {
    const id = localStorage.getItem("edit")
    
    // show the product detail
    fetch('http://localhost:2021/product', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ product_id: id})
    })
    .then(result => result.json())
    .then(data => {
        console.log(data); 
        const infro = data.data;

        document.getElementById("productName").value=infro.ProductName;
        document.getElementById("collectionName").value=infro.Collection
        document.getElementById("productColor").value=infro.Color
        document.getElementById("productPrice").value=infro.Price
        document.getElementById("sizeS").value = infro.size_S;
        document.getElementById("sizeM").value= infro.size_M;
        document.getElementById("sizeL").value= infro.size_L;
        document.getElementById("sizeXL").value = infro.size_XL;
        document.getElementById("sizeXXL").value = infro.size_XXL;
        document.getElementById("sizeSuperXL").value = infro.size_superXL;
        document.getElementById("quantity").value = infro.Quantity;
        document.getElementById("mt").value= infro.Meterial;
        document.getElementById("ProductDescription").value = infro.ProductDescription;

    })
    .catch(error => {
        console.error('Error fetching data:', error); 
    });
});

function updateproduct() {
    // Get user information from input fields
    const id = localStorage.getItem("edit")
    const productName = document.getElementById("productName").value;
    const collection = document.getElementById("collectionName").value;
   
    const color = document.getElementById("productColor").value;
    const price = document.getElementById("productPrice").value;
    const description = document.getElementById("ProductDescription").value;
    const sizeS = document.getElementById("sizeS").value;
    const sizeM = document.getElementById("sizeM").value;
    const sizeL = document.getElementById("sizeL").value;
    const sizeXL = document.getElementById("sizeXL").value;
    const sizeXXL = document.getElementById("sizeXXL").value;
    const sizeSuperXL = document.getElementById("sizeSuperXL").value;
    const quantity = document.getElementById("quantity").value;
    const material = document.getElementById("mt").value;
    const productData = {
        "ProductName": productName,
        "Collection": collection,
        "Color": color,
        "Price": price,
        "ProductDescription": description,
        "size_S": sizeS,
        "size_M": sizeM,
        "size_L": sizeL,
        "size_XL": sizeXL,
        "size_XXL": sizeXXL,
        "size_superXL": sizeSuperXL,
        "Quantity": quantity,
        "Meterial": material
    };

    fetch("http://localhost:2021/updateProduct", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: id, // Pass user email for identification
            productData: productData // Pass user data for update
        })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("Failed to update user information");
    })
    .then(data => {
        window.location.href='/List_product'; 
    })
    .catch(error => {
        console.error("Error updating user information:", error);
    });
}

function deleteproduct() {

    const id = localStorage.getItem("edit")

    fetch('http://localhost:2021/deleteProduct', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: id})
    })
    .then(result => result.json())
    .then(data => {
        console.log(data)
        window.location.href='/List_Product'; 
    })
    .catch(error => {
        console.error('Error fetching data:', error); 
    });
}