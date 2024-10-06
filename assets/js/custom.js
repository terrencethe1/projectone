function addToCart(productId, qty) 
{

    // Retrieve the cart from localStorage or initialize a new one
    const cart = localStorage.getItem('cart') ? localStorage.getItem('cart').split(',') : [];
    
    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(item => item.startsWith(productId));
    
    if (existingProductIndex !== -1) {
        // Update quantity if already exists
        const existingProduct = cart[existingProductIndex].split(':');
        const existingQty = parseInt(existingProduct[1]) || 0;
        cart[existingProductIndex] = `${productId}:${existingQty + qty}`; // Update the product
    } else {
        // Add new product
        cart.push(`${productId}:${qty}`);
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', cart.join(','));
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
