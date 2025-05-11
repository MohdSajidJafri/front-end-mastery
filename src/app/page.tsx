import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Features from '../sections/Features'
import Showcase from '../sections/Showcase'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </>
  )
} 