// Contact Form Handler
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Validate
        if (!data.name || !data.email) {
            showMessage('Per favore, compila tutti i campi obbligatori.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showMessage('Per favore, inserisci un indirizzo email valido.', 'error');
            return;
        }

        // Disable submit button
        const submitBtn = form.querySelector('.btn-submit');
        const originalHTML = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Invio in corso...</span>';

        // Simulate form submission (replace with actual endpoint)
        // In production, you would send this to your backend or form service
        setTimeout(() => {
            // Use custom messages if available
            const successMsg = typeof formMessages !== 'undefined' && formMessages.success
                ? formMessages.success
                : 'Grazie! Ti contatteremo presto!';

            showMessage(successMsg, 'success');
            form.reset();

            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalHTML;

            // If you want to actually submit to a service like Formspree, Netlify Forms, etc:
            // fetch(form.action, {
            //     method: 'POST',
            //     body: formData,
            //     headers: {
            //         'Accept': 'application/json'
            //     }
            // })
            // .then(response => {
            //     if (response.ok) {
            //         showMessage(successMsg, 'success');
            //         form.reset();
            //     } else {
            //         throw new Error('Errore durante l\'invio');
            //     }
            // })
            // .catch(error => {
            //     const errorMsg = typeof formMessages !== 'undefined' && formMessages.error 
            //         ? formMessages.error 
            //         : 'Si è verificato un errore. Riprova più tardi.';
            //     showMessage(errorMsg, 'error');
            // })
            // .finally(() => {
            //     submitBtn.disabled = false;
            //     submitBtn.innerHTML = originalHTML;
            // });

        }, 1500);
    });

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = 'form-message ' + type;

        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Auto-hide after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }
});
