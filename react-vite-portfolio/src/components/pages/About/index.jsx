import { motion } from 'motion/react';
import { Skills } from '../../data/Skills'; // Assume we have a skills data file
import styles from './About.module.css';
import profileImage from '../../../assets/profile.jpg';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.profileSection}
        >
          <img 
            src={profileImage} 
            alt="Alex Johnson" 
            className={styles.profileImage} 
          />
          <div className={styles.bio}>
            <h1 className={styles.title}>About Me...</h1>
            <p className={styles.bioText}>
              Front-end Designer with an eye for design and a passion for creating user experiences. Currently interning with locally-run art startup to build their web and digital presence.
            </p>
            <p className={styles.bioText}>
              Building on a foundation of design-focused coursework and hands-on projects, I've contributed to designing and developing multiple student projects. My experience in web development taught me the value of teamwork and knowledge sharing. Always eager to learn, I’m continuously exploring new frameworks and techniques to enhance usability and design. 
            </p>
          </div>
        </motion.div>

        <div className={styles.skillsSection}>
          <h2 className={styles.skillsTitle}>Technical Skills</h2>
          <motion.div
            className={styles.skillsGrid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {Skills.map((skill) => (
              <motion.div
              key={skill.name}
              className={styles.skillCard}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
                <i className={`${skill.iconClass} ${styles.skillIcon}`}></i>
                <h3 className={styles.skillName}>{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}