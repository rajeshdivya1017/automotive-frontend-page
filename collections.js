// STACKLY - Car Collection Data

const cars = [
  {
    name: "BMW 3 Series",
    brand: "BMW",
    category: "Sedan",
    variant: "Mid",
    price: 45,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Mercedes-Benz C-Class",
    brand: "Mercedes-Benz",
    category: "Sedan",
    variant: "Top",
    price: 62,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Audi A6",
    brand: "Audi",
    category: "Sedan",
    variant: "Mid",
    price: 70,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Porsche 911",
    brand: "Porsche",
    category: "Sports",
    variant: "Top",
    price: 200,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Lamborghini Huracan",
    brand: "Lamborghini",
    category: "Sports",
    variant: "Top",
    price: 350,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Toyota Fortuner",
    brand: "Toyota",
    category: "SUV",
    variant: "Top",
    price: 45,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Honda City",
    brand: "Honda",
    category: "Sedan",
    variant: "Basic",
    price: 12,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Hyundai Creta",
    brand: "Hyundai",
    category: "SUV",
    variant: "Mid",
    price: 15,
    image: "https://images.unsplash.com/photo-1518306721680-3f4d0a5c5f7c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Tata Nexon",
    brand: "Tata",
    category: "SUV",
    variant: "Basic",
    price: 10,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "BMW X5",
    brand: "BMW",
    category: "SUV",
    variant: "Top",
    price: 95,
    image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Mercedes-Benz GLA",
    brand: "Mercedes-Benz",
    category: "SUV",
    variant: "Basic",
    price: 50,
    image: "https://images.unsplash.com/photo-1618843479618-39b7f7b8a8b1?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Audi Q5",
    brand: "Audi",
    category: "SUV",
    variant: "Mid",
    price: 65,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Porsche Cayenne",
    brand: "Porsche",
    category: "SUV",
    variant: "Top",
    price: 140,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Toyota Camry",
    brand: "Toyota",
    category: "Sedan",
    variant: "Mid",
    price: 48,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Honda Amaze",
    brand: "Honda",
    category: "Sedan",
    variant: "Basic",
    price: 8,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Hyundai i20",
    brand: "Hyundai",
    category: "Hatchback",
    variant: "Mid",
    price: 9,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Tata Altroz",
    brand: "Tata",
    category: "Hatchback",
    variant: "Basic",
    price: 8,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "BMW 5 Series",
    brand: "BMW",
    category: "Sedan",
    variant: "Top",
    price: 75,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Mercedes-Benz E-Class",
    brand: "Mercedes-Benz",
    category: "Sedan",
    variant: "Top",
    price: 80,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Audi Q7",
    brand: "Audi",
    category: "SUV",
    variant: "Top",
    price: 95,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Lamborghini Urus",
    brand: "Lamborghini",
    category: "SUV",
    variant: "Top",
    price: 400,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Toyota Glanza",
    brand: "Toyota",
    category: "Hatchback",
    variant: "Basic",
    price: 7,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Honda Elevate",
    brand: "Honda",
    category: "SUV",
    variant: "Mid",
    price: 15,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Hyundai Tucson",
    brand: "Hyundai",
    category: "SUV",
    variant: "Top",
    price: 35,
    image: "https://images.unsplash.com/photo-1518306721680-3f4d0a5c5f7c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Tata Harrier",
    brand: "Tata",
    category: "SUV",
    variant: "Top",
    price: 28,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "BMW Z4",
    brand: "BMW",
    category: "Sports",
    variant: "Top",
    price: 90,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Porsche 718 Cayman",
    brand: "Porsche",
    category: "Sports",
    variant: "Mid",
    price: 150,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
  }
];

// Page settings
const carsPerPage = 9;
let currentPage = 1;

// HTML elements
const carGrid = document.getElementById("carGrid");
const pagination = document.getElementById("pagination");
const resultCount = document.getElementById("resultCount");

const searchCar = document.getElementById("searchCar");
const brandFilter = document.getElementById("brandFilter");
const categoryFilter = document.getElementById("categoryFilter");
const variantFilter = document.getElementById("variantFilter");
const priceFilter = document.getElementById("priceFilter");
const sortFilter = document.getElementById("sortFilter");
const clearFilters = document.getElementById("clearFilters");

// Filter cars
function getFilteredCars() {
  let filteredCars = cars.filter(function (car) {
    const searchText = searchCar.value.toLowerCase().trim();

    const matchesSearch =
      car.name.toLowerCase().includes(searchText) ||
      car.brand.toLowerCase().includes(searchText);

    const matchesBrand =
      brandFilter.value === "" ||
      car.brand === brandFilter.value;

    const matchesCategory =
      categoryFilter.value === "" ||
      car.category === categoryFilter.value;

    const matchesVariant =
      variantFilter.value === "" ||
      car.variant === variantFilter.value;

    let matchesPrice = true;

    if (priceFilter.value === "under20") {
      matchesPrice = car.price < 20;
    } else if (priceFilter.value === "20to50") {
      matchesPrice = car.price >= 20 && car.price <= 50;
    } else if (priceFilter.value === "50to100") {
      matchesPrice = car.price > 50 && car.price <= 100;
    } else if (priceFilter.value === "over100") {
      matchesPrice = car.price > 100;
    }

    return (
      matchesSearch &&
      matchesBrand &&
      matchesCategory &&
      matchesVariant &&
      matchesPrice
    );
  });

  if (sortFilter.value === "low") {
    filteredCars.sort((a, b) => a.price - b.price);
  } else if (sortFilter.value === "high") {
    filteredCars.sort((a, b) => b.price - a.price);
  }

  return filteredCars;
}

// Display car cards
function displayCars() {
  const filteredCars = getFilteredCars();
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  if (totalPages > 0 && currentPage > totalPages) {
    currentPage = 1;
  }

  const startIndex = (currentPage - 1) * carsPerPage;
  const pageCars = filteredCars.slice(
    startIndex,
    startIndex + carsPerPage
  );

  resultCount.textContent =
    "Showing " + filteredCars.length + " cars";

  if (pageCars.length === 0) {
    carGrid.innerHTML = `
      <div class="empty-message">
        <h2>No Cars Found</h2>
        <p>Try changing your search or filters.</p>
      </div>
    `;
  } else {
    carGrid.innerHTML = pageCars.map(function (car) {
      return `
        <article class="car-card">
          <div class="car-image">
            <img
              src="${car.image}"
              alt="${car.name}"
              loading="lazy"
              onerror="this.onerror=null;this.src='https://placehold.co/800x450/111111/d4af37?text=STACKLY+Luxury+Car';"
            >
          </div>

          <div class="car-details">
            <span class="car-category">
              ${car.category}
            </span>

            <h2>${car.name}</h2>

            <p class="car-info">
              Brand: ${car.brand}<br>
              Variant: ${car.variant}
            </p>

            <p class="car-price">
              ₹${car.price} Lakh*
            </p>

            <a
              class="spec-btn"
              href="404.html?from=collections.html"
            >
              Read More Specifications
            </a>
          </div>
        </article>
      `;
    }).join("");
  }

  displayPagination(totalPages);
}

// Display pagination
function displayPagination(totalPages) {
  pagination.innerHTML = "";

  if (totalPages === 0) {
    return;
  }

  const prevButton = document.createElement("button");
  prevButton.className = "page-btn";
  prevButton.textContent = "Prev";
  prevButton.disabled = currentPage === 1;

  prevButton.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      displayCars();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  pagination.appendChild(prevButton);

  for (let page = 1; page <= totalPages; page++) {
    const pageButton = document.createElement("button");

    pageButton.className =
      "page-btn" + (page === currentPage ? " active" : "");

    pageButton.textContent = page;

    pageButton.addEventListener("click", function () {
      currentPage = page;
      displayCars();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    pagination.appendChild(pageButton);
  }

  const nextButton = document.createElement("button");
  nextButton.className = "page-btn";
  nextButton.textContent = "Next";

  nextButton.addEventListener("click", function () {
    if (currentPage < totalPages) {
      currentPage++;
      displayCars();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (currentPage === 3) {
      window.location.href = "404.html?from=collections.html";
    }
  });

  pagination.appendChild(nextButton);
}

// Update results when filters change
[
  searchCar,
  brandFilter,
  categoryFilter,
  variantFilter,
  priceFilter,
  sortFilter
].forEach(function (element) {
  element.addEventListener("input", function () {
    currentPage = 1;
    displayCars();
  });

  element.addEventListener("change", function () {
    currentPage = 1;
    displayCars();
  });
});

// Clear all filters
clearFilters.addEventListener("click", function () {
  searchCar.value = "";
  brandFilter.value = "";
  categoryFilter.value = "";
  variantFilter.value = "";
  priceFilter.value = "";
  sortFilter.value = "";

  currentPage = 1;
  displayCars();
});

// Initial display
displayCars();