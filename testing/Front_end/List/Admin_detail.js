document.addEventListener("DOMContentLoaded", function() {
    const email = localStorage.getItem("User_id")
    
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

        document.getElementById("fname").value=infro.FName
        document.getElementById("lname").value=infro.LName
        document.getElementById("bt").value=infro.UserEmail
        document.getElementById("phone").value=infro.Age
        document.getElementById("email").value=infro.Phone
    })
    .catch(error => {
        console.error('Error fetching data:', error); 
    });
});


function updateuser() {
    // Get user information from input fields
    const email = localStorage.getItem("User_id")
    const firstName = document.getElementById("newFirstName").value;
    const lastName = document.getElementById("newLastName").value;
   
    const age = document.getElementById("age").value;
    const phone = document.getElementById("PhoneNumber").value;
 // const email = document.getElementById("newEmail").value;
    const userData = {
        "FName": firstName,
        "FName": lastName,
        "Age": age,
        "Phone": phone
    };

    fetch("http://localhost:2021/updateUser", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email, // Pass user email for identification
            userData: userData // Pass user data for update
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
        window.location.href='/List_User'; 
    })
    .catch(error => {
        // Handle error (e.g., display error message)
        console.error("Error updating user information:", error);
    });
}



function deleteuser() {
    // Get user information from input fields
    const email = localStorage.getItem("User_id")
    
    console.log({ id: email})

    fetch('http://localhost:2021/deleteUser', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: email})
    })
    .then(result => result.json())
    .then(data => {
        console.log(data)
        window.location.href='/List_User'; 
    })
    .catch(error => {
        console.error('Error fetching data:', error); 
    });
}
