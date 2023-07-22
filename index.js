const dropdownBtns = document.querySelectorAll(".menu-btn");
let lastOpened = null;

dropdownBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    const menuContent = this.nextElementSibling;
    const arrow = this.querySelector(".arrow");

    if (lastOpened !== null && lastOpened !== menuContent) {
      // Close the previously opened dropdown
      lastOpened.classList.remove("show");
      const lastArrow =
        lastOpened.previousElementSibling.querySelector(".arrow");
      lastArrow.classList.remove("rotate");
      lastOpened.previousElementSibling.style.fontWeight = "normal"; // Return the text to normal
    }

    menuContent.classList.toggle("show");
    arrow.classList.toggle("rotate");

    if (menuContent.classList.contains("show")) {
      this.style.fontWeight = "bold"; // Make the text bold when dropdown is open
      this.style.color = " #1E1F36 ";
    } else {
      this.style.fontWeight = "normal"; // Return the text to normal when dropdown is closed
    }

    lastOpened = menuContent.classList.contains("show") ? menuContent : null;
  })
);
