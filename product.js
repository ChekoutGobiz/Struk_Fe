// product.js

// Array to store products in cart, retrieved from localStorage if available
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add a product to the cart
export function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(`${productName} berhasil ditambahkan ke keranjang!`);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}
