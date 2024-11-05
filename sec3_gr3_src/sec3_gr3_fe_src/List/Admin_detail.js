// function auto running add see the content
document.addEventListener("DOMContentLoaded", function() {
    // get the inform from cloud
    const admin_id = localStorage.getItem("admin_id")
    // console.log({ id: email})
       
    fetch('http://localhost:2021/admin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: admin_id})
    })
    .then(result => result.json())
    .then(data => {
        console.log(data); 
        const infro = data.data;
        // set the value to show detail
        document.getElementById("adID").value=infro.AdminID
        document.getElementById("username").value=infro.UserName
        document.getElementById("roles").value=infro.Roles
        document.getElementById("email").value=infro.AdEmail
        document.getElementById("password").value=infro.AdminPassword
    })
    .catch(error => {
        console.error('Error fetching data:', error); 
    });
});

 function updateadmin() {
        // Get user information from input fields
        const admin_id = localStorage.getItem("admin_id")
        const username = document.getElementById("username").value;
        const roles = document.getElementById("roles").value;
        const emails = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
     const adminData = {
        "Username":username,
        "Roles": roles,
        "AdEmail": emails,
        "AdminPassword": password
    };
    
    console.log(adminData)

    fetch("http://localhost:2021/updateAdmin", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: admin_id ,
            userData: adminData 
        })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("Failed to update admin information");
    })
    .then(data => {
        // when the process done set to the list page to see the detail that add
        window.location.href='/List_Admin'; 
    })
    .catch(error => {
        console.error("Error updating admin information:", error);
    });
 };


function deleteadmin() {
    // Get user information from input fields
    const admin_id = localStorage.getItem("admin_id")

    fetch('http://localhost:2021/deleteAdmin', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: admin_id })
    })
    .then(result => result.json())
    .then(data => {
        // delete Admin kick  he or she out add go to list that their kicked or not
        window.location.href='/List_Admin'; 
    })
    .catch(error => {
        console.error('Error fetching data:', error); 
    });
}




