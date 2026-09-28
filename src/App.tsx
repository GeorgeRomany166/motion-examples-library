import { AnimatedForm } from './examples/AnimatedForm'
import { AnimatedTabs } from './examples/AnimatedTabs'
import { ReorderList } from './examples/ReorderList'
import { ScrollStory } from './examples/ScrollStory'
import { SharedCard } from './examples/SharedCard'
import './styles.css'

function App() {
  return (
    <main className="travel-shell">
      <section className="example-section">
        <header className="example-section__header">
          <div>
            <p className="section-kicker">MOTION EXAMPLE 01</p>
            <h2>Tour Cards</h2>
          </div>
          <p>Shared layout + hover interaction</p>
        </header>
        <SharedCard />
      </section>

      <section className="example-section">
        <header className="example-section__header">
          <div>
            <p className="section-kicker">MOTION EXAMPLE 02</p>
            <h2>Tour Itinerary</h2>
          </div>
          <p>Layout + drag interaction</p>
        </header>
        <ReorderList />
      </section>

      <section className="example-section">
        <header className="example-section__header">
          <div>
            <p className="section-kicker">MOTION EXAMPLE 03</p>
            <h2>Tour Details</h2>
          </div>
          <p>Animated tab transitions</p>
        </header>
        <AnimatedTabs />
      </section>

      <section className="example-section">
        <header className="example-section__header">
          <div>
            <p className="section-kicker">MOTION EXAMPLE 04</p>
            <h2>Destination Story</h2>
          </div>
          <p>Scroll-driven storytelling</p>
        </header>
        <ScrollStory />
      </section>

      <section className="example-section">
        <header className="example-section__header">
          <div>
            <p className="section-kicker">MOTION EXAMPLE 05</p>
            <h2>Request a Trip</h2>
          </div>
          <p>Form state + focus interaction</p>
        </header>
        <AnimatedForm />
      </section>
    </main>
  )
}

export default App
