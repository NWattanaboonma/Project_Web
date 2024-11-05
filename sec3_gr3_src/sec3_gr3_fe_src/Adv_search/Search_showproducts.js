// method that readying the data from dom
document.addEventListener("DOMContentLoaded", function() {
    const Data = localStorage.getItem("Search_Data");
    console.log(Data)
    // getting to the database
    fetch('http://localhost:2021/List_Product', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        })
        .then(result => result.json())
        .then(data => {
            const infro = data.data;
            var Check=true;
            console.log(infro);
            // process running to database
            for (var i=0;i<infro.length;i++){
                const List=infro[i]
                const Name = List.ProductName
                const Collection = List.Collection
                const Color= List.Color
                const img=List.Image
                const mt=List.Meterial
                const price=List.Price
                const id = List.ProductID
                const d = String("'"+id+"'")
                localStorage.setItem(`${id}`,id);
                // showing only the product that search for
                if(Data===Name){
                    Check=false;
                    document.getElementById("store").innerHTML+=`
                    <div class="textbox" onclick="gotodetail(${d})">
                    <img src=${img} class="imgproducts">
                    <div class="detail">
                        <h3><b>${Name}<br>${mt}</b></h3>
                        <h3>${Color}</h3>
                        <h3>${price} Baht</h3>
                    </div>
                    </div>`;
                }else if(Data===Collection){
                    Check=false;
                    document.getElementById("store").innerHTML+=`
                    <div class="textbox" onclick="gotodetail(${d})">
                    <img src=${img} class="imgproducts">
                    <div class="detail">
                        <h3><b>${Name}<br>${mt}</b></h3>
                        <h3>${Color}</h3>
                        <h3>${price} Baht</h3>
                    </div>
                    </div>`;
                }else if(Data===Color){
                    Check=false;
                    document.getElementById("store").innerHTML+=`
                    <div class="textbox" onclick="gotodetail(${d})">
                    <img src=${img} class="imgproducts">
                    <div class="detail">
                        <h3><b>${Name}<br>${mt}</b></h3>
                        <h3>${Color}</h3>
                        <h3>${price} Baht</h3>
                    </div>
                    </div>`;
                }else if(Data===id){
                    Check=false;
                    document.getElementById("store").innerHTML+=`
                    <div class="textbox" onclick="gotodetail(${d})">
                    <img src=${img} class="imgproducts">
                    <div class="detail">
                        <h3><b>${Name}<br>${mt}</b></h3>
                        <h3>${Color}</h3>
                        <h3>${price} Baht</h3>
                    </div>
                    </div>`;
                }
            }
            // if not the search you find it show all the product
            if(Check){
                console.log("in")
                for (var i=0;i<infro.length;i++){
                    const List=infro[i]
                    const Name = List.ProductName
                    const Collection = List.Collection
                    const Color= List.Color
                    const img=List.Image
                    const mt=List.Meterial
                    const price=List.Price
                    const id = List.ProductID
                    const d = String("'"+id+"'")
                    localStorage.setItem(`${id}`,id);
                    document.getElementById("store").innerHTML+=`
                    <div class="textbox" onclick="gotodetail(${d})">
                    <img src=${img} class="imgproducts">
                    <div class="detail">
                        <h3><b>${Name}<br>${mt}</b></h3>
                        <h3>${Color}</h3>
                        <h3>${price} Baht</h3>
                    </div>
                    </div>`;
                };
            }
        })
    .catch(error => {
        console.error('Error fetching data:', error); 
    });
});

function gotodetail(d) {
    const data = {
        "ID": d
    }
    // setting the ID to the url for get the data from the Paramas /detail/:id like this
    const queryString = new URLSearchParams(data).toString();
    const url = "/product.html?"+ queryString;;
    window.location.href = url
}
