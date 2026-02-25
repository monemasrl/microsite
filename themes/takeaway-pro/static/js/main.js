/**
 * Takeaway Pro Theme - Main JavaScript
 * Handles all interactive functionality for the restaurant website
 */

class TakeawayPro {
    constructor() {
        this.cart = null;
        this.orderForm = null;
        this.init();
    }

    init() {
        // Initialize all components when DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            this.cart = new Cart();
            this.orderForm = new OrderForm();
            this.initNavigation();
            this.initScrollEffects();
            this.initMenuFilters();
            this.initLoadingScreen();
            this.initCookieBanner();
            this.initFormHandlers();
            this.initSmoothScrolling();
            this.initAnimations();
        });
    }

    // Navigation functionality
    initNavigation() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        const navLinks = document.querySelectorAll('.nav-link');

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });

            // Close menu when clicking on links
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
        }

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (header) {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        });
    }

    // Scroll effects and animations
    initScrollEffects() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animations
        const animatedElements = document.querySelectorAll('.menu-item, .delivery-service, .stat-item, .info-card');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Menu filtering
    initMenuFilters() {
        const categoryButtons = document.querySelectorAll('.category-btn');
        const menuItems = document.querySelectorAll('.menu-item');

        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.dataset.category;

                // Update active button
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Filter items
                this.filterMenuItems(category, menuItems);
            });
        });
    }

    filterMenuItems(category, items) {
        items.forEach(item => {
            const itemCategory = item.dataset.category;
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 50);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    }

    // Loading screen
    initLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    loadingScreen.classList.add('hidden');
                    setTimeout(() => {
                        loadingScreen.remove();
                    }, 300);
                }, 1000);
            });
        }
    }

    // Cookie banner
    initCookieBanner() {
        const banner = document.getElementById('cookieBanner');
        const acceptBtn = document.getElementById('cookieAccept');
        const settingsBtn = document.getElementById('cookieSettings');

        if (banner && acceptBtn) {
            // Show banner if not accepted
            if (!localStorage.getItem('cookiesAccepted')) {
                setTimeout(() => banner.classList.add('show'), 1000);
            }

            acceptBtn.addEventListener('click', () => {
                localStorage.setItem('cookiesAccepted', 'true');
                banner.classList.remove('show');
                this.initAnalytics();
            });

            if (settingsBtn) {
                settingsBtn.addEventListener('click', () => {
                    alert('Cookie settings functionality would be implemented here');
                });
            }
        }
    }

    // Initialize analytics if cookies accepted
    initAnalytics() {
        // Google Analytics or other tracking code would go here
        if (window.gtag) {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    }

    // Form handlers
    initFormHandlers() {
        // Order type change handler
        const orderType = document.getElementById('orderType');
        const addressGroup = document.getElementById('addressGroup');

        if (orderType && addressGroup) {
            orderType.addEventListener('change', () => {
                if (orderType.value === 'delivery') {
                    addressGroup.style.display = 'block';
                    addressGroup.querySelector('textarea').required = true;
                } else {
                    addressGroup.style.display = 'none';
                    addressGroup.querySelector('textarea').required = false;
                }
                this.orderForm.updateSummary();
            });
        }

        // Reset form handler
        const resetBtn = document.getElementById('resetForm');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (confirm('Sei sicuro di voler resettare il form?')) {
                    document.getElementById('orderForm').reset();
                    this.cart.clear();
                    this.orderForm.updateSummary();
                }
            });
        }
    }

    // Smooth scrolling for anchor links
    initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed header
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Initialize animations
    initAnimations() {
        // Add pulse animation to popular items
        const popularItems = document.querySelectorAll('.popular-badge');
        popularItems.forEach(badge => {
            badge.style.animation = 'pulse 2s infinite';
        });

        // Add hover effects to delivery services
        const deliveryServices = document.querySelectorAll('.delivery-service');
        deliveryServices.forEach(service => {
            service.addEventListener('mouseenter', () => {
                service.style.transform = 'translateY(-8px) scale(1.02)';
            });
            service.addEventListener('mouseleave', () => {
                service.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
}

// Shopping Cart Class
class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.initCartWidget();
        this.updateCartDisplay();
    }

    initCartWidget() {
        const cartToggle = document.getElementById('cartToggle');
        const cartWidget = document.getElementById('cartWidget');

        if (cartToggle && cartWidget) {
            cartToggle.addEventListener('click', () => {
                cartWidget.classList.toggle('expanded');
            });
        }

        // Clear cart button
        const clearBtn = document.getElementById('clearCart');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                if (confirm('Vuoi svuotare il carrello?')) {
                    this.clear();
                }
            });
        }

        // Proceed to order button
        const proceedBtn = document.getElementById('proceedOrder');
        if (proceedBtn) {
            proceedBtn.addEventListener('click', () => {
                document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
                this.populateOrderForm();
            });
        }

        // Add to cart buttons
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const item = {
                    id: btn.dataset.id,
                    name: btn.dataset.name,
                    price: parseFloat(btn.dataset.price)
                };
                this.addItem(item);
                this.showAddedAnimation(btn);
            });
        });
    }

    addItem(item) {
        const existingItem = this.items.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            item.quantity = 1;
            this.items.push(item);
        }
        this.saveCart();
        this.updateCartDisplay();
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.saveCart();
        this.updateCartDisplay();
    }

    updateQuantity(id, quantity) {
        const item = this.items.find(i => i.id === id);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(id);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.updateCartDisplay();
            }
        }
    }

    clear() {
        this.items = [];
        this.saveCart();
        this.updateCartDisplay();
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    updateCartDisplay() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        const proceedBtn = document.getElementById('proceedOrder');

        if (!cartItems || !cartTotal || !proceedBtn) return;

        if (this.items.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Il carrello è vuoto</p>';
            cartTotal.textContent = '€0.00';
            proceedBtn.disabled = true;
            return;
        }

        // Render cart items
        cartItems.innerHTML = this.items.map(item => `
            <div class="cart-item">
                <div class="item-details">
                    <div class="name">${item.name}</div>
                    <div class="price">€${item.price.toFixed(2)}</div>
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="window.app.cart.updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="window.app.cart.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                </div>
            </div>
        `).join('');

        // Update total
        const total = this.getTotal();
        cartTotal.textContent = `€${total.toFixed(2)}`;
        proceedBtn.disabled = false;

        // Update order form if visible and app is initialized
        if (document.getElementById('orderForm') && window.app && window.app.orderForm) {
            window.app.orderForm.updateSummary();
        }
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    showAddedAnimation(button) {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Aggiunto!';
        button.classList.add('btn-success');

        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('btn-success');
        }, 1500);
    }

    populateOrderForm() {
        const orderItems = document.getElementById('orderItems');
        if (orderItems && this.items.length > 0) {
            const itemList = this.items.map(item =>
                `${item.quantity}x ${item.name} - €${(item.price * item.quantity).toFixed(2)}`
            ).join('\n');
            orderItems.value = itemList;
        }
    }
}

// Order Form Class
class OrderForm {
    constructor() {
        this.initForm();
    }

    initForm() {
        const form = document.getElementById('orderForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitOrder(form);
        });

        // Update summary when form changes
        form.addEventListener('change', () => {
            this.updateSummary();
            this.validateForm();
        });

        form.addEventListener('input', () => {
            this.validateForm();
        });
    }

    updateSummary() {
        const summaryItems = document.getElementById('summaryItems');
        const summarySubtotal = document.getElementById('summarySubtotal');
        const summaryTotal = document.getElementById('summaryTotal');
        const deliveryFeeElement = document.querySelector('.delivery-fee');
        const deliveryFeeAmount = document.getElementById('summaryDeliveryFee');

        if (!summaryItems || !summarySubtotal || !summaryTotal) return;

        const cart = app.cart;
        const orderType = document.getElementById('orderType')?.value;

        if (cart.items.length === 0) {
            summaryItems.innerHTML = '<p class="empty-summary">Nessun articolo selezionato</p>';
            summarySubtotal.textContent = '€0.00';
            summaryTotal.textContent = '€0.00';
            if (deliveryFeeElement) deliveryFeeElement.style.display = 'none';
            return;
        }

        // Render summary items
        summaryItems.innerHTML = cart.items.map(item => `
            <div class="summary-item">
                <span>${item.quantity}x ${item.name}</span>
                <span>€${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('');

        // Calculate totals
        const subtotal = cart.getTotal();
        let deliveryFee = 0;

        if (orderType === 'delivery') {
            deliveryFee = subtotal >= 20 ? 0 : 3.50; // Free delivery over €20
            if (deliveryFeeElement) {
                deliveryFeeElement.style.display = 'flex';
                if (deliveryFeeAmount) {
                    deliveryFeeAmount.textContent = deliveryFee === 0 ? 'Gratis' : `€${deliveryFee.toFixed(2)}`;
                }
            }
        } else {
            if (deliveryFeeElement) deliveryFeeElement.style.display = 'none';
        }

        const total = subtotal + deliveryFee;

        summarySubtotal.textContent = `€${subtotal.toFixed(2)}`;
        summaryTotal.textContent = `€${total.toFixed(2)}`;
    }

    validateForm() {
        const form = document.getElementById('orderForm');
        const submitBtn = document.getElementById('submitOrder');

        if (!form || !submitBtn) return;

        const requiredFields = form.querySelectorAll('[required]');
        const cart = app.cart;

        let isValid = cart.items.length > 0;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
            }
        });

        submitBtn.disabled = !isValid;
    }

    async submitOrder(form) {
        const submitBtn = document.getElementById('submitOrder');
        const successMsg = document.getElementById('successMessage');
        const errorMsg = document.getElementById('errorMessage');

        // Show loading state
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Invio in corso...';
        submitBtn.disabled = true;

        try {
            const formData = new FormData(form);

            // Add cart items to form data
            const cartSummary = app.cart.items.map(item =>
                `${item.quantity}x ${item.name} - €${(item.price * item.quantity).toFixed(2)}`
            ).join('\n');

            formData.set('orderItems', cartSummary);
            formData.append('total', `€${this.calculateTotal()}`);

            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                this.showMessage(successMsg);
                form.reset();
                app.cart.clear();
                this.updateSummary();

                // Optionally redirect to WhatsApp
                setTimeout(() => {
                    const whatsappBtn = document.querySelector('.whatsapp-button');
                    if (whatsappBtn && confirm('Vuoi continuare la conversazione su WhatsApp?')) {
                        whatsappBtn.click();
                    }
                }, 2000);
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Order submission failed:', error);
            this.showMessage(errorMsg);
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    calculateTotal() {
        const subtotal = app.cart.getTotal();
        const orderType = document.getElementById('orderType')?.value;
        const deliveryFee = (orderType === 'delivery' && subtotal < 20) ? 3.50 : 0;
        return subtotal + deliveryFee;
    }

    showMessage(element) {
        if (!element) return;

        element.style.display = 'flex';
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });

        setTimeout(() => {
            element.style.display = 'none';
        }, 5000);
    }
}

// Utility Functions
const utils = {
    // Format price
    formatPrice: (price) => `€${parseFloat(price).toFixed(2)}`,

    // Debounce function
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Animate element
    animate: (element, animation, duration = 1000) => {
        element.style.animation = `${animation} ${duration}ms ease-in-out`;
        setTimeout(() => {
            element.style.animation = '';
        }, duration);
    }
};

// Initialize the application
const app = new TakeawayPro();

// Export for global access
window.TakeawayPro = TakeawayPro;
window.app = app;

// Add some CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .btn-success {
        background: var(--success-color) !important;
        border-color: var(--success-color) !important;
    }
`;
document.head.appendChild(style);