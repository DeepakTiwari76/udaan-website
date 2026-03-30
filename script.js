/*
  UDAAN AIRWAYS — GLOBAL JAVASCRIPT (script.js)
  Features: Navbar Sticky, Hamburger Menu, Booking Tabs, Scroll Reveal, Stats Counter, Sliders, Form Validation, Back to Top
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. NAVBAR - STICKY AND SCROLL EFFECT
    const navbar = document.querySelector('nav.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. HAMBURGER MENU TOGGLE (Mobile)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.querySelector('body');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Toggle hamburger icon animation or text if needed
            body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
        });
    }

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            body.style.overflow = 'auto';
        });
    });

    // 3. BOOKING WIDGET TABS
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-tab');
            
            // Remove active from all tabs
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active to current
            btn.classList.add('active');
            document.getElementById(targetId)?.classList.add('active');
        });
    });

    // Sub-tabs (One Way / Round Trip)
    const flightSubTabs = document.querySelectorAll('.flight-sub-tab');
    flightSubTabs.forEach(btn => {
        btn.addEventListener('click', () => {
            flightSubTabs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Logic to show/hide return date can go here
            const returnDateGroup = document.querySelector('.return-date-group');
            if (btn.classList.contains('round-trip')) {
                returnDateGroup?.classList.add('active');
            } else {
                returnDateGroup?.classList.remove('active');
            }
        });
    });

    // 4. SCROLL ANIMATIONS (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // If it's the stats section, start counting
                if (entry.target.classList.contains('stats-section')) {
                    startCounters();
                }
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .stats-section');
    revealElements.forEach(el => observer.observe(el));

    // Staggered delay for cards
    const containers = document.querySelectorAll('.card-grid');
    containers.forEach(container => {
        const children = container.querySelectorAll('.card');
        children.forEach((child, index) => {
            child.style.transitionDelay = `${index * 0.1}s`;
        });
    });

    // 5. STATS COUNTER
    let countersStarted = false;
    function startCounters() {
        if (countersStarted) return;
        countersStarted = true;
        
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 16ms is roughly 1 frame at 60fps
            
            let count = 0;
            const updateCount = () => {
                count += increment;
                if (count < target) {
                    counter.innerText = Math.ceil(count).toLocaleString() + (counter.classList.contains('plus') ? '+' : '');
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target.toLocaleString() + (counter.classList.contains('plus') ? '+' : '');
                }
            };
            updateCount();
        });
    }

    // 6. TESTIMONIAL SLIDER (Simple implementation)
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        if (!slides.length) return;
        if (index >= slides.length) currentSlide = 0;
        if (index < 0) currentSlide = slides.length - 1;
        
        slides.forEach((s, idx) => {
            s.style.display = idx === currentSlide ? 'block' : 'none';
            // dots[idx]?.classList.toggle('active', idx === currentSlide);
        });
    }

    setInterval(() => {
        currentSlide++;
        showSlide(currentSlide);
    }, 5000);

    // 7. BACK TO TOP BUTTON
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn?.classList.add('show');
        } else {
            backToTopBtn?.classList.remove('show');
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 8. FORM VALIDATION
    const forms = document.querySelectorAll('.contact-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simple validation simulation
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let valid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (valid) {
                const btn = form.querySelector('button');
                const originalText = btn.innerText;
                btn.innerText = 'Sending...';
                btn.disabled = true;
                
                setTimeout(() => {
                    alert('Message sent successfully! We will contact you soon.');
                    form.reset();
                    btn.innerText = originalText;
                    btn.disabled = false;
                }, 1500);
            }
        });
    });

});
