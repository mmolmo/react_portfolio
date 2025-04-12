import styles from './Projects.module.css'
import { ProjectsList } from '../../data/Projects';
import ProjectCard from '../../elements/ProjectCard'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'

export default function Projects() {
  const projects = [...ProjectsList];

  // Scroll animation setup
  const { scrollY } = useScroll();
  const title = "My Projects";
  const titleArray = title.split("");

  // Title animation variants
  const titleVariants = {
    hidden: { 
      opacity: 0.5,
      y: -25
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.08,
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    })
  }

  // Subtitle animation
  const subtitleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 1.2, // Matches total title animation duration
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
      <motion.h1 
          className={styles.title}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {titleArray.map((char, index) => {
            // Create a unique scroll-triggered y-transform for each letter
            // Create smooth scroll animations with springs for each letter
            const yOffsetRaw = useTransform(
              scrollY,
              [0, 500], 
              [0, 10 + index * 50]
            );
            
            // Add spring physics to make movement smooth
            const yOffset = useSpring(yOffsetRaw, {
              stiffness: 80,  // Lower for more fluid movement
              damping: 15     // Adjust for desired "bounce"
            });
            
            // Add opacity that decreases as scroll increases
            const opacity = useTransform(
              scrollY,
              [0, 300, 500],  // Start fading at 300px, fully transparent by 500px
              [1, 0.3, 0]
            );

            return (
              <motion.span
                key={index}
                variants={titleVariants}
                custom={index}
                style={{
                  display: 'inline-block',
                  whiteSpace: 'pre',
                  y: yOffset,     // Spring-animated y position
                  opacity: opacity // Fade out as you scroll
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </motion.h1>

        <motion.p 
          className={styles.subtitle}
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Showcasing my frontend development expertise
        </motion.p>
        
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}