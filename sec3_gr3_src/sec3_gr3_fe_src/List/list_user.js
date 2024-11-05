function using(){
  fetch('http://localhost:2021/List_User', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
})
.then(result => result.json())
.then(data => {
    console.log(data); 
    const infro = data.data;
    console.log(infro);
    for (var i=0;i<infro.length;i++){
      const List=infro[i]
      const firstname=List.FName
      const lastname=List.LName
      const email=List.UserEmail
      const Call = List.Phone
      const Age= List.Age
      // amzing thing that it have the problem that the function in here can get the information directly need to be in string * important "",'' is not same
      const ID = String("'"+email+"'")
      document.getElementById("list").innerHTML+=`
      <div class='box'>
      <div id="number">${i+1}</div>
      <div id="User_Data">
        <p>${firstname} ${lastname} (Contact: <span class="color_it">${Call}</span>) Age:${Age} email: <a href = "mailto: ${email}" >${email}</a></p>
      </div>
      <button id="Detail" onclick="updateuser(${ID})">Detail</button>
      </div>
    `;
    }
})
.catch(error => {
    console.error('Error fetching data:', error); 
});

}         
// go to the detail of the user
function updateuser(infro){
    console.log(infro)
    // sent data to cloud for the user_list take it
    localStorage.setItem("User_id",infro);
    window.location.href="/user_list";
}    