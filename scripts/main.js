document.addEventListener("DOMContentLoaded", function () {
  // ================================
  // 1. Initialize Locomotive Scroll
  // ================================
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    multiplier: 0.4,
    class: "is-inview",
    reloadOnContextChange: true,
  });

  // ================================
  // 2. Navbar Scroll Effects
  // ================================
  const navbar = document.querySelector(".navbar");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    // Add background or shadow after scrolling
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Hide/show navbar on scroll direction
    if (window.scrollY > 100) {
      if (window.scrollY > lastScrollY) {
        navbar.classList.add("hidden"); // scrolling down
      } else {
        navbar.classList.remove("hidden"); // scrolling up
      }
    } else {
      navbar.classList.remove("hidden");
    }

    lastScrollY = window.scrollY;
  });

  // ================================
  // 3. Hero Section Initial Animation
  // ================================
  setTimeout(() => {
    const heroLeft = document.querySelector(".hero-left-col");
    const heroRight = document.querySelector(".hero-right-col");
    const heroImages = document.querySelectorAll(".hero-img");

    if (heroLeft) heroLeft.classList.add("animate");
    if (heroRight) heroRight.classList.add("animate");

    // Stagger hero images
    heroImages.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add("animate");
      }, 300 + index * 100);
    });
  }, 500);

  // ================================
  // 4. Intersection Observer Animations
  // ================================
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    ".overlaping-section, .overlaping-heading, .paragraph, .sub-paragraph, .overlaping-right, .btn-black, .btn-purple, .section3, .work-heading, .left-arrow, .right-arrow, .work, .section-4, .section-4-left, .section-4-right, .section5, .section5-header, .section5-description, .card, .bullet, .elevate2-card, .bullet2, .elevate-button, .section6, .section7, .process"
  );
  animatedElements.forEach((el) => observer.observe(el));

  // ================================
  // 5. Work Section Arrow Navigation
  // ================================
  const leftArrow = document.getElementById("leftArrow");
  const rightArrow = document.getElementById("rightArrow");
  const workShowcase = document.getElementById("workShowcase");

  if (leftArrow && rightArrow && workShowcase) {
    leftArrow.addEventListener("click", function () {
      workShowcase.scrollBy({ left: -350, behavior: "smooth" });
    });

    rightArrow.addEventListener("click", function () {
      workShowcase.scrollBy({ left: 350, behavior: "smooth" });
    });
  }

  // ================================
  // 6. FAQ Toggle Functionality
  // ================================
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
      faqItems.forEach((i) => i !== item && i.classList.remove("active"));
      item.classList.toggle("active");
    });
  });

  // ================================
  // 7. Modal Functionality
  // ================================
  const modal = document.getElementById("contactModal");
  const closeModalBtn = document.getElementById("closeModal");
  const bookCallBtn1 = document.getElementById("bookCallBtn1");
  const bookCallBtn2 = document.getElementById("bookCallBtn2");
  const bookCallBtn3 = document.getElementById("bookCallBtn3");
  const letsTalkBtn = document.querySelector(".btn-lets-talk");

  function openModal() {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
  if (bookCallBtn1) bookCallBtn1.addEventListener("click", openModal);
  if (bookCallBtn2) bookCallBtn2.addEventListener("click", openModal);
  if (bookCallBtn3) bookCallBtn3.addEventListener("click", openModal);
  if (letsTalkBtn) letsTalkBtn.addEventListener("click", openModal);

  // Close modal when clicking outside
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // ================================
  // 8. "Go to Top" Button (Locomotive Scroll)
  // ================================
  const goToTopBtn = document.querySelector(".go-to-top");
  if (goToTopBtn) {
    goToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      scroll.scrollTo(0); // Scroll smoothly to top using Locomotive
    });
  }
});
