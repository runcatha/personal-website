import './Home.css'
import AboutMe from '../../components/AboutMe/AboutMe'
import Contact from '../../components/Contact/Contact'
import Projects from '../../components/Projects/Projects'

export default function Home() {
  return (
    <>
      <AboutMe />
      <Projects />
      <Contact />
    </>
  )
}