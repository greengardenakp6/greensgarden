function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        let productName = product.querySelector("h3").innerText.toLowerCase();
        if (productName.includes(input)) {
            product.style.display = "flex";  // Fix: Use "flex" for flexbox layout
        } else {
            product.style.display = "none";
        }
    });
}