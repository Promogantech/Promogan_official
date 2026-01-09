(function () {
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

    function initCloudSolutionPage() {
        // Load initial technologies (AWS)
        displayCloudTechnologies('aws');

        // Add click events to technology tabs
        const techTabs = document.querySelectorAll('.tech-tab');
        if (techTabs.length === 0) return

        techTabs.forEach(tab => {
            tab.addEventListener('click', function () {
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
        if (window.CloudSolutionObserver) {
            window.CloudSolutionObserver.disconnect()
        }
        window.CloudSolutionObserver = new IntersectionObserver(entries => {
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
            animTargets.forEach(el => window.CloudSolutionObserver.observe(el));
        }

        // Add form submission handling (placeholder)
        const ctaButtons = document.querySelectorAll('#service-content .btn-primary, #service-content .btn-secondary');
        ctaButtons.forEach(button => {
            if (button.textContent.includes('Schedule') || button.textContent.includes('Request') || button.textContent.includes('Get')) {
                button.addEventListener('click', function (e) {
                    if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                        e.preventDefault();
                        alert('Thank you for your interest in our Cloud Solutions! A cloud specialist will contact you shortly.');
                    }
                });
            }
        });

        const benefitItems = document.querySelectorAll('.benefit-item');
        benefitItems.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'none';
        });
    }

    // Function to display cloud technologies
    function displayCloudTechnologies(category) {
        const techGrid = document.getElementById('techGrid');
        if (!techGrid) return

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

    initCloudSolutionPage()
})()