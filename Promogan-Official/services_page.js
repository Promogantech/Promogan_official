
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    initServiceTabs();
    initFAQAccordion();
    initScrollAnimations();
    initHoverEffects();
    initFooterLinks();
    initShrinkNav();
    initCategoryNavigation();
    initInitialServiceLoad();
    initScrollerButtons()
});

// FAQ Accordion
function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    if (!faqQuestions.length) return;

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
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

    const observer = new IntersectionObserver(function (entries) {
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
        tag.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });

        tag.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Service cards
    document.querySelectorAll('.subcategory-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = this.querySelector('.subcategory-icon i');
            if (icon) icon.style.transform = 'rotate(10deg) scale(1.1)';
        });

        card.addEventListener('mouseleave', function () {
            const icon = this.querySelector('.subcategory-icon i');
            if (icon) icon.style.transform = 'rotate(0) scale(1)';
        });
    });

    // Process steps
    document.querySelectorAll('.process-step').forEach(step => {
        step.addEventListener('mouseenter', function () {
            const icon = this.querySelector('.step-icon');
            if (icon) icon.style.transform = 'rotate(10deg) scale(1.1)';
        });

        step.addEventListener('mouseleave', function () {
            const icon = this.querySelector('.step-icon');
            if (icon) icon.style.transform = 'rotate(0) scale(1)';
        });
    });
}

// Footer Links
function initFooterLinks() {
    document.querySelectorAll('.footer-links a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const targetElement = document.getElementById(targetId.substring(1));
            if (targetElement) {
                // Update active service
                const serviceNavTabs = document.querySelectorAll('.service-nav-tab');

                serviceNavTabs.forEach(tab => tab.classList.remove('active'));
                const matchingTab = document.querySelector(`[data-service="${targetId.substring(1)}"]`);
                if (matchingTab) matchingTab.classList.add('active');


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

// Shrink navigation on scroll
function initShrinkNav() {
    const navSection = document.querySelector('.services-nav-section');
    if (!navSection) return;

    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
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
        tab.addEventListener('click', function () {
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

// service configuration
const serviceConfig = {
    "web-development.html": { js: ["js/web-development.js"] },
    "app-development.html": { js: ["js/app-development.js"] },
    "software-development.html": { js: ["js/software-development.js"] },
    "digital-marketing.html": { js: ["js/digital-marketing.js"] },
    "it-support.html": { js: ["js/it-support.js"] },
    "it-consulting.html": { js: ["js/it-consulting.js"] },
    "cyber-security.html": { js: ["js/cyber-security.js"] },
    "ai-ml-solution.html": { js: ["js/ai-ml-solution.js"] },
    "cloud-solution.html": { js: ["js/cloud-solution.js"] }
}

let activeScripts = [];

function unloadScripts() {
    activeScripts.forEach(s => s.remove());
    activeScripts = [];
}

function loadJS(src) {
    return new Promise(resolve => {
        const script = document.createElement("script");
        script.src = src;
        script.defer = true;
        script.dataset.dynamic = "true";
        script.onload = resolve;
        document.body.appendChild(script);
        activeScripts.push(script);
    });
}

async function loadService(file) {
    const container = document.getElementById("service-content");
    if(!container) return

    const res = await fetch(`services/${file}`);
    container.innerHTML = await res.text();

    const config = serviceConfig[file];
    if (!config) return;

    unloadScripts();
    for (const js of config.js || []) {
        await loadJS(js);
    }
}

function initServiceTabs() {
    const tabs = document.querySelectorAll(".service-nav-tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const file = tab.dataset.file;

            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            loadService(file);
            history.pushState(null, "", `#${file}`);
        });
    });
}


function initInitialServiceLoad() {
    const tabs = document.querySelectorAll(".service-nav-tab");
    const hash = window.location.hash.replace("#", "");

    let targetFile = hash && serviceConfig[hash]
        ? hash
        : "web-development.html"; // fallback

    tabs.forEach(tab => {
        if (tab.dataset.file === targetFile) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });

    loadService(targetFile);
}

function initScrollerButtons() {
    const tabs = document.querySelector(".services-nav-tabs");
    const leftBtn = document.querySelector(".scroll-btn.left");
    const rightBtn = document.querySelector(".scroll-btn.right");

    if (!tabs || !leftBtn || !rightBtn) return; // safety guard

    const scrollAmount = 300;

    leftBtn.addEventListener("click", () => {
        tabs.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    rightBtn.addEventListener("click", () => {
        tabs.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });
}