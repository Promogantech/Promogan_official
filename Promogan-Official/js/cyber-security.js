(function () {
    // Cybersecurity frameworks and capabilities data
    const technologies = {
        frameworks: [
            { name: "Zero-Trust Architecture", icon: "fas fa-user-shield" },
            { name: "ISO 27001", icon: "fas fa-certificate" },
            { name: "NIST Framework", icon: "fas fa-shield-alt" },
            { name: "OWASP Top 10", icon: "fas fa-bug" },
            { name: "MITRE ATT&CK", icon: "fas fa-crosshairs" },
            { name: "SANS Top 20", icon: "fas fa-list-ol" }
        ],
        testing: [
            { name: "Web App Pentesting", icon: "fas fa-globe" },
            { name: "Mobile App Pentesting", icon: "fas fa-mobile-alt" },
            { name: "Cloud Security Testing", icon: "fas fa-cloud" },
            { name: "API Security Tests", icon: "fas fa-code" },
            { name: "Social Engineering", icon: "fas fa-user-ninja" },
            { name: "Red Team Exercises", icon: "fas fa-users" }
        ],
        compliance: [
            { name: "GDPR", icon: "fas fa-gavel" },
            { name: "PCI-DSS", icon: "fas fa-credit-card" },
            { name: "SOC 2", icon: "fas fa-chart-line" },
            { name: "HIPAA", icon: "fas fa-heartbeat" },
            { name: "RBI Compliance", icon: "fas fa-university" },
            { name: "ISO 27001", icon: "fas fa-certificate" }
        ],
        tools: [
            { name: "SIEM Solutions", icon: "fas fa-chart-bar" },
            { name: "IDS/IPS", icon: "fas fa-radar" },
            { name: "Firewall & WAF", icon: "fas fa-fire" },
            { name: "IAM Systems", icon: "fas fa-user-lock" },
            { name: "DLP Tools", icon: "fas fa-file-shield" },
            { name: "Encryption", icon: "fas fa-lock" }
        ]
    };

    function initCyberSecPage() {
        // Load initial technologies (frameworks)
        displayTechnologies('frameworks');

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
                displayTechnologies(category);
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
        if (window.CyberSecIbserver) {
            window.CyberSecIbserver.disconnect()
        }
        window.CyberSecIbserver = new IntersectionObserver(entries => {
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
            animTargets.forEach(el => window.CyberSecIbserver.observe(el));
        }

        // Form submission handling
        const contactForms = document.querySelectorAll('form');
        contactForms.forEach(form => {
            form.addEventListener('submit', handleContactForm);
        });

        const benefitItems = document.querySelectorAll('.benefit-item');
        benefitItems.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'none';
        });
    }

    // Function to display technologies
    function displayTechnologies(category) {
        const techGrid = document.getElementById('techGrid');
        if (!techGrid) return


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

    // Function to handle contact form submission
    function handleContactForm(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const service = formData.get('service');

        // In a real implementation, you would send this data to a server
        // For now, show a confirmation message
        alert(`Thank you ${name}! We have received your request for ${service} and will contact you at ${email} within 24 hours.`);

        // Reset form
        e.target.reset();

        return false;
    }

    initCyberSecPage()
})()