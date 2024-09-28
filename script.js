let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');

    // Clear the current list
    cartItems.innerHTML = '';

    // Display each item in the cart
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Update cart total and count
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}