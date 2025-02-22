// script.js
// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Previous background and setup code remains the same

    // Add Experience Data
    const experience = [
        {
            title: "AI Engineer",
            company: "Cosywee",
            dates: "2024 - Present",
            description: `

            `,
        },
        {
            title: "AI Engineer Intern",
            company: "Cosywee",
            dates: "2024 - 2024",
            description: `
            <ul class="experience-list">
                <li>Fine-tuned a Pre-trained Model: Optimized the performance of a pre-trained TrOCR (Transformer-based OCR model) for general recognition tasks involving text, numbers, and special characters, tailored specifically to the company's proprietary dataset.</li>
                <li>Pre-trained and Fine-tuned a Custom OCR Model
                    <ul class="sublist">
                        <li>Developed a CNN-based ResNet-BiLSTM model for OCR applications targeting numeric recognition.</li>
                        <li>Pre-trained the model on a synthetic and open-source dataset comprising approximately 19 million samples.</li>
                        <li>Fine-tuned the model on the company's proprietary dataset with around 20,000 samples, ensuring improved accuracy and robustness.</li>
                    </ul>
                </li>
            </ul>

            `,
            // description: "Pre-trained and Fine-tuned a Custom OCR Model"
        },
        {
            title: "Research and Development Mission",
            company: "IMT Mines Ales",
            dates: "2024 - 2024",
            description: `
            <ul class="experience-list">
                <li>Build and compare a regression model to forecast the level of glucose in 30 minutes using a hybrid CNN-LSTM model.</li>
                <li>Build a classification model to classify a patient's state (hyperglycemia, hypoglycemia, normal) based on the recorded data using the same model.</li>
            </ul>
            `,
            // description: "Pre-trained and Fine-tuned a Custom OCR Model"
        },
        {
            title: "Intern",
            company: "GEOCHANVRE",
            dates: "2024 - 2024",
            description: `
            <ul class="experience-list">
                <li>Develop an inventory management application and database for the factory's stock control.</li>
                <li>Integrate QR codes for each product type into the application.</li>
            </ul>
            `,
            // description: "Pre-trained and Fine-tuned a Custom OCR Model"
        }
    ];

    // Add Certifications Data
    const certifications = [
        {
            title: "AI Agents Fundamentals",
            issuer: "Hugging Face",
            date: "2025",
            link: "https://cdn-lfs-us-1.hf.co/repos/f2/34/f2344151f60f6027c436821dc61cf3f27a46435de57df8df50ad02b5acca7c07/989d779a38da66c709cb92d6319a9ba6e7188181241630a2de297d86d1a0e363?response-content-disposition=inline%3B+filename*%3DUTF-8%27%272025-02-21.png%3B+filename%3D%222025-02-21.png%22%3B&response-content-type=image%2Fpng&Expires=1740220987&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0MDIyMDk4N319LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy11cy0xLmhmLmNvL3JlcG9zL2YyLzM0L2YyMzQ0MTUxZjYwZjYwMjdjNDM2ODIxZGM2MWNmM2YyN2E0NjQzNWRlNTdkZjhkZjUwYWQwMmI1YWNjYTdjMDcvOTg5ZDc3OWEzOGRhNjZjNzA5Y2I5MmQ2MzE5YTliYTZlNzE4ODE4MTI0MTYzMGEyZGUyOTdkODZkMWEwZTM2Mz9yZXNwb25zZS1jb250ZW50LWRpc3Bvc2l0aW9uPSomcmVzcG9uc2UtY29udGVudC10eXBlPSoifV19&Signature=LSoDG66GwAz7Kr89Hf7QW0PHzqnVrqh0Ifhf8AfQ3ciOz1J8B4S3PSwdBlavfql%7EEflvlWDEMr0PqHgmVKwdkh6u58g23fc27PiHhq3eft6zWdEXVhP9ebMzeD1hj%7EzXUm8D-k-C2nX1K0Gq%7EavE3IiRF1VqvnIjdO00YBpfFD8iBDG5ZULH1YjVzOcMx-9cJKmTNuVxQarIm1LEDu3PEEYDT9sRYPHKYbXLw1R2b0VB06XMc%7EjodWvKFKQdGMFrvyX6-suW2xYhU1-TYMvpZ20qJB7V7OQnwJaEFAjGBCcZROWbn6lrvqv9TmDhf%7EYJw%7EDpfp1fYWsX%7EMizLl5KkQ__&Key-Pair-Id=K24J24Z295AEI9"
        },
        {
            title: "Advanced Learning Algorithms",
            issuer: "Coursera",
            date: "2024",
            link: "https://www.coursera.org/account/accomplishments/verify/8ALUPZRDWUNY"
        },
        {
            title: "ML: Regression and Classification",
            issuer: "Coursera",
            date: "2024",
            link: "https://www.coursera.org/account/accomplishments/verify/WKVBV7H58XPA"
        }
    ];

    // Populate Experience
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
    // Populate Certifications
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

    // Rest of previous JavaScript code remains the same
});
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

    // Dynamic Content
    const skills = [
        'Python', 'TensorFlow', 'PyTorch', 
        'NLP', 'Deep Learning', 'LLM', 'Linux',
        'Git', 'Machine Learning', 'PERT', 'OCR', 'Object Detection',
    ];

    const projects = [
        {
            title: 'Academic Chatbot',
            description: 'Fine-tuned the Llama 3.1 8B model using the UnSloth framework with LoRA applied in 4-bit precision for efficient training. Leveraged the FastLanguageModel API with customized LoRA configurations, including targeted modules and gradient checkpointing, to optimize the model for processing a comprehensive school dataset. The dataset included course details, dormitory information, and working-student conditions. The objective was to assist international students by providing tailored information and resources to support their academic and personal needs.',
            tech: 'Python, LLM, PyTorch, Deep Learning, Fine Tuning, LangChain, PERT'
        },
        {
            title: 'HandMotion Prediction',
            description: 'Developing a machine learning project to predict the acceleration of patients hands, providing one prediction per second for each hand from 7 AM to 7 PM. The dataset contains acceleration values (x, y, z) for both hands and corresponding timestamps, with 50 data points recorded per second. Responsibilities include synchronizing datasets for both hands by aligning timestamps, handling missing data through linear interpolation, and training a Long Short-Term Memory (LSTM) model to produce accurate, second-level predictions.',
            tech: 'Python, Data Analysis, PyTorch, Time-series'
        },
        // {
        //     title: 'Medical Image Analysis',
        //     description: 'CNN for tumor detection in MRI scans',
        //     tech: 'Python, Keras, DICOM'
        // }
    ];

    

    // Populate Skills
    const skillsGrid = document.querySelector('.skills-grid');
    skills.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'skill-card';
        div.textContent = skill;
        skillsGrid.appendChild(div);
    });

    // Populate Projects
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const div = document.createElement('div');
        div.className = 'project-card';
        div.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech">${project.tech}</div>
        `;
        projectsGrid.appendChild(div);
    });

    // Mobile Menu
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// script.js
// Add education data
const education = [
    {
        degree: "MSc in Artificial Intelligence and Data Science",
        institution: "IMT Mines Ales",
        dates: "2023 - 2025",
        details: ""
    },
    {
        degree: "BSc in Computer Science",
        institution: "Institute of Technology of Cambodia",
        dates: "2019 - 2023",
        details: ""
    }
];

// Populate Education
const educationTimeline = document.querySelector('.education-timeline');
education.forEach(edu => {
    const div = document.createElement('div');
    div.className = 'education-item';
    div.innerHTML = `
        <h3>${edu.degree}</h3>
        <div class="education-institution">${edu.institution}</div>
        <div class="education-dates">${edu.dates}</div>
        <p class="education-details">${edu.details}</p>
    `;
    educationTimeline.appendChild(div);
});