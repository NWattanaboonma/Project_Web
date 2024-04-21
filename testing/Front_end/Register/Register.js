// For slow the process to see the console.log that our function is working
// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("Sign_in").addEventListener("click", registerForm);
// });

function logincheck() {
  const fname = document.getElementById("Fame").value; 
  const lname = document.getElementById("Lame").value; 
  const email = document.getElementById("email").value;
  const password = document.getElementById("PW").value;
  const birthdate = document.getElementById("bd").value; 
  const phone = document.getElementById("Pnumber").value;
  const age = document.getElementById("age").value;
  
  const userdata = {
    "UserEmail": email,
    "FName": fname,
    "LName": lname,
    "UserPassword": password,
    "Birthdate": birthdate,
    "Phone": phone,
    "Age": age
  };

  fetch('http://localhost:2021/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userData: userdata })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to register user. Status: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log("try")
    console.log(data); 
  })
  .catch(error => {
    console.error('Error registering user:', error); 
  });
  
}
