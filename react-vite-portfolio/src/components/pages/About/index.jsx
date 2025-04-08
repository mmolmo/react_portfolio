import styles from './About.module.css'
import { useNavigate } from 'react-router-dom';

export default function About() {

  const navigate = useNavigate();

  const handleNavigation = (screenToNavigate) => (e) => {
    e.preventDefault();
    navigate(screenToNavigate);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textWrapper}>
          <p className={styles.introText}>Hi, I'm</p>
          <h1>Alex Johnson</h1>
          <div className={styles.animatedText}>
            <span className={styles.staticText}>I'm a </span>
            <ul className={styles.dynamicText}>
              <li>Web Designer</li>
              <li>UI Developer</li>
              <li>React Expert</li>
              <li>Frontend Wizard</li>
            </ul>
          </div>
          <p className={styles.description}>Crafting beautiful digital experiences with modern web technologies.</p>
          <a href="../Projects" className={styles.ctaButton} onClick={handleNavigation('../Projects')}>
            View My Work
            <i className="fas fa-arrow-down"></i>
          </a>
        </div>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <i className="fas fa-code"></i>
            <h3>Clean Code</h3>
            <p>Semantic, accessible, and maintainable</p>
          </div>
          <div className={styles.skillCard}>
            <i className="fas fa-mobile-alt"></i>
            <h3>Responsive Design</h3>
            <p>Perfect on all devices</p>
          </div>
          <div className={styles.skillCard}>
            <i className="fab fa-react"></i>
            <h3>React Projects</h3>
            <p>Interactive web applications</p>
          </div>
        </div>
      </div>
    </section>
  )
}