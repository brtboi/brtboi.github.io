import { contact } from '../content'
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.heroKicker}>Hi, I'm</p>
        <h1 className={styles.heroName}>Brent Hu</h1>
        <p className={styles.heroTagline}>
          Computer science student at Yale, building software across AI research and
          full-stack web apps.
        </p>
        <div className={styles.heroLinks}>
          <a href={`mailto:${contact.email}`} className={styles.pill}>
            {contact.email}
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" className={styles.pill}>
            GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className={styles.pill}>
            LinkedIn
          </a>
          <a
            href={contact.resumeHref}
            target="_blank"
            rel="noreferrer"
            className={`${styles.pill} ${styles.pillAccent}`}
          >
            Resume
          </a>
        </div>
      </div>
      <a href="#education" className={styles.scrollHint} aria-label="Scroll to content">
        <span />
      </a>
    </section>
  )
}
