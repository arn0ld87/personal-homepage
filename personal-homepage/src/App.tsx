import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

/**
 * Haupt-App-Komponente
 * Verwaltet die Gesamtstruktur der Homepage mit allen Sektionen
 */
function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App