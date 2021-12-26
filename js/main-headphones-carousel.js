(function() {

    const slides = [
        '<img src="img/headphones/jbl-334wn.png"" alt="JBL 334WN">',
        '<img src="img/headphones/airpulse-bb34.png" alt="AirPulse BB34">',
        '<img src="img/headphones/bang-and-olufsen-f112.png" alt="Bang & Olufsen F112">',
        '<img src="img/headphones/airpulse-rs45.png" alt="AirPulse RS45">',
        '<img src="img/headphones/sony-tt56.png" alt="Sony TT56">'
    ]

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.main-headphones-carousel__slide')
        slideContainer.innerHTML = slides[currentSlide];
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        showCurrentSlide();
    }
    function prevSlide() {
        currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
        showCurrentSlide();
    }

    //setInterval(nextSlide, 1000);
    showCurrentSlide();

    document.querySelector('.main-headphones-carousel .forward').addEventListener('click', nextSlide);
    document.querySelector('.main-headphones-carousel .back').addEventListener('click', prevSlide);


})();