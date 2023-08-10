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
  document.getElementById("nav-button-mobile").classList.toggle("change");
  document.getElementById("nav-menu-mobile").classList.toggle("toggle");
  document.body.classList.toggle("fixed");

  // Close the menu when the user clicks a link
  const links = document.querySelectorAll("#nav-links-mobile a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("nav-button-mobile").classList.remove("change");
      document.getElementById("nav-menu-mobile").classList.remove("toggle");
      document.body.classList.remove("fixed");
    });
  });

  // Close the menu when the user clicks somewhere else on the page
  document.addEventListener("click", (event) => {
    const targetElement = event.target;
    if (
      targetElement.closest("#nav-menu-mobile") &&
      !targetElement.closest("#nav-button-mobile")
    ) {
      document.getElementById("nav-button-mobile").classList.remove("change");
      document.getElementById("nav-menu-mobile").classList.remove("toggle");
      document.body.classList.remove("fixed");

      // Also reset the class "change" if needed
      // props.classList.remove("change");
    }
  });
}

// ----------------------------------------------------------------------------
