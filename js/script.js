// Scroll Animation Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target); // Animate only once
        }
    });
}, observerOptions);

// Mobile Section Toggles
const mobileToggles = document.querySelectorAll('.mobile-toggle');
mobileToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const targetId = toggle.getAttribute('data-target');
        const content = document.getElementById(targetId);

        if (content) {
            toggle.classList.toggle('active');
            content.classList.toggle('active');
        }
    });
});

// Mobile Menu Logic
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Target elements to animate
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('section-hidden');
        observer.observe(section);
    });

    // Persistent hover effect for Problem Items
    const problemItems = document.querySelectorAll('.problem-item');
    problemItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('solved');
        });
    });

    // Force scroll to top on load
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    } else {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }
    // Clear any hash from the URL (e.g. #about) to prevent browser jump
    if (window.location.hash) {
        history.replaceState(null, null, window.location.pathname);
    }

    window.scrollTo(0, 0);

    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10);
});

console.log("Eoghan Phelan Portfolio Loaded with Animations");
