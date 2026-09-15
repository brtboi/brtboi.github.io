import { contact } from '../content'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <p className="hero-kicker">Hi, I'm</p>
        <h1 className="hero-name">Brent Hu</h1>
        <p className="hero-tagline">
          Computer science student at Yale, building software across AI research,
          full-stack web apps, and embedded systems.
        </p>
        <div className="hero-links">
          <a href={`mailto:${contact.email}`} className="pill">
            {contact.email}
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="pill">
            GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="pill">
            LinkedIn
          </a>
          <a href={contact.resumeHref} target="_blank" rel="noreferrer" className="pill pill-accent">
            Resume
          </a>
        </div>
      </div>
      <a href="#education" className="scroll-hint" aria-label="Scroll to content">
        <span />
      </a>
    </section>
  )
}
