import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

type Item = {
  id: number
  day: string
  city: string
  title: string
  duration: string
  highlight: string
  image: string
}

const itemsSeed: Item[] = [
  {
    id: 1,
    day: 'Day 1',
    city: 'Istanbul',
    title: 'Arrival & city highlights',
    duration: '2.5 hrs',
    highlight: 'Sultanahmet walk',
    image:
      'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    day: 'Day 2',
    city: 'Istanbul',
    title: 'Hagia Sophia & Bosphorus',
    duration: '4 hrs',
    highlight: 'Private guide',
    image:
      'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    day: 'Day 3',
    city: 'Cappadocia',
    title: 'Transfer & balloon flight',
    duration: '5 hrs',
    highlight: 'Sunrise lift-off',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    day: 'Day 4',
    city: 'Antalya',
    title: 'Beach club + old harbor',
    duration: '3 hrs',
    highlight: 'Mediterranean coast',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80',
  },
]

export function ReorderList() {
  const [items, setItems] = useState(itemsSeed)

  const moveItem = (fromIndex: number, toIndex: number) => {
    if (fromIndex === toIndex) return

    const updated = [...items]
    const [moved] = updated.splice(fromIndex, 1)
    updated.splice(toIndex, 0, moved)
    setItems(updated)
  }

  return (
    <motion.ul layout className="itinerary-list">
      <AnimatePresence>
        {items.map((item, index) => (
          <motion.li
            key={item.id}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="itinerary-item"
            drag
            dragListener={false}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileDrag={{ scale: 1.02, zIndex: 30 }}
            onDragEnd={(_, info) => {
              if (Math.abs(info.offset.y) > 24) {
                const targetIndex = Math.max(
                  0,
                  Math.min(items.length - 1, index + (info.offset.y > 0 ? 1 : -1)),
                )
                moveItem(index, targetIndex)
              }
            }}
          >
            <div className="itinerary-item__left">
              <span className="itinerary-day">{item.day}</span>
              <div
                className="itinerary-thumb"
                style={{ backgroundImage: `url(${item.image})` }}
                aria-label={`${item.city} destination view`}
              />
              <div className="itinerary-copy">
                <div className="itinerary-copy__topline">
                  <strong>{item.city}</strong>
                  <span>{item.duration}</span>
                </div>
                <h3>{item.title}</h3>
                <small>{item.highlight}</small>
              </div>
            </div>

            <div className="itinerary-item__actions">
              <button
                type="button"
                className="tiny-button"
                onClick={() => moveItem(index, index === 0 ? items.length - 1 : index - 1)}
              >
                Move
              </button>
              <span className="drag-handle" aria-hidden="true">
                ⋮⋮
              </span>
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  )
}
