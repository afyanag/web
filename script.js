const dynamicSection = document.getElementById('dynamic-section');

// Projects data for portfolio
const projects = [
    {
        title: "dvanced AI Stock Prediction System",
        images: ["plot.png"], // Add multiple images
        description: "Combining Wavelet Denoising, LSTM Neural Networks, and Prophet Forecasting",
        category: "Python",
        link: "https://afyanarmenai.streamlit.app/"
    },
    {
        title: "Marketing Analytics Dashboard",
        images: ["newplot.png"], // Add multiple images
        description: "An interactive platform for analyzing and optimizing marketing performance through visualizations, predictive modeling, and data-driven insights.",
        category: "Python",
        link: "https://afyanag-marketing-marketing-p6q3yb.streamlit.app/"
    },
    {
        title: "Social Media Sentiment Analysis Dashboard",
        images: ["sent.png"], // Add multiple images
        description: "A comprehensive dashboard for analyzing social media data, including sentiment distribution, engagement metrics, and trend analysis.",
        category: "Python",
        link: "https://gtsfzvpcmzkzzzx3bt5euy.streamlit.app/"
    },
    {
        title: "E-Commerce Sales Analysis Dashboard",
        images: ["pro.png"], // Add multiple images
        description: "An insightful dashboard for analyzing e-commerce performance, including KPIs, customer segmentation, seasonal trends, and category-wise sales.",
        category: "Python",
        link: "https://commerce-8hytdkmklawl7o2929oxwi.streamlit.app/"
    },
    {
        title: "Sales Analytics Dashboard",
        images: ["1.png"],
        description: "An interactive dashboard for analyzing sales trends, profit, and customer insights over time.",
        category: "Power BI",
        link: "" // Leave blank if no link
    },
    {
        title: "Issue Tracking Dashboard",
        images: ["2.png"],
        description: "A Power BI dashboard to monitor and manage issues with detailed SLA metrics.",
        category: "Power BI",
        link: ""
    },
    {
        title: "Customer Insights Dashboard",
        images: ["4.png"],
        description: "A comprehensive dashboard showcasing customer segmentation and performance metrics.",
        category: "Power BI",
        link: ""
    },
    {
        title: "Monthly Sales Trends",
        images: ["5.png"],
        description: "Dashboard analyzing monthly sales trends, top-selling products, and revenue insights.",
        category: "Power BI",
        link: ""
    }
];

// Render portfolio with optional filter
function renderPortfolio(filter = "All") {
    let filteredProjects = projects;
    if (filter !== "All") {
        filteredProjects = projects.filter(project => project.category === filter);
    }

    dynamicSection.innerHTML = `
        <h2>Portfolio</h2>
        <div class="filters">
            <button onclick="renderPortfolio('All')">All</button>
            <button onclick="renderPortfolio('Python')">Python</button>
            <button onclick="renderPortfolio('Power BI')">Power BI</button>
        </div>
        <div class="portfolio">
            ${filteredProjects
                .map(
                    (project, index) => `
                <div class="portfolio-item">
                    <div class="slider-container">
                        <div class="slider">
                            ${project.images
                                .map(
                                    image => `<img src="${image}" alt="${project.title}">`
                                )
                                .join("")}
                        </div>
                    </div>
                    <div class="content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="#" onclick="${
                            project.link
                                ? `window.open('${project.link}', '_blank')`
                                : `openModal(projects[${index}])`
                        }">View Project</a>
                    </div>
                </div>
            `
                )
                .join("")}
        </div>
    `;
}

// Open modal for projects without links
function openModal(project) {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTechnologies = document.getElementById('modal-technologies');
    const modalImage = document.getElementById('modal-image');

    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalTechnologies.innerHTML = `<strong>Category:</strong> ${project.category}`;
    modalImage.innerHTML = project.images
        .map(image => `<img src="${image}" alt="${project.title}" style="max-width: 100%; height: auto;">`)
        .join("");

    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
}

// Show specific section
function showContent(section) {
    if (section === 'about') {
        dynamicSection.innerHTML = `
            <h2>About Me</h2>
            <div class="content">
                <p>Results-driven BI Analyst and Data Scientist with over 5 years of experience in transforming complex data into actionable business insights. Proficient in data analysis, visualization, and reporting using tools such as Power BI, Tableau, and Python. Adept at collaborating with cross-functional teams to drive data-driven decision-making and enhance organizational performance.</p>
            </div>
        `;
    } else if (section === 'resume') {
        dynamicSection.innerHTML = `
            <h2>Resume</h2>
            <div class="resume-section">
                <h3>Education</h3>
                <div class="timeline">
                    <div class="timeline-item">
                        <h4>Master of Science in Economics</h4>
                        <p>American University of Armenia, 2022</p>
                    </div>
                    <div class="timeline-item">
                        <h4>Bachelor of Science in Physics</h4>
                        <p>Yerevan State University, 2018</p>
                    </div>
                </div>
                <h3>Experience</h3>
                <div class="timeline">
                    <div class="timeline-item">
                        <h4>BI Product Analyst</h4>
                        <p>SoftConstruct, Yerevan, Armenia (March 2023 – Present)</p>
                    </div>
                    <div class="timeline-item">
                        <h4>Freelance Data Analyst</h4>
                        <p>Yerevan, Armenia (April 2022 – March 2023)</p>
                    </div>
                    <div class="timeline-item">
                        <h4>Business Analyst</h4>
                        <p>Central Bank of Armenia (November 2021 – April 2022)</p>
                    </div>
                </div>
                <h3>Skills</h3>
                <div class="skills">
                    <div class="skill">
                        <span>Python</span>
                        <div class="skill-bar"><span style="width: 90%;"></span></div>
                    </div>
                    <div class="skill">
                        <span>Power BI</span>
                        <div class="skill-bar"><span style="width: 85%;"></span></div>
                    </div>
                    <div class="skill">
                        <span>Tableau</span>
                        <div class="skill-bar"><span style="width: 80%;"></span></div>
                    </div>
                    <div class="skill">
                        <span>SQL</span>
                        <div class="skill-bar"><span style="width: 95%;"></span></div>
                    </div>
                </div>
            </div>
        `;
    } else if (section === 'portfolio') {
        renderPortfolio();
    }
}

// Load default content
showContent('about');
