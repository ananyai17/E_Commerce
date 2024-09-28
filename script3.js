// Example cart data (this would usually come from local storage or backend)
let cart = [
    { id: 1, name: "Product 1", price: 29.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 49.99, quantity: 1 },
];

// Function to render cart items in the table
function displayCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach((item) => {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;

        const cartRow = document.createElement("tr");
        cartRow.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${item.id}, this.value)"></td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button onclick="removeFromCart(${item.id})">Remove</button></td>
        `;

        cartItemsContainer.appendChild(cartRow);
    });

    document.getElementById("total-items").innerText = totalItems;
    document.getElementById("total-price").innerText = totalPrice.toFixed(2);
    document.getElementById("cart-count").innerText = totalItems; // Update cart count in header
}

// Function to update item quantity in the cart
function updateQuantity(productId, newQuantity) {
    const product = cart.find((item) => item.id === productId);
    if (product) {
        product.quantity = parseInt(newQuantity);
        displayCart(); // Re-render the cart after updating
    }
}

// Function to remove item from cart
function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);
    displayCart(); // Re-render the cart after removing item
}

// Function to simulate checkout
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Proceeding to checkout...");
    // Implement further checkout logic here (like redirecting to a payment page)
}

// Initialize cart on page load
window.onload = function() {
    displayCart();
};