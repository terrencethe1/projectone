// storage.js

// Function to add product to cart
function addToCart(productId, qty) {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};

    if (cart[productId]) {
        cart[productId].qty += qty; // Increase quantity if already exists
    } else {
        cart[productId] = { qty: qty }; // Add new product
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${qty} of ${productId} added to cart!`);
}

// Function to handle add to cart
function handleAddToCart(event) {
    const productSection = event.target.closest('.product');
    const productId = productSection.querySelector('h2').innerText; // Get product name
    const qty = parseInt(productSection.querySelector('input[type="text"]').value) || 1; // Get quantity

    if (qty < 1) {
        alert('Please select a quantity greater than zero.');
        return;
    }

    addToCart(productId, qty);
}

// Add event listeners to all "Add to Cart" buttons 
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handleAddToCart);
});
