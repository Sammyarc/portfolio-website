import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Testimonial from "../components/Testimonial/Reviews";
import Certification from "../components/Certifications/Certification";

const Profile = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <About />
        <Testimonial />
        <Certification />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Profile;
