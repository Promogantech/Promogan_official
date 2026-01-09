(function () {
    // IT Consulting Expertise Areas Data
    const expertiseAreas = {
        infrastructure: [
            { name: "Cloud Infrastructure", icon: "fas fa-cloud" },
            { name: "Hybrid Systems", icon: "fas fa-server" },
            { name: "Network Design", icon: "fas fa-network-wired" },
            { name: "Cost Optimization", icon: "fas fa-chart-line" },
            { name: "Scalability Planning", icon: "fas fa-expand-arrows-alt" },
            { name: "Disaster Recovery", icon: "fas fa-redo" },
            { name: "Performance Tuning", icon: "fas fa-tachometer-alt" },
            { name: "Virtualization", icon: "fas fa-cube" }
        ],
        development: [
            { name: "Software Architecture", icon: "fas fa-sitemap" },
            { name: "Microservices", icon: "fas fa-microchip" },
            { name: "API Design", icon: "fas fa-code-branch" },
            { name: "DevOps Practices", icon: "fas fa-code" },
            { name: "Containerization", icon: "fab fa-docker" },
            { name: "CI/CD Pipelines", icon: "fas fa-stream" },
            { name: "Code Quality", icon: "fas fa-check-double" },
            { name: "Agile Methodologies", icon: "fas fa-tasks" }
        ],
        security: [
            { name: "Cybersecurity", icon: "fas fa-shield-alt" },
            { name: "Risk Assessment", icon: "fas fa-exclamation-triangle" },
            { name: "Compliance", icon: "fas fa-file-contract" },
            { name: "IAM Strategy", icon: "fas fa-user-lock" },
            { name: "Vulnerability Scan", icon: "fas fa-search" },
            { name: "Data Protection", icon: "fas fa-database" },
            { name: "Security Audit", icon: "fas fa-clipboard-check" },
            { name: "Incident Response", icon: "fas fa-first-aid" }
        ],
        transformation: [
            { name: "Digital Strategy", icon: "fas fa-sync-alt" },
            { name: "AI/ML Integration", icon: "fas fa-brain" },
            { name: "Legacy Modernization", icon: "fas fa-history" },
            { name: "Process Automation", icon: "fas fa-robot" },
            { name: "Cloud Migration", icon: "fas fa-cloud-upload-alt" },
            { name: "Workflow Digitization", icon: "fas fa-digital-tachograph" },
            { name: "Change Management", icon: "fas fa-users-cog" },
            { name: "ROI Analysis", icon: "fas fa-chart-bar" }
        ]
    };

    function initItConsultingPage() {
        // Load initial expertise areas (infrastructure)
        displayExpertiseAreas('infrastructure');

        // Add click events to technology tabs
        const techTabs = document.querySelectorAll('.tech-tab');
        if (techTabs.length === 0) return

        techTabs.forEach(tab => {
            tab.addEventListener('click', function () {
                // Remove active class from all tabs
                techTabs.forEach(t => t.classList.remove('active'));

                // Add active class to clicked tab
                this.classList.add('active');

                // Display expertise for selected category
                const category = this.getAttribute('data-category');
                displayExpertiseAreas(category);
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('#service-content a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
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
        if (window.ItConsultingObserver) {
            window.ItConsultingObserver.disconnect()
        }
        window.ItConsultingObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated')
                }
            })
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        })
        const animTargets = document.querySelectorAll('.process-step, .overview-card')
        if (animTargets.length) {
            animTargets.forEach(el => window.ItConsultingObserver.observe(el));
        }
        const benefitItems = document.querySelectorAll('.benefit-item');
        benefitItems.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'none';
        });
    }

    // Function to display expertise areas
    function displayExpertiseAreas(category) {
        const techGrid = document.getElementById('techGrid');
        if (!techGrid) return

        const expertiseData = expertiseAreas[category] || [];
        // Clear current technologies
        techGrid.innerHTML = '';

        // Add expertise areas for selected category
        expertiseData.forEach(area => {
            const techItem = document.createElement('div');
            techItem.className = 'tech-item';
            techItem.innerHTML = `
            <div class="tech-icon">
                <i class="${area.icon}"></i>
            </div>
            <h4>${area.name}</h4>
        `;
            techGrid.appendChild(techItem);
        });
    }

    initItConsultingPage()

    // // Function to handle contact form submission (placeholder)
    // function handleContactForm(e) {
    //     e.preventDefault();
    //     alert('Thank you for your interest in our IT Consulting services! We will contact you soon.');
    //     // In a real implementation, you would send form data to a server here
    // }
})()