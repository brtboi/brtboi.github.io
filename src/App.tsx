import SideNav from './components/SideNav'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import { education, experience, projects } from './content'
import './App.css'

function App() {
  return (
    <>
      <SideNav />
      <main>
        <Hero />
        <Timeline id="education" title="Education" items={education} />
        <Timeline id="experience" title="Experience" items={experience} />
        <Timeline id="projects" title="Projects" items={projects} />
        <Contact />
      </main>
    </>
  )
}

export default App
