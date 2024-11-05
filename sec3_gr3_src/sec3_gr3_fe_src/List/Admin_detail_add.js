function insertadmin() {
    // Get user information from input fields
    const admin_id = document.getElementById("adID").value;
    const username = document.getElementById("username").value;
    const roles = document.getElementById("roles").value;
    const emails = document.getElementById("email").value;
    const password = document.getElementById("password").value;
//   set the data easy in put  *impor that Name "AdminID" must be same database or if it not work you can run out in console to see what are there format
    const adminData = {
        "AdminID": admin_id,
        "UserName" : username,
        "Roles": roles,
        "AdEmail": emails,
        "AdminPassword": password
    };
// for checking the format of the data
// console.log(adminData)

fetch("http://localhost:2021/insertAdmin", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ 
        admin: adminData // Pass user data for update to the body
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
    console.error("Error insert admin information:", error);
});
};
