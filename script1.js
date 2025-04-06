let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    let item = cart.find(p => p.name === name);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

function checkout() {
    localStorage.setItem("orders", JSON.stringify(cart));
    localStorage.removeItem("cart");
    alert("Order placed successfully!");
    window.location.href = "order-history.html";
}

function processPayment() {
    alert("Payment Successful!");
    window.location.href = "order-history.html";
}