import { Detail, Details } from './components/Description'
import ExternalLink from './components/ExternalLink'
import type { TimelineEntry } from './components/Timeline'

export const contact = {
  name: 'Brent Hu',
  email: 'hyxbrent@gmail.com',
  github: 'https://github.com/brtboi',
  linkedin: 'https://linkedin.com/in/brenthu',
  resumeHref: '/Brent%20Hu%20-%20CS%20Resume.pdf',
}

export const education: TimelineEntry[] = [
  {
    overline: 'Undergraduate (In Progress)',
    title: 'Yale University',
    subtitle: (
      <>
        <p>Combined BS/MS in Computer Science</p>
        <p>Total GPA: 3.9 · Major GPA: 4.0</p>
      </>
    ),
    description: (
      <Details>
        <Detail label="Coursework:">
          Algorithms, Intermediate Machine Learning, Probabilistic Programming, Data
          Structures, Discrete Math, Intensive Linear Algebra
        </Detail>
        <Detail label="Awards:">Yale College First-Year Summer Research Fellowship</Detail>
      </Details>
    ),
    tags: [],
  },
  {
    overline: 'High School',
    title: 'Charles Wright Academy',
    subtitle: 'GPA: 4.0',
    description: (
      <>
        <Details>
          <Detail label="Awards:">
            <p>American Mathematics Invitational Exam Qualifier</p>
            <p>United States Chemistry Olympiad National Qualifier</p>
            <p>Cum Laude Scholar</p>
            <p>Rensselaer Medal</p>
          </Detail>
          <Detail label="Test Scores:">
            <p>SAT: 1600</p>
            <p>PSAT: 1520</p>
          </Detail>
        </Details>
      </>
    ),
    tags: [],
  },
]

export const experience: TimelineEntry[] = [
  {
    overline: 'May 2026 - Present',
    title: 'AI Researcher',
    subtitle: (
      <>
        <ExternalLink href="https://qernelzoo.com">Qernelzoo</ExternalLink> &{' '}
        <ExternalLink href="https://batistalab.com/">Batista Lab</ExternalLink>
      </>
    ),
    description:
      'Built an agent harness and prompted open-source LLMs to autonomously calculate environment-dependent pseudopotentials for novel materials. Added retrieval-augmented tooling over crystallography databases and technical docs, cutting factual hallucinations by 94%, and ran large-scale jobs on the NERSC Perlmutter supercomputer.',
    tags: ['Hugging Face Transformers', 'RAG', 'SLURM'],
  },
  {
    overline: 'Sep 2025 - Present',
    title: 'Full-Stack Developer',
    subtitle: (<>
      <ExternalLink href="https://yalecomputersociety.org/">Yale Computer Society</ExternalLink> — <ExternalLink href="https://coursetable.com">CourseTable</ExternalLink>
    </>),
    description:
      'Built new data-ingestion workflows to scrape, parse, and normalize course data from university sites into PostgreSQL. Parallelized async scraping requests to cut runtime by 80%, and shipped UI improvements for 6,000+ students based on feedback.',
    tags: ['PostgreSQL', 'Async', 'Web Scraping'],
  },
  {
    overline: 'Sep 2025 - Present',
    title: 'Controls Software Developer',
    subtitle: 'Yale Undergraduate Aerospace Association — Jet Team',
    description:
      'Wrote control software for an RC turbojet plane, integrating real-time telemetry with pilot input, and modified open-source ECU firmware to support custom engine hardware.',
    tags: ['Embedded Systems', 'Telemetry'],
  },
  {
    overline: 'May 2024 - Sep 2024',
    title: 'AI Research Assistant',
    subtitle: 'University of Puget Sound',
    description:
      'Developed physics-informed neural networks for heat transfer simulation, tuning loss functions and hyperparameters to drop convergence time by 56%. Engineered preprocessing pipelines to filter noisy measurements and stabilize training.',
    tags: ['TensorFlow', 'PINNs'],
  },
]

export const projects: TimelineEntry[] = [
  {
    overline: 'Personal Project',
    title: 'Automated Daily Stock Screener',
    subtitle: 'Python · Pandas · TradeStation API',
    description:
      'Automated market-data retrieval across thousands of equities via the TradeStation REST API, handling authentication, JSON parsing, and rate limits. Built a configurable backtesting engine over 10+ years of historical data for strategy evaluation.',
    tags: ['Python', 'Pandas'],
  },
  {
    overline: 'Personal Project',
    title: 'White Pass Ski Patrol Scheduler',
    subtitle: 'React · Material UI · Firebase',
    description:
      'Deployed a scheduling platform for 200+ users, with event-driven Cloud Functions maintaining denormalized aggregates to cut Firestore reads and cost. Refined the product through user interviews and usability testing.',
    tags: ['React', 'Firebase'],
  },
  {
    overline: 'Personal Project',
    title: 'Tractor — Multiplayer Card Game',
    subtitle: 'React · SCSS · Express.js · Socket.io',
    description:
      'Built a full-stack, real-time implementation of the Tractor card game, with a WebSocket-based client-server architecture synchronizing game state across multiple connected players.',
    tags: ['WebSockets', 'Real-time'],
  },
]

export const navSections = [
  { id: 'me', label: 'Me' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
