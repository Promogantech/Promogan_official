(function () {
    function initSoftDevelopmentPage() {
        // Smooth scrolling for navigation links
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

        if (window.SoftDevObserver) {
            window.SoftDevObserver.disconnect()
        }

        window.SoftDevObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in')
                }
            })
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        })
        const animTargets = document.querySelectorAll('.service-card, .client-item, .benifit-item')
        if (animTargets.length) {
            animTargets.forEach(el => window.SoftDevObserver.observe(el));
        }
    }

    initSoftDevelopmentPage()
})()