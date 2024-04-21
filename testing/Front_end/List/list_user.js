/* <div class="box">
                <div id="number">1</div>
                <div id="User_data">
                    <p>Manow is name email humasdasjkdnkajsds ojasndoidas asosidjoias sfla;ksdmfkdmslfmd;klmasdfdsf
                        adsfasdas
                        adsfasdas
                        adsfasdasd
                        fasd
                        <fieldset>sdf
                            asd
                            
                            <aside><datagrid>fieldset
                                sdfs
                                <datagrid><a href=""></a></datagrid>
                            </datagrid></aside>
                        </fieldset>
                        
                    </p>
                </div>
                <button id="Detail"onclick="updateuser()"></a>
                    Detail
                    
                </button> */
                

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
    //   const Bt= List.Birthdate
      document.getElementById("list").innerHTML+=`
      <div class='box'>
      <div id="number">${i+1}</div>
      <div id="User_Data">
        <p>${firstname} ${lastname} (Contact: <span class="color_it">${Call}</span>) Age:${Age} email: <a href = "mailto: ${email}" >${email}</a></p>
      </div>
      <button id="Detail" onclick="updateuser()">Detail</button>
      </div>
    `;
    }
})
.catch(error => {
    console.error('Error fetching data:', error); 
});

}         
function updateuser(){
    window.location.href="/user_list";
}    