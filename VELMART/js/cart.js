// cart.js
// All the cart related functions are here.
// I am using localStorage so the cart items stay saved
// even when the user moves to another page.

// get the cart array from localStorage
function getCart() {
  var cartData = localStorage.getItem("velmartCart");
  if (cartData == null) {
    return [];
  } else {
    return JSON.parse(cartData);
  }
}

// save the cart array back to localStorage
function saveCart(cart) {
  localStorage.setItem("velmartCart", JSON.stringify(cart));
}

// add a product to the cart using its id
function addToCart(id) {
  var cart = getCart();
  var product = getProductById(id);
  var alreadyInCart = false;

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      cart[i].qty = cart[i].qty + 1;
      alreadyInCart = true;
      break;
    }
  }

  if (alreadyInCart == false) {
    var newItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      qty: 1
    };
    cart.push(newItem);
  }

  saveCart(cart);
  updateCartCount();
  alert(product.title + " added to cart!");
}

// remove a product completely from the cart
function removeFromCart(id) {
  var cart = getCart();
  var newCart = [];

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id != id) {
      newCart.push(cart[i]);
    }
  }

  saveCart(newCart);
  displayCart();
  updateCartCount();
}

// increase quantity of one item
function increaseQty(id) {
  var cart = getCart();
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      cart[i].qty = cart[i].qty + 1;
    }
  }
  saveCart(cart);
  displayCart();
  updateCartCount();
}

// decrease quantity of one item (remove if it goes to 0)
function decreaseQty(id) {
  var cart = getCart();
  var newCart = [];

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      cart[i].qty = cart[i].qty - 1;
    }
    if (cart[i].qty > 0) {
      newCart.push(cart[i]);
    }
  }

  saveCart(newCart);
  displayCart();
  updateCartCount();
}

// update the little number badge on the cart icon in the navbar
function updateCartCount() {
  var cart = getCart();
  var total = 0;

  for (var i = 0; i < cart.length; i++) {
    total = total + cart[i].qty;
  }

  var countBox = document.getElementById("cartCount");
  if (countBox != null) {
    countBox.innerHTML = total;
  }
}

// build the cart table on cart.html
function displayCart() {
  var cartBox = document.getElementById("cartItems");
  if (cartBox == null) {
    return; // not on the cart page, so stop here
  }

  var cart = getCart();
  var html = "";
  var grandTotal = 0;

  if (cart.length == 0) {
    html = "<p class='empty-cart-msg'>Your cart is empty. Go and add some books! 📚</p>";
    document.getElementById("cartTotal").innerHTML = "0";
    cartBox.innerHTML = html;
    return;
  }

  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var itemTotal = item.price * item.qty;
    grandTotal = grandTotal + itemTotal;

    html += "<div class='cart-row'>";
    html += "<img src='" + item.img + "' alt='" + item.title + "'>";
    html += "<div class='cart-row-info'>";
    html += "<h4>" + item.title + "</h4>";
    html += "<p>Price: ₹" + item.price + "</p>";
    html += "<div class='qty-controls'>";
    html += "<button onclick='decreaseQty(" + item.id + ")'>-</button>";
    html += "<span>" + item.qty + "</span>";
    html += "<button onclick='increaseQty(" + item.id + ")'>+</button>";
    html += "</div>";
    html += "</div>";
    html += "<p class='cart-row-total'>₹" + itemTotal + "</p>";
    html += "<button class='remove-btn' onclick='removeFromCart(" + item.id + ")'>Remove</button>";
    html += "</div>";
  }

  cartBox.innerHTML = html;
  document.getElementById("cartTotal").innerHTML = grandTotal;
}

// runs when user clicks the Pay Now button
function payNow() {
  var cart = getCart();

  if (cart.length == 0) {
    alert("Your cart is empty. Please add some books before paying.");
    return;
  }

  // show the success popup
  document.getElementById("payModal").style.display = "flex";

  // empty the cart after "payment"
  localStorage.removeItem("velmartCart");
  updateCartCount();
  displayCart();
}

// close the popup
function closeModal() {
  document.getElementById("payModal").style.display = "none";
}

// this runs on every page load to keep the cart count badge correct
updateCartCount();
