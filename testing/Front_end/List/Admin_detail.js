document.addEventListener("DOMContentLoaded", function() {
    const email = localStorage.getItem("admin_id")
    console.log(email)
    console.log({ id: email})
    
    fetch('http://localhost:2021/admin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: email})
    })
    .then(result => result.json())
    .then(data => {
        console.log(data); 
        const infro = data.data;

        document.getElementById("adID").value=infro.AdminID
        document.getElementById("username").value=infro.Username
        document.getElementById("roles").value=infro.Roles
        document.getElementById("email").value=infro.AdEmail
        document.getElementById("password").value=infro.AdminPassword
    })
    .catch(error => {
        console.error('Error fetching data:', error); 
    });
});



