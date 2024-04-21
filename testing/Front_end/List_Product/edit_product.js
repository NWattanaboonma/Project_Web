document.addEventListener("DOMContentLoaded", function() {
    const productId = getProductIdFromURL();
    fetchProductDetails(productId);
});

function fetchProductDetails(productId) {
    // Fetch product details based on productId
    fetch(`http://localhost:2021/products/${productId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(result => result.json())
    .then(data => {
        document.getElementById("productName").value = data.name;
        document.getElementById("collectionName").value = data.collection;
        document.getElementById("productColor").value = data.color;
        document.getElementById("productPrice").value = data.price;
    })
    .catch(error => {
        console.error('Error fetching product details:', error); 
    });
}

document.getElementById("editForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get updated product details from form
    const updatedName = document.getElementById("productName").value;
    const updatedCollection = document.getElementById("collectionName").value;
    const updatedColor = document.getElementById("productColor").value;
    const updatedPrice = document.getElementById("productPrice").value;
    // Get other updated fields if needed

    // Send updated product details to server to update the product
    const productId = getProductIdFromURL(); // Get product ID from URL
    fetch(`http://localhost:2021/products/${productId}`, {
        method: 'PUT', // Assuming you use PUT method to update
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: updatedName,
            collection: updatedCollection,
            color: updatedColor,
            price: updatedPrice,
            // Include other updated fields if needed
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error updating product:', response.status);
        }
        alert("Product updated successfully!");
    })
    .catch(error => {
        console.error(error); 
        alert("Error updating product. Please try again later.");
    });
});

document.getElementById("deleteBtn").addEventListener("click", function() {
    // Confirm before deleting the product
    if (confirm("Are you sure you want to delete this product?")) {
        const productId = getProductIdFromURL(); // Get product ID from URL
        // Send request to server to delete the product
        fetch(`http://localhost:2021/products/${productId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error deleting product:', response.status);
            }
            alert("Product deleted successfully!");
            // Redirect to home page or any other page after successful deletion
            window.location.href = "index.html";
        })
        .catch(error => {
            console.error(error); 
            alert("Error deleting product. Please try again later.");
        });
    }
});

function getProductIdFromURL() {
    // Extract product ID from URL, you can use window.location or any other method
    // Example: http://localhost:2021/edit_product.html?id=12345
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}
