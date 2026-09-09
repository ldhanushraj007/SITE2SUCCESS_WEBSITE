/**
 * Site2Success - Main JavaScript
 * UI Logic and Navigation
 */

// ============================================
// Router
// ============================================

const Router = {
    currentPage: 'home',

    // Navigate to page
    navigate(page) {
        if (page === 'home') {
            window.location.href = 'home.html';
        } else if (page === 'services') {
            window.location.href = 'services.html';
        } else if (page === 'automation') {
            window.location.href = 'automation.html';
        } else if (page === 'internships') {
            window.location.href = 'internships.html';
        } else if (page === 'projects') {
            window.location.href = 'projects.html';
        } else if (page === 'about') {
            window.location.href = 'about.html';
        } else if (page === 'contact') {
            window.location.href = 'contact.html';
        }
    },

    // Get current page from URL
    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('home')) return 'home';
        if (path.includes('services')) return 'services';
        if (path.includes('automation')) return 'automation';
        if (path.includes('internships')) return 'internships';
        if (path.includes('projects')) return 'projects';
        if (path.includes('about')) return 'about';
        if (path.includes('contact')) return 'contact';
        return 'home';
    }
};

// ============================================
// UI Components
// ============================================

const UI = {
    // Show toast notification
    showToast(message, type = 'success') {
        const container = document.querySelector('.toast-container') || this.createToastContainer();

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${type === 'success' 
                    ? '<polyline points="20 6 9 17 4 12"></polyline>'
                    : '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'
                }
            </svg>
            <span>${message}</span>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    },

    // Create toast container
    createToastContainer() {
        const container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
        return container;
    },

    // Set loading state on button
    setLoading(button, loading) {
        if (loading) {
            button.classList.add('loading');
            button.disabled = true;
        } else {
            button.classList.remove('loading');
            button.disabled = false;
        }
    }
};

// ============================================
// Form Handlers
// ============================================

const FormHandlers = {
    // Handle contact form
    handleContact(e) {
        e.preventDefault();
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');

        UI.setLoading(submitBtn, true);

        // TODO: Connect to backend API
        setTimeout(() => {
            UI.showToast('Message sent successfully!', 'success');
            form.reset();
            UI.setLoading(submitBtn, false);
        }, 1500);
    }
};

// ============================================
// Navigation
// ============================================

const Navigation = {
    // Initialize navigation
    init() {
        this.setupScrollEffect();
        this.setActiveNavItem();
        this.setupMobileMenu();
    },

    // Setup scroll effect for navbar
    setupScrollEffect() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    },

    // Set active nav item based on current page
    setActiveNavItem() {
        const currentPage = Router.getCurrentPage();
        const navItems = document.querySelectorAll('.nav-item');

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.page === currentPage) {
                item.classList.add('active');
            }
        });
    },

    // Setup mobile menu
    setupMobileMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('mobile-open');
            });
        }
    }
};

// ============================================
// Animations
// ============================================

const Animations = {
    // Initialize animations
    init() {
        this.setupScrollAnimations();
        this.setupPageLoadAnimations();
    },

    // Setup scroll-triggered animations
    setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('[data-animate]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => observer.observe(el));
    },

    // Setup page load animations
    setupPageLoadAnimations() {
        const elements = document.querySelectorAll('.animate-on-load');
        elements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.1}s`;
            el.classList.add('animate-fadeInUp');
        });
    }
};

// ============================================
// Contact Form Handler (ADD THIS AT THE END)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation
    Navigation.init();

    // Initialize animations
    Animations.init();
});

// Export for global access
window.Router = Router;
window.UI = UI;

// ============================================
// Image Loading Optimisation
// ============================================
(function () {
    // Fade-in every image on load
    function initImageLoad(img) {
        if (img.complete && img.naturalWidth > 0) {
            img.classList.add('loaded');
            if (img.parentElement) img.parentElement.classList.add('loaded');
        } else {
            img.addEventListener('load', function () {
                img.classList.add('loaded');
                if (img.parentElement) img.parentElement.classList.add('loaded');
            });
            img.addEventListener('error', function () {
                // On error still show (broken icon better than invisible)
                img.classList.add('loaded');
            });
        }
    }

    // Use IntersectionObserver for lazy loading
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    initImageLoad(img);
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: '200px' });

        document.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
            observer.observe(img);
        });
    }

    // Eagerly load above-fold images
    document.querySelectorAll('img:not([loading="lazy"])').forEach(initImageLoad);

    // Also catch any lazy images not using data-src (native lazy)
    document.querySelectorAll('img[loading="lazy"]').forEach(initImageLoad);
})();