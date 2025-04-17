import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import Project from "./Pages/Project";
import Profile from "./Pages/Profile";


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} /> {/* Redirect to Home for any other route */}
        <Route path="/about" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
