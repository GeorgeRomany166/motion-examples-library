import { motion } from 'motion/react'

const chapters = [
  {
    title: 'Istanbul',
    label: 'Historic energy',
    text: 'Wander through bazaars, Bosphorus views, and deeply layered neighborhoods that shift from grand to intimate in a single afternoon.',
    info: ['4 nights', 'Breakfast', 'Private transfer'],
    image:
      'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Cappadocia',
    label: 'Rose-tinted valleys',
    text: 'Explore cave architecture, sunrise balloon flights, and dramatic landscapes that look almost unreal at first light.',
    info: ['Hot air balloon', '2 nights', 'Sunrise route'],
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Antalya',
    label: 'Mediterranean ease',
    text: 'Slow the pace with old harbor strolls, calm coves, and long lunches overlooking the sea before your return flight home.',
    info: ['Beach club', '3 nights', 'Harbor cruise'],
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Experiences',
    label: 'Moments worth keeping',
    text: 'From guided city stories to handpicked dining reservations, each detail is designed to make the trip feel personal and effortless.',
    info: ['Local guides', 'Dining picks', 'Flexible timing'],
    image:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80',
  },
]

export function ScrollStory() {
  return (
    <div className="scroll-story">
      {chapters.map((chapter, index) => (
        <motion.article
          key={chapter.title}
          className="story-step"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: index * 0.08 }}
        >
          <div
            className="story-step__image"
            style={{ backgroundImage: `linear-gradient(135deg, rgba(18,24,35,0.22), rgba(18,24,35,0.7)), url(${chapter.image})` }}
          >
            <span className="story-step__index">0{index + 1}</span>
          </div>

          <div className="story-step__content">
            <p className="story-step__eyebrow">{chapter.label}</p>
            <h3>{chapter.title}</h3>
            <p>{chapter.text}</p>
            <div className="story-step__meta">
              {chapter.info.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
