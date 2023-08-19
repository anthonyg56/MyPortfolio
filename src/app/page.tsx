import About from './components/about'
import Contact from './components/contact'
import Header from './components/header'
import Projects from './components/projects'

export default function Home() {
  return (
    <div className=''>
      <Header />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}
