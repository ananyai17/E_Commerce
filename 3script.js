// Sample products data
const products = [{
        id: 1,
        name: "Product 1",
        price: 29.99,
        image: "product3.jpg",
        description: "This is a great product."
    },
    {
        id: 2,
        name: "Product 2",
        price: 49.99,
        image: "product40.jpg",
        description: "This product is even better."
    },
    {
        id: 3,
        name: "Product 3",
        price: 19.99,
        image: "product12.jpg",
        description: "An amazing product for the price."
    }
];

// Cart array to store added products
let cart = [];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous products

    products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productList.appendChild(productCard);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find((item) => item.id === productId);

    // Check if the product is already in the cart
    const cartItem = cart.find((item) => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({...product, quantity: 1 });
    }

    updateCartCount();
    alert(`${product.name} has been added to the cart.`);
}

// Function to update the cart count
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').innerText = cartCount;
}

// Initialize products on page load
displayProducts();