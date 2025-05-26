// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Here you would typically send the data to a server
    console.log('Form submitted:', data);

    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
  });
}

// Add animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    '.experience-card, .skills-card, .education-card',
  );

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // Only apply animation if the element is below the viewport initially
    if (elementTop < windowHeight * 0.8 && elementBottom > 0) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Initial check in case elements are already in view on load
animateOnScroll();

// Add active state to navigation links
const updateActiveNavLink = () => {
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

window.addEventListener('scroll', updateActiveNavLink);
