// HOME BUTTON ----------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const headerHeight = document.getElementById("main").offsetHeight;

  function scrollFunction() {
    const homeBtn = document.getElementById("home-btn");
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
  document.getElementById("nav-menu-mobile").classList.toggle("change");
  document.getElementById("nav-links-mobile").classList.toggle("toggle");

  // Close the menu when the user clicks a link
  const links = document.querySelectorAll("#nav-links-mobile a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("nav-links-mobile").classList.remove("toggle");
      document.getElementById("nav-menu-mobile").classList.remove("change");
    });
  });

  // Close the menu when the user clicks somewhere else on the page
  document.addEventListener("click", (event) => {
    const targetElement = event.target;
    if (
      targetElement.closest("#nav-links-mobile") &&
      !targetElement.closest("#nav-menu-mobile")
    ) {
      document.getElementById("nav-links-mobile").classList.remove("toggle");
      document.getElementById("nav-menu-mobile").classList.remove("change");
      // Also reset the class "change" if needed
      // props.classList.remove("change");
    }
  });
}

// ----------------------------------------------------------------------------
