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

        document.getElementById("newFirstName").value=infro.FName
        document.getElementById("newLastName").value=infro.LName
        document.getElementById("newEmail").value=infro.UserEmail
        document.getElementById("age").value=infro.Age
        document.getElementById("PhoneNumber").value=infro.Phone
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

    const userData = {
        "FName": firstName,
        "LName": lastName,
        "Age": age,
        "Phone": phone
    };
    
    fetch("http://localhost:2021/updateUser", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email,userData: userData})
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("Failed to update user information");
    })
    .then(data => {
        // Handle successful update (e.g., display success message)
        console.log("User information updated successfully:", data);
    })
    .catch(error => {
        // Handle error (e.g., display error message)
        console.error("Error updating user information:", error);
    });
    
}

