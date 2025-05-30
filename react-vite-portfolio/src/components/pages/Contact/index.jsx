import { useState, useRef  } from 'react'
import styles from './Contact.module.css'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const formRef = useRef(null)

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
      // Replace the simulation with EmailJS send
      const result = await emailjs.sendForm(
        'service_ot9dih4',    // EmailJS service ID
        'template_kbot0r1',   // EmailJS template ID
        formRef.current,           // Your form data
        'HlKfgJeuN4KACGWLs',     // EmailJS public key
      )
      
      // console.log('Email sent successfully:', result.text)
      setSuccessMessage('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSuccessMessage(''), 3000)
    } catch (error) {
      console.error('Failed to send email:', error)
      setErrors({ form: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={styles.hero}>
      <div className={styles.floatingShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Get in Touch</h2>
        <form ref={formRef} onSubmit={handleSubmit} className={styles.form} id="contact-form">
          <fieldset className={styles.inputGroup}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className={`${styles.input} ${errors.name ? styles.errorInput : ''}`}
              placeholder=" "
            />
            <label htmlFor="name" className={styles.label}>Your Name</label>
            <i className={`fas fa-user ${styles.icon}`}></i>
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </fieldset>

          <fieldset className={styles.inputGroup}>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className={`${styles.input} ${errors.email ? styles.errorInput : ''}`}
              placeholder=" "
            />
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <i className={`fas fa-envelope ${styles.icon}`}></i>
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </fieldset>

          <fieldset className={styles.inputGroup}>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className={`${styles.textarea} ${errors.message ? styles.errorInput : ''}`}
              placeholder=" "
              rows="5"
            />
            <label htmlFor="message" className={styles.label}>Your Message</label>
            <i className={`fas fa-comment-dots ${styles.icon}`}></i>
            {errors.message && <span className={styles.error}>{errors.message}</span>}
          </fieldset>

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
        {/* Add Social Media Links */}
        <div className={styles.socialLinks}>
          <h3>Connect With Me</h3>
          <div className={styles.socialIcons}>
            <a href="https://github.com/mmolmo" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/james-li-050b36264" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com/burntjohn_anorak45" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:jamesli20275@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}