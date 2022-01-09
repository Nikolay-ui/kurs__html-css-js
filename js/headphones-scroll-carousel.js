(function() {

    const slides = [
         `<div class="first-blue-scroll-part">
                <div>
                    <img class="headphones-of-scroll-part" width="370" height="377" src="img/headphones/r255.webp"
                        alt="AirPulse R255">
                </div>
                <div class="text-of-scrollpart">
                    <div>
                        <h2 class="title-first-blue-scroll-part">Always Clear Sound <br>
                            Wherever You Are
                        </h2>
                        <div class="content-of-subtitle">
                            <h3 class="subtitle-scroll-part"> Model</h3>
                            <p> <span class="little-grey-text"> AirPulse R255</span></p>
                        </div>
                        <div class="content-of-subtitle">
                            <h3 class="subtitle-scroll-part">Details</h3>
                            <p> <span class="little-grey-text"> 15 hours of wireless playback and award-winning clear
                                    sound
                                    by
                                    AirPulse.
                                    These headphones are your perfect choice for work, travels, or just everyday use
                                    wherever
                                    you
                                    go.</span>
                            </p>
                        </div>
                        <div class="content-of-subtitle">
                            <h3 class="price-scroll-part">Price <span class="price-of-scroll-part">$185</span></h3>
                        </div>
                    </div>
                    <div class="buttons-of-scroll-part">
                        <div>
                            <form action="#featured-sale-new">
                                <button class="button-buy-now-blue-scroll-part style-button-scrol-part"><strong> BUY
                                        NOW</strong></button>
                            </form>
                        </div>
                        <div>
                            <form action="#headphones-page">
                                <button class="button-all-headphones-blue-scroll-part style-button-scrol-part"><strong>
                                        ALL
                                        HEADPHONES</strong></button>
                            </form>
                        </div>
                    </div>
                </div>
         </div>`,
         `<div class="second-yellow-scroll-part">
                <div>
                    <img class="headphones-of-scroll-part" width="370" height="377" src="img/headphones/S890.webp"
                        alt="Sony S890">
                </div>
                <div class="text-of-scrollpart">
                    <div>
                        <h2 class="title-second-yellow-scroll-part">Colorize Your Day <br>
                            With Favorite Tracks</h2>
                        <div class="content-of-subtitle">
                            <h3 class="subtitle-scroll-part">Model</h3>
                            <p> <span class="little-grey-text"> Sony S890 </span></p>
                        </div>
                        <div class="content-of-subtitle">
                            <h3 class="subtitle-scroll-part">Details</h3>
                            <p> <span class="little-grey-text"> These ergonomic and colorful wireless headphones will be
                                    to
                                    the
                                    liking of all sound lovers.
                                    The headphones feature powerful bass and full immersion into your favorite music on
                                    the
                                    go.
                                </span> </p>
                        </div>
                        <div class="content-of-subtitle">
                            <h3 class="price-scroll-part">Price <span class="price-scroll-yellow-part">$259</span></h3>
                        </div>
                    </div>
                    <div class="buttons-of-scroll-part">
                        <div>
                            <form action="#featured-sale-new">
                                <button class="button-buy-now-yellow-scroll-part style-button-scrol-part"><b> BUY
                                        NOW</b></button>
                            </form>
                        </div>
                        <div>
                            <form action="#headphones-page">
                                <button
                                    class="button-all-headphones-yellow-scroll-part style-button-scrol-part-blue"><b>
                                        HEADPHONES</b></button>
                            </form>
                        </div>
                    </div>
                </div>
         </div>`,
           `<div class="third-black-scroll-part">
                <div>
                    <img class="headphones-of-scroll-part" width="370" height="377" src="img/headphones/JY-F112.webp"
                        alt="Bang & Olufsen JY-F112">
                </div>
                <div class="text-of-scrollpart">
                    <div>
                        <h2 class="title-third-black-scroll-part">Premium Wireless <br>
                            Headphones</h2>
                        <div class="content-of-subtitle">
                            <h3 class="subtitle-scroll-part">Model</h3>
                            <p> <span class="little-grey-text"> Bang & Olufsen JY-F112 </span></p>
                        </div>
                        <div class="content-of-subtitle">
                            <h3 class="subtitle-scroll-part">Details</h3>
                            <p> <span class="little-grey-text">Headphones from one of the best manufacturers of audio
                                    equipment with leather inserts.Enjoy up to 14 hours of wireless playback and the
                                    premium
                                    design of these headphonesbby Bang & Olufsen.</span>
                            </p>
                        </div>
                        <div class="content-of-subtitle">
                            <h3 class="price-scroll-part">Price <span class="price-of-scroll-part">$749</span></h3>
                        </div>
                    </div>
                    <div class="buttons-of-scroll-part">
                        <div>
                            <form action="#featured-sale-new">
                                <button class="button-buy-now-black-scroll-part style-button-scrol-part"><b> BUY NOW
                                    </b></button>
                            </form>
                        </div>
                        <div>
                            <form action="#headphones-page">
                                <button class="button-all-headphones-black-scroll-part style-button-scrol-part"><b> ALL
                                        HEADPHONES </b></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>`
        ];
    
    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.products-of-carousel__slide');
        slideContainer.innerHTML = slides[currentSlide];
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        showCurrentSlide();
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 < 0 ? slides.length -1 : currentSlide - 1;
        showCurrentSlide();
    }

    //setInterval(nextSlide, 1000);
    showCurrentSlide();

    document.querySelector('.headphones-scroll-carousel .forward-button').addEventListener('click', nextSlide);
    document.querySelector('.headphones-scroll-carousel .back-button').addEventListener('click', prevSlide);
})();