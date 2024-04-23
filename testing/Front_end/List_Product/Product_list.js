document.addEventListener("DOMContentLoaded", function() {
//     // const id = localStorage.getItem("edit")
//     // const productdata = localStorage.getItem("add")
//     // const id = product.ProductID;
//     // const name = product.ProductName;
//     // const collection = product.Collection;
//     // const material = product.Meterial;
//     // const image = product.Image;
//     // const price = product.Price;
//     // const color = product.Color;
//     // const description = product.ProductDescription;
//     // const sizeS = product.size_S;
//     // const sizeM = product.size_M;
//     // const sizeL = product.size_L;
//     // const sizeXL = product.size_XL;
//     // const sizeXXL = product.size_XXL;
//     // const sizeSuperXL = product.size_superXL;
//     // const quantity = product.Quantity;
//     // const data = String("'" + ID + "'");

    const productData = {
        "ProductID": "PID100",
        "ProductName": "a",
        "Collection":  "a",
        "Meterial":  "a",
        "Price":  790,
        "ProductDescription":  "a",
        "size_S":  1,
        "size_M":  1,
        "size_L": 1,
        "size_XL":  1,
        "size_XXL":  1,
        "size_superXL":  1,
        "Price":  "a",
        "Quantity":  1,
        "Color":  "a",
        "Image" :  "a"
    };
    console.log(productData);
    fetch("http://localhost:2021/insertProduct", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
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
            // Handle successful update (e.g., display success message)
            // console.log("User information updated successfully:", data);
            // window.location.href = '/List_product';
        })
        .catch(error => {
            // Handle error (e.g., display error message)
            console.error("Error updating user information:", error);
        });

});
// function insertproduct() {
//     // Get user information from input fields
//     // const productdata = localStorage.getItem("add")
//     const id =document.getElementById("ProductID").value;
//     const name =document.getElementById("ProductName").value;
//     const collection = document.getElementById("Collection").value;
//     const material = document.getElementById("Meterial").value;
//     const image = document.getElementById("Image").value;
//     const price = document.getElementById("Price").value;
//     const color = document.getElementById("Color").value;
//     const description = prdocument.getElementById("ProductDescription").value;
//     const sizeS = document.getElementById("size_S").value;
//     const sizeM = document.getElementById("size_M").value;
//     const sizeL = document.getElementById("size_L").value;
//     const sizeXL = document.getElementById("size_XL").value;
//     const sizeXXL = document.getElementById("size_XXL").value;
//     const sizeSuperXL = document.getElementById("size_superXL").value;
//     const quantity = document.getElementById("Quantity").value;
//     // const data = String("'" + ID + "'");

//     const productData = {
//         "ProductID": id,
//         "ProductName": name,
//         "Collection": collection,
//         "Meterial": material,
//         "Price": price,
//         "ProductDescription": description,
//         "size_S": sizeS,
//         "size_M": sizeM,
//         "size_L": sizeL,
//         "size_XL": sizeXL,
//         "size_XXL": sizeXXL,
//         "size_superXL": sizeSuperXL,
//         "Price": quantity,
//         "Quantity": price,
//         "Color": color,
//         "Image" : image
//     };
//     console.log(productData);
//     fetch("http://localhost:2021/insertProduct", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             productData: productData // Pass user data for update
//         })
//     })
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             }
//             throw new Error("Failed to update user information");
//         })
//         .then(data => {
//             // Handle successful update (e.g., display success message)
//             // console.log("User information updated successfully:", data);
//             window.location.href = '/List_product';
//         })
//         .catch(error => {
//             // Handle error (e.g., display error message)
//             console.error("Error updating user information:", error);
//         });
// }
