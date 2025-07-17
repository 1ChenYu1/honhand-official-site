import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import ProductShowcase from './components/ProductShowcase'
import CaseStudies from './components/CaseStudies'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-main-gradient font-body">
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <CaseStudies />
      <Footer />
    </div>
  )
}

export default App
