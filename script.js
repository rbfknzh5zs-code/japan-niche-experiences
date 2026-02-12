// ===== ZEN CAMP JAPAN - Enhanced Script =====

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initSmartNavbar();
    initSmoothScroll();
    initScrollAnimations();
    initRevealAnimations();
    initFAQ();
    initBookingForm();
    initMobileMenu();
    initScrollProgress();
    initMouseGlow();
    initParallax();
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

// --- Smart navbar: hide on scroll down, show on scroll up ---
function initSmartNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScrollY = window.scrollY;
    const heroHeight = document.querySelector('.hero')?.offsetHeight || 600;

    const handleSmartScroll = () => {
        const currentScrollY = window.scrollY;

        // Only activate after scrolling past hero
        if (currentScrollY < heroHeight) {
            navbar.classList.remove('nav-hidden');
            lastScrollY = currentScrollY;
            return;
        }

        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 10) {
            // Scrolling down
            navbar.classList.add('nav-hidden');
        } else if (lastScrollY - currentScrollY > 10) {
            // Scrolling up
            navbar.classList.remove('nav-hidden');
        }

        lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleSmartScroll, { passive: true });
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

// --- Legacy scroll-triggered fade-in animations ---
function initScrollAnimations() {
    const elements = document.querySelectorAll(
        '.phil-card, .retreat-card, .gallery-item, .test-card, .faq-item, .manifesto-text'
    );

    elements.forEach(el => {
        if (!el.classList.contains('reveal')) {
            el.classList.add('fade-in');
        }
    });

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

// --- New reveal animation system ---
function initRevealAnimations() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Use stagger delay from data attribute if present
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, parseInt(delay));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));
}

// --- Scroll progress bar ---
function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;

    const updateProgress = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = progress + '%';
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
}

// --- Mouse glow effect ---
function initMouseGlow() {
    // Disable on mobile
    if (window.innerWidth < 768) return;

    const glow = document.getElementById('mouseGlow');
    if (!glow) return;

    const glowSections = document.querySelectorAll('.retreats, .philosophy, .testimonials');
    let isInSection = false;
    let animFrame;

    document.addEventListener('mousemove', (e) => {
        // Check if cursor is over a glow-enabled section
        isInSection = false;
        glowSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (e.clientY >= rect.top && e.clientY <= rect.bottom &&
                e.clientX >= rect.left && e.clientX <= rect.right) {
                isInSection = true;
            }
        });

        if (isInSection) {
            glow.classList.add('active');
            cancelAnimationFrame(animFrame);
            animFrame = requestAnimationFrame(() => {
                glow.style.left = e.clientX + 'px';
                glow.style.top = e.clientY + 'px';
            });
        } else {
            glow.classList.remove('active');
        }
    });
}

// --- Parallax on hero elements ---
function initParallax() {
    // Disable on mobile
    if (window.innerWidth < 768) return;

    const heroContent = document.querySelector('.hero-content');
    const heroKanji = document.querySelector('.hero-kanji-bg');
    if (!heroContent && !heroKanji) return;

    const handleParallax = () => {
        const scrollY = window.scrollY;
        const heroHeight = document.querySelector('.hero')?.offsetHeight || 800;

        // Only apply parallax within the hero
        if (scrollY > heroHeight) return;

        const ratio = scrollY / heroHeight;

        if (heroContent) {
            heroContent.style.transform = `translateY(${scrollY * 0.15}px)`;
            heroContent.style.opacity = 1 - ratio * 0.8;
        }

        if (heroKanji) {
            // Override the animation transform with parallax + float
            heroKanji.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.08}px))`;
        }
    };

    window.addEventListener('scroll', handleParallax, { passive: true });
}

// --- FAQ toggle ---
function initFAQ() {
    // HTML details/summary handles toggle natively
    document.querySelectorAll('.faq-item').forEach(item => {
        const summary = item.querySelector('summary');
        if (summary) {
            summary.addEventListener('click', () => {
                // Let native behavior handle open/close
            });
        }
    });
}

// --- Enhanced booking form ---
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
            campsite: form.querySelector('#campsite')?.value,
            message: form.querySelector('#message')?.value,
        };

        console.log('Booking inquiry:', data);

        // Show success state with ripple
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = '\u2713 Request Sent!';
        btn.style.background = 'linear-gradient(135deg, #4a7a3e, #5a9a4e)';
        btn.disabled = true;
        form.classList.add('submitted');

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.disabled = false;
            form.classList.remove('submitted');
            form.reset();
        }, 3000);
    });

    // Enhanced input focus animations
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
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
