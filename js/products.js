function renderProducts() {
  window.products.forEach((product) => {
    const productCard = getProductTemplate(product);
    const productPlaceholder = document.getElementById("product-placeholder");
    productPlaceholder.innerHTML += productCard;
  });
  updateFilterLabel();
}

function filterProducts(filterTypeId) {
  window.filters = window.filters || [];
  if (window.filters.some((s) => s.id === filterTypeId)) {
    return;
  }
  const filterType = filters.find((filter) => filter.id === filterTypeId);
  window.filters.push(filterType);

  const priceFilters = window.filters.filter(
    (filter) => filter.type === "price"
  );
  const typeFilters = window.filters.filter((filter) => filter.type === "type");
  let tempProducts = products;
  if (priceFilters.length) {
    tempProducts = tempProducts.filter((product) =>
      priceFilters.some((filter) => filter.predicate(product))
    );
  }
  if (typeFilters.length) {
    tempProducts = tempProducts.filter((product) =>
      typeFilters.some((filter) => filter.predicate(product))
    );
  }

  window.products = tempProducts;
  const productPlaceholder = document.getElementById("product-placeholder");
  productPlaceholder.innerHTML = "";
  renderProducts();
}

function updateFilterLabel() {
  const appliedFiltersPlaceholder = document.getElementById("appliedFilters");
  if (!window.filters || !window.filters.length) {
    appliedFiltersPlaceholder.innerHTML = "<p>Няма приложени филтри</p>";
    return;
  }

  let labelText = "<span><span>";
  if (window.filters.some((s) => s.type === "price")) {
    labelText = "Цена: ";
    labelText += window.filters
      .filter((filter) => filter.type === "price")
      .sort((a, b) => a.orderNumber - b.orderNumber)
      .map((filter) => filter.name)
      .join(" или ");
  }

  if (
    window.filters.some((s) => s.type === "price") &&
    window.filters.some((s) => s.type === "type")
  ) {
    labelText += " И ";
  }

  if (window.filters.some((s) => s.type === "type")) {
    labelText += "Тип: ";
    labelText += window.filters
      .filter((filter) => filter.type === "type")
      .sort((a, b) => a.orderNumber - b.orderNumber)
      .map((filter) => filter.name)
      .join(" или ");
  }

  appliedFiltersPlaceholder.innerHTML =
    labelText + "</span><a onclick=clearFilters()>x</a></span>";
}

function clearFilters() {
  window.filters = [];
  window.products = products;
  const productPlaceholder = document.getElementById("product-placeholder");
  productPlaceholder.innerHTML = "";
  renderProducts();
}

function getProductTemplate(product) {
  return `
      <div class="product-card" id="product${product.id}">
        <img src="${product.image}" alt="${
    product.name
  }" class="product-frame"/>
        <h4>${product.name}</h4>
        <p>Цена: ${product.price} лв.</p>
        <div class="product-buttons">
          <button onclick=addToCart(${product.id})>Добави в количката</button>
          <button onclick="openModal('modalProduct${product.id}')">
            Виж повече
          </button>
        </div>
      </div>
      <div id="modalProduct${product.id}" class="modal">
        <div class="modal-content">
        <span class="close-button" onclick="closeModal('modalProduct${
          product.id
        }')">
          &times;
        </span>
        <h2>${product.name}</h2>
        <p>${product?.description ?? "Липсва описание"}</p>
      </div>
    `;
}
