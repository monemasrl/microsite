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
        if (!validateForm(data)) {
            return;
        }

        // Disable submit button
        const submitBtn = form.querySelector('.btn-submit');
        const originalHTML = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Invio in corso...</span>';

        // Submit form (replace with your actual endpoint)
        submitForm(formData)
            .then(response => {
                showMessage('Grazie! Il tuo messaggio è stato inviato con successo. Ti contatteremo al più presto.', 'success');
                form.reset();
            })
            .catch(error => {
                showMessage('Si è verificato un errore durante l\'invio. Riprova più tardi o contattaci direttamente.', 'error');
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalHTML;
            });
    });

    function validateForm(data) {
        // Name validation
        if (!data.name || data.name.trim().length < 2) {
            showMessage('Per favore, inserisci il tuo nome completo.', 'error');
            return false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email || !emailRegex.test(data.email)) {
            showMessage('Per favore, inserisci un indirizzo email valido.', 'error');
            return false;
        }

        // Phone validation (if provided)
        if (data.phone && data.phone.trim().length > 0) {
            const phoneRegex = /^[\d\s\+\-\(\)]+$/;
            if (!phoneRegex.test(data.phone)) {
                showMessage('Per favore, inserisci un numero di telefono valido.', 'error');
                return false;
            }
        }

        // Message validation
        if (!data.message || data.message.trim().length < 10) {
            showMessage('Per favore, inserisci un messaggio di almeno 10 caratteri.', 'error');
            return false;
        }

        // Privacy consent validation
        if (!data.privacy) {
            showMessage('Devi accettare la Privacy Policy per inviare il messaggio.', 'error');
            return false;
        }

        return true;
    }

    function submitForm(formData) {
        // This is a simulated submission. Replace with your actual endpoint.
        // Options:
        // 1. PHP backend
        // 2. Formspree: https://formspree.io/
        // 3. Netlify Forms: https://www.netlify.com/products/forms/
        // 4. EmailJS: https://www.emailjs.com/
        // 5. Static Forms: https://www.staticforms.xyz/

        return new Promise((resolve, reject) => {
            // Simulate API call
            setTimeout(() => {
                // Simulate success (90% success rate for demo)
                if (Math.random() > 0.1) {
                    resolve({ success: true });
                } else {
                    reject({ error: 'Network error' });
                }
            }, 1500);
        });

        // Example with Formspree:
        // const formAction = form.getAttribute('action');
        // return fetch(formAction, {
        //     method: 'POST',
        //     body: formData,
        //     headers: {
        //         'Accept': 'application/json'
        //     }
        // }).then(response => {
        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //     }
        //     return response.json();
        // });

        // Example with EmailJS:
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY')
        //     .then((result) => {
        //         return Promise.resolve(result);
        //     }, (error) => {
        //         return Promise.reject(error);
        //     });
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = 'form-message ' + type;

        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Auto-hide after 8 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 8000);
    }

    // Real-time validation feedback
    const emailInput = form.querySelector('#email');
    if (emailInput) {
        emailInput.addEventListener('blur', function () {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '';
            }
        });
    }

    const nameInput = form.querySelector('#name');
    if (nameInput) {
        nameInput.addEventListener('blur', function () {
            if (this.value && this.value.trim().length < 2) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '';
            }
        });
    }
});
