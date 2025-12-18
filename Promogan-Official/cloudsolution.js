// Cloud Technologies data
const cloudTechnologies = {
    aws: [
        { name: "EC2", icon: "fas fa-server" },
        { name: "S3", icon: "fas fa-database" },
        { name: "Lambda", icon: "fas fa-bolt" },
        { name: "RDS", icon: "fas fa-database" },
        { name: "VPC", icon: "fas fa-network-wired" },
        { name: "IAM", icon: "fas fa-user-shield" },
        { name: "CloudFront", icon: "fas fa-tachometer-alt" },
        { name: "Route 53", icon: "fas fa-globe" },
        { name: "EKS", icon: "fas fa-cubes" },
        { name: "CloudFormation", icon: "fas fa-layer-group" }
    ],
    azure: [
        { name: "Azure VMs", icon: "fas fa-server" },
        { name: "Blob Storage", icon: "fas fa-database" },
        { name: "Functions", icon: "fas fa-bolt" },
        { name: "SQL Database", icon: "fas fa-database" },
        { name: "Virtual Network", icon: "fas fa-network-wired" },
        { name: "Active Directory", icon: "fas fa-user-shield" },
        { name: "CDN", icon: "fas fa-tachometer-alt" },
        { name: "Kubernetes", icon: "fas fa-cubes" },
        { name: "DevOps", icon: "fas fa-code-branch" },
        { name: "ARM Templates", icon: "fas fa-layer-group" }
    ],
    gcp: [
        { name: "Compute Engine", icon: "fas fa-server" },
        { name: "Cloud Storage", icon: "fas fa-database" },
        { name: "Cloud Functions", icon: "fas fa-bolt" },
        { name: "Cloud SQL", icon: "fas fa-database" },
        { name: "VPC", icon: "fas fa-network-wired" },
        { name: "IAM", icon: "fas fa-user-shield" },
        { name: "Kubernetes", icon: "fas fa-cubes" },
        { name: "BigQuery", icon: "fas fa-chart-bar" },
        { name: "Cloud Run", icon: "fas fa-running" },
        { name: "Terraform", icon: "fas fa-layer-group" }
    ],
    devops: [
        { name: "Docker", icon: "fab fa-docker" },
        { name: "Kubernetes", icon: "fas fa-cubes" },
        { name: "Jenkins", icon: "fab fa-jenkins" },
        { name: "GitLab", icon: "fab fa-gitlab" },
        { name: "GitHub", icon: "fab fa-github" },
        { name: "Terraform", icon: "fas fa-layer-group" },
        { name: "Ansible", icon: "fas fa-cogs" },
        { name: "Prometheus", icon: "fas fa-chart-line" },
        { name: "Grafana", icon: "fas fa-chart-bar" },
        { name: "Helm", icon: "fas fa-ship" }
    ]
};

// Initialize technologies display
document.addEventListener('DOMContentLoaded', function() {
    // Load initial technologies (AWS)
    displayCloudTechnologies('aws');
    
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
            displayCloudTechnologies(category);
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
    document.querySelectorAll('.process-step, .overview-card').forEach(el => {
        observer.observe(el);
    });
    
    // Add form submission handling (placeholder)
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    ctaButtons.forEach(button => {
        if (button.textContent.includes('Schedule') || button.textContent.includes('Request') || button.textContent.includes('Get')) {
            button.addEventListener('click', function(e) {
                if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                    e.preventDefault();
                    alert('Thank you for your interest in our Cloud Solutions! A cloud specialist will contact you shortly.');
                }
            });
        }
    });
});

// Function to display cloud technologies
function displayCloudTechnologies(category) {
    const techGrid = document.getElementById('techGrid');
    const techData = cloudTechnologies[category] || [];
    
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
    
    .overview-card:nth-child(1).animated { transition-delay: 0.1s; }
    .overview-card:nth-child(2).animated { transition-delay: 0.2s; }
    .overview-card:nth-child(3).animated { transition-delay: 0.3s; }
    .overview-card:nth-child(4).animated { transition-delay: 0.4s; }
    .overview-card:nth-child(5).animated { transition-delay: 0.5s; }
    .overview-card:nth-child(6).animated { transition-delay: 0.6s; }
`;
document.head.appendChild(style);