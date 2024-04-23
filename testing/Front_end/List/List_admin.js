function using(){
  // auto running all the list
  fetch('http://localhost:2021/List_Admin', {
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
      const email=List.AdEmail
      const ID = List.AdminID
      const roles= List.Roles
      const userName= List.UserName
      const data = String("'"+ID+"'");
      document.getElementById("list").innerHTML+=`
      <div class='box'>
      <div id="number">${i+1}</div>
      <div id="Admin_data">
        <p>${userName}(${ID}) Role:${roles} email: <a href = "mailto: ${email}" >${email}</a></p>
      </div>
      <button id="Detail" onclick="updateadmin(${data})">Detail</button>
      </div>
    `;
    }
})
.catch(error => {
    console.error('Error fetching data:', error); 
});

}
// go to the Admin detail for see the information and updata or kick admin
function updateadmin(data){
  console.log(data)
  localStorage.setItem("admin_id",data);
  window.location.href="/Admin_detail";
}


