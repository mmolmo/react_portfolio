// Footer.js
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} James Li - All rights reserved.</p>
        <div className={styles.socialIcons}>
          {/* future social media links, wip */}
        </div>
      </div>
    </footer>
  )
}