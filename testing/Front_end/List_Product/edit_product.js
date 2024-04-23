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
    
    const productData = {
        "ProductName": productName,
        "Collection": collection,
        "Color": color,
        "Price": price
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