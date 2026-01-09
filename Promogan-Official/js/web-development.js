// Technologies data
(function () {
    const webTechnologies = {
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

    function initWebDevelopmentPage() {
        // Load initial technologies (frontend)
        displayTechnologies('frontend');

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
        if (window.webDevObserver) {
            window.webDevObserver.disconnect()
        }
        window.webDevObserver = new IntersectionObserver(entries => {
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
            animTargets.forEach(el => window.webDevObserver.observe(el));
        }

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

        const techData = webTechnologies[category] || [];
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

    initWebDevelopmentPage()
})()