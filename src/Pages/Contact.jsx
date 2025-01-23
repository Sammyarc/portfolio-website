import ContactMe from "../components/Contact/ContactMe"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"


const Contact = () => {
  return (
    <div>
        <Navbar />
          <main>
            <ContactMe />
          </main>
          <footer>
            <Footer />
          </footer>
    </div>
  )
}

export default Contact