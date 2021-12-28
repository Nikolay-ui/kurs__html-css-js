(async function () {
    const response = await fetch('product-speakers.json');
    const products = await response.json();

    function renderProducts(products) {
        const productsContainer = document.querySelector('.speakers-slider');
        for (const product of products) {
            productsContainer.innerHTML +=
                `<div class="speakers-slider__item">
            <img src="${product.image}">
            <span>${product.model}</span>
            <strong>$${product.price}</strong>
            <button data-id="${product.id}" type="submit">ADD TO CART</button>
            </div>`;
        }
    }
    renderProducts(products);
    $(document).ready(function () {
        $('.speakers-slider').slick({
            arrows: true,
            dots: false,
            adaptiveHeight: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            speed: 700,
            easing: 'linear',
            infinite: true,
            initialSlide: 1,
            autoplay: false,
            autoplaySpeed: 1500,
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotsHover: true,
            rows: 1,
            slidesPerRows: 1,
            responsive: [
                {
                    breakpoint: 1068,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ],
        });
    });
})();