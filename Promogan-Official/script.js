// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});
// Mobile Dropdown Toggle
document.querySelectorAll('.dropdown > a').forEach(drop => {
    drop.addEventListener('click', function (e) {
        if (window.innerWidth < 900) {
            e.preventDefault();
            this.parentElement.classList.toggle('open');
        }
    });
});


// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'var(--shadow)';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.classList.contains('home-link')) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('nav ul').classList.remove('show');
            return;
        }
        
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('nav ul').classList.remove('show');
        }
    });
});

// Initialize Particles.js
document.addEventListener('DOMContentLoaded', function() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
    
    // Animate numbers in hero stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current);
        }, 16);
    });
    
    // Solutions tabs functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to current button and pane
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Testimonials slider
    let currentTestimonial = 0;
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.dot');
    
    function showTestimonial(n) {
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        
        testimonialSlides[n].classList.add('active');
        testimonialDots[n].classList.add('active');
    }
    
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentTestimonial = index;
            showTestimonial(currentTestimonial);
        });
    });
    
    document.querySelector('.testimonial-prev').addEventListener('click', function() {
        currentTestimonial = (currentTestimonial - 1 + testimonialSlides.length) % testimonialSlides.length;
        showTestimonial(currentTestimonial);
    });
    
    document.querySelector('.testimonial-next').addEventListener('click', function() {
        currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
        showTestimonial(currentTestimonial);
    });
    
    // Auto slide testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
        showTestimonial(currentTestimonial);
    }, 5000);
    
    // Form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
    
    // Newsletter form submission
    document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with: ${email}`);
        this.reset();
    });
    
    // Intersection Observer for animations
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
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .about-content, .portfolio-item, .tech-category');
    
    animateElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Enhanced Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const headerContainer = document.querySelector('.header-container');
    const logo = document.querySelector('.logo-image');
    
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        header.classList.add('shrink');
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'var(--shadow)';
        header.classList.remove('shrink');
    }
    
    // Add floating animation to navbar on scroll
    if (window.scrollY > 100) {
        header.style.animation = 'floatNav 3s ease-in-out infinite';
    } else {
        header.style.animation = 'none';
    }
});

// Enhanced Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    const menuIcon = this.querySelector('i');
    
    nav.classList.toggle('show');
    this.classList.toggle('active');
    
    // Change menu icon
    if (nav.classList.contains('show')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});

// Active Nav Link Highlighting
function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}` || 
            (currentSection === '' && link.classList.contains('home-link'))) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveNavLink);

// Ripple Effect for Buttons
function createRipple(event) {
    const button = event.currentTarget;
    
    // Remove existing ripples
    const existingRipples = button.querySelectorAll('.ripple');
    existingRipples.forEach(ripple => ripple.remove());
    
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');
    
    button.appendChild(circle);
}

// Add ripple effect to all buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Button Loading State
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.classList.add('loading');
        button.disabled = true;
    } else {
        button.classList.remove('loading');
        button.disabled = false;
    }
}

// Form submission with loading state
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const submitButton = this.querySelector('button[type="submit"]');
    
    // Show loading state
    setButtonLoading(submitButton, true);
    
    // Simulate API call
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
        setButtonLoading(submitButton, false);
    }, 1500);
});

// Newsletter form submission with loading state
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const submitButton = this.querySelector('button[type="submit"]');
    const email = this.querySelector('input[type="email"]').value;
    
    // Show loading state
    setButtonLoading(submitButton, true);
    
    // Simulate API call
    setTimeout(() => {
        alert(`Thank you for subscribing with: ${email}`);
        this.reset();
        setButtonLoading(submitButton, false);
    }, 1500);
});

// Add pulse animation to primary CTA buttons
document.querySelectorAll('.cta-button.primary').forEach(button => {
    button.classList.add('pulse');
});

// Enhanced smooth scrolling with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.classList.contains('home-link')) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('nav ul').classList.remove('show');
            document.querySelector('.mobile-menu').classList.remove('active');
            document.querySelector('.mobile-menu i').classList.remove('fa-times');
            document.querySelector('.mobile-menu i').classList.add('fa-bars');
            return;
        }
        
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('nav ul').classList.remove('show');
            document.querySelector('.mobile-menu').classList.remove('active');
            document.querySelector('.mobile-menu i').classList.remove('fa-times');
            document.querySelector('.mobile-menu i').classList.add('fa-bars');
        }
    });
});

// Initialize active nav link on page load
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavLink();
    
    // Add hover effect to logo
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    logo.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});





/* TECHNOLOGY DATA */
const techData = {
    frontend: [
        { name: "HTML5", icon: "fab fa-html5", color: "#FF5722" },
        { name: "CSS3", icon: "fab fa-css3-alt", color: "#2965F1" },
        { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
        { name: "React", icon: "fab fa-react", color: "#61DBFB" },
        { name: "Vue.js", icon: "fab fa-vuejs", color: "#42B883" },
        { name: "Angular", icon: "fab fa-angular", color: "#DD0031" }
    ],
    backend: [
        { name: "Node.js", icon: "fab fa-node-js", color: "#3C873A" },
        { name: "Python", icon: "fab fa-python", color: "#347AB4" },
        { name: "PHP", icon: "fab fa-php", color: "#777BB4" },
        { name: "MySQL", icon: "fas fa-database", color: "#00618A" },
        { name: "Node.js", icon: "fab fa-node-js", color: "#3C873A" },
        { name: "PHP", icon: "fab fa-php", color: "#777BB4" }
        
    ],
    mobile: [
        { name: "Android", icon: "fab fa-android", color: "#3DDC84" },
        { name: "iOS", icon: "fab fa-apple", color: "#000" },
        { name: "React Native", icon: "fab fa-react", color: "#61DBFB" },
        { name: "Flutter", icon: "fas fa-mobile-alt", color: "#02569B" },
        { name: "iOS", icon: "fab fa-apple", color: "#000" },
        { name: "React Native", icon: "fab fa-react", color: "#61DBFB" }
    ],
    cloud: [
        { name: "AWS", icon: "fab fa-aws", color: "#FF9900" },
        { name: "Azure", icon: "fab fa-microsoft", color: "#0078D4" },
        { name: "Google Cloud", icon: "fab fa-google", color: "#DB4437" },
        { name: "AWS", icon: "fab fa-aws", color: "#FF9900" },
        { name: "Azure", icon: "fab fa-microsoft", color: "#0078D4" },
        { name: "Google Cloud", icon: "fab fa-google", color: "#DB4437" }
        
    ],
    devops: [
        { name: "Docker", icon: "fab fa-docker", color: "#0db7ed" },
        { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
        { name: "Kubernetes", icon: "fas fa-cubes", color: "#326CE5" },
        { name: "Docker", icon: "fab fa-docker", color: "#0db7ed" },
        { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
        { name: "Kubernetes", icon: "fas fa-cubes", color: "#326CE5" },
    ]
};

// INJECT TECHNOLOGIES
function loadTech(category) {
    const slider = document.getElementById("techSlider");
    slider.innerHTML = "";

    // Create first set
    techData[category].forEach(tech => {
        const card = document.createElement("div");
        card.className = "tech-card";
        card.style.setProperty("--tech-glow", tech.color);
        card.innerHTML = `<i class="${tech.icon}" style="color:${tech.color}"></i><span>${tech.name}</span>`;
        slider.appendChild(card);
    });

    // Create second set (duplicate for seamless loop)
    techData[category].forEach(tech => {
        const card = document.createElement("div");
        card.className = "tech-card";
        card.style.setProperty("--tech-glow", tech.color);
        card.innerHTML = `<i class="${tech.icon}" style="color:${tech.color}"></i><span>${tech.name}</span>`;
        slider.appendChild(card);
    });

    // Calculate optimal animation duration based on number of cards
    const cardCount = techData[category].length;
    const animationDuration = cardCount * 3; // 3 seconds per card
    slider.style.animationDuration = `${animationDuration}s`;
}

// Initialize animation
function initSliderAnimation() {
    const slider = document.getElementById("techSlider");
    
    // Reset animation to prevent glitches
    slider.style.animation = 'none';
    slider.offsetHeight; // Trigger reflow
    slider.style.animation = null;
    
    // Handle animation end for smoother loop
    slider.addEventListener('animationiteration', () => {
        // This ensures smooth looping
        slider.style.animation = 'none';
        slider.offsetHeight;
        slider.style.animation = null;
    });
}

/* TABS SWITCH */
document.querySelectorAll(".tech-tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelector(".tech-tab.active").classList.remove("active");
        tab.classList.add("active");
        loadTech(tab.dataset.category);
        initSliderAnimation();
    });
});

// Initialize on load
window.addEventListener('load', () => {
    // Load default category (you might want to set this)
    loadTech('frontend'); // or whatever your default category is
    initSliderAnimation();
});

// Service Navigation Tabs for Home Page
// function initServiceTabs() {
//     const serviceNavTabs = document.querySelectorAll('.service-nav-tab');
//     const serviceCategories = document.querySelectorAll('.service-category');
    
//     if (!serviceNavTabs.length || !serviceCategories.length) return;
    
//     serviceNavTabs.forEach(tab => {
//         tab.addEventListener('click', function() {
//             const serviceId = this.getAttribute('data-service');
            
//             // Remove active class from all tabs and categories
//             serviceNavTabs.forEach(t => t.classList.remove('active'));
//             serviceCategories.forEach(c => c.classList.remove('active'));
            
//             // Add active class to clicked tab and corresponding category
//             this.classList.add('active');
//             const targetCategory = document.getElementById(serviceId);
//             if (targetCategory) {
//                 targetCategory.classList.add('active');
                
//                 // Scroll to category
//                 targetCategory.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'start'
//                 });
                
//                 // Update URL hash
//                 history.pushState(null, null, `#${serviceId}`);
//             }
//         });
//     });
// }

// Initialize service tabs when DOM is loaded
// document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // Initialize service tabs
    // initServiceTabs();
    
    // ... rest of existing code ...
// });

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".service-nav-tab");
    const sections = document.querySelectorAll(".service-category");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = tab.dataset.service;

            /* 1. Remove active from ALL tabs */
            tabs.forEach(t => t.classList.remove("active"));

            /* 2. Hide ALL service sections */
            sections.forEach(section => {
                section.classList.remove("active");
                section.style.display = "none";
            });

            /* 3. Activate clicked tab */
            tab.classList.add("active");

            /* 4. Show matching section */
            const activeSection = document.getElementById(target);
            if (activeSection) {
                activeSection.classList.add("active");
                activeSection.style.display = "block";
            }
        });
    });
});