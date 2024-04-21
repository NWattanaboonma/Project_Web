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
            // console.log(infro);
            for (var i=0;i<infro.length;i++){
                const List=infro[i]
                const Name = List.ProductName
                const Collection = List.Collection
                const Color= List.Color

                if(Data===Name){
                    Check=false;
                    console.log("Name")
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

