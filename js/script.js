document.addEventListener("DOMContentLoaded", function () {
    let lastScroll = 0;
    const header = document.querySelector("header");
  
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
  
      if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        document.body.classList.add("scrolled-down");
        document.body.classList.remove("scrolled-up");
      } else if (currentScroll < lastScroll) {
        // Scrolling up
        document.body.classList.add("scrolled-up");
        document.body.classList.remove("scrolled-down");
      }
  
      lastScroll = currentScroll;
    });
  
    // Apply smooth scrolling for navigation links
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  });
  