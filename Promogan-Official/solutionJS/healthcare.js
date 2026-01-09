// Solutions Data
const solutionsData = [
    {
        id: 1,
        title: "Hospital & Clinic Management Systems",
        description: "Streamline your entire healthcare workflow with an all-in-one platform.",
        features: [
            "Patient registration & records",
            "Doctor scheduling & appointment management",
            "OPD/IPD, billing, pharmacy & lab management",
            "Reporting & analytics dashboards"
        ],
        icon: "🏥",
        color: "#3b82f6",
        tags: ["management", "hms"]
    },
    {
        id: 2,
        title: "Telemedicine & Virtual Care Platforms",
        description: "Deliver secure, HIPAA/GDPR-ready telehealth services anytime, anywhere.",
        features: [
            "Video consultations & e-prescriptions",
            "Online appointment booking",
            "Digital patient records & secure payments",
            "HIPAA/GDPR-ready communication"
        ],
        icon: "📞",
        color: "#10b981",
        tags: ["telehealth", "mobile"]
    },
    {
        id: 3,
        title: "Electronic Health Records (EHR/EMR)",
        description: "Centralized, secure patient data systems for better clinical decision-making.",
        features: [
            "Patient history & treatment plans",
            "Role-based access & encrypted storage",
            "Medication management",
            "Compliance-ready with HIPAA/GDPR"
        ],
        icon: "🗂️",
        color: "#8b5cf6",
        tags: ["management", "compliance"]
    },
    {
        id: 4,
        title: "Medical Diagnostic & Lab Management",
        description: "Increase accuracy and productivity for labs and diagnostic centers.",
        features: [
            "Test catalog & sample tracking",
            "Automated result generation & LIS integration",
            "Digital report delivery",
            "Admin & finance dashboards"
        ],
        icon: "🔬",
        color: "#f59e0b",
        tags: ["management", "diagnostics"]
    },
    {
        id: 5,
        title: "AI-Powered Healthcare Solutions",
        description: "Enhance clinical decisions and patient outcomes with Artificial Intelligence.",
        features: [
            "Medical image analysis (X-ray, MRI, CT)",
            "Disease prediction & risk scoring",
            "Patient triage bots & NLP-based reports",
            "Diagnostic support systems"
        ],
        icon: "🤖",
        color: "#ef4444",
        tags: ["ai", "diagnostics"]
    },
    {
        id: 6,
        title: "Healthcare Mobile Apps",
        description: "Patient-friendly apps for hospitals, fitness, and health-tech platforms.",
        features: [
            "Appointment booking & health tracking",
            "Wearable integrations & telemedicine access",
            "Medicine reminders & digital health records",
            "Chat & support features"
        ],
        icon: "📱",
        color: "#06b6d4",
        tags: ["mobile", "telehealth"]
    },
    {
        id: 7,
        title: "Pharmacy & E-medicine Solutions",
        description: "End-to-end online medicine delivery system with full automation.",
        features: [
            "Medicine catalog & prescription upload",
            "Order tracking & inventory management",
            "Delivery integrations",
            "Batch management & reporting"
        ],
        icon: "💊",
        color: "#8b5cf6",
        tags: ["management", "ecommerce"]
    },
    {
        id: 8,
        title: "Compliance, Security & Data Protection",
        description: "Safeguard sensitive healthcare data with robust security frameworks.",
        features: [
            "HIPAA, GDPR, ISO 27001 compliance",
            "Encrypted patient data & secure APIs",
            "HL7/FHIR standards",
            "Access control & audit-ready systems"
        ],
        icon: "🔒",
        color: "#6366f1",
        tags: ["compliance", "security"]
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
            alert('Thank you for your interest! A demo request has been submitted. Our team will contact you shortly.');
            // In a real implementation, this would open a form modal
        });
    });
    
    // Get Proposal buttons
    document.querySelectorAll('.btn-secondary').forEach(button => {
        if (button.textContent.includes('Proposal') || button.textContent.includes('Demo')) {
            button.addEventListener('click', function() {
                alert('Redirecting to proposal request form...');
                // In a real implementation, this would redirect to a contact form
            });
        }
    });
    
    // Start Project buttons
    document.querySelectorAll('.btn-outline').forEach(button => {
        if (button.textContent.includes('Project')) {
            button.addEventListener('click', function() {
                alert('Starting your healthcare project! You will be redirected to our project initiation form.');
                // In a real implementation, this would redirect to a project form
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