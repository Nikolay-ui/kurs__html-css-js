$(document).ready(function () {
    $('.slider').slick({
      arrows: true,
      dots: false,
      adaptiveHeight: true,
      slidesToShow: 1,
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
          breakpoint: 320,
          settings: {
            slidesToShow: 1
          }
        }
      ],
    });
  });

  $(document).ready(function () {
    $('.slider-brands').slick({
      arrows: true,
      dots: false,
      adaptiveHeight: true,
      slidesToShow: 1,
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
          breakpoint: 320,
          settings: {
            slidesToShow: 1
          }
        }
      ],
    });
  });