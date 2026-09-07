document.addEventListener('DOMContentLoaded', () => {
    // Tab Switcher for Technical Capabilities
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTabId = btn.getAttribute('data-tab');

            // Deactivate all tabs
            tabBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            tabContents.forEach(c => {
                c.classList.remove('active');
            });

            // Activate clicked tab
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            
            const targetContent = document.getElementById(targetTabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu on link click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Scroll Restoration & Hash Cleaning
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }
    
    if (window.location.hash) {
        history.replaceState(null, null, window.location.pathname);
    }

    window.scrollTo(0, 0);
});
