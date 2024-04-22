document.addEventListener("DOMContentLoaded", function() {
    const pid = localStorage.getItem("edit")

    
    fetch('http://localhost:2021/product', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: pid})
    })
    .then(result => result.json())
    .then(data => {
        console.log(data); 
        const infro = data.data;

        
        document.getElementById("productName").value=infro.ProductName
        document.getElementById("collectionName").value=infro.Collection
        document.getElementById("productColor").value=infro.Color
        document.getElementById("productPrice").value=infro.price
    })
    .catch(error => {
        console.error('Error fetching data:', error); 
    });
});



