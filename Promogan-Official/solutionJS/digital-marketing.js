// Digital Marketing Solutions Data
const solutionsData = [
    {
        id: 1,
        title: "Search Engine Optimization (SEO)",
        description: "Rank higher, get discovered, and increase organic traffic with advanced SEO strategies.",
        features: [
            "Keyword research & competitor analysis",
            "On-page & technical SEO optimization",
            "Link building & authority growth",
            "Local SEO for business visibility",
            "SEO content strategy development",
            "Monthly SEO reporting & analytics"
        ],
        icon: "🔍",
        color: "#3b82f6",
        tags: ["seo", "organic"]
    },
    {
        id: 2,
        title: "Social Media Marketing (SMM)",
        description: "Build engagement, create brand awareness, and communicate with your audience effectively.",
        features: [
            "Facebook, Instagram, LinkedIn management",
            "YouTube & Twitter strategy",
            "Creative content design & storytelling",
            "Reels & video content strategy",
            "Community engagement & growth",
            "Monthly content calendar planning"
        ],
        icon: "📱",
        color: "#8b5cf6",
        tags: ["social", "content"]
    },
    {
        id: 3,
        title: "Paid Advertising (Google + Meta)",
        description: "Generate high-quality traffic and leads with conversion-optimized ad campaigns.",
        features: [
            "Google Search & Display Ads",
            "YouTube video advertising",
            "Facebook & Instagram Ads",
            "App Install Campaigns",
            "Remarketing & Retargeting",
            "A/B testing & campaign optimization"
        ],
        icon: "🎯",
        color: "#ef4444",
        tags: ["ads", "paid"]
    },
    {
        id: 4,
        title: "Content Marketing",
        description: "High-quality, value-driven content that boosts trust and drives conversions.",
        features: [
            "Blog posts & articles creation",
            "Social media content strategy",
            "Web content & landing page copy",
            "Product descriptions & sales copy",
            "Video scripts & storytelling",
            "E-books & whitepapers development"
        ],
        icon: "📝",
        color: "#10b981",
        tags: ["content", "seo"]
    },
    {
        id: 5,
        title: "Branding & Creative Design",
        description: "Visually stunning brand communication that reflects your identity.",
        features: [
            "Logo & brand identity design",
            "Social media creatives & graphics",
            "Promotional design materials",
            "Marketing collateral creation",
            "Ad creatives + banner design",
            "Visual brand guidelines"
        ],
        icon: "🎨",
        color: "#f59e0b",
        tags: ["branding", "design"]
    },
    {
        id: 6,
        title: "Email Marketing & Automation",
        description: "Turn visitors into loyal customers with personalized email campaigns.",
        features: [
            "Drip campaigns & automation sequences",
            "Newsletter design & distribution",
            "Product promotions & launches",
            "Lead nurturing workflows",
            "Email automation setup",
            "Analytics & A/B testing"
        ],
        icon: "📧",
        color: "#06b6d4",
        tags: ["email", "automation"]
    },
    {
        id: 7,
        title: "Website CRO (Conversion Optimization)",
        description: "Boost conversions with UX-focused optimization and testing.",
        features: [
            "Landing page optimization",
            "Heatmap & user behavior analysis",
            "Sales funnel tracking",
            "CTAs & usability improvements",
            "UX/UI enhancement suggestions",
            "A/B testing implementation"
        ],
        icon: "📊",
        color: "#8b5cf6",
        tags: ["conversion", "analytics"]
    },
    {
        id: 8,
        title: "Influencer Marketing",
        description: "Expand your brand reach by collaborating with the right influencers.",
        features: [
            "Influencer selection & vetting",
            "Campaign negotiation & coordination",
            "Creative direction & content planning",
            "Campaign execution management",
            "Analytics & ROI tracking",
            "Relationship management"
        ],
        icon: "🌟",
        color: "#6366f1",
        tags: ["social", "influencer"]
    }
];

// DOM Elements
const solutionsGrid = document.getElementById('solutionsGrid');
const solutionsFilter = document.getElementById('solutionsFilter');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Load all solutions initially
    renderSolutions(solutionsData);
    
    // Setup filter buttons
    setupFilterButtons();
    
    // Setup mobile menu toggle
    setupMobileMenu();
    
    // Setup CTA button events
    setupCTAButtons();
});

// Render solutions to the grid
function renderSolutions(solutions) {
    solutionsGrid.innerHTML = '';
    
    solutions.forEach(solution => {
        const solutionCard = document.createElement('div');
        solutionCard.className = 'solution-card';
        solutionCard.setAttribute('data-tags', solution.tags.join(' '));
        
        // Create features list HTML
        const featuresList = solution.features.map(feature => 
            `<li><i class="fas fa-check-circle"></i> ${feature}</li>`
        ).join('');
        
        // Create tags HTML
        const tagsHtml = solution.tags.map(tag => 
            `<span class="solution-tag">${tag}</span>`
        ).join('');
        
        solutionCard.innerHTML = `
            <div class="solution-header">
                <div class="solution-icon" style="background-color: ${solution.color}">
                    ${solution.icon}
                </div>
                <h3>${solution.title}</h3>
            </div>
            <div class="solution-body">
                <p>${solution.description}</p>
                <ul class="solution-features">
                    ${featuresList}
                </ul>
                <div class="solution-tags">
                    ${tagsHtml}
                </div>
            </div>
        `;
        
        solutionsGrid.appendChild(solutionCard);
    });
}

// Setup filter functionality
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter solutions
            let filteredSolutions;
            if (filterValue === 'all') {
                filteredSolutions = solutionsData;
            } else {
                filteredSolutions = solutionsData.filter(solution => 
                    solution.tags.includes(filterValue)
                );
            }
            
            // Render filtered solutions
            renderSolutions(filteredSolutions);
            
            // Add animation effect
            solutionsGrid.style.opacity = '0.7';
            setTimeout(() => {
                solutionsGrid.style.opacity = '1';
            }, 300);
        });
    });
}

// Setup mobile menu toggle
function setupMobileMenu() {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Setup CTA button functionality
function setupCTAButtons() {
    // Request Proposal buttons
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', function() {
            alert('Thank you for your interest in our digital marketing services! A customized marketing proposal will be sent to your email shortly.');
            // In a real implementation, this would open a form modal
        });
    });
    
    // Book Strategy Call buttons
    document.querySelectorAll('.btn-secondary').forEach(button => {
        if (button.textContent.includes('Strategy Call') || button.textContent.includes('Call')) {
            button.addEventListener('click', function() {
                alert('Redirecting to our calendar booking page. Please select a convenient time for your strategy consultation.');
                // In a real implementation, this would redirect to a calendar booking
            });
        }
    });
    
    // Start SEO buttons
    document.querySelectorAll('.btn-outline').forEach(button => {
        if (button.textContent.includes('SEO')) {
            button.addEventListener('click', function() {
                alert('Starting your SEO optimization process! Our SEO specialist will contact you to begin your website audit.');
                // In a real implementation, this would redirect to a contact form
            });
        }
    });
}

// Add smooth scrolling for anchor links
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

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});