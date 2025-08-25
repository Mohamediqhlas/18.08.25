// Custom JavaScript for Mohamed Iqhlas Portfolio - Static Version

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSmoothScrolling();
    initSkillBars();
    initContactForm();
    initThemeToggle();
    initNavbarScroll();
    initAnimations();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
}

// Animate skill progress bars
function initSkillBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    // Function to animate a single progress bar
    function animateProgressBar(bar) {
        const targetWidth = bar.getAttribute('data-width');
        bar.style.width = targetWidth + '%';
    }
    
    // Intersection Observer to trigger animations when bars come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                if (progressBar && !progressBar.style.width) {
                    setTimeout(() => {
                        animateProgressBar(progressBar);
                    }, 200);
                }
            }
        });
    }, {
        threshold: 0.5
    });
    
    // Observe all skill categories
   document.querySelectorAll(".progress-bar").forEach(bar => {
  bar.style.width = bar.getAttribute("data-width") + "%";
});
 document.querySelectorAll('.skill-category').forEach(category => {
        observer.observe(category);
    });
}

// Handle contact form submission - Updated for static version
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // For static version, we'll use Formspree or similar service
            // The form action should be set to your Formspree endpoint
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<span class="spinner"></span>Sending...';
            submitBtn.disabled = true;
            
            // Note: For GitHub Pages deployment, you'll need to:
            // 1. Sign up for Formspree (free tier available)
            // 2. Replace "YOUR_FORM_ID" in the form action with your actual Formspree ID
            // 3. The form will then work without server-side code
            
            // Reset button after a delay (since we can't handle the actual response in static)
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                showAlert('info', 'To enable this contact form, please set up Formspree and update the form action URL.');
            }, 2000);
        });
    }
}

// Show alert messages
function showAlert(type, message) {
    // Remove existing alerts
    const existingAlerts = document.querySelectorAll('.alert-message');
    existingAlerts.forEach(alert => alert.remove());
    
    // Create new alert
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show alert-message`;
    alertDiv.style.position = 'fixed';
    alertDiv.style.top = '100px';
    alertDiv.style.right = '20px';
    alertDiv.style.zIndex = '9999';
    alertDiv.style.minWidth = '300px';
    
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alertDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 5000);
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.querySelector('button[onclick="toggleTheme()"]');
    const themeIcon = document.getElementById('theme-icon');
    
    // Get saved theme or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', currentTheme);
    
    // Update icon based on current theme
    updateThemeIcon(currentTheme);
    updateSVGsForTheme(currentTheme);
    
    // Force update text visibility on page load
    setTimeout(() => {
        updateAllTextVisibility(currentTheme);
    }, 100);
    
    // Make toggleTheme function global
    window.toggleTheme = function() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        updateSVGsForTheme(newTheme);
    };
    
    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

// Update SVG elements for theme changes
function updateSVGsForTheme(theme) {
    const aboutImage = document.querySelector('.about-image');
    const projectImages = document.querySelectorAll('.project-image');
    
    if (theme === 'dark') {
        // Update about image for dark mode
        if (aboutImage) {
            const computerScreen = aboutImage.querySelector('rect[fill="#ecf0f1"]');
            const textElements = aboutImage.querySelectorAll('rect[fill="#bdc3c7"]');
            const titleText = aboutImage.querySelector('text[fill="#007bff"]');
            
            if (computerScreen) computerScreen.setAttribute('fill', '#161b22');
            textElements.forEach(el => el.setAttribute('fill', '#8b949e'));
            if (titleText) titleText.setAttribute('fill', '#e6edf3');
        }
        
        // Update project images for dark mode  
        projectImages.forEach(img => {
            const textElement = img.querySelector('text');
            if (textElement) {
                textElement.setAttribute('fill', '#e6edf3');
            }
        });
        
        // Ensure all text elements are visible
        document.body.style.backgroundColor = '#0d1117';
        document.body.style.color = '#e6edf3';
        
    } else {
        // Reset to light mode
        if (aboutImage) {
            const computerScreen = aboutImage.querySelector('rect[fill="#161b22"]');
            const textElements = aboutImage.querySelectorAll('rect[fill="#8b949e"]');
            const titleText = aboutImage.querySelector('text[fill="#e6edf3"]');
            
            if (computerScreen) computerScreen.setAttribute('fill', '#ecf0f1');
            textElements.forEach(el => el.setAttribute('fill', '#bdc3c7'));
            if (titleText) titleText.setAttribute('fill', '#007bff');
        }
        
        // Reset project images
        projectImages.forEach(img => {
            const textElement = img.querySelector('text');
            if (textElement) {
                textElement.setAttribute('fill', '#ffffff');
            }
        });
        
        // Reset body styles
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#343a40';
    }
    
    // Force update all text visibility
    updateAllTextVisibility(theme);
}

// Ensure all text elements are visible in the selected theme
function updateAllTextVisibility(theme) {
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, label, .nav-link, .navbar-brand');
    const isDark = theme === 'dark';
    
    textElements.forEach(element => {
        if (isDark) {
            element.style.color = '#e6edf3';
            element.style.setProperty('color', '#e6edf3', 'important');
        } else {
            element.style.color = '';
            element.style.removeProperty('color');
        }
    });
    
    // Special handling for muted text (CGPA & Certification labels)
    const mutedElements = document.querySelectorAll('.text-muted');
    mutedElements.forEach(element => {
        if (isDark) {
            element.style.setProperty('color', '#8b949e', 'important');
        } else {
            element.style.removeProperty('color');
        }
    });
    
    // Fix stat items specifically
    const statElements = document.querySelectorAll('.stat-item p, .stat-item h3');
    statElements.forEach(element => {
        if (isDark) {
            element.style.setProperty('color', '#e6edf3', 'important');
        } else {
            element.style.removeProperty('color');
        }
    });
    
    // Force all backgrounds to be dark
    if (isDark) {
        document.documentElement.style.setProperty('background-color', '#0d1117', 'important');
        document.body.style.setProperty('background-color', '#0d1117', 'important');
        
        // Force all major sections to be dark
        const sections = document.querySelectorAll('section, .hero-section, #about, #skills, #projects, #contact');
        sections.forEach(section => {
            section.style.setProperty('background-color', '#0d1117', 'important');
        });
        
        // Alternate sections for visual separation
        const aboutSection = document.getElementById('about');
        const projectsSection = document.getElementById('projects');
        if (aboutSection) aboutSection.style.setProperty('background-color', '#161b22', 'important');
        if (projectsSection) projectsSection.style.setProperty('background-color', '#161b22', 'important');
    } else {
        document.documentElement.style.removeProperty('background-color');
        document.body.style.removeProperty('background-color');
        
        const sections = document.querySelectorAll('section, .hero-section, #about, #skills, #projects, #contact');
        sections.forEach(section => {
            section.style.removeProperty('background-color');
        });
    }
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
}

// Initialize scroll animations
function initAnimations() {
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .stat-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle navbar active state based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Add scroll listener for active nav links
window.addEventListener('scroll', debounce(updateActiveNavLink, 100));

// Add CSS for navbar scroll effect and theme improvements
const style = document.createElement('style');
style.textContent = `
    .navbar-scrolled {
        background-color: rgba(255, 255, 255, 0.95) !important;
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    [data-theme="dark"] .navbar {
        background-color: var(--white) !important;
        border-bottom: 1px solid var(--light-color);
    }
    
    [data-theme="dark"] .navbar-scrolled {
        background-color: rgba(18, 18, 18, 0.95) !important;
        box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
    }
    
    [data-theme="dark"] .navbar-brand {
        color: var(--dark-color) !important;
    }
    
    [data-theme="dark"] .nav-link {
        color: var(--dark-color) !important;
    }
    
    [data-theme="dark"] .nav-link:hover {
        color: var(--primary-color) !important;
    }
    
    .nav-link.active {
        color: var(--primary-color) !important;
        font-weight: 600;
    }
    
    /* Loading spinner */
    .spinner {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid #f3f3f3;
        border-top: 2px solid var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-right: 8px;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    /* Improved theme transition */
    body, .navbar, .skill-category, .project-card, .contact-form, .stat-item {
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    }
`;
document.head.appendChild(style);

// Handle form validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm(formData) {
    const errors = [];
    
    if (!formData.get('name').trim()) {
        errors.push('Name is required');
    }
    
    if (!formData.get('email').trim()) {
        errors.push('Email is required');
    } else if (!validateEmail(formData.get('email'))) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.get('message').trim()) {
        errors.push('Message is required');
    }
    
    return errors;
}

// Add loading state to buttons
function setButtonLoading(button, loading = true) {
    if (loading) {
        button.dataset.originalText = button.innerHTML;
        button.innerHTML = '<span class="spinner"></span>Loading...';
        button.disabled = true;
    } else {
        button.innerHTML = button.dataset.originalText;
        button.disabled = false;
    }
}

// Initialize tooltips if Bootstrap is available
if (typeof bootstrap !== 'undefined') {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Add copy to clipboard functionality for contact info
function initCopyToClipboard() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const email = this.href.replace('mailto:', '');
            
            navigator.clipboard.writeText(email).then(() => {
                showAlert('success', 'Email address copied to clipboard!');
            }).catch(() => {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = email;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showAlert('success', 'Email address copied to clipboard!');
            });
        });
    });
}

// Initialize copy to clipboard functionality
document.addEventListener('DOMContentLoaded', initCopyToClipboard);

// Add smooth reveal animation for elements
function addRevealAnimation() {
    const revealElements = document.querySelectorAll('.hero-section, .stats-container');
    
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    setTimeout(() => {
        revealElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }, 100);
}

// Initialize reveal animations
document.addEventListener('DOMContentLoaded', addRevealAnimation);

// Instructions for GitHub Pages deployment
console.log(`
🚀 GitHub Pages Deployment Instructions:

1. Create a new repository on GitHub
2. Upload all files from the 'static_site' folder to the repository
3. Go to repository Settings > Pages
4. Select source: Deploy from a branch
5. Choose main branch and / (root) folder
6. Your site will be available at: https://yourusername.github.io/repository-name

📧 To enable the contact form:
1. Sign up for Formspree (https://formspree.io/)
2. Create a new form and get your form ID
3. Replace 'YOUR_FORM_ID' in index.html with your actual Formspree ID
4. The contact form will work without any server-side code!

✅ Your static portfolio is ready for deployment!
`);