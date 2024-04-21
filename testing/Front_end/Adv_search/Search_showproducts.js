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

                if(Data===Name){
                    Check=false;
                    // <div class="textbox1">
                    //     <img src="https://drive.google.com/thumbnail?id=1uZycBw4U-fPuwQcq5VmWrw5Qt3r0ohay" class="imgproducts">
                    //     <div class="detail">
                    //         <h3><b>Mr.Bloom<br>(graphic t-shirt)</b></h3>
                    //         <h3>Black</h3>
                    //         <h3>790 Baht</h3>
                    //         <button class="buy">Buy</button>
                    //     </div>
                    // </div>
                }else if(Data===Collection){
                    Check=false;
                    console.log("Collection")
                }else if(Data===Color){
                    Check=false;
                    console.log("Color")
                }
            }
            if(Check){
                console.log("in")
                for (var i=0;i<infro.length;i++){
                    // const List=infro[i]
                    // const Name = List.ProductName
                    // const Collection = List.Collection
                    // const Color= List.Color
                    console.log("working");
                };
            }
        })
    .catch(error => {
        console.error('Error fetching data:', error); 
    });
});

