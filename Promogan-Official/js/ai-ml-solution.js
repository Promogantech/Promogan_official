(function () {
    // AI/ML Technologies data
    const technologies = {
        "ml-frameworks": [
            { name: "TensorFlow", icon: "fas fa-project-diagram" },
            { name: "PyTorch", icon: "fas fa-fire" },
            { name: "Scikit-learn", icon: "fas fa-robot" },
            { name: "Keras", icon: "fas fa-layer-group" },
            { name: "XGBoost", icon: "fas fa-chart-line" },
            { name: "Spark MLlib", icon: "fas fa-bolt" },
            { name: "Fast.ai", icon: "fas fa-rocket" },
            { name: "Caffe", icon: "fas fa-coffee" }
        ],
        "nlp-tools": [
            { name: "BERT", icon: "fas fa-language" },
            { name: "GPT Models", icon: "fas fa-comment-alt" },
            { name: "spaCy", icon: "fas fa-text-height" },
            { name: "NLTK", icon: "fas fa-book" },
            { name: "Hugging Face", icon: "fas fa-smile" },
            { name: "Stanford NLP", icon: "fas fa-university" },
            { name: "OpenAI API", icon: "fas fa-brain" },
            { name: "Rasa", icon: "fas fa-robot" }
        ],
        "cv-tools": [
            { name: "OpenCV", icon: "fas fa-eye" },
            { name: "YOLO", icon: "fas fa-bullseye" },
            { name: "Detectron2", icon: "fas fa-search" },
            { name: "MMDetection", icon: "fas fa-object-group" },
            { name: "TensorFlow.js", icon: "fab fa-js" },
            { name: "MediaPipe", icon: "fas fa-hands" },
            { name: "PyTorch Vision", icon: "fas fa-image" },
            { name: "Dlib", icon: "fas fa-user" }
        ],
        "mlops": [
            { name: "MLflow", icon: "fas fa-chart-line" },
            { name: "Kubeflow", icon: "fas fa-cube" },
            { name: "AWS SageMaker", icon: "fab fa-aws" },
            { name: "Azure ML", icon: "fab fa-microsoft" },
            { name: "Google AI", icon: "fab fa-google" },
            { name: "Docker", icon: "fab fa-docker" },
            { name: "Kubernetes", icon: "fas fa-server" },
            { name: "GitHub Actions", icon: "fab fa-github" }
        ]
    };

    function initAIMLSolutionPage() {
        // Load initial technologies (ML Frameworks)
        displayTechnologies('ml-frameworks');

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
        if (window.AiMlObserver) {
            window.AiMlObserver.disconnect()
        }
        window.AiMlObserver = new IntersectionObserver(entries => {
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
            animTargets.forEach(el => window.AiMlObserver.observe(el));
        }

        // Add click handlers for CTA buttons
        document.querySelectorAll('#service-content .btn-primary, #service-content .btn-secondary').forEach(btn => {
            btn.addEventListener('click', function (e) {
                if (this.getAttribute('href') === '#') {
                    e.preventDefault();
                    alert('Thank you for your interest in our AI/ML solutions! We will contact you shortly.');
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

    initAIMLSolutionPage()
})()