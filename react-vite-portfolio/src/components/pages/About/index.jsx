import styles from './About.module.css'

export default function About() {
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
          <button className={styles.ctaButton}>View My Work</button>
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