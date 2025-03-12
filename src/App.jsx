import './App.css'
import Accordian from './components/Accordian'
import CompaniesLogo from './components/CompaniesLogo'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Residencies from './components/Residencies'
import Value from "./components/Value"

function App() {

  return (
    <>
      <Hero />
      <CompaniesLogo />
      <Residencies />
      <Value />
      <Contact />
      <Accordian />
      <Footer />
    </>
  )
}

export default App
