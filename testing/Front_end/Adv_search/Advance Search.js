document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector(".AdvanceSearch button");
    function handleSearch() {
        const name = document.getElementById("Name").value;
        const id = document.getElementById("ID").value;
        const price = document.getElementById("Price").value;
        const material = document.getElementById("Material").value;

        console.log("Name:", name);
        console.log("ID:", id);
        console.log("Price:", price);
        console.log("Material:", material);

    }
    searchButton.addEventListener("click", handleSearch());
});
