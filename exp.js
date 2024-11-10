document.addEventListener("DOMContentLoaded", function() {
    const experienceData = [
        {
            title: "Linux Server Setup",
            description: "Configured and secured a Linux server.",
            technologies: "Technologies: Linux, Apache."
        },
        {
            title: "Portfolio Website",
            description: "Developed a personal portfolio site.",
            technologies: "Technologies: HTML, CSS, JavaScript."
        },
        {
            title: "Network Configuration",
            description: "Set up and optimized a small office network.",
            technologies: "Technologies: Linux networking tools."
        },
        {
            title: "Blog Platform",
            description: "Built a blog with user authentication.",
            technologies: "Technologies: React, Node.js."
        },
        {
            title: "Security Scan",
            description: "Conducted a basic security assessment.",
            technologies: "Technologies: OWASP guidelines."
        },
        {
            title: "Deployment Script",
            description: "Automated deployment for a web project.",
            technologies: "Technologies: Git, Docker."
        }
    ];

    const experienceList = document.getElementById("experience-list");

    experienceData.forEach(item => {
        const experienceItem = document.createElement("div");
        experienceItem.classList.add("experience-item");

        const title = document.createElement("h3");
        title.textContent = item.title;
        experienceItem.appendChild(title);

        const description = document.createElement("p");
        description.textContent = item.description;
        experienceItem.appendChild(description);

        const technologies = document.createElement("p");
        technologies.textContent = item.technologies;
        experienceItem.appendChild(technologies);

        experienceList.appendChild(experienceItem);
    });
});
