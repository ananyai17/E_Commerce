// Store the total price and cart items
let totalPrice = 0;
const cartItems = [];

// Select all "Add to Cart" buttons
const buttons = document.querySelectorAll('.add-to-cart');

// Loop through each button and add an event listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = parseInt(button.getAttribute('data-price'));

        // Add item to the cart
        cartItems.push({ product, price });

        // Update the total price
        totalPrice += price;

        // Update the cart UI
        updateCartUI();
    });
});

// Function to update the cart UI
function updateCartUI() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price}`;
        cartList.appendChild(li);
    });

    // Update total price in the UI
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `Total: $${totalPrice}`;
}