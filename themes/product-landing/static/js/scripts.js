// ==========================================
// Navigation
// ==========================================
const header = document.getElementById('header');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky header on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (navToggle) {
            const icon = navToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ==========================================
// Cookie Banner
// ==========================================
const cookieBanner = document.getElementById('cookieBanner');
const cookieAccept = document.getElementById('cookieAccept');
const cookieSettings = document.getElementById('cookieSettings');

// Check if user has already accepted cookies
if (!localStorage.getItem('cookieConsent')) {
    setTimeout(() => {
        cookieBanner.classList.add('show');
    }, 1000);
}

// Accept cookies
if (cookieAccept) {
    cookieAccept.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBanner.classList.remove('show');
    });
}

// Cookie settings (placeholder - implement your own settings modal)
if (cookieSettings) {
    cookieSettings.addEventListener('click', () => {
        alert('Implementa qui il tuo modal per le impostazioni dei cookie');
        localStorage.setItem('cookieConsent', 'customized');
        cookieBanner.classList.remove('show');
    });
}

// ==========================================
// Pricing Toggle
// ==========================================
const pricingToggle = document.getElementById('pricingToggle');

if (pricingToggle) {
    pricingToggle.addEventListener('change', (e) => {
        const isYearly = e.target.checked;

        // Toggle price displays
        document.querySelectorAll('.monthly-price').forEach(el => {
            el.style.display = isYearly ? 'none' : 'inline';
        });
        document.querySelectorAll('.yearly-price').forEach(el => {
            el.style.display = isYearly ? 'inline' : 'none';
        });

        // Toggle period texts
        document.querySelectorAll('.monthly-period').forEach(el => {
            el.style.display = isYearly ? 'none' : 'inline';
        });
        document.querySelectorAll('.yearly-period').forEach(el => {
            el.style.display = isYearly ? 'inline' : 'none';
        });

        // Toggle active state on labels
        const labels = document.querySelectorAll('.toggle-label');
        labels.forEach(label => {
            label.classList.toggle('active');
        });
    });
}

// ==========================================
// FAQ Accordion
// ==========================================
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// ==========================================
// Smooth Scroll
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Don't prevent default for empty hash or just "#"
        if (href === '#' || href === '') return;

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();
            const headerOffset = document.getElementById('header').offsetHeight;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Animations on Scroll
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
const animatedElements = document.querySelectorAll(`
    .feature-card,
    .benefit-row,
    .step-card,
    .pricing-card,
    .testimonial-card,
    .faq-item
`);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==========================================
// Counter Animation (for stats)
// ==========================================
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

// Observe stat values
const statValues = document.querySelectorAll('.stat-value');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const value = target.textContent.replace(/[^0-9]/g, '');
            if (value && !target.classList.contains('counted')) {
                target.classList.add('counted');
                target.textContent = '0';
                setTimeout(() => {
                    animateCounter(target, parseInt(value));
                }, 200);
            }
            statsObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

statValues.forEach(stat => {
    statsObserver.observe(stat);
});

// ==========================================
// Form Validation (if contact form exists)
// ==========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Add your form validation logic here
        const formData = new FormData(contactForm);

        // Example: Send to your backend or form service
        console.log('Form submitted:', Object.fromEntries(formData));

        // Show success message
        alert('Grazie per averci contattato! Ti risponderemo al più presto.');
        contactForm.reset();
    });
}

// ==========================================
// Initialize on DOM Load
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Product Landing theme loaded successfully!');

    // Highlight current nav link on page load
    highlightNavLink();
});
