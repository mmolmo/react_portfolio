import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [animatedText, setAnimatedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Developer', 'Designer', 'Creator', 'Innovator'];
  
  useEffect(() => {
    const typingEffect = setInterval(() => {
      const word = words[currentWordIndex];
      setAnimatedText(word.substring(0, animatedText.length + 1));
      
      if (animatedText === word) {
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setAnimatedText('');
        }, 2000);
      }
    }, 150);

    return () => clearInterval(typingEffect);
  }, [animatedText, currentWordIndex]);

  const navigate = useNavigate();

  const handleNavigation = (screenToNavigate) => (e) => {
    e.preventDefault();
    navigate(screenToNavigate);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.floatingShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.textWrapper}>
          <h6 className={styles.introText}>Hi, I'm Alex Johnson</h6>
          <h1 className={styles.mainTitle}>
            Frontend <span className={styles.animatedText}>{animatedText}</span>
            <span className={styles.cursor}>|</span>
          </h1>
          <p className={styles.subtitle}>
            Crafting beautiful digital experiences with modern web technologies
          </p>
          
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

          <div className={styles.buttonGroup}>
            <a href="../Projects" className={styles.ctaButton} onClick={handleNavigation('../Projects')}>
              View My Work
              <i className="fas fa-arrow-down"></i>
            </a>
            <a href="#contact" className={styles.outlineButton} onClick={handleNavigation('../Contact')}>
              Get In Touch
            </a>
          </div>
        </div>

        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialIcon}><i className="fab fa-github"></i></a>
          <a href="#" className={styles.socialIcon}><i className="fab fa-linkedin"></i></a>
          <a href="#" className={styles.socialIcon}><i className="fab fa-twitter"></i></a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.scroller}></div>
        </div>
      </div>
    </section>
  )
}