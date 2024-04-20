function
fetch('http://localhost:2021/List_Admin', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },})
  .then(result => result.json())
  .then(data => {
    console.log(data)
    const box = document.getElementById('box');
    box.innerHTML="" //clear
    for(var i=0;i<data.length;i++){
    const adminData = response.data[0];
    const adminId = adminData.AdminID;
    const userName = adminData.UserName;
    const roles = adminData.Roles;
    const li = document.createElement('li');
    li.innerHTML = `
      <div id="number">${i}</div>
      <div id="Admin_data">
        <p>${userName}(${adminId}) Role:${roles}</p>
      </div>
      <button id="Detail" onclick="updateadd()">Detail</button>
    `;
    box.appendChild(li);
    }
    
  })
  .catch(error => {
    console.error('Error registering user:', error); 
  });