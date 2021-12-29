(function () {
    const iconBurger = document.querySelector(".header_navigation-burger");
    const navigationsBody = document.querySelector(".header_navigation-wrap");
    iconBurger.addEventListener("click", function (e) {
      document.body.classList.toggle("_lock");
      iconBurger.classList.toggle("active");
      navigationsBody.classList.toggle("active");
    });
  
    const navLinks = document.querySelectorAll(".header_navigation-wrap-pages");
    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", (_) => {
            if (iconBurger.classList.contains("active")) {
                document.body.classList.remove("_lock");
                iconBurger.classList.remove("active");
                navigationsBody.classList.remove("active");
            }
          }
      );
    });
  })();
  