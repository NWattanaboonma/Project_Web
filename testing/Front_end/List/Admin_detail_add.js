// document.addEventListener("DOMContentLoaded", function() {
//     const admin_id = localStorage.getItem("admin_id")
//     // console.log({ id: email})
       
//     fetch('http://localhost:2021/admin', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ id: admin_id})
//     })
//     .then(result => result.json())
//     .then(data => {
//         console.log(data); 
//         const infro = data.data;
//         document.getElementById("adID").value=infro.AdminID
//         document.getElementById("username").value=infro.UserName
//         document.getElementById("roles").value=infro.Roles
//         document.getElementById("email").value=infro.AdEmail
//         document.getElementById("password").value=infro.AdminPassword
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error); 
//     });
// });

function insertadmin() {
    // Get user information from input fields
    const admin_id = document.getElementById("adID").value;
    const username = document.getElementById("username").value;
    const roles = document.getElementById("roles").value;
    const emails = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const adminData = {
        "AdminID": admin_id,
        "UserName" : username,
        "Roles": roles,
        "AdEmail": emails,
        "AdminPassword": password
    };

console.log(adminData)

fetch("http://localhost:2021/insertAdmin", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ 
        admin: adminData // Pass user data for update
    })
})
.then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error("Failed to insert admin information");
})
.then(data => {
    console.log(data)
    window.location.href='/List_Admin'; 
})
.catch(error => {
    // Handle error (e.g., display error message)
    console.error("Error insert admin information:", error);
});
};
// });