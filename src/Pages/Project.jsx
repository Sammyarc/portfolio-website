import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Projects from "../components/Projects/Projects"


const Project = () => {
  return (
    <div>
        <nav>
            <Navbar />
        </nav>
        <main>
            <Projects />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Project