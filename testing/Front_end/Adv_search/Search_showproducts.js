// method that readying the data from dom
document.addEventListener("DOMContentLoaded", function() {
    const Data = localStorage.getItem("Search_Data");
    console.log(Data)
    
    fetch('http://localhost:2021/List_Product', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        })
        .then(result => result.json())
        .then(data => {
            // console.log(data); 
            const infro = data.data;
            var Check=true;
            console.log(infro);
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
                }
            }
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
    const queryString = new URLSearchParams(data).toString();
    const url = "/product.html?"+ queryString;;
    window.location.href = url
}

