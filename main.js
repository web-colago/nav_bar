const navElements = document.querySelectorAll("nav ul li");
const navLine = document.querySelector(".nav-line");

navElements.forEach(element => {
  element.addEventListener("mouseover", () => {
    positionNavLine(element.offsetLeft, element.offsetWidth);
  });
});

navElements.forEach(element => {
  element.addEventListener("mouseleave", () => {
    positionNavLine(navElements[0].offsetLeft, navElements[0].offsetWidth);
  });
});

const positionNavLine = (left, width) => {
  navLine.style.left = left + "px";
  navLine.style.width = width + "px";
};

window.addEventListener("DOMContentLoaded", () => {
  positionNavLine(navElements[0].offsetLeft, navElements[0].offsetWidth);
});

window.addEventListener("resize", () => {
  positionNavLine(navElements[0].offsetLeft, navElements[0].offsetWidth);
});
