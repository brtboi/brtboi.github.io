export const contact = {
  name: 'Brent Hu',
  email: 'hyxbrent@gmail.com',
  github: 'https://github.com/brtboi',
  linkedin: 'https://linkedin.com/in/brenthu',
  resumeHref: '/Brent%20Hu%20-%20CS%20Resume.pdf',
}

export const education = [
  {
    period: 'Undergraduate',
    title: 'Yale University',
    org: 'B.S. in Computer Science',
    description:
      'Coursework: Algorithms, Intermediate ML, Data Structures, Discrete Math, Linear Algebra. Awards: AIME Qualifier, USNCO Finalist, Yale College First-Year Summer Research Fellowship.',
    tags: ['GPA 3.92'],
  },
  {
    period: 'High School',
    title: '[Your High School Name]',
    org: '[City, State]',
    description: '[Add coursework, honors, or activities here.]',
    tags: [],
  },
]

export const experience = [
  {
    period: 'May 2026 – Present',
    title: 'AI Researcher',
    org: 'Qernelzoo & Batista Lab',
    description:
      'Built an agent harness and prompted open-source LLMs to autonomously calculate environment-dependent pseudopotentials for novel materials. Added retrieval-augmented tooling over crystallography databases and technical docs, cutting factual hallucinations by 94%, and ran large-scale jobs on the NERSC Perlmutter supercomputer.',
    tags: ['Hugging Face Transformers', 'RAG', 'SLURM'],
  },
  {
    period: 'Sep 2025 – Present',
    title: 'Full-Stack Developer',
    org: 'Yale Computer Society — CourseTable',
    description:
      'Built new data-ingestion workflows to scrape, parse, and normalize course data from university sites into PostgreSQL. Parallelized async scraping requests to cut runtime by 80%, and shipped UI improvements for 6,000+ students based on feedback.',
    tags: ['PostgreSQL', 'Async', 'Web Scraping'],
  },
  {
    period: 'Sep 2025 – Present',
    title: 'Controls Software Developer',
    org: 'Yale Undergraduate Aerospace Association — Jet Team',
    description:
      'Wrote control software for an RC turbojet plane, integrating real-time telemetry with pilot input, and modified open-source ECU firmware to support custom engine hardware.',
    tags: ['Embedded Systems', 'Telemetry'],
  },
  {
    period: 'May 2024 – Sep 2024',
    title: 'AI Research Assistant',
    org: 'University of Puget Sound',
    description:
      'Developed physics-informed neural networks for heat transfer simulation, tuning loss functions and hyperparameters to drop convergence time by 56%. Engineered preprocessing pipelines to filter noisy measurements and stabilize training.',
    tags: ['TensorFlow', 'PINNs'],
  },
]

export const projects = [
  {
    period: 'Personal Project',
    title: 'Automated Daily Stock Screener',
    org: 'Python · Pandas · TradeStation API',
    description:
      'Automated market-data retrieval across thousands of equities via the TradeStation REST API, handling authentication, JSON parsing, and rate limits. Built a configurable backtesting engine over 10+ years of historical data for strategy evaluation.',
    tags: ['Python', 'Pandas'],
  },
  {
    period: 'Personal Project',
    title: 'White Pass Ski Patrol Scheduler',
    org: 'React · Material UI · Firebase',
    description:
      'Deployed a scheduling platform for 200+ users, with event-driven Cloud Functions maintaining denormalized aggregates to cut Firestore reads and cost. Refined the product through user interviews and usability testing.',
    tags: ['React', 'Firebase'],
  },
  {
    period: 'Personal Project',
    title: 'Tractor — Multiplayer Card Game',
    org: 'React · SCSS · Express.js · Socket.io',
    description:
      'Built a full-stack, real-time implementation of the Tractor card game, with a WebSocket-based client-server architecture synchronizing game state across multiple connected players.',
    tags: ['WebSockets', 'Real-time'],
  },
]

export const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
