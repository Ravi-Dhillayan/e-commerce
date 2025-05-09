const products = [
  {
    name: "Xiaomi Redmi Note 9 Pro 5G",
    price: 11000,
    image: "gallery/phone1.jpg",
    description: "A powerful smartphone with 5G connectivity and a 48MP camera.",
    category: "Mobiles",
    rating: 4.5
  },
  {
    name: "Oppo F21 Pro 4G",
    price: 21000,
    image: "gallery/phone_2.jpg",
    description: "Stylish design with a 64MP camera and AMOLED display.",
    category: "Mobiles",
    rating: 4.2
  },
  {
    name : "Poco F5 5G",
    price: 15000,
    image: "gallery/phone_3.jpg",
    description: "High performace Poco smartphone with 5G suppoet.",
    category: "Moblies",
    rating: 4.6
  },
  {
    name : "Samsung Galaxy M01s",
    price: 23999,
    image: "gallery/phone_4.jpg",
    description: "Affardable smartphone with a large display and decent camera.",
    category: "Mobiles",
    rating: 4.0
  },
  {
    name: "iPhone 13 Pro",
    price: 79000,
    image: "gallery/phone5.jpeg",
    description: "Premium smartphone with A15 Bionice chip and 5G support.",
    categorty: "moblies",
    rating: 4.9
  },
  {
    name : "Vivo X70 Pro",
    Price: 42000,
    image: "gallery/phone6.jpeg",
    description: "Flagship smarthphone with Zeiss optics and gimbal stabilization.",
    categorty: "Mobiles",
    rating: 4.7
  },
  {
    name: "Realme 9i",
    Price: 17000,
    image: "gallery/phone7.webp",
    description: "Affordable smartphone with a 90Hz display and 50Mp camera.",
    category: "Mobiles",
    rating: 4.3
  },
  {
    name : "OnePlus Nord CE 3",
    Price: 32000,
    image: "gallery/phone8.jpeg",
    description: "Mid-range smartPhone with a 120Hz display and fast charging.",
    category: "Mobiles",
    rating: 4.4
  },
  {
    name : "Samsung Galaxy s22 Ultra",
    price: 105000,
    image: "gallery/phone9.jpeg",
    description: "Premium smartphone with a 108Mp camera and S Pen",
    categorty: "Mobiles",
    rating: 4.8
  },
  {
    name : "Google Pixel 7",
    price: 68000,
    image: "gallery/phone10.jpeg",
    description: "Flagship smartphone with stock Android and excellent ",
    categorty: "Mobiles",
    rating: 4.6
  },
  {
    name: "Classic Black T-Shirt",
    price: 499,
    image: "gallery/tshirt1.jpEg",
    description: "Comfortable and stylish black t-shirt for everyday wear.",
    category: "Fashion",
    rating: 4.0
  },
  {
    name: "Nike Running Shoes",
    price: 3999,
    image: "gallery/shoe1.jpg",
    description: "Durable and lightweight running shoes for all terrains.",
    category: "Shoes",
    rating: 4.8
  },
  {
    name: "Adidas Sports Shoes",
    price: 4499,
    image: "gallery/shoe2.jpg",
    description: " Stylish sports shoes with excellent grip and comfort.",
    category: "Shoes",
    rating: 4.7
  },
  {
    name: "Puma White Sneakers",
    price: 3799,
    image: "gallery/shoe3.jpg",
    description: "Trendy white sneakers perfect for casual outings.",
    categorty: "shoes",
    rating: 4.5
  },
  {
    name: "Reebok Training shoes",
    price: 2999,
    image: "gallery/shoe4.jpg",
    description: "comfortable training shoes for gym and fitness activities.",
    rating: 4.6,
    category: "Shoes",

  },
  {
    price: 5999,
    name: "Woodland Brown Boots",
    image: "gallery/shoe5.jpeg",
    description: "Rugged and durable boots for outdoor adventures.",
    categorty: "Shoes",
    rating: 4.9
  },
  {
    name: "Campus Casual Shoes",
    price: 2499,
    image: "gallery/shoes.jpg",
    description: "StyLish casaul shoes for everyday wear.",
    category: "Shoes",
    rating: 4.4
  },
  {
    name: "Fila High Ankle Shoes",
    price: 3399,
    image: "gallery/shoe7.jpg",
    description: "High ankle shoes for added support and style.",
    category: "Shoes",
    rating: 4.3
    
  },
  {
    name: "Bata Formal Shoes",
    price: 2899,
    image: "gallery/shoe8.webp",
    description: "Elegant formal shoes for office and events.",
    category:  "shoes",
    rating: 4.2
  },
  {
    name: "Red Tape Leather Shoes",
    price: 5499,
    image: "gallery/shoe9.jpg",
    description: "Premium Leather shoes for a sophisticated look.",
    category: "Shoes",
    rating: 4.8,
  },
  {
    name: "Skechers Walking Shoes",
    price: 4299,
    image: "gallery/shoe10.jpg",
    description: "Comfortable walking shoes with excellent cushioning.",
    category: "Shoes",
    rating: 4.7
  },
  //  Add more producta like this T-Shrts

  {
   name: "Classic Black T-Shirt",
   price: 499,
   image: "gallery/tshirt1.jpEg",
   description: "comfortable and stylish black t-shirt for everyday wear.",
   categorty: "Fashion",
   rating: 4.0

  },
  {
    name: "Graphic Printed T-Shirt",
    price: 699,
    image: "gallery/tshirt2.jpeg",
    description: "Trendy graphic t-shirt for a casual Look.",
    categorty: "Fashion",
    rating: 4.2
  },
  {
    name: "catchy Slogan T-Shirt",
    price: 599,
    image: "gallery/tshirt3.jpeg",
    description: "Fun slogon t-shirt for a playful style.",
    categorty: "Fashion",
    rating: 4.1
  },
  {
    name: "Round Neck Blue T-Shirt",
    price: 549,
    image: 'gallery/tshirt4.jpeg',
    description: "Classic round neck t-shirt in blue color.",
    categorty: "Fashion",
    rating: 4.3
  },
  {
    name: "Striped Cotton T-Shirt",
    price: 699,
    image: "gallery/tshirt5.jpeg",
    descripton: "Stylish striped t-shirt for a modern look.",
    categorty: "Fashion",
    rating: 4.4
  },

  {
    name: "Levi's Denim Jacker",
    price: 2999,
    image: "gallery/jacket1.jpg",
    description: "Classic denim jacket for a timeless look.",
    category: "Fashion",
    rating: 4.5
  }
  // Add more products as needed...
];


function loadProducts() {
  let cart = document.getElementById("product-list");
  cart.innerHTML = "";

  products.forEach((product) => {
    let Div = document.createElement("div");
    Div.classList.add("product-card", "col-sm-3", "border");
    Div.innerHTML = `
      <img class="product-image" src="${product.image}" height="150px" alt="${product.name}">
      <h5 class="product-name"><strong>${product.name}</strong></h5>
      <p class="product-price">₹${product.price}</p>
      <p class="product-description">${product.description}</p>
      <p class="product-rating"><strong>Rating:</strong> ${product.rating} ⭐</p>
      <button class="product-button" onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">Buy</button>
    `;
    cart.appendChild(Div);
  });
}

function checkLoginStatus() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  
  if (users.length > 0) {
      document.getElementById("logout").style.display = "block"; 
  } else {
      document.getElementsByClassName("logout").style.display = "none"; 
  }
}

function checkLoginStatus() {
  const isLoggedIn = sessionStorage.getItem("user") === "true";
  const logoutButton = document.querySelector(".logout");

  if (isLoggedIn) {
      logoutButton.style.display = "block";
  } else {
      logoutButton.style.display = "none";
  }
}

// Function to log out the user
function Logout() {
  sessionStorage.removeItem("user");
  alert("You have been logged out.");
  checkLoginStatus(); // Update UI
}

// Run check on page load
document.addEventListener("DOMContentLoaded", checkLoginStatus);


document.addEventListener("DOMContentLoaded", checkLoginStatus);

function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let new_image = cart.find(item => item.image === image);

  if (new_image) {
      new_image.quantity += 1;
  } else {
      cart.push({ name, price, quantity: 1, image });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
}

function viewCart() {
  window.location.href = "cart.html";
}

function goBack() {
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("product-list")) {
      loadProducts();
  }
});

let users = JSON.parse(localStorage.getItem("users")) || [];
console.log(users);


let email = "test@example.com"; 
let fname = "John"; 
let lname = "Doe";
let password = "password123";
let number = "9876543210";

let new_email = users.find(user => user.email === email);
if (new_email) {
  // alert("This user already exists!");
} else {
  users.push({ fname, lname, email, password, number });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration Successful!");
}


// Filter products based on selected criteria 

function displayProducts(filteredProducts) {
  const container = document.getElementById('product-list');
  container.innerHTML = '';

  if (filteredProducts.length === 0) {
    container.innerHTML = '<p>No products match the selected filters.</p>';
    return;
  }

  filteredProducts.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <h4>${p.name}</h4>
      <p>Category: ${p.category}</p>
      <p>Brand: ${p.brand}</p>
      <p>Price: ₹${p.price}</p>
      <p>Rating: ${p.rating}★</p>
    `;
    container.appendChild(card);
  });
}

function applyFilters() {
  let selectedCategories = Array.from(document.querySelectorAll('.filter-category:checked')).map(cb => cb.value);
  let selectedBrands = Array.from(document.querySelectorAll('.filter-brand:checked')).map(cb => cb.value);
  let selectedPrice = document.querySelector('.filter-price:checked')?.value;
  let selectedRating = parseFloat(document.querySelector('.filter-rating:checked')?.value || "0");

  let [minPrice, maxPrice] = selectedPrice ? selectedPrice.split('-').map(Number) : [0, Infinity];

  let filtered = products.filter(p => {
    return (!selectedCategories.length || selectedCategories.includes(p.category)) &&
           (!selectedBrands.length || selectedBrands.includes(p.brand)) &&
           (p.price >= minPrice && p.price <= maxPrice) &&
           (p.rating >= selectedRating);
  });

  displayProducts(filtered);
}

// Attach event listeners to all filters
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('change', applyFilters);
});

// Initial load
displayProducts(products);
