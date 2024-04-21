//Admin
document.addEventListener("DOMContentLoaded", function(){
  const ID = localStorage.getItem("Admin_id")
  console.log({ id: id})

  fetch('http://localhost:2021/List_Admin', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: id})
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


    // console.log(infro);
    // for (var i=0;i<infro.length;i++){
    //   const List=infro[i]
    //   const email=List.AdEmail
    //   const ID = List.AdminID
    //   const roles= List.Roles
    //   const userName= List.UserName
    //   document.getElementById("list").innerHTML+=`
    //   <div class='box'>
    //   <div id="number">${i+1}</div>
    //   <div id="Admin_data">
    //     <p>${userName}(${ID}) Role:${roles} email: <a href = "mailto: ${email}" >${email}</a></p>
    //   </div>
    //   <button id="Detail" onclick="updateadd()">Detail</button>
    //   </div>
    // `;
    // }
})
.catch(error => {
    console.error('Error fetching data:', error); 
});

