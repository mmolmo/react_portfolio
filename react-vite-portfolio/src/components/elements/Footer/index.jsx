// Footer.js
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className={styles.socialIcons}>
          {/* Add same social icons as contact page if desired */}
        </div>
      </div>
    </footer>
  )
}