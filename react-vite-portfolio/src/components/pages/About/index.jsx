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
            <h1 className={styles.title}>Alex Johnson</h1>
            <p className={styles.bioText}>
              Frontend developer specializing in modern web applications. With 5 years of experience, 
              I create intuitive digital experiences using cutting-edge technologies. When I'm not coding, 
              you'll find me hiking nature trails or experimenting with new recipes in the kitchen. 
              Passionate about open-source projects and mentoring up-and-coming developers.
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

        <div className={styles.interestsSection}>
          <h2 className={styles.interestsTitle}>Other Interests</h2>
          <div className={styles.interestsList}>
            <span className={styles.interest}>🚴 Cycling</span>
            <span className={styles.interest}>📸 Photography</span>
            <span className={styles.interest}>🌱 Sustainable Tech</span>
            <span className={styles.interest}>🎸 Guitar</span>
          </div>
        </div>
      </div>
    </section>
  )
}