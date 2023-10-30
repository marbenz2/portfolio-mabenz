// HOME BUTTON ----------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const headerHeight = document.getElementById("main").offsetHeight;

  function scrollFunction() {
    const homeBtn = document.getElementById("btn-home");
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > headerHeight) {
      homeBtn.classList.add("show");
    } else {
      homeBtn.classList.remove("show");
    }
  }

  window.addEventListener("scroll", scrollFunction);
});

// ----------------------------------------------------------------------------

// MOBILE MENU TOGGLE ---------------------------------------------------------

function toggleMenu() {
  navButtonMobile = document.getElementById("nav-button-mobile");
  navMenuMobile = document.getElementById("nav-menu-mobile");
  body = document.body;

  navButtonMobile.classList.toggle("change");
  navMenuMobile.classList.toggle("active");
  body.classList.toggle("fixed");

  // Close the menu when the user clicks a link
  const links = document.querySelectorAll("#nav-links-mobile a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navButtonMobile.classList.remove("change");
      navMenuMobile.classList.remove("active");
      body.classList.remove("fixed");
    });
  });

  // Close the menu when the user clicks somewhere else on the page
  document.addEventListener("click", (event) => {
    const targetElement = event.target;
    if (
      targetElement.closest("#nav-menu-mobile") &&
      !targetElement.closest("#nav-button-mobile")
    ) {
      navButtonMobile.classList.remove("change");
      navMenuMobile.classList.remove("active");
      body.classList.remove("fixed");
    }
  });
}

// ----------------------------------------------------------------------------
