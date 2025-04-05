import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = 'Invalid email address'
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSuccessMessage('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSuccessMessage(''), 3000)
    } catch (error) {
      setErrors({ form: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={styles.hero}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Get in Touch</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className={`${styles.input} ${errors.name ? styles.errorInput : ''}`}
              placeholder=" "
            />
            <label htmlFor="name" className={styles.label}>Your Name</label>
            <i className={`fas fa-user ${styles.icon}`}></i>
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className={`${styles.input} ${errors.email ? styles.errorInput : ''}`}
              placeholder=" "
            />
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <i className={`fas fa-envelope ${styles.icon}`}></i>
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>

          <div className={styles.inputGroup}>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className={`${styles.textarea} ${errors.message ? styles.errorInput : ''}`}
              placeholder=" "
              rows="5"
            />
            <label htmlFor="message" className={styles.label}>Your Message</label>
            <i className={`fas fa-comment-dots ${styles.icon}`}></i>
            {errors.message && <span className={styles.error}>{errors.message}</span>}
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> Sending...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane"></i> Send Message
              </>
            )}
          </button>

          {successMessage && (
            <div className={styles.successMessage}>
              <i className="fas fa-check-circle"></i> {successMessage}
            </div>
          )}

          {errors.form && <div className={styles.formError}>{errors.form}</div>}
        </form>
      </div>
    </section>
  )
}