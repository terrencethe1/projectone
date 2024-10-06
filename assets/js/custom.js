//declare array to store premade cart data
let customcandlesDataArray =[];

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

function storeLocalStorage(customcandlesObject) {
    customcandlesDataArray.push({
         baseScent: customcandlesObject.baseScent,
         cost: customcandlesObject.cost,
         quantity:customcandlesObject.quantity,
         choice1:customcandlesObject.choice1,
         choice2:customcandlesObject.choice2,
         choice3:customcandlesObject.choice3
         }
     );
     //Store in Local Storage
     localStorage.setItem('custom',JSON.stringify(customcandlesDataArray));
     return;
   }

// Function to handle add to cart
function handleAddToCart(event) {
    let choice1='';
    let choice2='';
    let choice3='';

    const productSection = event.target.closest('.product');
    const productId = productSection.querySelector('h2').innerText; // Get product name
    const qty = parseInt(productSection.querySelector('input[type="text"]').value) || 1; // Get quantity
   
    const productprice = productSection.querySelector('label').innerText;
     
    if (document.getElementById("vanilla-lavender").checked){
        choice1 = document.getElementById("vanilla-lavender").value;
    }
    
    if (document.getElementById("vanilla-cinnamon").checked){
        choice2 = document.getElementById("vanilla-cinnamon").value;
    }

    if (document.getElementById("vanilla-caramel").checked){
        choice3 = document.getElementById("vanilla-caramel").value;
    }
 
            
    if (qty < 1) {
        alert('Please select a quantity greater than zero.');
        return;
    }

    const customcandlesObject = {
        baseScent: productId,
        cost: Number(productprice.slice(1)),
        quantity: Number(qty),
        choice1:choice1,
        choice2:choice2,
        choice3:choice3
    };
    
    //addToCart(productId, qty);
    //Call function to add the blog object data into array in Local Storage
    storeLocalStorage(customcandlesObject);
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handleAddToCart);
});
