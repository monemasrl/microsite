// Cookie Banner and Management
document.addEventListener('DOMContentLoaded', function () {
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieAccept = document.getElementById('cookieAccept');
    const cookieSettings = document.getElementById('cookieSettings');
    const cookieModal = document.getElementById('cookieModal');

    const COOKIE_NAME = 'cookie-consent';
    const COOKIE_EXPIRY_DAYS = 365;

    // Check if user has already accepted cookies
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
    }

    function showCookieBanner() {
        if (cookieBanner) {
            cookieBanner.classList.add('show');
        }
    }

    function hideCookieBanner() {
        if (cookieBanner) {
            cookieBanner.classList.remove('show');
        }
    }

    function acceptCookies() {
        setCookie(COOKIE_NAME, 'accepted', COOKIE_EXPIRY_DAYS);
        hideCookieBanner();

        // Here you can enable analytics, tracking, etc.
        enableAnalytics();
    }

    function enableAnalytics() {
        // Example: Enable Google Analytics or other tracking
        // window.dataLayer = window.dataLayer || [];
        // function gtag(){dataLayer.push(arguments);}
        // gtag('js', new Date());
        // gtag('config', 'GA_MEASUREMENT_ID');

        console.log('Analytics enabled');
    }

    // Check if consent was already given
    const consent = getCookie(COOKIE_NAME);
    if (!consent) {
        // Show banner after a short delay
        setTimeout(showCookieBanner, 1000);
    } else if (consent === 'accepted') {
        enableAnalytics();
    }

    // Accept cookies button
    if (cookieAccept) {
        cookieAccept.addEventListener('click', function () {
            acceptCookies();
        });
    }

    // Settings button - open cookie policy modal
    if (cookieSettings) {
        cookieSettings.addEventListener('click', function () {
            if (cookieModal) {
                cookieModal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    // Auto-hide banner if user scrolls significantly (implicit consent in some regions)
    let scrollThreshold = false;
    window.addEventListener('scroll', function () {
        if (!scrollThreshold && window.pageYOffset > 500) {
            scrollThreshold = true;
            // Uncomment to enable implicit consent on scroll
            // setTimeout(function() {
            //     if (!getCookie(COOKIE_NAME)) {
            //         acceptCookies();
            //     }
            // }, 2000);
        }
    });
});
