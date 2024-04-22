// document.addEventListener("DOMContentLoaded", function() {
//     const data=[];
//     const system = document.getElementById("insert");
//     // const id = document.getElementById("Manow").value;
//     // console.log(id)
//     system.addEventListener('click', function(event) {
        
//         event.preventDefault();
//         const id = document.getElementById("ProductID").value;
//         const name = document.getElementById("productName").value;
//         const collection = document.getElementById("collectionName").value;
//         const material = document.getElementById("mt").value;
//         const image = document.getElementById("productImage").value;
//         const price = document.getElementById("productPrice").value;
//         const color = document.getElementById("productColor").value;
//         const description = document.getElementById("ProductDescription").value;
//         const sizeS = document.getElementById("sizeS").value;
//         const sizeM = document.getElementById("sizeM").value;
//         const sizeL = document.getElementById("sizeL").value;
//         const sizeXL = document.getElementById("sizeXL").value;
//         const sizeXXL = document.getElementById("sizeXXL").value;
//         const sizeSuperXL = document.getElementById("sizeSuperXL").value;
//         const quantity = document.getElementById("quantity").value;

//         const productData = {
//             "ProductID": id,
//             "ProductName": name,
//             "Collection": collection,
//             "Meterial": material,
//             "Price": price,
//             "ProductDescription": description,
//             "size_S": sizeS,
//             "size_M": sizeM,
//             "size_L": sizeL,
//             "size_XL": sizeXL,
//             "size_XXL": sizeXXL,
//             "size_superXL": sizeSuperXL,
//             "Quantity": quantity,
//             "Color": color,
//             "Image": image
//         };
//         console.log(productData);

//         fetch("http://localhost:2021/insertProduct", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 productData: productData // Pass user data for update
//             })
//         })
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             }
//             throw new Error("Failed to update user information");
//         })
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             // Handle error (e.g., display error message)
//             console.error("Error updating user information:", error);
//         });
    
//     });
// });
window.onerror = function(message, source, lineno, colno, error) {
    console.error("Uncaught error:", message, "at", source, "line", lineno);
    // Perform any necessary actions, such as logging or displaying an error message to the user
};
function insertproduct() {
    const id = document.getElementById("ProductID").value;
        const name = document.getElementById("productName").value;
        const collection = document.getElementById("collectionName").value;
        const material = document.getElementById("mt").value;
        const image = document.getElementById("productImage").value;
        const price = document.getElementById("productPrice").value;
        const color = document.getElementById("productColor").value;
        const description = document.getElementById("ProductDescription").value;
        const sizeS = document.getElementById("sizeS").value;
        const sizeM = document.getElementById("sizeM").value;
        const sizeL = document.getElementById("sizeL").value;
        const sizeXL = document.getElementById("sizeXL").value;
        const sizeXXL = document.getElementById("sizeXXL").value;
        const sizeSuperXL = document.getElementById("sizeSuperXL").value;
        const quantity = document.getElementById("quantity").value;

        const productData = {
            "ProductID": id,
            "ProductName": name,
            "Collection": collection,
            "Meterial": material,
            "Price": price,
            "ProductDescription": description,
            "size_S": sizeS,
            "size_M": sizeM,
            "size_L": sizeL,
            "size_XL": sizeXL,
            "size_XXL": sizeXXL,
            "size_superXL": sizeSuperXL,
            "Quantity": quantity,
            "Color": color,
            "Image": image
        };
        console.log(productData);

        fetch("http://localhost:2021/insertProduct", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                productData: productData 
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Failed to update user information");
        })
        .then(data => {
            console.log(data);
            window.location.href='/List_product';
        })
        .catch(error => {

            console.error("Error updating user information:", error);
        });
}
