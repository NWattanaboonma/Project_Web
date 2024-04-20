document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector(".AdvanceSearch button");
    function handleSearch() {
        const name = document.getElementById("Name").value;
        const id = document.getElementById("Color").value;
        const price = document.getElementById("Collection").value;

        console.log("Name:", name);
        console.log("Color:", id);
        console.log("Collection:", price);

    }
    searchButton.addEventListener("click", handleSearch());
});
