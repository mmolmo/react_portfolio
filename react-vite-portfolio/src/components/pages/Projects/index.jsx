import styles from './Projects.module.css'

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Full-featured online shopping platform with React & Node.js",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: "/project1.jpg",
      demo: "#",
      code: "#"
    },
    {
      title: "Task Management App",
      desc: "Real-time collaborative task management system",
      tech: ["React", "Firebase", "Material UI", "Redux"],
      image: "/project2.jpg",
      demo: "#",
      code: "#"
    },
    {
      title: "Social Media Dashboard",
      desc: "Analytics dashboard with data visualization",
      tech: ["Next.js", "Chart.js", "Express", "PostgreSQL"],
      image: "/project3.jpg",
      demo: "#",
      code: "#"
    }
  ]

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>My Projects</h1>
        <p className={styles.subtitle}>Showcasing my frontend development expertise</p>
        
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <article key={index} className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={styles.projectImage}
                />
                <div className={styles.imageOverlay}></div>
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.desc}</p>
                
                <div className={styles.techTags}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.tag}>{tech}</span>
                  ))}
                </div>
                
                <div className={styles.projectLinks}>
                  <a 
                    href={project.demo} 
                    className={styles.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.code} 
                    className={styles.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}