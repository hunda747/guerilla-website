import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { usePageTransition } from "./hooks/usePageTransition";
import Cursor from "./components/cursor";
import ScrollToTop from "./hooks/scrollToTop";
import StickyFooter from "./components/stickyFooter";
import Contact from "./components/contact/contact";

const Layout = () => {
  const { PageTransitionWrapper } = usePageTransition();

  return (
    <>
      <ScrollToTop />
      <Cursor />
      {/* <Navbar /> */}
      <main>
        <Outlet /> {/* Renders the matched page */}
      </main>
      {/* <StickyFooter /> */}
      <Contact />
    </>
  );
};

export default Layout;  
