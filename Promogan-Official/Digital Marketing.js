// Platforms data for digital marketing
const platforms = {
    advertising: [
        { name: "Google Ads", icon: "fab fa-google" },
        { name: "Bing Ads", icon: "fab fa-microsoft" },
        { name: "Facebook Ads", icon: "fab fa-facebook" },
        { name: "Instagram Ads", icon: "fab fa-instagram" },
        { name: "LinkedIn Ads", icon: "fab fa-linkedin" },
        { name: "Twitter Ads", icon: "fab fa-twitter" },
        { name: "YouTube Ads", icon: "fab fa-youtube" },
        { name: "TikTok Ads", icon: "fab fa-tiktok" },
        { name: "Pinterest Ads", icon: "fab fa-pinterest" }
    ],
    social: [
        { name: "Facebook", icon: "fab fa-facebook-f" },
        { name: "Instagram", icon: "fab fa-instagram" },
        { name: "LinkedIn", icon: "fab fa-linkedin-in" },
        { name: "Twitter/X", icon: "fab fa-twitter" },
        { name: "YouTube", icon: "fab fa-youtube" },
        { name: "TikTok", icon: "fab fa-tiktok" },
        { name: "Pinterest", icon: "fab fa-pinterest" },
        { name: "Snapchat", icon: "fab fa-snapchat" }
    ],
    analytics: [
        { name: "Google Analytics", icon: "fas fa-chart-bar" },
        { name: "Google Search Console", icon: "fas fa-search" },
        { name: "Google Tag Manager", icon: "fas fa-tags" },
        { name: "Facebook Analytics", icon: "fab fa-facebook" },
        { name: "HubSpot", icon: "fas fa-hubspot" },
        { name: "Hotjar", icon: "fas fa-fire" },
        { name: "SEMrush", icon: "fas fa-chart-line" },
        { name: "Ahrefs", icon: "fas fa-link" }
    ]
};

// Initialize platforms display
document.addEventListener('DOMContentLoaded', function() {
    // Load initial platforms (advertising)
    displayPlatforms('advertising');
    
    // Add click events to platform tabs
    const platformTabs = document.querySelectorAll('.tech-tab');
    platformTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            platformTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Display platforms for selected category
            const category = this.getAttribute('data-category');
            displayPlatforms(category);
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation to process steps and overview cards on scroll
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe process steps and overview cards
    document.querySelectorAll('.process-step, .overview-card, .benefit-item').forEach(el => {
        observer.observe(el);
    });
    
    // Initialize all CTA buttons
    document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                alert('Thank you for your interest! This feature would connect to our contact form or booking system.');
            }
        });
    });
});

// Function to display platforms
function displayPlatforms(category) {
    const platformGrid = document.getElementById('platformGrid');
    const platformData = platforms[category] || [];
    
    // Clear current platforms
    platformGrid.innerHTML = '';
    
    // Add platforms for selected category
    platformData.forEach(platform => {
        const platformItem = document.createElement('div');
        platformItem.className = 'tech-item';
        platformItem.innerHTML = `
            <div class="tech-icon">
                <i class="${platform.icon}"></i>
            </div>
            <h4>${platform.name}</h4>
        `;
        platformGrid.appendChild(platformItem);
    });
}

// Function to simulate form submission
function handleContactForm(e) {
    e.preventDefault();
    alert('Thank you for your interest! Our digital marketing team will contact you within 24 hours to schedule your free audit.');
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .process-step, .overview-card, .benefit-item {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .process-step.animated, .overview-card.animated, .benefit-item.animated {
        opacity: 1;
        transform: translateY(0);
    }
    
    .process-step:nth-child(1).animated { transition-delay: 0.1s; }
    .process-step:nth-child(2).animated { transition-delay: 0.2s; }
    .process-step:nth-child(3).animated { transition-delay: 0.3s; }
    .process-step:nth-child(4).animated { transition-delay: 0.4s; }
    .process-step:nth-child(5).animated { transition-delay: 0.5s; }
    
    .overview-card:nth-child(1).animated { transition-delay: 0.1s; }
    .overview-card:nth-child(2).animated { transition-delay: 0.2s; }
    .overview-card:nth-child(3).animated { transition-delay: 0.3s; }
    .overview-card:nth-child(4).animated { transition-delay: 0.4s; }
    .overview-card:nth-child(5).animated { transition-delay: 0.5s; }
    .overview-card:nth-child(6).animated { transition-delay: 0.6s; }
    
    .benefit-item:nth-child(1).animated { transition-delay: 0.1s; }
    .benefit-item:nth-child(2).animated { transition-delay: 0.2s; }
    .benefit-item:nth-child(3).animated { transition-delay: 0.3s; }
    .benefit-item:nth-child(4).animated { transition-delay: 0.4s; }
    .benefit-item:nth-child(5).animated { transition-delay: 0.5s; }
    .benefit-item:nth-child(6).animated { transition-delay: 0.6s; }
`;
document.head.appendChild(style);