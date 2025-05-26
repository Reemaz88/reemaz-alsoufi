// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Removed Form submission handling

// Add animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // If the element is in the viewport
    if (elementTop < windowHeight * 0.75) {
      // Adjust 0.75 to control when the animation triggers
      element.classList.add('animated');
    }
  });
};

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Trigger initial check in case elements are already in view on load
animateOnScroll();

// Add active state to navigation links (removed as nav is removed)
/* const updateActiveNavLink = () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.getBoundingClientRect().height;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.5 && sectionTop > -sectionHeight) {
      const id = section.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
};

window.addEventListener('scroll', updateActiveNavLink); */
