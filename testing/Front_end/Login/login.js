function loginForm() {
  
    const username = document.getElementById("Name").value; 
    const password = document.getElementById("PW").value; 
    
    // check both the user and the password is correct
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
          // if some of the them are wrong return this from the status that our of the length
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