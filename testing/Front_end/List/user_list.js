// /User
document.addEventListener("DOMContentLoaded", function() {
    const email = localStorage.getItem("User_id")
    
    console.log({ id: email})
    

    fetch('http://localhost:2021/User', {
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

        console.log(infro.Phone)
        document.getElementById("newFirstName").value=infro.Fname
        document.getElementById("newLastName").value=infro.Lname
        document.getElementById("newEmail").value=infro.UserEmail
        document.getElementById("newAge").value=infro.Age
        document.getElementById("newPhoneNumber").value=infro.Phone
    })
    .catch(error => {
        console.error('Error fetching data:', error); 
    });

});




