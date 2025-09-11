const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
 multiplier:0.3 ,
//  lerp:0.3
});


function loadPage(){
  switchSlides()
  navbarScroll();
}

function navbarScroll() {
  const navbar = document.querySelector('.navbar');
  scroll.on('scroll', (obj) => {
    if (obj.scroll.y > 50) { // change after 50px scroll
      navbar.classList.add('scrolled'); // you can also add a class
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}



function switchSlides(){

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
}


document.addEventListener('DOMContentLoaded',()=>{
  loadPage()
})