// SAMPLE PRODUCT DATA
const products = [
  { id: 1, name: "Laptop", price: 45999 },
  { id: 2, name: "Smartphone", price: 24999 },
  { id: 3, name: "Headphones", price: 1999 },
  { id: 4, name: "Bluetooth Speaker", price: 899 }
];

let cart = [];
let wishlist = [];
let orders = [];

// NAVIGATION
function navigate(page) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(page).classList.add("active");
}

// RENDER PRODUCTS
const container = document.getElementById("productContainer");
products.forEach(p => {
  container.innerHTML += `
    <div class="product-card">
      <h3>${p.name}</h3>
      <p>Price: ₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
      <button onclick="addToWishlist(${p.id})">Wishlist</button>
    </div>
  `;
});

// CART + WISHLIST FUNCTIONS
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  document.getElementById("cartList").innerHTML += `<li>${product.name} - ₹${product.price}</li>`;
  alert("Added to Cart");
}

function addToWishlist(id) {
  const product = products.find(p => p.id === id);
  wishlist.push(product);
  document.getElementById("wishlistList").innerHTML += `<li>${product.name}</li>`;
  alert("Added to Wishlist");
}

// REGISTRATION
function registerUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (!name || !email || !pass) {
    document.getElementById("regMsg").innerHTML = "❌ Fill all details!";
    return;
  }

  localStorage.setItem("user", JSON.stringify({ name, email, pass }));
  document.getElementById("regMsg").innerHTML = "✅ Registration Successful!";
}

// LOGIN VALIDATION
function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPassword").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.pass === pass) {
    document.getElementById("loginMsg").innerHTML = "✅ Login Successful!";
  } else {
    document.getElementById("loginMsg").innerHTML = "❌ Invalid Credentials!";
  }
}
