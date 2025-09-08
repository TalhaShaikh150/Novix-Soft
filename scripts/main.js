const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
 multiplier: 1.5,
 lerp: 0.1
});

const navbar = document.querySelector('.navbar');

function navbarScroll() {
  scroll.on('scroll', (obj) => {
    if (obj.scroll.y > 50) { // change after 50px scroll
      navbar.classList.add('scrolled'); // you can also add a class
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

navbarScroll();
