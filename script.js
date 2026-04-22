// Sticky Navbar
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 50);
});

// Reveal Animations on Scroll
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', reveal);
// Initial check in case some elements are already in view
reveal();

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Show/Hide Floating Button
window.addEventListener('scroll', function() {
    const floatBtn = document.querySelector('.floating-btn');
    if (window.scrollY > 300) {
        floatBtn.classList.add('visible');
    } else {
        floatBtn.classList.remove('visible');
    }
});
