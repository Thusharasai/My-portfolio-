document.addEventListener("DOMContentLoaded", function() {
    const educationData = [
        {
            institution: "Annamacharya Institute of Technology & Science, Tirupati",
            degree: "B. Tech (CIC)",
            university: "JNTU Anantapur",
            year: "2025",
            grade: "79.4%"
        },
        {
            institution: "Sri Vivekananda Junior College, Chittoor",
            degree: "Intermediate (M.P.C)",
            university: "Board of Intermediate Education",
            year: "2021",
            grade: "77.6%"
        },
        {
            institution: "Keshavareddy English Medium High School, Chittoor",
            degree: "SSC",
            university: "Board of Secondary Education",
            year: "2019",
            grade: "97%"
        }
    ];

    const educationList = document.getElementById("education-list");

    educationData.forEach(item => {
        const educationItem = document.createElement("div");
        educationItem.classList.add("education-item");

        const institution = document.createElement("h3");
        institution.textContent = item.institution;
        educationItem.appendChild(institution);

        const degree = document.createElement("p");
        degree.innerHTML = `<strong>${item.degree}</strong> - ${item.year}`;
        educationItem.appendChild(degree);

        const university = document.createElement("p");
        university.textContent = item.university;
        educationItem.appendChild(university);

        const grade = document.createElement("p");
        grade.textContent = `Grade: ${item.grade}`;
        educationItem.appendChild(grade);

        educationList.appendChild(educationItem);
    });
});
