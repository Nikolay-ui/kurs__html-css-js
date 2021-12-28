(async function () {
  const responseFeatured = await fetch('fsn-featured-items.json');
  const productsFeatured = await responseFeatured.json();

  function renderProductsFeatured(productsFeatured) {
    const productsContainerFeatured = document.querySelector('.featured__items');
    for (const productFeatured of productsFeatured) {
      productsContainerFeatured.innerHTML +=
        `<div class="fsn-featured__item">
        <img src="${productFeatured.image}" alt="${product.id}">
        <span>${productFeatured.title}</span>
        <strong>$${productFeatured.price}</strong>
        <button data-id="${productFeatured.id}" type="submit">
            ADD TO CART
        </button>
        </div>`;
    }
  }
  renderProductsFeatured(productsFeatured);
})();
(async function () {
  const responseSale = await fetch('fsn-sale-items.json');
  const productsSale = await responseSale.json();

  function renderProductsSale(productsSale) {
    const productsContainerSale = document.querySelector('.sale__items');
    for (const productSale of productsSale) {
      productsContainerSale.innerHTML +=
        `<div class="fsn-featured__item">
        <img src="${productSale.image}" alt="${product.id}">
        <span>${productSale.title}</span>
        <strong>$${productSale.price}</strong>
        <button data-id="${productSale.id}" type="submit">
            ADD TO CART
        </button>
        </div>`;
    }
  }
  renderProductsSale(productsSale);
})();
(async function () {
  const responseNew = await fetch('fsn-new-items.json');
  const productsNew = await responseNew.json();

  function renderProductsNew(productsNew) {
    const productsContainerNew = document.querySelector('.new__items');
    for (const productNew of productsNew) {
      productsContainerNew.innerHTML +=
        `<div class="fsn-featured__item">
        <img src="${productNew.image}" alt="${productNew.id}">
        <span>${productNew.title}</span>
        <strong>$${productNew.price}</strong>
        <button data-id="${productNew.id}" type="submit">
            ADD TO CART
        </button>
        </div>`;
    }
  }
  renderProductsNew(productsNew);
})();
(async function () {
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