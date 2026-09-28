import { useState } from 'react'
import { motion } from 'motion/react'

type Tour = {
  city: string
  country: string
  duration: string
  price: string
  badge: string
  score: string
  summary: string
  image: string
}

const tours: Tour[] = [
  {
    city: 'Istanbul',
    country: 'Turkey',
    duration: '5 Days',
    price: '€680',
    badge: 'Best Seller',
    score: '4.8/5',
    summary: 'Old City highlights, Bosphorus sunset, and a boutique stay in Sultanahmet.',
    image:
      'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=900&q=80',
  },
  {
    city: 'Cappadocia',
    country: 'Turkey',
    duration: '4 Days',
    price: '€740',
    badge: 'Sunrise Tour',
    score: '4.9/5',
    summary: 'Fairy chimneys, cave hotels, and a hot air balloon experience above the valleys.',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
  },
  {
    city: 'Antalya',
    country: 'Turkey',
    duration: '6 Days',
    price: '€860',
    badge: 'Beach Escape',
    score: '4.7/5',
    summary: 'Turquoise coast days, ancient ruins, and free time for seaside dining and swims.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
  },
]

export function SharedCard() {
  const [savedTours, setSavedTours] = useState<Record<string, boolean>>({
    Istanbul: true,
    Cappadocia: false,
    Antalya: true,
  })

  const toggleSave = (city: string) => {
    setSavedTours((current) => ({
      ...current,
      [city]: !current[city],
    }))
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="shared-card-demo"
    >
      <div className="tour-card-grid">
        {tours.map((tour) => (
          <motion.article
            key={tour.city}
            layout
            className="tour-card"
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div
              className="tour-card__media"
              style={{ backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.12), rgba(15,23,42,0.6)), url(${tour.image})` }}
            >
              <div className="tour-card__topline">
                <span className="tour-card__pill">{tour.badge}</span>
                <motion.button
                  type="button"
                  className="favorite-button"
                  aria-label={`Save ${tour.city}`}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => toggleSave(tour.city)}
                >
                  {savedTours[tour.city] ? '♥' : '♡'}
                </motion.button>
              </div>
            </div>

            <div className="tour-card__body">
              <div className="tour-card__meta">
                <span>{tour.duration}</span>
                <span>{tour.score}</span>
              </div>

              <div className="tour-card__title-row">
                <div>
                  <h3>{tour.city}</h3>
                  <p>{tour.country}</p>
                </div>
              </div>

              <p className="tour-card__summary">{tour.summary}</p>

              <div className="tour-card__footer">
                <div className="tour-card__price">
                  <span>Starting from</span>
                  <strong>{tour.price}</strong>
                </div>

                <motion.button
                  type="button"
                  className="cta-button"
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Tour
                </motion.button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  )
}
