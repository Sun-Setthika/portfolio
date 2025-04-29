// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Previous background and setup code remains the same

    // Add Experience Data
    const experience = [
        {
            title: "Mission and Research Development",
            company: "Préfecture du Gard",
            dates: "Jan 2025 - Present",
            description: `
                <ul class="experience-list">
                    <li>Designed and deployed a zero-shot email classification system using LLaMA 3.1 8B and UnSloth, without the need for labeled training data.</li>
                    <li>Refined prompt engineering techniques to ensure the AI system responded and classified accurately and naturally according to the task, making interactions smoother for prefecutre.</li>
                    <li>Created a Retrieval-Augmented Generation (RAG) pipeline to dynamically  that dynamically pulls in relevant legal codes and administrative policies for response generation and letter generation task.</li>
                </ul>
            `,
        },
        {
            title: "AI Engineer",
            company: "Ministry of Posts and Telecommunication, Cambodia",
            dates: "Feb 2024 - May 2024",
            description: `
                <ul class="experience-list">
                    <li>Developed OCR system (Optical Character Recognition)  for Khmer language using PyTesseract, OpenCV, and a CNN-GRU architecture, enabling accurate recognition of complex syllabic structures and unique typographic features in Khmer.</li>
                    <li>Constructed diverse synthetic datasets from raw text, and csv using various font families (Khmer Mondulkiri, Battambang, Khmer OS Siemreap, Khmer OS Muol Light, and Khmer OS Bokor), improving model robustness and real-world performance.</li>
                    <li>Fine-tuned a deep learning pipeline combining Convolutional Neural Networks (CNN) with Gated Recurrent Units (GRU) to handle spatial and sequential features, ehnacing the accuracy and extract text from the input image.</li>
                    <li>Built a user-friendly interface with Gradio that allowed users to upload image and extract, edit, and manage text from images effortlessly.</li>
                    <li>Accelerated the digitization of Khmer documents, enhancing searchability and preservation of cultural records while supporting the Ministry’s broader e-governance and AI for public service agenda.</li>
                </ul>
            `,
            // <li>Developed OCR system (Optical Character Recognition) tailored for Khmer scripts—addressing the nation's unique linguistic and technical needs. The goal was to digitize printed Khmer text—making it accessible, searchable, and editable.This involved recognizing five specific fonts commonly used in official and historical texts: Khmer Mondulkiri, Battambang, Khmer OS Siemreap, Khmer OS Muol Light, and Khmer OS Bokor.</li>
        },
        {
            title: "Full-stack Developer",
            company: "Institute of Technology of Cambodia",
            dates: "Jul 2023 - Sep 2023",
            description: `
                <ul class="experience-list">
                    <li>Designed and Developed, role-based workflow system using Laravel (PHP) and Vue.js, offering dedicated user paths for applicants, department heads, and administrators.</li>
                    <li>Developed online application system for seamless document upload, draft-saving, and real-time application tracking, significantly improving Master's applicants' experiences in registering for Master program online and reducing back-and-forth email traffic.</li>
                    <li>Integrated automated PDF/Excel report generation for administrators, reducing manual paperwork and enhancing data visibility across programs.</li>
                </ul>
            `,
        },
        {
            title: "Software Engineer",
            company: "Institute of Technology of Cambodia",
            dates: "May 2023 - Jul 2023",
            description: `
                <ul class="experience-list">
                    <li>Created a fully operational Point-of-Sale (POS) system tailored to café environments using Java and Spring Boot and Thymleaf.</li>
                    <li>Implemented inventory management, operations by managing orders, tables reservation, billing, and staff roles. </li>
                    <li>Key features included real-time order tracking, digital receipts generation, menu management, and role-based access for cashiers and administrators. The backend was built with Spring Boot to ensure scalability, modularity, and efficient API handling. The application aimed to improve service speed, reduce human error, and provide insightful sales reports for business analysis.</li>
                   
                </ul>
            `,
        }
    ];

    // Add Certifications Data
    const certifications = [
        {
            title: "AI Agents Fundamentals",
            issuer: "Hugging Face",
            date: "2025",
            link: "https://shorturl.at/ZP4EE"
        },
        {
            title: "LLM Course",
            issuer: "Hugging Face",
            date: "2025",
            link: "https://cdn-uploads.huggingface.co/production/uploads/noauth/6Pj-3qk8EMIMpgzYDNaaX.webp"
        }
        // {
        //     title: "ML: Regression and Classification",
        //     issuer: "Coursera",
        //     date: "2024",
        //     link: "https://www.coursera.org/account/accomplishments/verify/WKVBV7H58XPA"
        // }
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
        'Python', 'TensorFlow', 'PyTorch', 'Gradio', 'Streamlit', 'PHP', 
        'Laravel', 'Vue.js', 'Spring Boot', 'HTML', 'CSS', 'Tailwind CSS', 'Docker', 'JavaScript', 'C++',
        'NLP','LLM','Computer Vision' ,'Deep Learning', 'Deep Reinforcement Learning',
        'Machine Learning','OCR (Optical Character Recognition)','Git', 'Linux', 'Web Development',
        
    ];

    const projects = [
        {
            id: 'academic-chatbot',
            title: 'Academic Chatbot',
            description: `
                <ul class="">
                    <li>Conducted a comparative study of two chatbot development approaches: fine-tuning and Retrieval-Augmented Generation (RAG).</li>
                    <li>Fine-tuned the pre-trained Llama 3.1 8B language model using UnSloth and LoRA, specifically optimized to assist international students by leveraging a custom academic dataset.</li>
                    <li>Developed and implemented a robust RAG system that combines the Llama 3.1 8B model with a hybrid retrieval mechanism using BM25 and a semantic encoder (sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2).</li>
                    <li>The dataset included comprehensive information such as:
                        <ul class="sublist">
                            <li>Housing and rental options for students.</li>
                            <li>Study and work conditions for international learners.</li>
                            <li>Detailed descriptions of courses, curricula, and academic requirements in the Department of Informatics and Artificial Intelligence.</li>
                        </ul>
                    </li>
                </ul>
            `,
            tech: 'Python, LLM, PyTorch, Deep Learning, Fine Tuning, LangChain, PERT, Git'
        },
        {
            id: 'Finetune-Text-to-Speech',
            title: 'Finetune Text to Speech',
            description: `
            <ul>
                <li>Fine-tuned the SpeechT5 model, a versatile transformer-based architecture, to generate high-quality speech in multiple languages using the VoxPopuli dataset.</li>
                <li>Prepared and processed a subset of the VoxPopuli dataset (10-15 hours of audio) for efficient fine-tuning, focusing on languages like Dutch. </li>
                <li>Performed data preprocessing tasks such as text normalization, tokenization, audio resampling (to 16kHz), and feature extraction (e.g., mel-spectrograms) using the SpeechT5Processor.</li>
                <li>Generated placeholder speaker embeddings to condition the model on speaker-specific characteristics, improving the naturalness and consistency of synthesized speech.</li>
                
            </ul>
        `,
        // <li>Evaluated the model's performance on a validation set and qualitatively analyzed generated audio outputs for clarity, naturalness, and alignment with target language nuances.</li>
        // <li>Deployed the fine-tuned model to the Hugging Face Hub, enabling seamless sharing and integration into applications like voice assistants, audiobook generation, and accessibility tools.</li>
            tech: 'Python, PyTorch, Hugging Face Transformers, SpeechT5, VoxPopuli Dataset, Seq2SeqTrainer, Data Preprocessing, Feature Extraction, Model Fine-Tuning, Git'
        },
        {
            id: 'Data-Visualization',
            title: 'Data Visualization',
            description: `
                <ul>
                    <li>Designed and implemented a data analysis pipeline for social media interaction patterns, processing raw survey data through comprehensive cleaning, feature engineering, and categorical encoding using R, dplyr, and tidy</li>
                    <li>Developed and deployed interactive dashboard visualizations (Shiny) to explore relationships between time spent on platforms, stranger interactions, and psychological impacts </li>
                    <li>Click here for more details:
                     <a href="https://visualizedata.shinyapps.io/Projet/" target="_blank">https://visualizedata.shinyapps.io/Projet/ class="data-visualization-link"</a>
                    </li>
                </ul>
            `,
            tech: 'R, Shinyapp, Python, Data Analysis, Git'
        },
        {
            id: 'Movie-Review',
            title: 'Movie Review Sentiment Classification: A Comparative Study of Traditional and Deep Learning Models',
            description: `
            <ul>
                <li>Conducted a comprehensive study to compare traditional machine learning models (SVM, Logistic Regression, Naive Bayes) with deep learning models (LSTM, BERT transformer) for sentiment classification on movie reviews.</li>
                <li>Fine-tuned deep learning models, including LSTM and BERT, on a labeled dataset of movie reviews to improve their performance in semantic understanding and sentiment prediction.</li>
                <li>Preprocessed text data using techniques such as tokenization, stopword removal, and TF-IDF vectorization for traditional models, while leveraging embeddings like Word2Vec and contextualized embeddings from BERT for deep learning models.</li>
                <li>Evaluated model performance using metrics such as accuracy, precision, recall, and F1-score, providing a detailed comparison of the strengths and limitations of each approach.</li>
                <li>Deployed and deployed the best-performing model for real-time sentiment analysis. The application was hosted on a user-friendly interface developed using Streamlit Community Cloud.</li>
                <li>Click here for more details:
                     <a href="https://movies-review-sentiment-analysis-eidbpyv6tkvo8wkyubsjph.streamlit.app/?fbclid=IwZXh0bgNhZW0CMTEAAR7UAkgaojxC4HVxxrFyoFNHMZyRfUlpah9SR_XmIdmzSf9b4WaCMI8_TEHeWg_aem_-8P8WVo3vsoMKAg2ZSWOnw" target="_blank">https://movies-review-sentiment-analysis-eidbpyv6tkvo8wkyubsjph.streamlit.app/?fbclid=IwZXh0bgNhZW0CMTEAAR7UAkgaojxC4HVxxrFyoFNHMZyRfUlpah9SR_XmIdmzSf9b4WaCMI8_TEHeWg_aem_-8P8WVo3vsoMKAg2ZSWOnw "</a>
                </li>
            </ul>
        `,
         tech: 'Python, PyTorch, TensorFlow, Scikit-learn, NLTK, Hugging Face Transformers, Streamlit'
        },
        {
            id: 'e-commerce',
            title: 'E-Commerce Web application',
            description: `Developed a web application for sports shoe sales using a Vue.js frontend and a Laravel backend. The frontend, built with Vue.js, provided a dynamic and responsive user interface, enabling users to browse products, filter by size, brand, and category, and manage their shopping cart in real time. The backend, powered by Laravel, handled key functionalities such as user authentication, product management, inventory tracking, order processing, and payment integration. The system also included an admin dashboard for managing product listings, viewing sales analytics, and handling customer queries. The application aimed to deliver a seamless e-commerce experience optimized for both desktop and mobile users.`,
            tech: ' PHP, Vue.js, Laravel, HTML, CSS, Javascript, Tailwind, Git'
        },
        // {
        //     id: 'cafe-system',
        //     title: 'Café System',
        //     description: `Developed a Point of Sale (POS) management system for a café using Java and the Spring Boot backend framework. The system was designed to streamline daily operations by managing orders, inventory, tables, billing, and staff roles. Key features included real-time order tracking, digital receipts, menu management, and role-based access for cashiers and administrators. The backend was built with Spring Boot to ensure scalability, modularity, and efficient API handling. The application aimed to improve service speed, reduce human error, and provide insightful sales reports for business analysis.`,
        //     tech: 'Java, Spring Boot, Thymeleaf, Tailwind, Java script ,Git'
        // },
        {
            id: 'air-writing',
            title: 'Air Writing',
            description: `Collected and prepared khmer dataset to train and fine-tune an existing machine learning model with the goal of improving its prediction accuracy. The process involved data cleaning, augmentation, and labeling to ensure high-quality input. The model was retrained using the updated dataset, followed by performance evaluation through metrics such as accuracy, precision, recall, and F1-score. This iterative process helped enhance the model’s generalization and reliability in real-world scenarios.`,
            tech: 'Python, PyTorch ,Git'
        },
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
        div.id = project.id;
        div.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech">${project.tech}</div>
        `;
        projectsGrid.appendChild(div);
    });

    // Check for anchor link on page load
    // window.addEventListener('DOMContentLoaded', () => {
    //     const hash = window.location.hash.substring(1); // Get #id from URL
    //     if (hash) {
    //         const project = document.getElementById(hash);
    //         if (project) {
    //             project.scrollIntoView({ behavior: 'smooth' });
    //             project.style.backgroundColor = '#f8f9fa'; // Optional highlight
    //         }
    //     }
    // });

    // Smooth scroll handler
    function scrollToTarget(hash, offset = 0) {
        setTimeout(() => {
            const target = document.querySelector(hash);
            if (target) {
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }, 100); // Give DOM time to render
    }

    // Handle direct navigation with hash (#)
    window.addEventListener('load', () => {
        if (window.location.hash) {
            scrollToTarget(window.location.hash, 100); // Adjust offset if nav bar overlaps
        }
    });

    // Handle clicks on anchor links
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         history.pushState(null, '', this.getAttribute('href'));
    //         scrollToTarget(this.getAttribute('href'), 100);
    //     });
    // });

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
        dates: "2024 - 2026",
        details: ""
    },
    {
        degree: "Engineer in Computer Science",
        institution: "Institute of Technology of Cambodia",
        dates: "2019 - 2024",
        details: "",
        certificateLink:"https://drive.google.com/file/d/1_l47ltz4hGzPOs0fvZl3AL-kYQWtIssW/view?usp=drive_link" 
        // link: "https://www.itc.edu.kh", // Add the URL you want to link to
        // linkText: "View Institution" // Optional: Custom link text
    }
];

// Populate Education
const educationTimeline = document.querySelector('.education-timeline');
education.forEach(edu => {
    const div = document.createElement('div');
    div.className = 'education-item';
    // const certificateLink = edu.certificateLink 
    //     ? `<div class="education-certificate">
    //          <a href="${edu.certificateLink}" target="_blank" class="certificate-link">
    //            View Certificate
    //          </a>
    //        </div>`
    //     : '';
    div.innerHTML = `
        <h3>${edu.degree}</h3>
        <div class="education-institution">${edu.institution}</div>
        <div class="education-dates">${edu.dates}</div>
        <p class="education-details">${edu.details}</p>
    `;
    educationTimeline.appendChild(div);
});