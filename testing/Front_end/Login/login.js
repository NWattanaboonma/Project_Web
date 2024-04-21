document.addEventListener("DOMContentLoaded", function() {
  const username = "johnwick@gmail.com"; 
    const password = "password23"; 

    // const userlogin_data = {
    //         "userName": username,
    //         "UserPassword": password,
    //       };
          console.log({email: username, password: password})

  fetch('http://localhost:2021/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: username, password: password})
  })
  .then(response => {
        if (!response.ok) {
          throw new Error('Failed to Login user. Status: ' + response.status);
        }
        return response.json();
        })
        .then(data => {
            console.log(data); 
          })
        .catch(error => {
          console.error('Error Login user:', error); 
        });
 });
// function loginForm() {
//     const username = document.getElementById("Name").value; 
//     const password = document.getElementById("PW").value; 
//     console.log(username)
    
//     const userlogin_data = {
//       "userName": username,
//       "UserPassword": password,
//     };
  
    // fetch('http://localhost:2021/login/:email', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ userData: userlogin_data })
    // })
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error('Failed to register user. Status: ' + response.status);
    //   }
    //   return response.json();
    // })
    // .then(data => {
    //   console.log("try")
    //   console.log(data); 
    // })
    // .catch(error => {
    //   console.error('Error registering user:', error); 
    // });
  // }