        // About page specific JavaScript
        document.addEventListener('DOMContentLoaded', function() {
            // Animate numbers in achievements section
            const achievementNumbers = document.querySelectorAll('.achievement-number');
            
            achievementNumbers.forEach(number => {
                const target = parseInt(number.textContent);
                const duration = 2000;
                const step = target / (duration / 16);
                
                let current = 0;
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    number.textContent = Math.floor(current) + (number.textContent.includes('+') ? '+' : '');
                }, 16);
            });
            
            // Active link highlighting for about navigation
            const currentPage = window.location.pathname.split('/').pop();
            if (currentPage === 'about.html') {
                const aboutLink = document.querySelector('nav ul li a[href="about.html"]');
                if (aboutLink) {
                    aboutLink.classList.add('active');
                }
            }
            
            // Newsletter form submission
            const newsletterForms = document.querySelectorAll('.newsletter-form');
            newsletterForms.forEach(form => {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const email = this.querySelector('input[type="email"]').value;
                    alert(`Thank you for subscribing with: ${email}`);
                    this.reset();
                });
            });
        });
