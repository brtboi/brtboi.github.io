import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { MdKeyboardArrowDown, MdMail } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { contact } from '../content'
import styles from './Intro.module.scss'

export default function Intro() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="me" className={styles.introDiv}>
      <div className={styles.introInner}>
        <p className={styles.hi}>Hi, I'm</p>
        <h1 className={styles.name}>Brent Hu</h1>
        <p className={styles.tagline}>
          Computer science student at Yale, building software across AI research and
          full-stack web apps.
        </p>
        <div className={styles.heroLinks}>
          <a
            href={`mailto:${contact.email}`}
            className={clsx(styles.pill, styles.pillIcon)}
            aria-label="Email Brent"
            title="Email"
          >
            <MdMail />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className={clsx(styles.pill, styles.pillIcon)}
            aria-label="GitHub profile"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className={clsx(styles.pill, styles.pillIcon)}
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={contact.resumeHref}
            target="_blank"
            rel="noreferrer"
            className={clsx(styles.pill, styles.pillAccent)}
          >
            Resume
          </a>
        </div>
      </div>

      <div className={styles.introArrow}>
        <a
          href="#education"
          className={clsx(styles.introArrowLink, scrolled && styles.introArrowHidden)}
          aria-label="Scroll to education"
        >
          <MdKeyboardArrowDown />
        </a>
      </div>
    </section>
  )
}
