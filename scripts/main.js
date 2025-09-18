

      document.addEventListener("DOMContentLoaded", function () {
        // Initialize Locomotive Scroll
        const scroll = new LocomotiveScroll({
          el: document.querySelector("[data-scroll-container]"),
          smooth: true,
          multiplier: 0.4,
          class: "is-inview",
          offset: ["15%", 0],
          reloadOnContextChange: true,
        });

        // Navbar scroll effect
        const navbar = document.querySelector(".navbar");
        window.addEventListener("scroll", function () {
          if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
          } else {
            navbar.classList.remove("scrolled");
          }
        });

        // Animate elements on load
        setTimeout(() => {
          document.querySelector(".hero-left-col").classList.add("animate");
          document.querySelector(".hero-right-col").classList.add("animate");

          const heroImages = document.querySelectorAll(".hero-img");
          heroImages.forEach((img) => {
            img.classList.add("animate");
          });
        }, 500);

        // Intersection Observer for scroll animations
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

        // Observe all elements that need animation
        const animatedElements = document.querySelectorAll(
          ".overlaping-section, .overlaping-heading, .paragraph, .sub-paragraph, .overlaping-right, .btn-black, .btn-purple ,.section3, .work-heading, .left-arrow, .right-arrow, .work, .section-4, .section-4-left, .section-4-right, .section5, .section5-header, .section5-description, .card, .bullet, .elevate2-card, .bullet2, .elevate-button, .section6, .section7 ,.process"
        );
        animatedElements.forEach((el) => {
          observer.observe(el);
        });

        // Work section navigation
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

        // Modal functionality
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
      });
      document.addEventListener("DOMContentLoaded", function () {
        // Add loaded class to hero elements
        setTimeout(() => {
          document.querySelector(".hero-left-col").classList.add("animate");
          document.querySelector(".hero-right-col").classList.add("animate");

          // Animate hero images with staggered delay
          const heroImages = document.querySelectorAll(".hero-img");
          heroImages.forEach((img, index) => {
            setTimeout(() => {
              img.classList.add("animate");
            }, 300 + index * 100);
          });
        }, 500);

        // Navbar hide on scroll functionality
        const navbar = document.querySelector(".navbar");
        let lastScrollY = window.scrollY;

        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            if (window.scrollY > lastScrollY) {
              // Scrolling down - hide navbar
              navbar.classList.add("hidden");
            } else {
              // Scrolling up - show navbar
              navbar.classList.remove("hidden");
            }
          } else {
            // At top of page - show navbar
            navbar.classList.remove("hidden");
          }

          lastScrollY = window.scrollY;
        });

        // Animate elements on scroll
        const animateOnScroll = () => {
          const elements = document.querySelectorAll(
            ".overlaping-section, .overlaping-heading, .paragraph, .sub-paragraph, .overlaping-right, .btn-black"
          );

          elements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
              el.classList.add("animate");
            }
          });
        };

        // Initial check and then on scroll
        animateOnScroll();
        window.addEventListener("scroll", animateOnScroll);
      });