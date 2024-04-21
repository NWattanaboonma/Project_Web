document.addEventListener("DOMContentLoaded", function() {
    const buyBtn = document.querySelector('.box_product_2');
    const size = document.getElementById('option');
    const quantityInput = document.querySelector('input[type="number"]');
    
    buyBtn.addEventListener('click', function() {
        const selectedSize = size.options[size.selectedIndex].text;
        const quantity = parseInt(quantityInput.value);
        
        if (quantity <= 0) {
            alert('Please enter a positive quantity.');
        } else {
            alert('You are buying ' + quantity + ' of size ' + selectedSize);
        }
    });
});
