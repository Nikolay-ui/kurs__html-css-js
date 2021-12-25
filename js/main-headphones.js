(function () {
    const products = [
        {
            id: 1,
            image: "img/headphones/jbl-334wn.png",
            name: "JBL 334WN",
            price: "$140,00"
        },
        {
            id: 2,
            image: "img/headphones/airpulse-bb34.png",
            name: "AirPulse BB34",
            price: "$112,00"
        },
        {
            id: 3,
            image: "img/headphones/bang-and-olufsen-f112.png",
            name: "Bang & Olufsen F112",
            price: "$145,00"
        },
        {
            id: 4,
            image: "img/headphones/airpulse-rs45.png",
            name: "AirPulse RS45",
            price: "$195,00"
        },
        {
            id: 5,
            image: "img/headphones/sony-tt56.png",
            name: "Sony TT56",
            price: "$98,00"
        }
    ];

    function renderProducts(product) {
        const productsContainer = document.querySelector('.headphones-all-cards');
        let html = '';
        for (const product of products) {
            const productHTML = 
            html += `
            <article class="headphones-card">
                <div class="content">
                    <a class="a" href="#">
                        <img class="headphones-image" src="${product.image}" alt="${product.name}">
                        <h4 class="h4-name">${product.name}</h4>
                    </a>
                    <h4 class="h4-price">${product.price}</h4>
                    <button class="button-add-cart">
                        Add to Cart
                    </button>
                </div>
            </article>`;
        }
        productsContainer.innerHTML = html;
    }

    renderProducts(products);
})();



