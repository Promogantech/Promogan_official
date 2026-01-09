        // Blog-specific JavaScript
        document.addEventListener('DOMContentLoaded', function() {
            // Search functionality
            const searchForm = document.querySelector('.search-form');
            searchForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const searchTerm = this.querySelector('input').value;
                if (searchTerm.trim() !== '') {
                    alert(`Searching for: ${searchTerm}`);
                    // In a real implementation, you would filter posts or redirect to search results
                }
            });
            
            // Newsletter subscription
            const newsletterForms = document.querySelectorAll('.newsletter-form');
            newsletterForms.forEach(form => {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const email = this.querySelector('input[type="email"]').value;
                    alert(`Thank you for subscribing with: ${email}`);
                    this.reset();
                });
            });
            
            // Active link highlighting for blog navigation
            const currentPage = window.location.pathname.split('/').pop();
            if (currentPage === 'blog.html') {
                const blogLink = document.querySelector('nav ul li a[href="blog.html"]');
                if (blogLink) {
                    blogLink.classList.add('active');
                }
            }
        });
