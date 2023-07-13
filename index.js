var activeQuest = null;

function toggleH3(element) {
  var h3 = element.nextElementSibling;
  var arrow = element.querySelector(".arrow");
  var h2 = element.querySelector(".h2Text");

  if (h3.classList.contains("hidden")) {
    hideActiveQuest();
    h3.classList.remove("hidden");
    arrow.classList.add("rotate180");
    h2.classList.add("bold");
    activeQuest = element;
  } else {
    h3.classList.add("hidden");
    arrow.classList.remove("rotate180");
    h2.classList.remove("bold");
    activeQuest = null;
  }
}

function hideActiveQuest() {
  if (activeQuest) {
    var activeH3 = activeQuest.nextElementSibling;
    var activeArrow = activeQuest.querySelector(".arrow");
    var activeH2 = activeQuest.querySelector(".h2Text");
    activeH3.classList.add("hidden");
    activeArrow.classList.remove("rotate180");
    activeH2.classList.remove("bold");
  }
}

function changeColor(element, isHover) {
  var h2 = element.querySelector(".h2Text");

  if (isHover) {
    h2.classList.add("red");
  } else {
    h2.classList.remove("red");
  }
}
