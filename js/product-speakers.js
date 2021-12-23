(function() {
const products = [
    {
        image: "img/speakers-slider/jbl-br-55.jpg",
        model: "JBL BR-55",
        price: "$110,00"
    },
    {
        image: "img/speakers-slider/jbl-gt-345.jpg",
        model: "JBL GT-345",
        price: "$120,00"
    },
    {
        image: "img/speakers-slider/jbl-party-pt-25.jpg",
        model: "JBL Party PT-25",
        price: "$180,00"
    },
    {
        image: "img/speakers-slider/sony-yt555.jpg",
        model: "SONY YT555",
        price: "$140,00"
    },
    {
        image: "img/speakers-slider/jbl-or-57.jpg",
        model: "JBL OR-57",
        price: "$98,00"
    },
    {
        image: "img/speakers-slider/jbl-rr-56.jpg",
        model: "JBL RR-56",
        price: "$110,00"
    }
];

function renderProducts(products) {
    const productsContainer = document.querySelector('.speakers-slider');
    for (const product of products) {
        productsContainer.innerHTML +=
            `<div class="speakers-slider__item">
        <img src="${product.image}">
        <span>${product.model}</span>
        <strong>${product.price}</strong>
        <button type="submit">ADD TO CART</button>
        </div>`;
    }
}
renderProducts(products);
})();