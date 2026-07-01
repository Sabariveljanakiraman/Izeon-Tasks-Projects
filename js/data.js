// data.js
// This file has all the book product details.
// I kept it in one place so every page can use the same list.

var products = [
  {
    id: 1,
    title: "The Great Escape",
    author: "R. Kumar",
    price: 250,
    category: "Fiction",
    img: "https://picsum.photos/seed/book1/300/400"
  },
  {
    id: 2,
    title: "Silent Storm",
    author: "A. Priya",
    price: 300,
    category: "Fiction",
    img: "https://picsum.photos/seed/book2/300/400"
  },
  {
    id: 3,
    title: "Cooking Mastery",
    author: "Chef Ravi",
    price: 400,
    category: "Non-Fiction",
    img: "https://picsum.photos/seed/book3/300/400"
  },
  {
    id: 4,
    title: "Mind Power",
    author: "Dr. S. Menon",
    price: 280,
    category: "Self-Help",
    img: "https://picsum.photos/seed/book4/300/400"
  },
  {
    id: 5,
    title: "Funny Bunny",
    author: "Kavya M",
    price: 150,
    category: "Kids",
    img: "https://picsum.photos/seed/book5/300/400"
  },
  {
    id: 6,
    title: "Space Heroes",
    author: "J. Anand",
    price: 200,
    category: "Comics",
    img: "https://picsum.photos/seed/book6/300/400"
  },
  {
    id: 7,
    title: "History Untold",
    author: "P. Raman",
    price: 350,
    category: "Non-Fiction",
    img: "https://picsum.photos/seed/book7/300/400"
  },
  {
    id: 8,
    title: "Little Star",
    author: "Divya S",
    price: 180,
    category: "Kids",
    img: "https://picsum.photos/seed/book8/300/400"
  },
  {
    id: 9,
    title: "Super Squad",
    author: "K. Vignesh",
    price: 220,
    category: "Comics",
    img: "https://picsum.photos/seed/book9/300/400"
  },
  {
    id: 10,
    title: "Grow Rich",
    author: "N. Iyer",
    price: 320,
    category: "Self-Help",
    img: "https://picsum.photos/seed/book10/300/400"
  }
];

// small helper function to find one product by its id
function getProductById(id) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      return products[i];
    }
  }
  return null;
}
