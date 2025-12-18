// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // Add animation to service cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe service cards
    document.querySelectorAll('.service-card, .client-item, .benefit-item').forEach(el => {
        observer.observe(el);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .service-card, .client-item, .benefit-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .service-card.animate-in, 
        .client-item.animate-in, 
        .benefit-item.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .service-card:nth-child(1).animate-in { transition-delay: 0.1s; }
        .service-card:nth-child(2).animate-in { transition-delay: 0.2s; }
        .service-card:nth-child(3).animate-in { transition-delay: 0.3s; }
        .service-card:nth-child(4).animate-in { transition-delay: 0.4s; }
        .service-card:nth-child(5).animate-in { transition-delay: 0.5s; }
        .service-card:nth-child(6).animate-in { transition-delay: 0.6s; }
        .service-card:nth-child(7).animate-in { transition-delay: 0.7s; }
    `;
    document.head.appendChild(style);
});

// Contact form submission handler
function handleContactForm(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const project = document.getElementById('project').value;
    
    // Simple validation
    if (!name || !email || !project) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Show success message
    alert(`Thank you ${name}! We've received your project inquiry and will contact you at ${email} within 24 hours.`);
    
    // Reset form
    e.target.reset();
}