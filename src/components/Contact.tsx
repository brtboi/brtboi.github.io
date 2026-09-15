import { contact } from '../content'
import Reveal from './Reveal'
import shared from '../styles/shared.module.scss'
import styles from './Contact.module.scss'

export default function Contact() {
  return (
    <footer id="contact" className={`${shared.section} ${styles.contact}`}>
      <Reveal>
        <h2 className={shared.sectionTitle}>Get in touch</h2>
        <p className={styles.contactBlurb}>
          Always happy to talk about research, side projects, or anything in
          between. Reach out any time.
        </p>
        <a href={`mailto:${contact.email}`} className={styles.contactEmail}>
          {contact.email}
        </a>
        <div className={styles.contactLinks}>
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={contact.resumeHref} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
        <p className={styles.contactFooter}>
          &copy; {new Date().getFullYear()} Brent Hu
        </p>
      </Reveal>
    </footer>
  )
}
