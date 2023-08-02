document.addEventListener("DOMContentLoaded", function () {
  function fadeOutOnScroll() {
    const elements = document.querySelectorAll("#main");

    function handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      // Set the opacity of each element based on the scroll position
      elements.forEach((element) => {
        const scrollOpacity = 1 - scrollTop / 850;
        // Ensure opacity is between 0 and 1
        const opacity = Math.min(Math.max(scrollOpacity, 0), 1);
        element.style.opacity = opacity.toFixed(2);
      });
    }

    // Attach the handleScroll function to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Initial call to set the opacity based on the current scroll position
    handleScroll();
  }

  // Call the function to initiate the effect when the page loads
  fadeOutOnScroll();

  // add a div to get to home when scrolled down in the right corner at the bottom

  function scrollFunction() {
    const homeBtn = document.getElementById("home-btn");
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 500) {
      homeBtn.classList.add("hide");
    } else {
      homeBtn.classList.remove("hide");
    }
  }

  window.addEventListener("scroll", scrollFunction);
});

function toggleMenu(props) {
  document.getElementById("nav-menu-mobile").classList.toggle("change");
  document.getElementById("nav-links-mobile").classList.toggle("show");

  // Close the menu when the user clicks a link
  const links = document.querySelectorAll("#nav-links-mobile a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("nav-links-mobile").classList.remove("show");
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
      document.getElementById("nav-links-mobile").classList.remove("show");
      document.getElementById("nav-menu-mobile").classList.remove("change");
      // Also reset the class "change" if needed
      // props.classList.remove("change");
    }
  });
}
