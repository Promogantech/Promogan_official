// Education Solutions Data
const solutionsData = [
    {
        id: 1,
        title: "Learning Management Systems (LMS)",
        description: "A complete digital learning environment for schools, universities, and training platforms.",
        features: [
            "Course creation & content management",
            "Video classes & live sessions",
            "Assignments & quizzes",
            "Gradebook & progress tracking",
            "Discussion forums & messaging",
            "Certificates & assessments"
        ],
        icon: "📚",
        color: "#4f46e5",
        tags: ["learning", "management"]
    },
    {
        id: 2,
        title: "School & College Management Systems",
        description: "Automate academic and administrative operations across the institution.",
        features: [
            "Student information system (SIS)",
            "Attendance tracking & timetable",
            "Fees & exam management",
            "Transport & hostel management",
            "Result generation",
            "Parent/teacher communication portal"
        ],
        icon: "🏫",
        color: "#10b981",
        tags: ["management", "erp"]
    },
    {
        id: 3,
        title: "E-Learning Platforms",
        description: "Build your own online learning platform like Udemy, BYJU'S, or Coursera.",
        features: [
            "Course marketplace & instructor dashboards",
            "Interactive content & gamification",
            "Subscription & payment systems",
            "AI-based personalized learning paths",
            "Mobile learning apps",
            "Progress analytics"
        ],
        icon: "💻",
        color: "#f59e0b",
        tags: ["learning", "mobile"]
    },
    {
        id: 4,
        title: "Coaching Institute Solutions",
        description: "Digitize your coaching center and grow faster with modern tools.",
        features: [
            "Batch management & scheduling",
            "Practice tests & mock exams",
            "Doubt-solving systems",
            "Live & recorded classes",
            "Result analytics",
            "Parent/student communication portal"
        ],
        icon: "🎓",
        color: "#ef4444",
        tags: ["management", "learning"]
    },
    {
        id: 5,
        title: "AI-Powered Education Solutions",
        description: "Empower learning with Artificial Intelligence for personalized education.",
        features: [
            "Adaptive learning algorithms",
            "Recommendation engines",
            "Automated exam grading",
            "Student performance prediction",
            "Doubt-solving chatbots",
            "NLP-based content analysis"
        ],
        icon: "🤖",
        color: "#8b5cf6",
        tags: ["ai", "learning"]
    },
    {
        id: 6,
        title: "Virtual Classroom Solutions",
        description: "Deliver engaging classes with tools that mimic real classroom experiences.",
        features: [
            "HD live video teaching",
            "Whiteboard & screen sharing",
            "Polls & interactive Q&A",
            "Breakout rooms",
            "Class recording & cloud storage",
            "Attendance tracking"
        ],
        icon: "🎥",
        color: "#06b6d4",
        tags: ["virtual", "learning"]
    },
    {
        id: 7,
        title: "Content Digitization & E-books",
        description: "Turn traditional learning materials into interactive digital content.",
        features: [
            "Digital textbooks creation",
            "Interactive E-books",
            "Multimedia lessons",
            "AR-based educational content",
            "Accessibility features",
            "Multi-platform compatibility"
        ],
        icon: "📖",
        color: "#8b5cf6",
        tags: ["learning", "content"]
    },
    {
        id: 8,
        title: "Integration & Automation",
        description: "Connect your education platform with essential tools and systems.",
        features: [
            "Payment gateway integration",
            "Video streaming platforms",
            "CRM system connections",
            "Attendance devices sync",
            "Google Classroom / MS Teams",
            "SMS/WhatsApp alerts"
        ],
        icon: "🔗",
        color: "#6366f1",
        tags: ["management", "integration"]
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
            alert('Thank you for your interest in our EdTech solutions! A demo request has been submitted. Our education specialists will contact you shortly.');
            // In a real implementation, this would open a form modal
        });
    });
    
    // Build EdTech App buttons
    document.querySelectorAll('.btn-secondary').forEach(button => {
        if (button.textContent.includes('EdTech App') || button.textContent.includes('Demo')) {
            button.addEventListener('click', function() {
                alert('Starting your EdTech application development process! You will be redirected to our project consultation form.');
                // In a real implementation, this would redirect to a contact form
            });
        }
    });
    
    // Get Proposal buttons
    document.querySelectorAll('.btn-outline').forEach(button => {
        if (button.textContent.includes('Proposal')) {
            button.addEventListener('click', function() {
                alert('Generating your customized School ERP proposal. Please check your email for the detailed proposal document.');
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