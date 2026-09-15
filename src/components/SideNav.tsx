import { useEffect, useState } from 'react'
import { navSections } from '../content'
import styles from './SideNav.module.scss'

export default function SideNav() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = navSections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={styles.sideNav} aria-label="Section navigation">
      <ul>
        {navSections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={active === section.id ? styles.isActive : ''}
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
