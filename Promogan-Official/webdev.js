// Technologies data
const technologies = {
    frontend: [
        { name: "React.js", icon: "fab fa-react" },
        { name: "Angular", icon: "fab fa-angular" },
        { name: "Vue.js", icon: "fab fa-vuejs" },
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "Tailwind CSS", icon: "fas fa-palette" },
        { name: "Bootstrap", icon: "fab fa-bootstrap" },
        { name: "Next.js", icon: "fas fa-arrow-right" },
        { name: "Gatsby", icon: "fas fa-bolt" }
    ],
    backend: [
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Express.js", icon: "fas fa-server" },
        { name: "PHP", icon: "fab fa-php" },
        { name: "Laravel", icon: "fas fa-laravel" },
        { name: "Python", icon: "fab fa-python" },
        { name: "Django", icon: "fas fa-database" },
        { name: "Flask", icon: "fas fa-flask" },
        { name: ".NET", icon: "fab fa-microsoft" },
        { name: "ASP.NET Core", icon: "fas fa-code" }
    ],
    cms: [
        { name: "WordPress", icon: "fab fa-wordpress" },
        { name: "Drupal", icon: "fas fa-drupal" },
        { name: "Shopify", icon: "fab fa-shopify" },
        { name: "WooCommerce", icon: "fab fa-wordpress" },
        { name: "Magento", icon: "fas fa-shopping-cart" },
        { name: "Custom CMS", icon: "fas fa-cogs" }
    ],
    database: [
        { name: "MySQL", icon: "fas fa-database" },
        { name: "PostgreSQL", icon: "fas fa-database" },
        { name: "MongoDB", icon: "fas fa-leaf" },
        { name: "Firebase", icon: "fas fa-fire" },
        { name: "Redis", icon: "fas fa-bolt" }
    ]
};

// Initialize technologies display
document.addEventListener('DOMContentLoaded', function() {
    // Load initial technologies (frontend)
    displayTechnologies('frontend');
    
    // Add click events to technology tabs
    const techTabs = document.querySelectorAll('.tech-tab');
    techTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            techTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Display technologies for selected category
            const category = this.getAttribute('data-category');
            displayTechnologies(category);
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
    
    // Add animation to process steps on scroll
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
});

// Function to display technologies
function displayTechnologies(category) {
    const techGrid = document.getElementById('techGrid');
    const techData = technologies[category] || [];
    
    // Clear current technologies
    techGrid.innerHTML = '';
    
    // Add technologies for selected category
    techData.forEach(tech => {
        const techItem = document.createElement('div');
        techItem.className = 'tech-item';
        techItem.innerHTML = `
            <div class="tech-icon">
                <i class="${tech.icon}"></i>
            </div>
            <h4>${tech.name}</h4>
        `;
        techGrid.appendChild(techItem);
    });
}

// Function to handle contact form submission (placeholder)
function handleContactForm(e) {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    // In a real implementation, you would send form data to a server here
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .process-step, .overview-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .process-step.animated, .overview-card.animated {
        opacity: 1;
        transform: translateY(0);
    }
    
    .process-step:nth-child(1).animated { transition-delay: 0.1s; }
    .process-step:nth-child(2).animated { transition-delay: 0.2s; }
    .process-step:nth-child(3).animated { transition-delay: 0.3s; }
    .process-step:nth-child(4).animated { transition-delay: 0.4s; }
    .process-step:nth-child(5).animated { transition-delay: 0.5s; }
`;
document.head.appendChild(style);