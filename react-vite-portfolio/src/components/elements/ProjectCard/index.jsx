import styles from './ProjectCard.module.css'
import { motion } from "motion/react" // Note: Correct import is from "framer-motion"

export default function ProjectCard({ project }) {
  // Animation variants
  const cardVariants = {
    initial: { y: 0, scale: 1 },
    hover: { 
      y: -10, 
      scale: 1.02, 
      transition: { 
        type: "bounce",
        stiffness: 800, // Increased from 600
        damping: 15,    // Increased from 10
        duration: 0.1  // Adjusted to your preferred duration
      } 
    }
  }

  const imageOverlayVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 0.7 }
  }

  const techTagVariants = {
    initial: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5
      }
    })
  }

  return (
    <motion.article 
      initial="initial"
      whileHover="hover"
      variants={cardVariants}
      className={styles.projectCard}
    >
      <div className={styles.imageContainer}>
        <img 
          src={project.image} 
          alt={project.title} 
          className={styles.projectImage}
        />
        <motion.div 
          className={styles.imageOverlay}
          variants={imageOverlayVariants}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      <motion.div 
        className={styles.projectContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDesc}>{project.desc}</p>
        
        <motion.div 
          className={styles.techTags}
          initial="initial"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          {project.tech.map((tech, i) => (
            <motion.span 
              key={i} 
              className={styles.tag}
              variants={techTagVariants}
              custom={i}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div 
          className={styles.projectLinks}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a 
            href={project.demo} 
            className={styles.demoLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo
          </motion.a>
          <motion.a 
            href={project.code} 
            className={styles.codeLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-github"></i> Source Code
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.article>
  )
}