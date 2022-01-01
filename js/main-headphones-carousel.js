(async function() {

    const slides = []

    const response = await fetch('main-headphones.json');
    const products = await response.json();

    function renderProducts(product) {
    const productsContainer = document.querySelector('.main-headphones-carousel__slide');
        let html = '';
        for (const product of products) {
            const productHTML = 
            html = `
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
            slides.push(html);
        }
        productsContainer.innerHTML = html;
    }

    renderProducts(products);

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.main-headphones-carousel__slide')
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 600) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth > 1200) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
                slideContainer.innerHTML += slides[thirdSlide];
                const fourthSlide = thirdSlide + 1 >= slides.length ? 0 : thirdSlide + 1;
                slideContainer.innerHTML += slides[fourthSlide];
            }
        }
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        showCurrentSlide();
    }
    function prevSlide() {
        currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
        showCurrentSlide();
    }

    //setInterval(nextSlide, 1000);
    showCurrentSlide();

    document.querySelector('.main-headphones-carousel .forward').addEventListener('click', nextSlide);
    document.querySelector('.main-headphones-carousel .back').addEventListener('click', prevSlide);
    window.addEventListener('resize', showCurrentSlide);

})();