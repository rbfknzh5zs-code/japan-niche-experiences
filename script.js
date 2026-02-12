// ===== ZEN RETREAT JAPAN - Main Script =====

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initSmoothScroll();
    initScrollAnimations();
    initFAQ();
    initBookingForm();
    initMobileMenu();
});

// --- Navbar scroll effect ---
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const handleScroll = () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
}

// --- Smooth scroll for anchor links ---
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });

                // Close mobile menu if open
                document.querySelector('.nav-links')?.classList.remove('active');
            }
        });
    });
}

// --- Scroll-triggered fade-in animations ---
function initScrollAnimations() {
    const elements = document.querySelectorAll(
        '.phil-card, .retreat-card, .gallery-item, .test-card, .faq-item, .manifesto-text'
    );

    elements.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    elements.forEach(el => observer.observe(el));
}

// --- FAQ toggle ---
function initFAQ() {
    // HTML details/summary handles toggle natively
    // Add smooth animation
    document.querySelectorAll('.faq-item').forEach(item => {
        const summary = item.querySelector('summary');
        const content = item.querySelector('p');
        
        if (summary && content) {
            summary.addEventListener('click', (e) => {
                // Let native behavior handle open/close
            });
        }
    });
}

// --- Booking form ---
function initBookingForm() {
    const form = document.getElementById('bookingForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = {
            name: form.querySelector('#name')?.value,
            email: form.querySelector('#email')?.value,
            date: form.querySelector('#date')?.value,
            guests: form.querySelector('#guests')?.value,
            retreat: form.querySelector('#retreat')?.value,
            message: form.querySelector('#message')?.value,
        };

        console.log('Booking inquiry:', data);

        // Show success state
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = '✓ Sent!';
        btn.style.background = '#4a7a3e';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.disabled = false;
            form.reset();
        }, 3000);
    });
}

// --- Mobile menu ---
function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav-links');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
        nav.classList.toggle('active');
        btn.classList.toggle('active');
    });
}
