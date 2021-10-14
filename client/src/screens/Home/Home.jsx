import './Home.css'
import AboutMe from '../AboutMe/AboutMe'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'

export default function Home() {
  return (
    <>
      <AboutMe />
      <h3>this is my home</h3>
      <Projects />
      <Contact />
    </>
  )
}