// main.js
// This file shows the products on products.html and categories.html
// and also handles the small contact form on contact.html

// opens and closes the mobile nav menu (hamburger button)
function toggleMenu() {
  var menu = document.getElementById("navMenu");
  menu.classList.toggle("show");
}

// build html cards for a list of books and put them inside a box
function showProducts(list, boxId) {
  var box = document.getElementById(boxId);
  if (box == null) {
    return;
  }

  var html = "";

  if (list.length == 0) {
    box.innerHTML = "<p>No books found in this category.</p>";
    return;
  }

  for (var i = 0; i < list.length; i++) {
    var p = list[i];
    html += "<div class='product-card'>";
    html += "<img src='" + p.img + "' alt='" + p.title + "'>";
    html += "<h3>" + p.title + "</h3>";
    html += "<p class='author'>by " + p.author + "</p>";
    html += "<p class='category-tag'>" + p.category + "</p>";
    html += "<p class='price'>₹" + p.price + "</p>";
    html += "<button onclick='addToCart(" + p.id + ")'>Add to Cart</button>";
    html += "</div>";
  }

  box.innerHTML = html;
}

// used on the products.html page, shows every book
function loadAllProducts() {
  showProducts(products, "productGrid");
}

// used on categories.html, filters books by category name
function filterCategory(catName) {
  if (catName == "All") {
    showProducts(products, "categoryGrid");
  } else {
    var filtered = [];
    for (var i = 0; i < products.length; i++) {
      if (products[i].category == catName) {
        filtered.push(products[i]);
      }
    }
    showProducts(filtered, "categoryGrid");
  }

  // highlight the active button
  var buttons = document.getElementsByClassName("cat-btn");
  for (var j = 0; j < buttons.length; j++) {
    buttons[j].classList.remove("active");
  }
  var clickedBtn = document.getElementById("catBtn" + catName);
  if (clickedBtn != null) {
    clickedBtn.classList.add("active");
  }
}

// used on home page to show only a few featured books
function loadFeaturedProducts() {
  var featured = [];
  for (var i = 0; i < 4; i++) {
    featured.push(products[i]);
  }
  showProducts(featured, "featuredGrid");
}

// simple contact form handler, no backend, just shows a message
function submitContactForm(event) {
  event.preventDefault();

  var name = document.getElementById("contactName").value;
  var msgBox = document.getElementById("formMsg");

  if (name == "") {
    msgBox.innerHTML = "Please enter your name.";
    msgBox.style.color = "red";
    return false;
  }

  msgBox.innerHTML = "Thank you " + name + "! Your message has been sent. We will get back to you soon.";
  msgBox.style.color = "green";

  document.getElementById("contactFormTag").reset();
  return false;
}
