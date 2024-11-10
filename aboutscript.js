document.addEventListener('DOMContentLoaded', () => {
    const socialLinks = [
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/thusharasaipagadala/",
            imageSrc:"linkdin.webp"
        },
        {
            platform: "GitHub",
            url: "https://github.com/Thusharasai",
            imageSrc: "github.png" 
        },
        {
            platform: "Instagram",
            url: "https://www.instagram.com/thushara_sai",
            imageSrc: "instagram.png"
        }
    ];

    const socialMediaContainer = document.getElementById('socialMediaLinks');
    
    socialLinks.forEach(link => {
        const socialIcon = document.createElement('a');
        socialIcon.href = link.url;
        socialIcon.target = "_blank";
        socialIcon.ariaLabel = link.platform;

        const icon = document.createElement('img');
        icon.src = link.imageSrc;  
        icon.alt = link.platform;  
        icon.style.width = "40px";   
        icon.style.height = "40px";  
        icon.style.objectFit = "contain"; 

        socialIcon.appendChild(icon);
        socialMediaContainer.appendChild(socialIcon);
    });
});
