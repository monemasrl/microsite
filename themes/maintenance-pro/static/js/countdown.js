// Countdown Timer for Maintenance Page
function updateCountdown() {
    // Check if estimated end time is set
    if (typeof estimatedEnd === 'undefined' || estimatedEnd === null) {
        return;
    }

    const now = new Date().getTime();
    const distance = estimatedEnd - now;

    const countdownEl = document.getElementById('countdown');

    if (!countdownEl) return;

    if (distance < 0) {
        countdownEl.innerHTML = `
            <div class="countdown-item" style="min-width: 100%; grid-column: 1 / -1;">
                <div class="countdown-value" style="font-size: 3rem;">✅</div>
                <div class="countdown-label">Manutenzione Completata!</div>
            </div>
        `;
        return;
    }

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update DOM
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
}

// Initialize countdown
document.addEventListener('DOMContentLoaded', function () {
    if (typeof estimatedEnd !== 'undefined' && estimatedEnd !== null) {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
});
