// /User
document.addEventListener("DOMContentLoaded", function() {
    const id = localStorage.getItem("edit")
    
    
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



