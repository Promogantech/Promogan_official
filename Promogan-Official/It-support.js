// IT Services data
const itServices = {
    support: [
        { name: "24/7 Helpdesk", icon: "fas fa-headset" },
        { name: "Remote Support", icon: "fas fa-laptop-house" },
        { name: "On-site Support", icon: "fas fa-tools" },
        { name: "Ticket System", icon: "fas fa-ticket-alt" },
        { name: "Multi-channel Support", icon: "fas fa-comments" },
        { name: "Priority Handling", icon: "fas fa-exclamation-triangle" }
    ],
    security: [
        { name: "Firewall Setup", icon: "fas fa-shield-alt" },
        { name: "Antivirus Protection", icon: "fas fa-virus-slash" },
        { name: "Threat Monitoring", icon: "fas fa-eye" },
        { name: "Data Encryption", icon: "fas fa-lock" },
        { name: "Secure Access", icon: "fas fa-user-lock" },
        { name: "DLP Solutions", icon: "fas fa-database" }
    ],
    infrastructure: [
        { name: "Network Setup", icon: "fas fa-network-wired" },
        { name: "Server Management", icon: "fas fa-server" },
        { name: "Cloud Services", icon: "fas fa-cloud" },
        { name: "VPN Configuration", icon: "fas fa-user-shield" },
        { name: "Backup Solutions", icon: "fas fa-hdd" },
        { name: "Disaster Recovery", icon: "fas fa-life-ring" }
    ],
    management: [
        { name: "IT Asset Tracking", icon: "fas fa-laptop" },
        { name: "License Management", icon: "fas fa-file-contract" },
        { name: "Warranty Tracking", icon: "fas fa-calendar-check" },
        { name: "Procurement", icon: "fas fa-shopping-cart" },
        { name: "Regular Audits", icon: "fas fa-clipboard-check" },
        { name: "Performance Reports", icon: "fas fa-chart-line" }
    ]
};

// Initialize services display
document.addEventListener('DOMContentLoaded', function() {
    // Load initial services (support)
    displayServices('support');
    
    // Add click events to service tabs
    const serviceTabs = document.querySelectorAll('.tech-tab');
    serviceTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            serviceTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Display services for selected category
            const category = this.getAttribute('data-category');
            displayServices(category);
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
    
    // Add animation to process steps and cards on scroll
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
    document.querySelectorAll('.process-step, .overview-card').forEach(el => {
        observer.observe(el);
    });
    
    // Initialize animations for already visible elements
    const checkVisibility = () => {
        document.querySelectorAll('.process-step, .overview-card').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                el.classList.add('animated');
            }
        });
    };
    
    // Check on load
    checkVisibility();
    
    // Check on scroll
    window.addEventListener('scroll', checkVisibility);
});

// Function to display services
function displayServices(category) {
    const serviceGrid = document.getElementById('techGrid');
    const serviceData = itServices[category] || [];
    
    // Clear current services
    serviceGrid.innerHTML = '';
    
    // Add services for selected category
    serviceData.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.className = 'tech-item';
        serviceItem.innerHTML = `
            <div class="tech-icon">
                <i class="${service.icon}"></i>
            </div>
            <h4>${service.name}</h4>
        `;
        serviceGrid.appendChild(serviceItem);
    });
}

// Function to handle contact form submission (placeholder)
function handleContactForm(e) {
    e.preventDefault();
    alert('Thank you for your interest in our IT Support services! We will contact you soon.');
    // In a real implementation, you would send form data to a server here
}

// Add event listeners for CTA buttons
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.href === '#' || this.href.includes('#contact')) {
                e.preventDefault();
                handleContactForm(e);
            }
        });
    });
});