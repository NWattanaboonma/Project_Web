const e = require("express");

function loginForm() {
  
    const username = document.getElementById("Name").value; 
    const password = document.getElementById("PW").value; 
    

  fetch('http://localhost:2021/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: username, password: password})
  })
  .then(response => {
      console.log(response)
        if (response.status==201) {
          alert("Incorrect email or password. Please try again.");
          throw new Error("Authentication failed.");
        }
        return response.json();
        })
        .then(data => {
            window.location.href="/"
          })
        .catch(error => {
          console.error('Error Login user:', error); 
        });
}