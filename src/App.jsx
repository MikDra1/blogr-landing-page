import ArtSection from "./components/ArtSection"
import Benefits from "./components/Benefits"
import Footer from "./components/Footer"
import FutureSection from "./components/FutureSection"
import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
import { BlogrProvider } from "./contexts/BlogrProvider"

function App() {
  return (
    <BlogrProvider>
      <div className="wrapper">
      <Navigation />
      <Hero />
      <FutureSection />
      <ArtSection />
      <Benefits />
      <Footer />
      </div>
      </BlogrProvider>
  )
}

export default App
