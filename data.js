const age = new Date().getFullYear() - 2002

export const data = {
    personDetails: [{
        name: "Akshay",
        age,
        location: "Kerala, India",
    }],
    socialLinks: {
        instagram: "https://instagram.com/akshayitzme",
        linkedin: "https://linkedin.com/in/akshayitzme",
        github: "https://github.com/akshayitzme"
    },
    jobDetails: [{
        company: "Wahni IT Solutions",
        designation: "SDE-II",
    }],
    techStack: [{
        languages: ["JavaScript", "TypeScript", "Python", "PHP"],
        frameworks: ["React", "React Native", "Vue", "Django", "Node", "Express.js", "Next.js", "Flask", "Laravel"],
        databases: ["MongoDB", "MySQL", "Postgres", "Firebase", "Sqlite"],
        os: ["btw", "Manjaro", "Windows"]
    }]
}
