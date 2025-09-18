// Simple Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Add click feedback to file links
    const fileLinks = document.querySelectorAll('.file-link, .download-link');
    
    fileLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Add click feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Animate stats on load
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 30;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + '+';
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current) + '+';
            }
        }, 50);
    });

    // Smooth scroll for any internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effects to skills
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        skill.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Simple fade-in animation for sections
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Track file downloads (simple analytics)
    fileLinks.forEach(link => {
        link.addEventListener('click', function() {
            const fileName = this.textContent.trim();
            const fileType = this.className.includes('pdf') ? 'PDF' : 
                           this.className.includes('md') ? 'Markdown' :
                           this.className.includes('html') ? 'HTML' :
                           this.className.includes('yaml') ? 'YAML' :
                           this.className.includes('dita') ? 'DITA' : 'File';
            
            console.log(`Downloaded: ${fileType} - ${fileName}`);
        });
    });
});
