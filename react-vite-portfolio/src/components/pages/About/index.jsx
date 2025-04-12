import { motion } from 'motion/react';
import { Skills } from '../../data/Skills'; // Assume we have a skills data file
import styles from './About.module.css';
import profileImage from '../../../assets/profile.jpg';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const bioContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2 // Optional initial delay if needed
      }
    }
  };

  const bioItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };


  return (
    <section className={styles.hero}>
    <section className={styles.about}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={styles.profileSection}
        >  
        {/* <figure className={styles.profileImage}>
          <img 
            src={profileImage} 
            alt="Alex Johnson" 
          />
        </figure> */}
        <motion.figure 
          className={styles.profileImage}
          whileHover={{
            scale: 1.05,
            rotate: 10,
            transition: { duration: 0.3 }
          }}
        >
          <motion.img 
            src={profileImage} 
            alt="profile image of James Li"
            whileHover={{
              rotate: -10,
              scale: 1.2,
              transition: { duration: 0.3 }
            }}
          />
          
          {/* Floating shapes */}
          <motion.div 
            className={styles.hoverShape}
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: 0.4,
              transition: { duration: 0.5 }
            }}
          />
          
          <motion.div 
            className={styles.hoverShape2}
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: 0.4,
              transition: { duration: 0.5 }
            }}
          />
        </motion.figure>

          <motion.div className={styles.bio}  
            variants={bioContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className={styles.title} variants={bioItemVariants}
            >About Me...</motion.h1>
            <motion.p 
              className={styles.bioText}
              variants={bioItemVariants}
            >
              Front-end Designer with an eye for design and a passion for creating user experiences. Currently interning with locally-run art startup to build their web and digital presence.
            </motion.p>
            <motion.p 
              className={styles.bioText}
              variants={bioItemVariants}
            >
              Building on a foundation of design-focused coursework and hands-on projects, I've contributed to designing and developing multiple student projects. My experience in web development taught me the value of teamwork and knowledge sharing. Always eager to learn, I’m continuously exploring new frameworks and techniques to enhance usability and design. 
            </motion.p>
          </motion.div>
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
    </section>
  )
}