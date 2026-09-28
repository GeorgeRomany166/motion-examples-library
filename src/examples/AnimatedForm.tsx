import { useState } from 'react'
import { motion } from 'motion/react'

export function AnimatedForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <motion.form
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="trip-request-form"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <div className="trip-request-form__grid">
        <label className="field">
          <span>Full Name</span>
          <motion.input whileFocus={{ scale: 1.01 }} type="text" placeholder="Maya Thompson" />
        </label>

        <label className="field">
          <span>Email</span>
          <motion.input whileFocus={{ scale: 1.01 }} type="email" placeholder="maya@example.com" />
        </label>

        <label className="field">
          <span>Destination</span>
          <motion.input whileFocus={{ scale: 1.01 }} type="text" placeholder="Istanbul & Cappadocia" />
        </label>

        <label className="field">
          <span>Travel Date</span>
          <motion.input whileFocus={{ scale: 1.01 }} type="date" />
        </label>

        <label className="field">
          <span>Number of Travelers</span>
          <motion.input whileFocus={{ scale: 1.01 }} type="text" placeholder="2 travelers" />
        </label>

        <label className="field">
          <span>Trip Length</span>
          <motion.input whileFocus={{ scale: 1.01 }} type="text" placeholder="7 nights" />
        </label>
      </div>

      <label className="field field--wide">
        <span>Message</span>
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          placeholder="Tell us your ideal route, hotel style, and must-see experiences."
        />
      </label>

      <motion.button
        type="submit"
        className="primary-button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {submitted ? 'Request Sent' : 'Request My Trip'}
      </motion.button>
    </motion.form>
  )
}
