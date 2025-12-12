// SERVICES PAGE JAVASCRIPT WITH ERROR HANDLING

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Services page script loaded');
    
    // Initialize all functions with error handling
    try {
        initServiceTabs();
        initFAQAccordion();
        initScrollAnimations();
        initHoverEffects();
        initFooterLinks();
        initURLHash();
    } catch (error) {
        console.error('Error initializing services page:', error);
    }
});

// Service Navigation Tabs
function initServiceTabs() {
    const serviceNavTabs = document.querySelectorAll('.service-nav-tab');
    const serviceCategories = document.querySelectorAll('.service-category');
    
    if (!serviceNavTabs.length || !serviceCategories.length) return;
    
    serviceNavTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const serviceId = this.getAttribute('data-service');
            
            // Remove active class from all tabs and categories
            serviceNavTabs.forEach(t => t.classList.remove('active'));
            serviceCategories.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding category
            this.classList.add('active');
            const targetCategory = document.getElementById(serviceId);
            if (targetCategory) {
                targetCategory.classList.add('active');
                
                // Scroll to category
                targetCategory.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL hash
                history.pushState(null, null, `#${serviceId}`);
            }
        });
    });
}

// FAQ Accordion
function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (!faqQuestions.length) return;
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all other FAQ items
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                const ans = q.nextElementSibling;
                if (ans) {
                    ans.style.maxHeight = null;
                }
            });
            
            // Toggle current FAQ item
            if (!isActive) {
                this.classList.add('active');
                if (answer) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            }
        });
    });
    
    // Initialize first FAQ item as open
    const firstAnswer = faqQuestions[0].nextElementSibling;
    if (firstAnswer) {
        faqQuestions[0].classList.add('active');
        firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
    }
}

// Scroll Animations
function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) return;
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animateElements = document.querySelectorAll('.subcategory-card, .process-step');
    
    animateElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Hover Effects
function initHoverEffects() {
    // Tech tags
    document.querySelectorAll('.tech-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Service cards
    document.querySelectorAll('.subcategory-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.subcategory-icon i');
            if (icon) icon.style.transform = 'rotate(10deg) scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.subcategory-icon i');
            if (icon) icon.style.transform = 'rotate(0) scale(1)';
        });
    });
    
    // Process steps
    document.querySelectorAll('.process-step').forEach(step => {
        step.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.step-icon');
            if (icon) icon.style.transform = 'rotate(10deg) scale(1.1)';
        });
        
        step.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.step-icon');
            if (icon) icon.style.transform = 'rotate(0) scale(1)';
        });
    });
}

// Footer Links
function initFooterLinks() {
    document.querySelectorAll('.footer-links a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            
            const targetElement = document.getElementById(targetId.substring(1));
            if (targetElement) {
                // Update active service
                const serviceNavTabs = document.querySelectorAll('.service-nav-tab');
                const serviceCategories = document.querySelectorAll('.service-category');
                
                serviceNavTabs.forEach(tab => tab.classList.remove('active'));
                const matchingTab = document.querySelector(`[data-service="${targetId.substring(1)}"]`);
                if (matchingTab) matchingTab.classList.add('active');
                
                serviceCategories.forEach(c => c.classList.remove('active'));
                targetElement.classList.add('active');
                
                // Smooth scroll
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Update URL
                history.pushState(null, null, targetId);
            }
        });
    });
}

// Initialize from URL hash
function initURLHash() {
    const hash = window.location.hash;
    if (hash) {
        const targetElement = document.getElementById(hash.substring(1));
        if (targetElement && targetElement.classList.contains('service-category')) {
            const serviceNavTabs = document.querySelectorAll('.service-nav-tab');
            const serviceCategories = document.querySelectorAll('.service-category');
            
            serviceNavTabs.forEach(tab => tab.classList.remove('active'));
            const matchingTab = document.querySelector(`[data-service="${hash.substring(1)}"]`);
            if (matchingTab) matchingTab.classList.add('active');
            
            serviceCategories.forEach(c => c.classList.remove('active'));
            targetElement.classList.add('active');
        }
    }
}

// Handle window hash changes
window.addEventListener('hashchange', initURLHash);

// Add to your services_page.js or include in the HTML

// Shrink navigation on scroll
function initShrinkNav() {
    const navSection = document.querySelector('.services-nav-section');
    if (!navSection) return;
    
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 200) {
            navSection.classList.add('shrink');
        } else {
            navSection.classList.remove('shrink');
        }
        
        lastScrollTop = scrollTop;
    });
}

// Also add smooth scroll to categories
function initCategoryNavigation() {
    const serviceNavTabs = document.querySelectorAll('.service-nav-tab');
    if (!serviceNavTabs.length) return;
    
    serviceNavTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const serviceId = this.getAttribute('data-service');
            const targetElement = document.getElementById(serviceId);
            
            if (targetElement) {
                // Calculate offset for sticky nav
                const navHeight = document.querySelector('.services-nav-section').offsetHeight;
                const headerHeight = document.querySelector('header').offsetHeight;
                const offset = navHeight + headerHeight + 20;
                
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Call these functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initShrinkNav();
    initCategoryNavigation();
});