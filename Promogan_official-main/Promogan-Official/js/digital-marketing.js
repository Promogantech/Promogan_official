(function () {
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

    function initDigitalPage() {
        // Load initial platforms (advertising)
        displayPlatforms('advertising');

        // Add click events to platform tabs
        const platformTabs = document.querySelectorAll('.tech-tab');
        if (platformTabs.length === 0) return

        platformTabs.forEach(tab => {
            tab.addEventListener('click', function () {
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

        if (window.DigitalObserver) {
            window.DigitalObserver.disconnect()
        }
        window.DigitalObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated')
                }
            })
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        })
        const animTargets = document.querySelectorAll('.process-step, .overview-card, .benefit-item')
        if (animTargets.length) {
            animTargets.forEach(el => window.DigitalObserver.observe(el));
        }

        // Initialize all CTA buttons
        document.querySelectorAll('#service-content .btn-primary, #service-content .btn-secondary, #service-content .btn-outline').forEach(btn => {
            btn.addEventListener('click', function (e) {
                if (this.getAttribute('href') === '#') {
                    e.preventDefault();
                    alert('Thank you for your interest! This feature would connect to our contact form or booking system.');
                }
            });
        });

        const benefitItems = document.querySelectorAll('.benefit-item');
        benefitItems.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'none';
        });
    }


    // Function to display platforms
    function displayPlatforms(category) {
        const platformGrid = document.getElementById('platformGrid');
        if (!platformGrid) return

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

    initDigitalPage()

    // Function to simulate form submission
    // function handleContactForm(e) {
    //     e.preventDefault();
    //     alert('Thank you for your interest! Our digital marketing team will contact you within 24 hours to schedule your free audit.');
    // }
})()