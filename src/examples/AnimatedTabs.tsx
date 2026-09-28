import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const tabs = [
  {
    id: 'overview',
    label: 'Overview',
    title: 'A refined Turkey journey',
    description:
      'This seven-day route blends iconic landmarks, slow travel moments, and relaxed coastal escapes for travelers who want both history and ease.',
    highlights: ['Boutique stays', 'Arrival assistance', 'Flexible pacing'],
  },
  {
    id: 'itinerary',
    label: 'Itinerary',
    title: 'Day-by-day experiences',
    description:
      'Each stop is carefully timed for culture, scenery, and downtime, keeping the flow balanced across cities and landscapes.',
    highlights: ['Istanbul city walk', 'Cappadocia sunrise', 'Antalya coast day'],
  },
  {
    id: 'included',
    label: 'Included',
    title: 'Everything included',
    description:
      'Your package covers key transfers, thoughtful accommodations, and a set of curated experiences chosen to reduce planning stress.',
    highlights: ['4-star boutique hotel', 'Airport transfers', 'Selected activities'],
  },
  {
    id: 'accommodation',
    label: 'Accommodation',
    title: 'Stay in beautiful local properties',
    description:
      'Enjoy stone and cedar interiors, rooftop terraces, and room layouts designed for restful evenings after active days.',
    highlights: ['Rooftop breakfast', 'Sea or terrace view', 'Private bath'],
  },
] as const

export function AnimatedTabs() {
  const [active, setActive] = useState<(typeof tabs)[number]['id']>('overview')
  const selectedTab = tabs.find((tab) => tab.id === active) ?? tabs[0]

  return (
    <div className="tabs-demo">
      <div className="tab-list" role="tablist" aria-label="Tour tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            className={active === tab.id ? 'tab is-active' : 'tab'}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28 }}
          className="tab-panel"
        >
          <div className="tab-panel__header">
            <h3>{selectedTab.title}</h3>
            <span className="tour-chip">Included</span>
          </div>
          <p>{selectedTab.description}</p>
          <div className="stats-row">
            {selectedTab.highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
