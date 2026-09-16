import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { navSections } from '../content'
import styles from './SideNav.module.scss'

export default function SideNav() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = navSections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null)
    const lastId = sections[sections.length - 1]?.id

    const updateActive = () => {
      // active section = the last one (in document order) whose top has
      // scrolled up past the marker line
      const marker = window.innerHeight * 0.4
      let current = sections[0]?.id
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= marker) {
          current = el.id
        }
      }

      // a short trailing section rests below the marker even at max scroll,
      // so it can never win the check above — treat hitting the bottom of the
      // page as being on the last section
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom && lastId) current = lastId

      if (current) setActive(current)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [])

  return (
    <nav className={styles.sideNav} aria-label="Section navigation">
      <ul>
        {navSections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={clsx(active === section.id && styles.isActive)}
            >
              <span className={styles.dot} />
              <span className={styles.label}>{section.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
