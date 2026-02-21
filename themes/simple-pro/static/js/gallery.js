// Image Gallery functionality
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.gallery-slide');
    const indicators = document.querySelectorAll('.gallery-indicator');
    const prevBtn = document.getElementById('galleryPrev');
    const nextBtn = document.getElementById('galleryNext');

    if (!slides.length) return;

    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoplayInterval;

    function showSlide(index) {
        // Ensure index is within bounds
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        // Update slides
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentSlide);
        });

        // Update indicators
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentSlide);
        });
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Navigation buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            nextSlide();
            stopAutoplay();
            startAutoplay(); // Restart autoplay
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            prevSlide();
            stopAutoplay();
            startAutoplay(); // Restart autoplay
        });
    }

    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function () {
            showSlide(index);
            stopAutoplay();
            startAutoplay(); // Restart autoplay
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            stopAutoplay();
            startAutoplay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            stopAutoplay();
            startAutoplay();
        }
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.addEventListener('touchstart', function (e) {
            touchStartX = e.changedTouches[0].screenX;
        });

        heroSection.addEventListener('touchend', function (e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left (next)
                nextSlide();
            } else {
                // Swipe right (prev)
                prevSlide();
            }
            stopAutoplay();
            startAutoplay();
        }
    }

    // Pause autoplay on hover (desktop)
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopAutoplay);
        heroSection.addEventListener('mouseleave', startAutoplay);
    }

    // Start autoplay
    startAutoplay();

    // Pause autoplay when page is hidden
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            stopAutoplay();
        } else {
            startAutoplay();
        }
    });
});
