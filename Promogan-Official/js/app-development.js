(function () {
    // Technologies data for mobile app development
    const mobileAppTechnologies = {
        ios: [
            { name: "Swift", icon: "fas fa-code" },
            { name: "SwiftUI", icon: "fas fa-paint-brush" },
            { name: "Objective-C", icon: "fab fa-apple" },
            { name: "Xcode", icon: "fas fa-laptop-code" },
            { name: "Core Data", icon: "fas fa-database" },
            { name: "ARKit", icon: "fas fa-vr-cardboard" },
            { name: "Core ML", icon: "fas fa-brain" },
            { name: "HealthKit", icon: "fas fa-heartbeat" }
        ],
        android: [
            { name: "Kotlin", icon: "fab fa-android" },
            { name: "Java", icon: "fab fa-java" },
            { name: "Android Studio", icon: "fas fa-code" },
            { name: "Jetpack Compose", icon: "fas fa-layer-group" },
            { name: "Material Design", icon: "fas fa-palette" },
            { name: "Firebase", icon: "fas fa-fire" },
            { name: "Google Services", icon: "fab fa-google" },
            { name: "Room Database", icon: "fas fa-database" }
        ],
        cross: [
            { name: "React Native", icon: "fab fa-react" },
            { name: "Flutter", icon: "fas fa-feather-alt" },
            { name: "Xamarin", icon: "fab fa-microsoft" },
            { name: "Ionic", icon: "fas fa-mobile-alt" },
            { name: "Expo", icon: "fas fa-rocket" },
            { name: "Dart", icon: "fas fa-dart" }
        ],
        backend: [
            { name: "Node.js", icon: "fab fa-node-js" },
            { name: "Express.js", icon: "fas fa-server" },
            { name: "Python", icon: "fab fa-python" },
            { name: "Django", icon: "fas fa-database" },
            { name: "PHP", icon: "fab fa-php" },
            { name: "Laravel", icon: "fas fa-laravel" },
            { name: "GraphQL", icon: "fas fa-project-diagram" },
            { name: "REST APIs", icon: "fas fa-network-wired" },
            { name: "Firebase", icon: "fas fa-fire" },
            { name: "AWS", icon: "fab fa-aws" }
        ]
    };

    function initAppDevelopmentPage() {
        // Load initial technologies (iOS)
        displayTechnologies('ios');

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
        if (window.AppDevObserver) {
            window.AppDevObserver.disconnect()
        }
        window.AppDevObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated')
                }
            })
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        })
        const animTargets = document.querySelectorAll('.process-step, .overview-card, .category-item')
        if (animTargets.length) {
            animTargets.forEach(el => window.AppDevObserver.observe(el));
        }

        // Add index variable to category items for staggered animation
        document.querySelectorAll('.category-item').forEach((item, index) => {
            item.style.setProperty('--index', index);
        });

        // Handle CTA button clicks
        document.querySelectorAll('#service-content .btn-primary, #service-content .btn-secondary, #service-content .btn-outline').forEach(button => {
            button.addEventListener('click', function (e) {
                if (this.getAttribute('href') === '#') {
                    e.preventDefault();
                    alert('Thank you for your interest in our Mobile App Development services! A representative will contact you shortly.');
                }
            });
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

        const techData = mobileAppTechnologies[category] || [];
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

    const style = {}

    initAppDevelopmentPage()
})()