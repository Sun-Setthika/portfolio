// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Animated Background
    const canvas = document.getElementById('techBg');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2;
            this.speed = Math.random() * 0.5 + 0.1;
            this.angle = Math.random() * Math.PI * 2;
        }
        
        update() {
            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin(this.angle) * this.speed;
            
            if (this.x < 0 || this.x > canvas.width || 
                this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }
        
        draw() {
            ctx.fillStyle = 'rgba(35,134,54,0.3)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const particles = Array(100).fill().map(() => new Particle());
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    
    resizeCanvas();
    animate();
    window.addEventListener('resize', resizeCanvas);

    // Experience Data
    const experience = [
        {
            title: "Mission and Research Development",
            company: "Préfecture du Gard",
            dates: "Jan 2025 - Present",
            description: `
                <ul class="experience-list">
                    <li>Designed and deployed a zero-shot email classification system using LLaMA 3.1 8B and UnSloth, without the need for labeled training data.</li>
                    <li>Refined prompt engineering techniques to ensure the AI system responded and classified accurately and naturally according to the task.</li>
                    <li>Created a Retrieval-Augmented Generation (RAG) pipeline that dynamically pulls in relevant legal codes and administrative policies.</li>
                </ul>
            `,
        },
        // ... other experience items
    ];

    // Certifications Data
    const certifications = [
        {
            title: "AI Agents Fundamentals",
            issuer: "Hugging Face",
            date: "2025",
            link: "https://shorturl.at/ZP4EE"
        },
        // ... other certifications
    ];

    // Skills Data
    const skills = [
        'Python', 'TensorFlow', 'PyTorch', 'Gradio', 'Streamlit', 'PHP', 
        'Laravel', 'Vue.js', 'Spring Boot', 'HTML', 'CSS', 'Tailwind CSS',
        'Docker', 'JavaScript', 'C++', 'NLP', 'LLM', 'Computer Vision',
        'Deep Learning', 'Machine Learning', 'OCR', 'Git', 'Linux'
    ];

    // Projects Data
    const projects = [
        {
            id: 'Finetune-Text-to-Speech',  // Anchor target for linking
            title: 'Finetune Text to Speech',
            description: `
            <ul>
                <li>Fine-tuned the SpeechT5 model to generate high-quality speech in multiple languages using the VoxPopuli dataset.</li>
                <li>Prepared and processed a subset of VoxPopuli (10-15 hours of audio) focusing on languages like Dutch.</li>
                <li>Performed text normalization, tokenization, audio resampling, and feature extraction.</li>
                <li>Generated speaker embeddings to improve speech naturalness and consistency.</li>
            </ul>
            `,
            tech: 'Python, PyTorch, Hugging Face Transformers, SpeechT5, VoxPopuli Dataset'
        },
        // ... other projects
    ];

    // DOM Population Functions
    function populateExperience() {
        const experienceTimeline = document.querySelector('.experience-timeline');
        experience.forEach(exp => {
            const div = document.createElement('div');
            div.className = 'experience-item';
            div.innerHTML = `
                <h3>${exp.title}</h3>
                <div class="experience-company">${exp.company}</div>
                <div class="experience-dates">${exp.dates}</div>
                <div class="experience-description">${exp.description}</div>
            `;
            experienceTimeline.appendChild(div);
        });
    }

    function populateCertifications() {
        const certsGrid = document.querySelector('.certifications-grid');
        certifications.forEach(cert => {
            const div = document.createElement('div');
            div.className = 'certification-card';
            div.innerHTML = `
                <h3><a href="${cert.link}" target="_blank">${cert.title}</a></h3>
                <p>${cert.issuer}</p>
                <div class="cert-date">${cert.date}</div>
            `;
            certsGrid.appendChild(div);
        });
    }

    function populateSkills() {
        const skillsGrid = document.querySelector('.skills-grid');
        skills.forEach(skill => {
            const div = document.createElement('div');
            div.className = 'skill-card';
            div.textContent = skill;
            skillsGrid.appendChild(div);
        });
    }

    function populateProjects() {
        const projectsGrid = document.querySelector('.projects-grid');
        projects.forEach(project => {
            const div = document.createElement('div');
            div.className = 'project-card';
            div.id = project.id;
            div.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech">${project.tech}</div>
            `;
            projectsGrid.appendChild(div);
        });
    }

    // Initialize all content
    populateExperience();
    populateCertifications();
    populateSkills();
    populateProjects();

    // Enhanced Anchor Link Handling
    function handleAnchorLinks() {
        // Highlight target section on page load
        if (window.location.hash) {
            const target = document.querySelector(window.location.hash);
            if (target) {
                target.style.transition = 'background-color 1s';
                target.style.backgroundColor = '#f8f9fa';
                setTimeout(() => {
                    target.style.backgroundColor = '';
                }, 2000);
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Smooth scroll for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                history.pushState(null, '', targetId);
                const target = document.querySelector(targetId);
                if (target) {
                    target.style.transition = 'background-color 1s';
                    target.style.backgroundColor = '#f8f9fa';
                    setTimeout(() => {
                        target.style.backgroundColor = '';
                    }, 2000);
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Initialize all functionality
    handleAnchorLinks();
});

// Education Data
const education = [
    {
        degree: "MSc in Artificial Intelligence and Data Science",
        institution: "IMT Mines Ales",
        dates: "2024 - 2026",
        details: ""
    },
    {
        degree: "Engineer in Computer Science",
        institution: "Institute of Technology of Cambodia",
        dates: "2019 - 2024",
        details: "",
        certificateLink: "https://drive.google.com/file/d/1_l47ltz4hGzPOs0fvZl3AL-kYQWtIssW/view?usp=drive_link"
    }
];

// Populate Education
document.addEventListener('DOMContentLoaded', () => {
    const educationTimeline = document.querySelector('.education-timeline');
    if (educationTimeline) {
        education.forEach(edu => {
            const div = document.createElement('div');
            div.className = 'education-item';
            const certLink = edu.certificateLink ? 
                `<a href="${edu.certificateLink}" target="_blank" class="certificate-link">View Certificate</a>` : '';
            div.innerHTML = `
                <h3>${edu.degree}</h3>
                <div class="education-institution">${edu.institution}</div>
                <div class="education-dates">${edu.dates}</div>
                <p class="education-details">${edu.details}</p>
                ${certLink}
            `;
            educationTimeline.appendChild(div);
        });
    }
});