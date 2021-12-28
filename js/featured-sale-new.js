(async function () {
  const response = await fetch('fsn-featured-items.json');
  const products = await response.json();

  function renderProducts(products) {
    const productsContainer = document.querySelector('.featured__items');
    for (const product of products) {
      productsContainer.innerHTML +=
        `<div class="fsn-featured__item">
        <img src="${product.image}" alt="${product.id}">
        <span>${product.title}</span>
        <strong>$${product.price}</strong>
        <button data-id="${product.id}" type="submit">
            ADD TO CART
        </button>
        </div>`;
    }
  }
  renderProducts(products);
  const response = await fetch('fsn-sale-items.json');
  const products = await response.json();

  function renderProducts(products) {
    const productsContainer = document.querySelector('.sale__items');
    for (const product of products) {
      productsContainer.innerHTML +=
        `<div class="fsn-featured__item">
        <img src="${product.image}" alt="${product.id}">
        <span>${product.title}</span>
        <strong>$${product.price}</strong>
        <button data-id="${product.id}" type="submit">
            ADD TO CART
        </button>
        </div>`;
    }
  }
  renderProducts(products);
  const response = await fetch('fsn-new-items.json');
  const products = await response.json();

  function renderProducts(products) {
    const productsContainer = document.querySelector('.new__items');
    for (const product of products) {
      productsContainer.innerHTML +=
        `<div class="fsn-featured__item">
        <img src="${product.image}" alt="${product.id}">
        <span>${product.title}</span>
        <strong>$${product.price}</strong>
        <button data-id="${product.id}" type="submit">
            ADD TO CART
        </button>
        </div>`;
    }
  }
  renderProducts(products);
  const tabLink = document.querySelectorAll('.tab__link');
  const tabItems = document.querySelectorAll('.fsn-tabs__item');
  tabLink.forEach(function (item) {
    item.addEventListener("click", function () {
      let currentLink = item;
      let tabId = currentLink.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentLink.classList.contains('active')) {
        tabLink.forEach(function (item) {
          item.classList.remove('active');
        });
        tabItems.forEach(function (item) {
          item.classList.remove('active');
        });
        currentLink.classList.add('active');
        currentTab.classList.add('active');
      }
    });
  });
  document.querySelector('.tab__link').click();
})();