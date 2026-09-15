import { contact } from '../content'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <footer id="contact" className="section contact">
      <Reveal>
        <h2 className="section-title">Get in touch</h2>
        <p className="contact-blurb">
          Always happy to talk about research, side projects, or anything in
          between. Reach out any time.
        </p>
        <a href={`mailto:${contact.email}`} className="contact-email">
          {contact.email}
        </a>
        <div className="contact-links">
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
        <p className="contact-footer">
          &copy; {new Date().getFullYear()} Brent Hu
        </p>
      </Reveal>
    </footer>
  )
}
