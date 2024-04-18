document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector(".AdvanceSearch button");

    // Function to handle search button click
    function handleSearch() {
        // Get values from input fields
        const name = document.getElementById("Name").value;
        const id = document.getElementById("ID").value;
        const price = document.getElementById("Price").value;
        const material = document.getElementById("Material").value;

        // Perform search based on input values
        // For now, let's just log the values to the console
        console.log("Name:", name);
        console.log("ID:", id);
        console.log("Price:", price);
        console.log("Material:", material);
    }

    // Attach click event listener to the search button
    searchButton.addEventListener("click", handleSearch);
});
