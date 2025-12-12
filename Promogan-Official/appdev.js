// Services Page JavaScript - Matching webdev.js style
document.addEventListener('DOMContentLoaded', function() {
    // Service navigation
    const serviceItems = document.querySelectorAll('.deliver-item');
    const serviceSections = {
        'web': document.getElementById('web-details'),
        // Add other service sections as needed
    };

    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            const serviceType = this.getAttribute('data-service');
            
            // Update active service
            serviceItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Here you would show/hide different service sections
            // For now, we'll just update the main section
            updateServiceContent(serviceType);
        });
    });

    // Technologies Data
    const technologies = {
        frontend: [
            { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
            { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#42B883' },
            { name: 'Angular', icon: 'fab fa-angular', color: '#DD0031' },
            { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
            { name: 'TypeScript', icon: 'fas fa-code', color: '#3178C6' },
            { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26' },
            { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6' },
            { name: 'SASS', icon: 'fab fa-sass', color: '#CC6699' }
        ],
        backend: [
            { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
            { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
            { name: 'PHP', icon: 'fab fa-php', color: '#777BB4' },
            { name: 'Java', icon: 'fab fa-java', color: '#ED8B00' },
            { name: 'C#', icon: 'fas fa-code', color: '#239120' },
            { name: 'Ruby', icon: 'fas fa-gem', color: '#CC342D' },
            { name: 'Express.js', icon: 'fas fa-server', color: '#000000' },
            { name: 'Django', icon: 'fas fa-database', color: '#092E20' }
        ],
        cms: [
            { name: 'WordPress', icon: 'fab fa-wordpress', color: '#21759B' },
            { name: 'Shopify', icon: 'fas fa-shopping-cart', color: '#7AB55C' },
            { name: 'WooCommerce', icon: 'fas fa-store', color: '#96588A' },
            { name: 'Magento', icon: 'fas fa-shopping-bag', color: '#EE672F' },
            { name: 'Drupal', icon: 'fas fa-cube', color: '#0678BE' },
            { name: 'Joomla', icon: 'fas fa-joomla', color: '#5091CD' },
            { name: 'Contentful', icon: 'fas fa-cloud', color: '#2478CC' },
            { name: 'Strapi', icon: 'fas fa-plug', color: '#8E75C2' }
        ],
        database: [
            { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
            { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791' },
            { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47A248' },
            { name: 'Firebase', icon: 'fas fa-fire', color: '#FFCA28' },
            { name: 'Redis', icon: 'fas fa-bolt', color: '#DC382D' },
            { name: 'SQLite', icon: 'fas fa-database', color: '#003B57' },
            { name: 'Oracle', icon: 'fas fa-database', color: '#F80000' },
            { name: 'AWS DynamoDB', icon: 'fab fa-aws', color: '#FF9900' }
        ]
    };

    // Technology tabs functionality
    const techTabs = document.querySelectorAll('.tech-tab');
    const techGrid = document.getElementById('techGrid');

    function loadTechnologies(category) {
        techGrid.innerHTML = '';
        
        if (technologies[category]) {
            technologies[category].forEach(tech => {
                const techItem = document.createElement('div');
                techItem.className = 'tech-item';
                techItem.innerHTML = `
                    <div class="tech-icon" style="color: ${tech.color}">
                        <i class="${tech.icon}"></i>
                    </div>
                    <h4>${tech.name}</h4>
                `;
                techGrid.appendChild(techItem);
            });
        }
    }

    // Initialize with frontend technologies
    loadTechnologies('frontend');

    // Add click event to technology tabs
    techTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active tab
            techTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Load technologies for selected category
            loadTechnologies(category);
        });
    });

    // Update service content
    function updateServiceContent(serviceType) {
        // This would update the page content based on selected service
        console.log(`Loading content for: ${serviceType}`);
        
        // In a real implementation, you would fetch and display different content
        // For now, we'll just update the main heading
        const serviceTitles = {
            'mobile': 'Mobile App Development',
            'web': 'Web Development',
            'digital': 'Digital Marketing',
            'cloud': 'Cloud Solutions',
            'consulting': 'IT Consulting',
            'support': 'IT Support'
        };
        
        const serviceDescriptions = {
            'mobile': 'Native iOS, Android, and cross-platform mobile applications',
            'web': 'Custom websites, web apps, and e-commerce solutions',
            'digital': 'SEO, social media, content marketing, and advertising',
            'cloud': 'Cloud migration, security, and optimization services',
            'consulting': 'Technology strategy, audit, and digital transformation',
            'support': 'Technical support, security management, and maintenance'
        };
        
        const title = serviceTitles[serviceType] || 'Our Services';
        const description = serviceDescriptions[serviceType] || 'Comprehensive digital solutions';
        
        const mainHeading = document.querySelector('.service-overview h2');
        const mainDescription = document.querySelector('.service-overview p.text-center');
        
        if (mainHeading) mainHeading.textContent = title;
        if (mainDescription) mainDescription.textContent = description;
        
        // Smooth scroll to service details
        const serviceSection = document.querySelector('.service-overview');
        if (serviceSection) {
            window.scrollTo({
                top: serviceSection.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    }

    // Form submission handling
    const contactButtons = document.querySelectorAll('a[href="#contact"]');
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // In a real implementation, this would open a contact form modal
            // or scroll to a contact section
            alert('Contact form functionality would be implemented here.');
        });
    });

    // Pricing card hover effects
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('popular')) {
                this.style.transform = 'translateY(-10px)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('popular')) {
                this.style.transform = 'translateY(0)';
            } else {
                this.style.transform = 'scale(1.05) translateY(-10px)';
            }
        });
    });

    // Add hover effect to service items
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = 'var(--shadow-lg)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'var(--shadow)';
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Initialize animations
    function initAnimations() {
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

        // Observe elements for animation
        document.querySelectorAll('.overview-card, .process-step, .benefit-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });
    }

    initAnimations();
});