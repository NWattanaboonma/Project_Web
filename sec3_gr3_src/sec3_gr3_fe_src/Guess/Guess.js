document.addEventListener("DOMContentLoaded", function() {
    const Api_key = "84969907b9624629a252dbdd1bc8e0e4";
    var name = "Pizza";
    // console.log(name.value);
    // The Api key for go in the website is apiKey
    let want = "https://api.spoonacular.com/recipes/complexSearch?apiKey="+Api_key+"&query="+name;
    
    fetch(want)
    .then((result) => result.json())
    .then((data)=> {
        console.log(data);
        for(var i=0;i<data.number;i++){
            document.querySelector("#Foodlists").innerHTML ="<li><b><p>" + data.results[i].title + "</p></b>";
            document.querySelector("#Foodlists").innerHTML ="<img src=\"" + data.results[i].image + "\"></li>";
        }
    })
    .catch((err) => console.log(err));
});