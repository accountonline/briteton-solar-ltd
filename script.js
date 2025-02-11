// Hamburger Menu Toggle
function toggleNav() {
    const nav = document.querySelector('header nav ul');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// Scroll to a section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent!');
});

