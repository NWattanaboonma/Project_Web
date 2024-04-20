function Registerform() {
    const fname = document.getElementById("Fame").value; // Corrected ID for Firstname input
    const lname = document.getElementById("Lame").value; // Corrected ID for Lastname input
    const email = document.getElementById("email").value;
    const password = document.getElementById("PW").value;
    const birthdate = document.getElementById("bd").value; // Corrected casing for birthdate
    const phone = document.getElementById("Pnumber").value;
    const age = document.getElementById("age").value;
    console.log(fname+lname+email+password)
    const userdata = {
      "UserEmail": `${email}`,
      "FName": fname,
      "LName": lname, // Corrected casing for Lastname property
      "UserPassword": password,
      "Birthdate": birthdate,
      "Phone": phone,
      "Age": age
    };
    console.log(userdata)
    // fetch('http://localhost:3030/form-submit', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ userData: userdata }) // Send userdata object directly
    // })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Failed to register user');
    //     }
    //     return response.json();
    //   })
    //   .then(data => {
    //     console.log(data); // Handle successful response from the backend
    //     // Update the UI or take further action if needed (e.g., clear form, show success message)
    //   })
    //   .catch(error => {
    //     console.error('Error registering user:', error); // Handle error (e.g., display error message to user)
    //   });
  }
  

