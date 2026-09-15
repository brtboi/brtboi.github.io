import Reveal from './Reveal'

type TimelineEntry = {
  period: string
  title: string
  org: string
  description: string
  tags: string[]
}

export default function Timeline({
  id,
  title,
  items,
}: {
  id: string
  title: string
  items: TimelineEntry[]
}) {
  return (
    <section id={id} className="section">
      <Reveal>
        <h2 className="section-title">{title}</h2>
      </Reveal>

      <ol className="timeline">
        {items.map((item, i) => (
          <li key={item.title} className="timeline-item">
            <Reveal delay={(i % 2) * 60}>
              <div className="timeline-row">
                <div className="timeline-image" aria-hidden="true">
                  <span>Image</span>
                </div>
                <div className="timeline-content">
                  <p className="timeline-period">{item.period}</p>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-org">{item.org}</p>
                  <p className="timeline-desc">{item.description}</p>
                  <ul className="timeline-tags">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
