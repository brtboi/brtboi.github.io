import SideNav from './components/SideNav'
import Intro from './components/Intro'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import { education, experience, projects } from './content'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.bigDiv}>
      <SideNav />
      <main className={styles.main}>
        <Intro />
        <Timeline id="education" title="Education" items={education} />
        <Timeline id="experience" title="Experience" items={experience} />
        <Timeline id="projects" title="Projects" items={projects} />
        <Contact />
      </main>
    </div>
  )
}

export default App
