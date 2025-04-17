import ContactMe from "../components/Contact/ContactMe"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Button from "../components/WhatsApp/Button";


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
      <Button />
    </div>
  )
}

export default Contact