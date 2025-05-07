document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.experience-card, .skill-category, .education-item');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight * 0.9) {
        element.classList.add('animated');
      }
    });
  };

  // Add animated class to CSS-targeted elements
  document.querySelectorAll('.experience-card, .skill-category, .education-item').forEach(el => {
    el.classList.add('fade-in-element');
  });

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on page load

  // Add interactive hover effect to skill tags
  const tags = document.querySelectorAll('.tag');
  if (tags) {
    tags.forEach(tag => {
      tag.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-5px)';
      });
      
      tag.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  }

  // Typewriter effect for tagline if on home page
  const tagline = document.querySelector('.tagline');
  if (tagline) {
    const text = tagline.textContent;
    tagline.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        tagline.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    
    setTimeout(() => {
      typeWriter();
    }, 1000);
  }
});
