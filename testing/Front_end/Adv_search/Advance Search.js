document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.AdvanceSearch form');
    const nameInput = document.getElementById('Name');
    const colorInput = document.getElementById('ID');
    const collectionInput = document.getElementById('Price');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = nameInput.value;
        const color = colorInput.value;
        const collection = collectionInput.value;
        
        const url = 'http://localhost:3000/adsearch';

        // Make a POST request to the server
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Name: name, ID: color, Price: collection })
        })
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(function (data) {
                // Display the search results
                console.log(data); // Example: Log the data to the console
                // You can display the results in the UI as needed
            })
            .catch(function (error) {
                console.error('There was a problem with the fetch operation:', error);
            });

    });
 
});
