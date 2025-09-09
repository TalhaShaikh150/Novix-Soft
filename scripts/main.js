// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
//   multiplier: 3,
// });

const showcase = document.querySelector(".section3-showcase");
const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");

const workItem = document.querySelector(".work");
const scrollAmount = workItem.offsetWidth + 20;

rightBtn.addEventListener("click", () => {
  showcase.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

leftBtn.addEventListener("click", () => {
  showcase.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
