// Burger menu toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.5  // Trigger when 50% of the section is in view
    };
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');  // Add class when in view
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);  // Observe each section
    });
});
