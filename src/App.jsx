import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Layout from "./Layout"; // Import Layout
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import Works from "./pages/works";
import Cursor from "./components/cursor";
import Preloader from "./pages/Preloader";

// Animated Routes Component
function AnimatedRoutes() {
  const location = useLocation();

  return (
    // <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
      {/* Wrap pages with Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/works" element={<Works />} />
      </Route>
    </Routes>
    // </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      {/* <AnimatePresence mode="wait"> */}
      {/* {loading ? <Preloader key="preloader" /> : <> */}

      <AnimatedRoutes />
      {/* </>} */}
      {/* </AnimatePresence> */}
    </Router>
  );
}

export default App;
