// Finance Solutions Data
const solutionsData = [
    {
        id: 1,
        title: "Digital Banking & Online Financial Platforms",
        description: "Build secure, scalable and modern digital banking experiences.",
        features: [
            "Mobile & web banking apps",
            "Customer onboarding portals",
            "Savings, loans, cards & EMI modules",
            "E-statements & transaction history",
            "Secure payments & wallet management"
        ],
        icon: "🏦",
        color: "#059669",
        tags: ["banking", "digital"]
    },
    {
        id: 2,
        title: "Payment Gateway & Wallet Solutions",
        description: "Create seamless and secure digital payment systems for your users.",
        features: [
            "UPI, cards, net banking integration",
            "QR code payments",
            "Recurring payments & subscriptions",
            "Digital wallet creation",
            "PCI-DSS compliant infrastructure"
        ],
        icon: "💳",
        color: "#2563eb",
        tags: ["payments", "digital"]
    },
    {
        id: 3,
        title: "Lending & Loan Management Systems",
        description: "Automate end-to-end loan operations for NBFCs, banks & digital lenders.",
        features: [
            "Loan application & KYC automation",
            "Credit scoring engine",
            "EMI calculation & management",
            "Document upload & digital signatures",
            "Real-time loan status tracking"
        ],
        icon: "💰",
        color: "#f59e0b",
        tags: ["lending", "banking"]
    },
    {
        id: 4,
        title: "KYC, AML & Compliance Automation",
        description: "Ensure secure onboarding and regulatory compliance with automated verification.",
        features: [
            "eKYC verification (Aadhaar, PAN, OCR)",
            "AML screening & monitoring",
            "Document fraud detection",
            "Risk scoring models",
            "Identity management systems"
        ],
        icon: "🔐",
        color: "#ef4444",
        tags: ["compliance", "security"]
    },
    {
        id: 5,
        title: "Investment & Wealth Management Platforms",
        description: "Empower users to invest smarter with intuitive investment tools.",
        features: [
            "Portfolio management dashboard",
            "Mutual funds, stocks, SIP modules",
            "Robo-advisory systems",
            "Real-time market data integration",
            "Financial planning dashboards"
        ],
        icon: "📈",
        color: "#8b5cf6",
        tags: ["investment", "wealth"]
    },
    {
        id: 6,
        title: "Financial Analytics & AI Solutions",
        description: "Use data-driven intelligence to make smarter financial decisions.",
        features: [
            "Fraud detection algorithms",
            "Transaction anomaly detection",
            "Credit risk modeling",
            "Customer segmentation",
            "Predictive analytics for revenue"
        ],
        icon: "🤖",
        color: "#06b6d4",
        tags: ["ai", "analytics"]
    },
    {
        id: 7,
        title: "Insurance Management Platforms",
        description: "Digitize insurance processes for insurers, agents & customers.",
        features: [
            "Policy management system",
            "Premium calculations engine",
            "Claims processing automation",
            "Agent onboarding portals",
            "Customer self-service apps"
        ],
        icon: "🛡️",
        color: "#6366f1",
        tags: ["insurance", "management"]
    },
    {
        id: 8,
        title: "Blockchain & Secure Financial Workflows",
        description: "Next-gen secure financial technologies for modern finance.",
        features: [
            "Smart contracts development",
            "Crypto transaction systems",
            "Decentralized finance (DeFi) workflows",
            "Blockchain-based identity management",
            "Secure financial audit trails"
        ],
        icon: "⛓️",
        color: "#8b5cf6",
        tags: ["blockchain", "security"]
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
    // Request Demo buttons
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', function() {
            alert('Thank you for your interest in our FinTech solutions! A demo request has been submitted. Our financial technology specialists will contact you shortly.');
            // In a real implementation, this would open a form modal
        });
    });
    
    // Build Digital Banking buttons
    document.querySelectorAll('.btn-secondary').forEach(button => {
        if (button.textContent.includes('Banking Platform') || button.textContent.includes('Demo')) {
            button.addEventListener('click', function() {
                alert('Starting your digital banking platform development process! You will be redirected to our financial solution consultation form.');
                // In a real implementation, this would redirect to a contact form
            });
        }
    });
    
    // Get Proposal buttons
    document.querySelectorAll('.btn-outline').forEach(button => {
        if (button.textContent.includes('Proposal')) {
            button.addEventListener('click', function() {
                alert('Generating your customized lending system proposal. Please check your email for the detailed proposal document.');
                // In a real implementation, this would redirect to a proposal form
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