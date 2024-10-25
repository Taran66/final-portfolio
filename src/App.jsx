import './App.css'
import Hero from './section/Hero'
import Nav from './components/Nav'
import AboutMe from './section/AboutMe'
import Services from './section/Services'
import Projects from './section/Projects'
import Contact from './section/Contact'
import Footer from './components/Footer'

const App = () => 
(
  <main>
    <section>
      <div
          className="absolue inset-0 bg-cover bg-center bg-no-repeat h-screen "
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
        }}
      >
        <Nav />
        <Hero />
      </div>
      <div className="absolute inset-0 bg-black opacity-70"></div>
    </section>
    <section id='AboutMe'>
      <AboutMe />
    </section>
    <section id='Services'>
      <Services />
    </section>
    <section id='Projects'>
      <Projects />
    </section>
    <section id='Contact'>
      <Contact />
    </section>
    <section>
      <Footer />
    </section>
  </main>
)

export default App
