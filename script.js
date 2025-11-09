function scrollToCollection() {
  document.getElementById("collection").scrollIntoView({ behavior: "smooth" });
}

let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartItems.innerHTML = "";

  cart.forEach(c => {
    const li = document.createElement("li");
    li.textContent = `${c.item} - $${c.price}`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = `Total: $${total}`;
  document.getElementById("cart-popup").style.display = "flex";
}

function closeCart() {
  document.getElementById("cart-popup").style.display = "none";
}

function submitForm(event) {
  event.preventDefault();
  alert("Thank you for contacting Zaifa’s Jewelry! We’ll get back to you soon.");
  event.target.reset();
}

let currentSlide = 0;
function moveSlide(direction) {
  const track = document.querySelector(".carousel-track");
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;

  currentSlide = (currentSlide + direction + totalItems) % totalItems;
  track.scrollTo({
    left: items[currentSlide].offsetLeft,
    behavior: "smooth"
  });
}