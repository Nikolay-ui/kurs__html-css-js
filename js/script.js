// slider's script
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
// tab's script
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